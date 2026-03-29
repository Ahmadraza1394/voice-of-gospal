export default function GalleryStats({ photos, activeCategory }) {
  const totalPhotos = photos.length;
  const filteredCount = activeCategory === "all" 
    ? totalPhotos 
    : photos.filter(photo => photo.category === activeCategory).length;

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-50 rounded-lg px-6 py-3 border">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold text-brand-primary">{filteredCount}</span> of{" "}
          <span className="font-semibold">{totalPhotos}</span> photos
          {activeCategory !== "all" && (
            <span className="text-gray-500"> in {activeCategory}</span>
          )}
        </p>
      </div>
    </div>
  );
}
