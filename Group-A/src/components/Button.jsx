import React from "react";

const Button=({text})=>{
    return(
        <>
            <div className="flex items-center justify-center gap-5 pt-5">
            <button className="bg-[#0071e3] text-white hover:bg-[#0071e3] font-primarybold font-[500] h-10 w-36 rounded-full">
                Learn More
            </button>
            <button className=" text-[#0071e3] hover:bg-[#0071e3] hover:text-white font-primarybold font-[500] outline outline-1 outline-[#0071e3] h-10 w-28 rounded-full p-1">
                {text}
            </button>
            </div>
        </>
    )
}

export default Button;