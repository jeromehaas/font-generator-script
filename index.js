const { convertAllFonts } = require('@hayes0724/web-font-converter')

// This will convert all ttf fonts to both woff and woff2
convertAllFonts({
    pathIn: './fonts',
    pathOut: './output',
    outputFormats: ['.woff', '.woff2'],
    inputFormats: ['.ttf'],
    debug: false
})

