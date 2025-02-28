import { Box, Button } from "@mui/material";


export default function SingleProduct({image, title ,price}){


    return(
        <>
        <Box component="div" width="20rem" margin="5rem auto" boxShadow="0px 0px 10px 10px rgba(0,0,0,0.2)" padding="1.5rem" borderRadius="1rem">
            <img src={image} alt="image" width="full"/>
            <Box component="div" marginTop="3rem">
                <h2 className="mb-[1rem] font-bold">{title}</h2>
                <span>${price}</span>

            </Box>
            
        </Box>
        
      </>
    )
}