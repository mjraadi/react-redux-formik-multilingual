import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline';

function withMaterialUI(Component) {
  function WithMaterialUI(props) {    
    // Create a theme instance.
    const theme = createMuiTheme({
      palette: {
        secondary: {
          main: blue[900]
        },
        primary: {
          main: indigo[700]
        }
      },
      typography: {
        useNextVariants: true,
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '"Lato"',
          'sans-serif'
        ].join(',')
      }
    });
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithMaterialUI;
}

export default withMaterialUI;