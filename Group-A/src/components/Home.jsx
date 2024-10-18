import React from "react";
import Button from "./Button";
const Device=[{
    index:1,
    name:"iPad mini",
    image:"https://www.apple.com/v/home/bt/images/heroes/ipad-mini/hero_ipad_mini_announce__fx0v6ox8z3u6_medium_2x.jpg"
},
{
    index:2,
    name:"iPhone 16 Pro",
    image:"https://www.apple.com/v/home/bt/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_medium_2x.jpg"
},
{
    index:3,
    name:"iPhone 16",
    image:"https://www.apple.com/v/home/bt/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_medium_2x.jpg"
}
]

const Home=()=>{

    return(
        <>
        <div className=" w-full h-fit-content">
            <div className="relative flex flex-col justiify-center items-center">
                {Device.map((p)=>{
                    return (
                        <div className="upper relative w-full h-[38vw] mb-4"> 
                            <div className="absolute top-[14vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2" key={p.index}>
                                {p.index != 1 ? (
                                    <h2 className="text-[3.4rem] text-white font-primarybold font-[500] text-center">{p.name}</h2>
                                ) : <h2 className="text-[3.4rem] text-black font-primarybold font-[500] text-center indent-0">{p.name}</h2>}
                                <h3 className={`${p.index != 1 ? "text-white" : "text-black"} text-center text-[1.75rem] font-[400] font-primarybold leading-none`}>Hello, Apple Intelligence</h3>
                                {p.index == 1 ? (
                                    <div className="text-center pt-1 mt-1">
                                        <h3 className="font-primarybold text-[1.15em] text-zinc-500" >Available Starting 10.23</h3>
                                    </div>
                                ):null}  
                            </div>
                            <div className="flex items-center justify-center">
                                {p.index === 1 ? (
                                    <div className="absolute top-[28vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Button text={"Pre-Order"}/>
                                    </div>
                                ) : (
                                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Button text={"Buy"}/>
                                    </div>
                                )}
                               <h3 className={`${p.index == 2? "text-zinc-200":"text-zinc-500"} absolute bottom-10 pt-3`}>Apple Intelligence coming this far!</h3>
                            </div>
                            <img src={`${p.image}`} className="w-full h-full object-bottom mb-10" alt="Description" />
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Home;