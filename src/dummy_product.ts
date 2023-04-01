export interface Product {
    id: string;
    title: string;
    rating: number;
    img: string;
    price: number;
    quantity: number;
}

export const products: Product[] = [
    {
        id: '1',
        title: 'Bag',
        rating: 4.5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_Ua0FZ6MbOXx-c9UdDvgfw1Q39x-TFoS1Q&usqp=CAU',
        price: 450,
        quantity: 1
    },
    {
        id: '2',
        title: 'Headphone',
        rating: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNr4bhprBkatMqjNiU3At3LOlDKkxGupR1w&usqp=CAU',
        price: 650,
        quantity: 1
    },
    {
        id: '3',
        title: 'Watch',
        rating: 4.8,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnueMhmx7A0uTXdjiwSfbeHwRWV4ugu16s1w&usqp=CAU',
        price: 950,
        quantity: 1
    },
]