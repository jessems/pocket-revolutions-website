import Typography from 'typography'
// import WebFont from 'webfontloader';
import '../fonts/fonts.css'

// WebFont.load({
//   google: {
//     families: ['Ubuntu: 300,400,700', 'sans-serif']
//   }
// });

// export const fonts = {
//   regular: 'Ubuntu',
//   regularItalic: 'Ubuntu',
//   semibold: 'Ubuntu',
//   semiboldItalic: 'Ubuntu',
//   bold: 'Ubuntu',
//   boldItalic: 'Ubuntu',
// }

export const fonts = {
  regular: 'Lato',
  regularItalic: 'Lato',
  semibold: 'Lato',
  semiboldItalic: 'Lato',
  bold: 'Lato',
  boldItalic: 'Lato',
}


// export const fonts = {
//   regular: 'Inter UI Regular',
//   regularItalic: 'Inter UI Regular Italic',
//   semibold: 'Inter UI Semibold',
//   semiboldItalic: 'Inter UI Semibold Italic',
//   bold: 'Inter UI Bold',
//   boldItalic: 'Inter UI Bold Italic',
// }

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.bold, 'sans-serif'],
  bodyFontFamily: [fonts.regular, 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.8)',

  overrideStyles: ({ rhythm }) => ({
    h1: {
      color: 'hsla(0,0%,0%,0.75)',
    },
    h2: {
      color: 'hsla(0,0%,0%,0.775)',
    },
    h3: {
      color: 'hsla(0,0%,0%,0.8)',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
    },
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
