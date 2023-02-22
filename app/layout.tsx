import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div data-theme="cupcake" className="min-h-full relative">
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
        <svg
          className="fill-secondary col-start-1 row-start-1 h-auto w-full absolute bottom-0 left-0 -scale-x-[1] z-0"
          width="1600"
          height="595"
          viewBox="0 0 1600 595"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="scale(-1,1) translate(-100%,0)"
            d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"
          ></path>
        </svg>
        <div className="h-full w-full z-10">{children}</div>
      </div>
    </>
  );
}
