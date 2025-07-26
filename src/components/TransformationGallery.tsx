import manBefore from "@/assets/man-before.jpg";
import manAfter from "@/assets/man-after.jpg";
import womanBefore from "@/assets/woman-before.jpg";
import womanAfter from "@/assets/woman-after.jpg";

export const TransformationGallery = () => {
  const transformations = [
    { image: manBefore, text: "Prima" },
    { image: manAfter, text: "Dopo" },
    { image: womanBefore, text: "Prima" },
    { image: womanAfter, text: "Dopo" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto justify-center">
      {transformations.map((transformation, index) => {
        const bannerClass =
          transformation?.text === "Prima"
            ? "bg-fitness-orange"
            : "bg-green-500";
        return (
          <div key={index} className="space-y-2 relative">
            <div className="relative">
              <img
                src={transformation.image}
                alt={transformation.text}
                className="w-64 h-72 md:h-72 object-cover rounded-lg shadow-lg"
              />

              <div
                className={`"absolute top-2 left-2 ${bannerClass} text-white px-2 py-1 rounded text-xs font-semibold"`}
              >
                {transformation.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
