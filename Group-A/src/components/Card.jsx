import React from "react";
const Cards=()=>{
  const cardsData=[{
    idx:1,
    description1:"SERIES 10",
    description2:" Thinstant classic.",
    image:"https://www.apple.com/v/home/bt/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large_2x.jpg"
  },{
    idx:2,
    description1:"Iconic.Now supersonic. Available with Active Noise",
    description2:"Availabe with  Active Noise cancellation",
    image:"https://www.apple.com/v/home/bt/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_medium.jpg"
  },{
    idx:3,
    description1:"iPad mini",
    description2:"Hello, Apple Intelligence",
    image:"https://www.apple.com/v/home/bt/images/promos/ipad-mini/promo_ipad_mini_announce__dnt5vgkh34uq_small_2x.jpg",
  },{
    idx:4,
    description1:"ULTRA2",
    description2:"New finish.Never quit.",
    image:"https://www.apple.com/v/home/bt/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_avail__dyawbjw9cowi_large_2x.jpg",
  },{
    idx:5,
    description1:"Get $180-$650 in credit when you ",
    description2:"trade in iphone 112 or higher.",
    image:"https://www.apple.com/v/home/bt/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large_2x.jpg",
  },{
    idx:6,
    description1:"Get up to 3% Daily Cash back",
    description2:"with every purchase.",
    image:"https://www.apple.com/v/home/bt/images/promos/apple-card/promo_apple_card__5cm7draujpey_small_2x.jpg",

  }]
  return(
  
<>
<div className="w-full h-fit  ">
  <div className="flex flex-wrap">
    {cardsData.map((data)=>{
      return <>
      <div className="h-[70vh] w-[48%]  m-2 ">
      {data.idx===1?(<div className="flex items-center justify-center" ><img className="absolute  h-14  mt-40 " src="https://www.apple.com/v/home/bt/images/logos/apple-watch-series-10/promo_logo_apple_watch_series_10__qk5vaa89vnm2_large_2x.png" alt="" /></div>
      ):null}
       {data.idx===4?(<div className="flex items-center justify-center" ><img className="absolute  h-14  mt-40 " src="https://www.apple.com/v/home/bt/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large_2x.png" alt="" /></div>
      ):null}
        {data.idx===5?(<div className="flex items-center justify-center" ><img className="absolute  h-9  mt-40 " src="https://www.apple.com/v/home/bt/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_large_2x.png" alt="" /></div>
      ):null}
       {data.idx===6?(<div className="flex items-center justify-center" ><img className="absolute  h-9 mt-40 " src="https://www.apple.com/v/home/bt/images/logos/apple-card/logo__dcojfwkzna2q_large_2x.png" alt="" /></div>
      ):null}
      <img src={`${data.image}`}className="w-full h-full object-cover"/>
    
      </div>
     
  
      </>
    })}
    {/* <div className="h-[70vh] w-[48%] bg-green-900 m-2"></div>
    <div className="h-[70vh] w-[48%] bg-blue-900 m-2"></div>
    <div className="h-[70vh] w-[48%] bg-violet-900 m-2"></div>
    <div className="h-[70vh] w-[48%] bg-orange-900 m-2"></div>
    <div className="h-[70vh] w-[48%] bg-red-900 m-2"></div>
    <div className="h-[70vh] w-[48%] bg-yellow-900 m-2"></div> */}
  </div>
</div>


</>


  )
}
export default Cards;