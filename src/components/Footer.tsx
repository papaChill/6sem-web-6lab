import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import Container from '@mui/material/Container';

function Footer() {
    return (
    <Container maxWidth="xl" > 
        <Box  sx = {{ bgcolor: 'black', py: 1}}>
            <Typography variant ="h6" align = "center"  sx = {{color: "white", fontFamily: 'sans-serif', fontStyle: 'italic', }}>
                Б9123-09-03-04 Троянов Михаил Евгеньевич
            </Typography>
        </Box>
    </Container>
    );
}
export default Footer;