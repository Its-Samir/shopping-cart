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
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.j-g7Nbv30dslptWqaRHkBgAAAA%26pid%3DApi&f=1&ipt=207f331b9d1e1850524eee72059fa808a34c4bd02c83aec427b0ff2c46232eac&ipo=images',
        price: 2599,
        color: 'Default',
        quantity: 1
    },
]