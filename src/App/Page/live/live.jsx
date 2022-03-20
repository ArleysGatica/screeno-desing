import serviSVG from "../../Asset/Services";
import Live from './LiveView'

const LiveJS = () => {
  const array = [
    {
      id: 1,
      SVG: serviSVG('tvapple'),
    },
    {
      id: 2,
      SVG: serviSVG('androidtv'),
    },
    {
      id: 3,
      SVG: serviSVG('applewatch'),
    },
    {
      id: 4,
      SVG: serviSVG('iphone'),
    },
    {
      id: 5,
      SVG: serviSVG('androidwordmark'),
    },
  ];

  return (
    <>
      <Live array={array} />
    </>
  )
}

export default LiveJS;