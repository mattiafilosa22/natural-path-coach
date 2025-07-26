import manBefore from "@/assets/man-before.jpg";
import manAfter from "@/assets/man-after.jpg";
import womanBefore from "@/assets/woman-before.jpg";
import womanAfter from "@/assets/woman-after.jpg";

export const TransformationGallery = () => {
  const transformations = [
    { before: manBefore, after: manAfter, title: "Marco - 3 mesi" },
    { before: womanBefore, after: womanAfter, title: "Sara - 4 mesi" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {transformations.map((transformation, index) => (
        <div key={index} className="space-y-4">
          <div className="relative">
            <img
              src={transformation.before}
              alt={`${transformation.title} - Prima`}
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-2 left-2 bg-fitness-orange text-white px-2 py-1 rounded text-sm font-semibold">
              PRIMA
            </div>
          </div>
          <div className="relative">
            <img
              src={transformation.after}
              alt={`${transformation.title} - Dopo`}
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
              DOPO
            </div>
          </div>
          <p className="text-center font-semibold text-fitness-orange">{transformation.title}</p>
        </div>
      ))}
    </div>
  );
};