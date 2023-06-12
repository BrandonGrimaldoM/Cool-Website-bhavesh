import Link from "next/link";

export default function Navegation() {
  return (
    <header>
      <nav className="w-full absolute h-16 gap-56 flex justify-end items-center">
        <ul className="flex items-center gap-20">
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
    </header>
  );
}
