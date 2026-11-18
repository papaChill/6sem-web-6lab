 import NavBar from "./components/Navbar";
 import Gallery from "./components/Gallery";
 import Content from "./components/Content";
 import Footer from "./components/Footer";
 import Circle from "./components/Circle";
 import backgroundGif from './images/mygif.gif';
 import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{
      // Основные настройки фона
      backgroundImage: `url(${backgroundGif})`,
      backgroundSize: 'cover',        // Растянуть, чтобы заполнить всё пространство
      backgroundPosition: 'center',    // Центрировать
      backgroundRepeat: 'no-repeat',  // Не дублировать, если гифка маленькая
      backgroundAttachment: 'fixed',  // Фон «приклеен» и не уезжает при скролле
      
      minHeight: '100vh',             // Минимум на всю высоту экрана
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <NavBar active="1"/>
      <Gallery/>
      <Circle/>
      <Content/>
      <Footer/>
    </Box>
  );
}
 
export default App;