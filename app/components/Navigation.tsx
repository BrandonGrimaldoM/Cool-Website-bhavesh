import Link from "next/link";

export default function Navegation() {
  return (
    <header>
      <nav className="w-full absolute h-16 2xl:gap-56 lg:gap-7 flex justify-end items-center max-lg:hidden">
        <ul className="flex items-center 2xl:gap-20 lg:gap-10">
          <Link href="#">
            <li className="text-3xl relative z-50">
              <div className="bg-[#AA243D] rounded-full w-24 h-24 absolute -z-10 -translate-y-14 -translate-x-5"></div>
              HOME
            </li>
          </Link>

          <Link href="#">
            <li className="text-3xl relative z-50">ABOUT</li>
          </Link>

          <Link href="#">
            <li className="text-3xl relative z-50">HELP</li>
          </Link>

          <Link href="#">
            <li className="text-3xl relative z-50">CLASS</li>
          </Link>
        </ul>
        <div className="w-4 h-4 bg-[#AA243D] rounded-full"></div>
      </nav>

      <p className="hidden max-lg:block text-5xl text-center text-white uppercase">This page is not designed for mobile devices.</p>
    </header>
  );
}
