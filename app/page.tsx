import Navegation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navegation />
      <main className="flex relative h-screen overflow-y-hidden">
        <div className="w-1/2 flex justify-end">
          <div className="w-4/6 h-screen bg-white relative flex items-center justify-center">
            <p className="transform -rotate-90 text-[144px] absolute top-0 -translate-x-60">
              13507958329
            </p>
            <div className="bg-[#AA243D] w-[900px] h-[900px] rounded-full absolute z-40 overflow-hidden">
              <div className="relative">
                <p className="transform -rotate-90 text-[144px] text-white absolute top-0 -translate-x-[102px] translate-y-[21px]">
                  13507958329
                </p>
                <p className="transform rotate-90 text-[144px] text-white absolute bottom-0 right-0 translate-x-[102px] translate-y-[938px]">
                  13507958329
                </p>
              </div>
            </div>
            <p className="transform rotate-90 text-[144px] absolute bottom-0 translate-x-60">
              13507958329
            </p>
            <img src="/images/girl.png" alt="girl" className="absolute bottom-0 z-50 w-[400px] -translate-x-20 translate-y-10" />
            <img src="/images/girl.png" alt="girl" className="absolute top-0 z-50 w-[400px] transform rotate-180 translate-x-20 -translate-y-10" />
          </div>
        </div>
        <section className="w-1/2 flex justify-center items-center relative overflow-x-hidden">
          <article>
            <h1 className="text-6xl">WHY NOT NOW!</h1>
            <p className="text-2xl w-[561px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              pellentesque malesuada volutpat adipiscing sed. Enim eu morbi
              vivamus mauris, ac nunc, consectetur. Porttitor commodo integer
              dolor mi nunc sed dignissim nisl. Viverra feugiat sed vitae, diam
              lorem. Purus molestie pharetra etiam risus. Tincidunt malesuada ac
              cursus sollicitudin tristique est eget rhoncus odio.
            </p>
          </article>

          <div className="absolute -right-[480px]">
            <p className="text-2xl w-[561px] leading-7 pb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              pellentesque malesuada volutpat adipiscing sed. Enim eu morbi
              vivamus mauris, ac nunc, consectetur. Porttitor commodo integer
              dolor mi nunc sed dignissim nisl. Viverra feugiat sed vitae, diam
              lorem. Purus molestie pharetra etiam risus. Tincidunt malesuada ac
              cursus sollicitudin tristique est eget rhoncus odio.
            </p>
            <svg
              width="80"
              height="179"
              viewBox="0 0 80 179"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pb-7"
            >
              <circle cx="92" cy="89" r="81" stroke="white" stroke-width="12" />
              <rect y="76" width="22" height="20" fill="#AA243D" />
              <rect x="73" y="159" width="22" height="20" fill="#AA243D" />
              <rect x="73" width="22" height="20" fill="#AA243D" />
            </svg>
            <p className="text-2xl w-[561px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              pellentesque malesuada volutpat adipiscing sed. Enim eu morbi
              vivamus mauris, ac nunc, consectetur. Porttitor commodo integer
              dolor mi nunc sed dignissim nisl. Viverra feugiat sed vitae, diam
              lorem. Purus molestie pharetra etiam risus. Tincidunt malesuada ac
              cursus sollicitudin tristique est eget rhoncus odio.
            </p>
          </div>

          <form className="bg-[#AA243D] rounded-t-2xl w-[501px] p-5 absolute bottom-0">
            <p className="text-white">ENTER NAME:-</p>
            <input
              type="text"
              className="outline-none bg-transparent border-b border-white caret-white w-full mb-7"
            />
            <p className="text-white">EMAIL:-</p>
            <input
              type="text"
              className="outline-none bg-transparent border-b border-white caret-white w-full mb-7"
            />
            <div className="flex justify-center">
              <svg
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 23L0.00961876 0.5L25.9904 0.5L13 23Z"
                  fill="white"
                />
              </svg>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
