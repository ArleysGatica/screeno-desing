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
import sacso from './sacso.png'
import uno from './1.png'
import dos from './2.png'
import tres from './3.png'
import cuatro from './4.png'
import cinco from './5.png'
import seis from './6.png'
import siete from './7.png'
import ocho from './8.png'
import nueve from './9.png'
import insta from './insta.svg'
import facebook from './facebook.svg'
import ubicacion from './ubicacion.svg'
import call from './call.svg'
import sms from './sms.svg'
import recta from './recta.svg'
import presentador from './presentador.png'
import gmail from './gmail.svg'
import gmailSMS from './gmailSMS.svg'

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
    escala: escala,
    sacso: sacso,
    uno: uno,
    dos: dos,
    tres: tres,
    cuatro: cuatro,
    cinco: cinco,
    seis: seis,
    siete: siete,
    ocho: ocho,
    nueve: nueve,
    insta: insta,
    facebook: facebook,
    ubicacion: ubicacion,
    call: call,
    sms: sms,
    recta: recta,
    presentador: presentador,
    gmail: gmail,
    gmailSMS: gmailSMS

  }
  return status[SVG]
}

export default serviSVG;