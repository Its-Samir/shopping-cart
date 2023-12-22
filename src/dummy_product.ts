export interface Product {
    id: string;
    title: string;
    rating: number;
    img: string;
    price: number;
    color?: string;
    quantity: number;
}

export const products: Product[] = [
    {
        id: '1',
        title: 'Bag',
        rating: 4.5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_Ua0FZ6MbOXx-c9UdDvgfw1Q39x-TFoS1Q&usqp=CAU',
        price: 450,
        color: 'Red',
        quantity: 1
    },
    {
        id: '2',
        title: 'Headphone',
        rating: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNr4bhprBkatMqjNiU3At3LOlDKkxGupR1w&usqp=CAU',
        price: 650,
        color: 'Red',
        quantity: 1
    },
    {
        id: '3',
        title: 'Watch',
        rating: 4.8,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnueMhmx7A0uTXdjiwSfbeHwRWV4ugu16s1w&usqp=CAU',
        price: 950,
        color: 'Default',
        quantity: 1
    },
    {
        id: '4',
        title: 'Hoodie',
        rating: 4.7,
        img: 'https://i5.walmartimages.com/asr/8d579c67-729d-4153-9a30-25a1befbbe0c.2ae52a05e011bf7e93b6e30b91d6e803.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
        price: 2599,
        color: 'Default',
        quantity: 1
    },
]