import BlackView from './BlackView';
import serviSVG from '../../Asset/Services';

const BlackJS = () => {

  const Arraytext = [
    {
      id: 1,
      text: 'Monetize your way',
      description: 'Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup.',
      down: 'Get Started',
      SVG: serviSVG('black'),
      img: serviSVG('sacso')
    },

    {
      id: 2,
      text: 'Optimized for growth',
      description: 'The Screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using the Screeno built-in marketing tools and integrations. Generate leads and convert your audience into paying subscribers, at no extra cost.',
      down: 'Get Started',
      SVG: serviSVG('black'),
      img: serviSVG('sacso')
    },
  ]

  return (
    <>
      <BlackView Arraytext={Arraytext} />
    </>
  )
}

export default BlackJS;