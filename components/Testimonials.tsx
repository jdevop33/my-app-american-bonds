import Image from "next/image";

const testimonials = [
  {
    quote:
      "Bright America Bonds allowed us to upgrade our entire street lighting system without burdening our taxpayers. The energy savings have been remarkable.",
    author: "Jane Smith",
    title: "Mayor of Brightville",
    image: "/images/jane-smith.jpg",
  },
  {
    quote:
      "As an investor, I'm impressed by the low-risk, high-impact nature of Bright America Bonds. It's a win-win for communities and financial institutions.",
    author: "John Doe",
    title: "Senior Investment Manager",
    image: "/images/john-doe.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
          <div className="flex items-center">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.author}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
