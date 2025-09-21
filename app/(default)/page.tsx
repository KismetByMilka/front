import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js and Vendure.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
    </>
  );
}
