import androiddevelopers from './androiddevelopers.svg'
import androidwordmark from './androidwordmark.svg'
import applewatch from './applewatch.svg'
import iphone from './iphone.svg'
import tv from './tv.svg'
import androidtv from './androidtv.svg'
import tvapple from './tvapple.svg'
import camara from './camara.svg'
import dolar from './dolar.svg'
import flecha from './flecha.svg'
import analitys from './analitys.svg'
import device from './device.svg'
import escala from './escala.svg'

const serviSVG = (SVG) => {
  const status = {
    androiddevelopers: androiddevelopers,
    androidwordmark: androidwordmark,
    applewatch: applewatch,
    iphone: iphone,
    tv: tv,
    androidtv: androidtv,
    tvapple: tvapple,
    camara: camara,
    dolar: dolar,
    flecha: flecha,
    analitys: analitys,
    device: device,
    escala: escala
  }
  return status[SVG]
}

export default serviSVG;