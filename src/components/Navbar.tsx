import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem'; 
import MenuList from '@mui/material/MenuList';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'; 
import { lightGreen } from '@mui/material/colors';


interface ComponentProps {
    active?: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px )`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    background: 'black',
    padding: '8px 12px',
    
  }));

function Navbar({ active } : ComponentProps) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    return (
        <AppBar      
          position="static"
          sx={{
            boxShadow: 0,
            bgcolor: 'transparent',
            mt: '28px',
          }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>

                    <Typography variant="h6" sx={{ color: '#00c48f', fontFamily: '"Reggae One", cursive' }}>
                        Самые быстрые автомобили
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button variant={active === '1' ? "contained" : "text"} 
                        sx = {{ fontFamily: '"Reggae One", cursive', color: active === '1' ? 'white' : 'lightGreen', bgcolor: active === '1' ? 'lightGreen' : 'transparent', }}>
                            Главная
                        </Button>
                        <Button variant={active === '2' ? "contained" : "text"} 
                        sx = {{ fontFamily: '"Reggae One", cursive', color: active === '2' ? 'white' : 'lightGreen', bgcolor: active === '2' ? 'lightGreen' : 'transparent', }}>
                            Таблица
                        </Button>
                        <Button variant={active === '3' ? "contained" : "text"} 
                        sx = {{ fontFamily: '"Reggae One", cursive', color: active === '3' ? 'white' : 'lightGreen', bgcolor: active === '3' ? 'lightGreen' : 'transparent',}}>
                            Описание
                        </Button>
                    </Box> 

                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>    

                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>     

                        <Drawer
                            anchor="top"
                            open={ open } 
                            onClose={toggleDrawer(false)}
                        >   
                            <Box>                
                                <Box 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'flex-end', 
                                }} 
                                > 
                                    <IconButton onClick={toggleDrawer(false)}> 
                                        <CloseRoundedIcon /> 
                                    </IconButton> 
                                </Box>
                                                        
                                <MenuList>
                                    <MenuItem selected = {active === "1"} sx = {{ '&:hover': {bgcolor: 'lightblue'}}}> Главная </MenuItem> 
                                    <MenuItem selected = {active === "2"} sx ={{'&:hover': { bgcolor: 'lightblue' }}}>Таблица</MenuItem> 
                                    <MenuItem selected = {active === "3"} sx ={{'&:hover': { bgcolor: 'lightblue' }}}>Описание</MenuItem>
                                </MenuList>
                            </Box>                           
                        </Drawer>

                    </Box>

                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;

// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';

// function Navbar() {

//     return (
//         <AppBar>
//             <Toolbar>
   
//             </Toolbar>
//         </AppBar>
//       );
//     }

// export default Navbar;