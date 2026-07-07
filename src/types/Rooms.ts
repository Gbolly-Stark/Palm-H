export type Room = {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
};
export const rooms: Room[] =[
    {
        id: 1,
        image: "/room (2).jfif",
        title: "Ocean View Villa",
        description: "Experience luxury like never before in our stunning villa with a private infinity pool and the ocean view and unlimited access to all activities .",
        price: 600,

    },
    {
        id: 2,
        image: "/room (3).jfif",
        title: "Deluxe Villa",
        description: "Indulge in the ultimate luxury experience in our exquisite villa, complete with modern amenities and breathtaking views and limited access to exclusive facilities.",
        price: 350,
    },
    {
        id: 3,
        image: "/room (1).jfif",
        title: "Family Suite",
        description: "Perfect for families, our spacious suite offers comfort and convenience with modern amenities and stunning views.",
        price: 470,
    },
    {
        id: 4,
        image: "/room (4).jfif",
        title: "Modern Room",
        description: "Experience modern comfort and style in our well-appointed room, featuring all the essentials for a pleasant stay.",
        price: 200,
    },


];