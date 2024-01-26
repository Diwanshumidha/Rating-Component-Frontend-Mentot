'use client'

import { useSearchParams } from "next/navigation"

export const Rating_Thanks = () => {
    const searchParams = useSearchParams()
    const rating = searchParams.get('rating')
    console.log(rating)

    return (
        <>
            {rating ? <p className=" vertically-center  mx-auto bg-white/5 px-4 py-3 text-[0.938rem] leading-[12px] m-0 p-0 rounded-[20px] text-[hsl(25,_70%,_50%)] ">You Selected {rating} out of 5</p> : null}

        </>
    )
}