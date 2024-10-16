import React from "react";

const Device=[{
    name:"iPad mini",
    image:"https://www.apple.com/v/home/bt/images/heroes/ipad-mini/hero_ipad_mini_announce__fx0v6ox8z3u6_medium_2x.jpg"
},
{
    name:"iPhone 16 Pro",
    image:"https://www.apple.com/v/home/bt/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_medium_2x.jpg"
},
{
    name:"iPhone 16",
    image:"https://www.apple.com/v/home/bt/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_medium_2x.jpg"
}
]

const Home=()=>{

    return(
        <>
        <div className="relative w-full h-screen">
            <div className="w-full h-full flex flex-col justiify-center items-center">
                {Device.map((p)=>{
                    return (
                        <div className="w-full h-[45vw] mb-5"> 
                            <img src={`${p.image}`} className="w-full h-full object-cover"/>
                        </div>
                    )
                    
                })}
                {/* <img src="https://www.apple.com/v/home/bt/images/heroes/ipad-mini/hero_ipad_mini_announce__fx0v6ox8z3u6_medium_2x.jpg" className="w-full h-[80%] object-center mb-5"/>
                <img src="https://www.apple.com/v/home/bt/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_medium_2x.jpg" className="w-full h-[80%] object-center mb-5"/>
                <img src="https://www.apple.com/v/home/bt/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_medium_2x.jpg" className="w-full h-[80%] object-center mb-5"/> */}
            </div>
        </div>
        </>
    )
}

export default Home;