import { createMuiTheme } from '@material-ui/core/styles'
import { Color } from 'constants/color'

export const Theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#008ede',
      main: Color.blue.d,
      light: '#35b1f6',
      contrastText: '#fff',
    },
    error: {
      dark: '#f77581',
      main: Color.red.d,
      light: '#e7303f',
      contrastText: '#fff',
    },
    warning: {
      dark: '#d1a908',
      main: Color.yelloworange.d,
      light: '#e3c64f',
      contrastText: '#fff',
    },
    info: {
      dark: '#84cd7e',
      main: Color.greenyellow.d,
      light: '#41bc38',
      contrastText: '#fff',
    },
    success: {
      dark: '#0097b8',
      main: Color.bluegreen.d,
      light: '#3bbbd8',
      contrastText: '#fff',
    },
  },
  spacing: 4,
})
