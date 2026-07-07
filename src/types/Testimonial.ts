export type Testimonial = {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/Sarah Johnson Realtor.jfif",
    location: "California, USA",
    rating: 5,
    review:
      "Absolutely breathtaking! The staff were incredibly welcoming, and waking up to the ocean every morning was unforgettable.",
  },
  {
    id: 2,
    name: "Michael Brown",
    image: "/cooper barnett.jfif",
    location: "London, UK",
    rating: 5,
    review:
      "The rooms were spotless, the food was exceptional, and the beach was simply paradise. We can't wait to come back!",
  },
  {
    id: 3,
    name: "Emily Davis",
    image: "/Création Livre _État américain de l’intrigue….jfif",
    location: "Toronto, Canada",
    rating: 5,
    review:
      "One of the best resorts we've ever visited. Luxury, comfort, and unforgettable sunsets every evening.",
  },
];