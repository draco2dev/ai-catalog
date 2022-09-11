import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import CssBaseline from '@mui/material/CssBaseline';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        ReactJS + MUI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [{
  id: 1,
  src: 'https://cdn.discordapp.com/attachments/951197655021797436/1014324322938126386/Heru_Eritrean_man_curly_afro_35mm_lens_photography_handsome_str_4e488994-b571-41b5-93ff-645c2e0607bf.png',
  title: "Timbeque ",
  description: 'nombre de baile negroide',
},{
  id: 2,
  src: 'https://cdn.discordapp.com/attachments/951197655021797436/1014324323298848818/Heru_Eritrean_man_curly_afro_35mm_lens_photography_handsome_str_f1822a73-3e90-4794-a436-9924fc7d57ed.png',
  title: "Calindá ",
  description: 'nombre de baile de bomba',
},{
  id: 3,
  src: 'https://cdn.discordapp.com/attachments/951197655021797436/1014324325014315078/Heru_Eritrean_woman_35mm_lens_photography_beautiful_striking_ey_3c67e78e-d169-4769-9117-0f5a604a6a31.png',
  title: "Changa",
  description: 'ser alguien la – con maña o habilidad astuta para conseguir ciertos propósitos; alguien malvado o perverso',
},{
  id: 4,
  src: 'https://cdn.discordapp.com/attachments/951197655021797436/1014324325437948015/Heru_Ethiopian_man_35mm_lens_photography_beautiful_striking_eye_ede748b3-4cd6-4038-be0c-7976912682be.png',
  title: "Malagueta",
  description: 'árbol silvetre que produce un fruto de olor y sabor'
}];

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// export default
 function Catalogo() {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
{/* ThemeProvider theme={theme}
/ThemeProvider */}
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Catalogo de Imagenes dracoDev, Alusivas a palabras africanas
          </Typography>
          
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.cxv"
              gutterBottom
            >
              Subasta ahora
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            A continuación una lista de imágenes auto-generadas de <Link href="https://www.midjourney.com" target={"_blank"}> Midjourney. s</Link> 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
              <Button variant="outlined" onClick={colorMode.toggleColorMode} >Dark Mode</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    // sx={{
                    //   // 16:9
                    //   // pt: '56.25%',
                    //   pt: '0',
                    // }}
                    // image="https://source.unsplash.com/random"
                    image={card.src}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button> */}
                    <Button size="small">Subastar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          dracoDev deleoper fullStack
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
      <ThemeProvider theme={theme}>
        <Catalogo />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}