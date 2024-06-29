// IMPORTS
const { convertAllFonts } = require('@hayes0724/web-font-converter')

// CONVERT ALL FONTS
convertAllFonts({
    pathIn: './fonts',
    pathOut: './output',
    outputFormats: ['.woff', '.woff2'],
    inputFormats: ['.ttf'],
    debug: false
})

