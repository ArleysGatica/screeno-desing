import androiddevelopers from './androiddevelopers.svg'
import androidwordmark from './androidwordmark.svg'
import applewatch from './applewatch.svg'
import iphone from './iphone.svg'
import tv from './tv.svg'

const serviSVG = (SVG) => {
  const status = {
    androiddevelopers: androiddevelopers,
    androidwordmark: androidwordmark,
    applewatch: applewatch,
    iphone: iphone,
    tv: tv,
  }
  return status[SVG]
}

export default serviSVG;