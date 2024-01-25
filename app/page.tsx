'use client'
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


export default function Home() {
  const [active,setActive] = useState(0)
  const [error,setError] = useState<null | string>(null)
  const router = useRouter()
  function onSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(active >= 6 || active <= 0){
      setError("Please select Rating Before Submitting")
      return;
    }
    console.log("Hello")
    router.push(`/thank-you?rating=${active}`)
  }
  
  return (
    <main className=" max-sm:px-300 w-full h-svh flex items-center bg-very-dark-blue  text-white    ">
      <div className=" max-w-[412px] p-400  w-full flex flex-col gap-400 gradient-black rounded-[2rem] mx-auto">
        <div className=" w-[50px] aspect-square rounded-full bg-white/10 grid place-content-center" aria-hidden>
          <img src="/images/icon-star.svg" alt="" />
        </div>
        <div className=" space-y-[10px]">
          <h2 className="text-600 font-700">How did we do?</h2>
          <p className=" text-light-grey"> Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!</p>
        </div>
        <form className="space-y-300" onSubmit={onSubmit}>
          <div className="flex gap-[1.375rem] leading-[1] ">

          {[1,2,3,4,5].map((item)=>(
            <input onClick={()=>setActive(item)}  className={`w-[50px] aspect-square rounded-full grid place-content-center cursor-pointer  ${active === item?"bg-orange":"bg-white/10  hover:bg-medium-grey focus:bg-medium-grey "}`} type="button" value={item}/>
          ))}

          
          </div>
          <button className=" w-full text-center px-4 py-[0.9rem] mb-0 rounded-[2rem] bg-orange hover:bg-white hover:text-orange  "  type="submit">SUBMIT</button>
          {!!error?<p className=" text-sm text-center text-red-500">{error}</p>:null}
        </form>
      </div>
    </main>
  );
}
