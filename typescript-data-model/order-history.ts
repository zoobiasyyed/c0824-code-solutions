interface Items {
  title: string;
  author?: string;
  totalPrice: number;
}
interface AmazonOrders {
  orderNumber: string;
  items: Items[];
  delivery: boolean;
}
const orderHistory: AmazonOrders[] = [
  {
    orderNumber: '11439416898772232',
    items: [
      {
        title: 'Javascript for impatient programmers',
        author: 'Rauschmayer, Dr.Axel',
        totalPrice: 31.55,
      },
    ],
    delivery: true,
  },
  {
    orderNumber: '11399842681280257',
    items: [
      {
        title: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        totalPrice: 41.33,
      },
    ],
    delivery: true,
  },
  {
    orderNumber: '11428755579059409',
    items: [{ title: 'Gamecube Controller Adapter', totalPrice: 15.98 }],
    delivery: true,
  },
  {
    orderNumber: '11328831777648248',
    items: [
      {
        title: 'GameCube Controller - Super Smash Bros. Edition',
        totalPrice: 94.95,
      },
      {
        title: 'The Art of SQL',
        author: 'Faroult, Stephane',
        totalPrice: 33.99,
      },
    ],
    delivery: true,
  },
];

console.log(orderHistory);
