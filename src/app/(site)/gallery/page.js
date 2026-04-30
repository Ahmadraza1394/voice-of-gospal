import GalleryHero from "@/components/gallery/GalleryHero";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import GalleryCTA from "@/components/gallery/GalleryCTA";

export const metadata = {
  title: "Gallery",
  description: "View photos and memories from Voice of Gospel.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <PhotoGallery />
      <GalleryCTA />
    </>
  );
}
