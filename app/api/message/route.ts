import { chatbotPromt } from "@/helpers/constants/chatbot-prompt";
import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload } from "@/lib/openai-stream";
import { MessageArraySchema } from "@/lib/validators/message";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {

  const session = await getServerSession(authOptions);

  const rawBmiData = (await fetchRedis("get", `bmi:${session?.user.id}`)) as string;

  const bmiData = JSON.parse(rawBmiData) as BmiData[];

  const { messages } = await req.json();

  const parsedMessages = MessageArraySchema.parse(messages);

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => ({
    role: message.isUserMessage ? "user" : "system",
    content: message.text,
  }));

  outboundMessages.unshift({
    role: "system",
    content: chatbotPromt(bmiData),
  });

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: outboundMessages,
    temperature: 0.4,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    max_tokens: 150,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
