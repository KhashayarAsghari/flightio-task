import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function () {
    const date = [
        {
            img: "src/imges/مازراتی.webp",
            title: "maserati",
            price: "20" ,
        },
        {
            img: "src/imges/مازراتی.webp",
            title: "maserati coat",
            price: "32" ,
        },
        {
            img: "src/imges/مازراتی.webp",
            title: "maseratiS coat",
            price: "35" ,
        },
        {
            img: "src/imges/مازراتی.webp",
            title: "maseratis",
            price: "12" ,
        }
    ]
    const [Allprice , setAllprice] = useState([])

    return (
        <>
       <Box component="div" display="block" className="p-6" sx={{backgroundColor:"beige"}}>
        <h1 className="mb-5">Allprice:</h1>
<Box component="div" sx={{borderRadius:"10px"}}  className="h-[70vh] bg-blue-800 p-6 mb-10 ">
{date.map( itme => {
 return (<div className=" mb-4">
    <div className="flex items-center gap-4">
<img className="rounded-[50%] w-20 h-20 " src={itme.img} alt="" /> 
<div>
<h1 className="text-gray-100">{itme.title}</h1>
<p>price: ${itme.price}</p>
</div>
    </div>
 </div>) })
}
</Box>
       </Box>

        </>
    )
}