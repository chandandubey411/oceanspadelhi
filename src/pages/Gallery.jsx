import PageBanner from '../components/common/PageBanner';
import GallerySection from '../components/home/GallerySection';
import spaPool from '../assets/images/spa_pool.png';

export default function Gallery() {
  return (
    <>
      <PageBanner
        title="Our Gallery"
        subtitle="Explore the beauty and luxury of Ocean Spa Delhi"
        breadcrumbs={[{ name: 'Gallery' }]}
        image={spaPool}
      />
      <GallerySection limit={12} />
    </>
  );
}
