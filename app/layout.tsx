import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-full">
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
        <div className="py-4">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
