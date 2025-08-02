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
    <div className="overflow-x-auto">
      <div className="flex gap-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:max-w-2xl sm:mx-auto sm:justify-center">
        {transformations.map((transformation, index) => {
          const bannerClass =
            transformation?.text === "Prima"
              ? "bg-fitness-orange"
              : "bg-green-500";
          return (
            <div key={index} className="flex-shrink-0 space-y-2 relative sm:flex-shrink">
              <div className="relative">
                <img
                  src={transformation.image}
                  alt={transformation.text}
                  className="w-64 h-72 md:h-72 object-cover rounded-lg shadow-lg"
                />

                <div
                  className={`absolute top-2 left-2 ${bannerClass} text-white px-2 py-1 rounded text-xs font-semibold`}
                >
                  {transformation.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
