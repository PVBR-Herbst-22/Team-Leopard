import Bmi from "@/components/Bmi";

export default function Home() {
  return (
    <div className="min-h-full flex flex-row justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center">
          <h1 className="text-9xl font-bold py-10">Fitness App</h1>
        </div>
        <div className="flex justify-center items-center">
          <Bmi />
        </div>
      </div>
    </div>
  );
}
