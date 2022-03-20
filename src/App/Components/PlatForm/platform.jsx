import serviSVG from "../../Asset/Services";
import PlatFormView from "./PlaFormView";

const PlatformJS = () => {
  const info = [
    {
      title: 'Upload & Organize',
      description: 'Upload in bulk, organize content in categories, add custom filters & upload extras.',
      SVG: serviSVG('flecha'),
    },
    {
      title: 'Stream On-Demand',
      description: 'Showcase your content in a beautiful on-demand video catalog.',
      SVG: serviSVG('camara'),
    },
    {
      title: 'Stream Live',
      description: 'Schedule events in advance & build excitement with a countdown overlay.',
      SVG: serviSVG('escala'),
    },
    {
      title: 'Monetization',
      description: 'Offer subscriptions or one-time purchases. Accept credit cards & PayPal.',
      SVG: serviSVG('dolar'),
    },
    {
      title: 'Analytics',
      description: 'Know what your audience likes & how your content is performing.',
      SVG: serviSVG('analitys'),
    },
    {
      title: 'For all devices',
      description: 'Get organized on all devices',
      SVG: serviSVG('device'),
    },
  ]
  return (
    <>
      <PlatFormView info={info} />
    </>
  )
}

export default PlatformJS;