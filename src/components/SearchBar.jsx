import { Typography,Box, TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar() {
    return <Box sx={{maxWidth:'1280px', marginX:'auto', marginTop:'40px'}}>
    <Typography color='grey' component='span'>Welcome, Flightio</Typography>
    <Typography sx={{marginTop:'12px',marginBottom:'16px'}} variant='h5' component='h2'>Bring Designer Lamps This Diwali</Typography>
    <Box>
    <TextField />
    <Button sx={{height:'55px', marginLeft:'8px',backgroundColor:'purple'}}   variant="contained" ><SearchIcon sx={{fontSize:'32px !important'}}/></Button>
    </Box>
    
    </Box>;
  }
  
