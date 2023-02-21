import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div data-theme="cupcake" className="min-h-full">
        <nav className="navbar fixed">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              Fitness App
            </a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <a href="/login" className="btn btn-primary">
                Login
              </a>
              <a href="/register" className="btn ml-2 btn-secondary">
                Register
              </a>
            </div>
          </div>
        </nav>
        <div className="h-full w-full">{children}</div>
      </div>
    </>
  );
}
