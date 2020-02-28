import { createMuiTheme } from '@material-ui/core/styles'
import { COLOR } from 'constants/color'

export const THEME = createMuiTheme({
  palette: {
    primary: {
      dark: '#008ede',
      main: COLOR.blue.d,
      light: '#35b1f6',
      contrastText: '#fff',
    },
    error: {
      dark: '#f77581',
      main: COLOR.red.d,
      light: '#e7303f',
      contrastText: '#fff',
    },
    warning: {
      dark: '#d1a908',
      main: COLOR.yelloworange.d,
      light: '#e3c64f',
      contrastText: '#fff',
    },
    info: {
      dark: '#84cd7e',
      main: COLOR.greenyellow.d,
      light: '#41bc38',
      contrastText: '#fff',
    },
    success: {
      dark: '#0097b8',
      main: COLOR.bluegreen.d,
      light: '#3bbbd8',
      contrastText: '#fff',
    },
  },
  spacing: 4,
})
