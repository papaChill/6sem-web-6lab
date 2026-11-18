import Card from '@mui/material/Card'; 
import CardActions from '@mui/material/CardActions'; 
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia'; 
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography'; 
import Box from '@mui/material/Box'; 
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
 

 
interface ComponentProps { 
    building: { 
        img: string,  
        title: string,  
        description: string[], 
        fullname?: string;
    }; 
    index: number;
  } 

const StyledTypography = styled(Toolbar)(( {theme} ) => ({
    //color: "text.secondary",
    textAlign: 'justify',    
    marginBottom: '10px',
    color: 'white', 
    mixBlendMode: 'difference',
    fontFamily: '"courier new", italic',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    
}))

function BuildCard({ building, index } : ComponentProps) { 
    let even = index % 2 === 0;
    return ( 
      <Card sx={{  display: 'flex', flexDirection: { 
          xs: 'column',
          md: even ? 'row' : 'row-reverse'}, 
          bgcolor: 'transparent'
        }}> 
        <CardMedia sx = {{
              md: 12,
              objectFit: "cover",
              height: '250px',
            }} 
            component="img" 
            alt={ building.title } 
            image={ building.img } 
        /> 
        <Box marginX={'15px'}> 
          <CardContent> 
            <Typography gutterBottom variant="h5" sx ={{
                color: 'white', 
                mixBlendMode: 'difference',
                fontFamily: 'sans-serif',
                fontStyle: 'italic',
                //textAlign: 'end'
              }}> 
              { building.fullname  } 
            </Typography> 

            { building.description.map((item, ind) => ( 
              <StyledTypography key={ind} /*variant="body2"*/>     
                { item }                 
              </StyledTypography>  
                           
            ))} 
            
          </CardContent> 

          <CardActions sx={{ 
              justifyContent: even ? 'start' : 'end'
              
            }} > 
            <Button size="small" sx ={{color: 'lightgreen'}}>Подробнее</Button> 
          </CardActions> 
        </Box> 
      </Card> 
    ) 
} 
 
export default BuildCard;