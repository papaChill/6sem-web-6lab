import Container from '@mui/material/Container'; 
import Grid from '@mui/material/Grid'; 
import structures from "../data"; 
import BuildCard from './BuildCard';
 
const cardData = [structures[0], structures[4], structures[2]] 
 
function Content() { 
  return ( 
    <Container maxWidth="xl"> 
      <Grid container spacing={{ xs: 3, md: 6 }}> 
        {cardData.map((item, index) => ( 
          <Grid key={index} size={{ xs: 12 }} >      
            <BuildCard building={ item } index = {index}/>        
          </Grid> 
        ))} 
      </Grid> 
    </Container> 
  ); 
} 
export default Content; 