
import { Rating_Thanks } from "@/components/Rating_Thank";
import Image from "next/image";
import { Suspense } from "react";




export default function Home() {

  return (
    <main className=" max-sm:px-300 w-full h-svh flex items-center bg-very-dark-blue  text-white    ">
      <div className=" max-w-[412px] p-400  w-full flex flex-col gap-400 gradient-black rounded-[2rem] mx-auto">
        <div className=" mx-auto" aria-hidden>
          <Image width={168} height={108} src="/images/illustration-thank-you.svg" alt="" />
        </div>
        <Suspense fallback={<p className=" vertically-center  mx-auto bg-white/5 px-4 py-3 text-[0.938rem] leading-[12px] m-0 p-0 rounded-[20px] text-[hsl(25,_70%,_50%)] ">You Selected _ out of 5</p>}>
          <Rating_Thanks/>
        </Suspense>
        <div className=" space-y-[10px] text-center">
          <h2 className="text-600 font-700">Thank You!</h2>
          <p className=" text-light-grey"> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>

      </div>
    </main>
  );
}
