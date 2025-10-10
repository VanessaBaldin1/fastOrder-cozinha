export interface OrderItemType {
  id: number;
  quantity: number;
  name: string;
  details: string[];
  chef: string;
  startTime: string;
}

export interface OrderType {
  id: number;
  position: number;
  table: string;
  orderNumber: number;
  items: OrderItemType[];
}

export const mockOrders: OrderType[] = [
  {
    id: 1,
    position: 1,
    table: "Mesa 1",
    orderNumber: 177,
    items: [
      {
        id: 101,
        quantity: 1,
        name: "Duplo Burger",
        details: [],
        chef: "Marcus",
        startTime: "0h 11m 29s",
      },
      {
        id: 102,
        quantity: 1,
        name: "Duplo Burger",
        details: ["+ Cheddar Premium"],
        chef: "Marcus",
        startTime: "0h 10m 43s",
      },
    ],
  },
  {
    id: 2,
    position: 2,
    table: "Mesa 1",
    orderNumber: 178,
    items: [
      {
        id: 201,
        quantity: 1,
        name: "Duplo Burger",
        details: ["*REMOVER Queijo Cheddar"],
        chef: "Marcus",
        startTime: "0h 9m 13s",
      },
      {
        id: 202,
        quantity: 1,
        name: "Duplo Burger",
        details: ["+ Cheddar Premium"],
        chef: "Marcus",
        startTime: "0h 9m 8s",
      },
    ],
  },
  {
    id: 3,
    position: 3,
    table: "Mesa 2",
    orderNumber: 179,
    items: [
      {
        id: 301,
        quantity: 1,
        name: "Pizza Calabresa G",
        details: [
          "*Massa Napolitana",
          "+ Molho de Tomate Tradicional",
          "+ Borda Catupiry",
        ],
        chef: "Marcus",
        startTime: "0h 7m 4s",
      },
    ],
  },
  {
    id: 4,
    position: 4,
    table: "Mesa 3",
    orderNumber: 180,
    items: [
      {
        id: 401,
        quantity: 2,
        name: "Porção Batata",
        details: ["Carne Seca com Cheddar"],
        chef: "Marcus",
        startTime: "0h 5m 15s",
      },
      {
        id: 402,
        quantity: 1,
        name: "Porção Anéis de Cebola",
        details: [],
        chef: "Marcus",
        startTime: "0h 5m 12s",
      },
    ],
  },
  {
    id: 5,
    position: 5,
    table: "Mesa 5",
    orderNumber: 180,
    items: [
      {
        id: 401,
        quantity: 2,
        name: "Porção Batata",
        details: ["Carne Seca com Cheddar"],
        chef: "Marcus",
        startTime: "0h 5m 15s",
      },
      {
        id: 402,
        quantity: 1,
        name: "Porção Anéis de Cebola",
        details: [],
        chef: "Marcus",
        startTime: "0h 5m 12s",
      },
    ],
  },
  {
    id: 6,
    position: 6,
    table: "Mesa 6",
    orderNumber: 180,
    items: [
      {
        id: 401,
        quantity: 2,
        name: "Porção Batata",
        details: ["Carne Seca com Cheddar"],
        chef: "Marcus",
        startTime: "0h 5m 15s",
      },
      {
        id: 402,
        quantity: 1,
        name: "Porção Anéis de Cebola",
        details: [],
        chef: "Marcus",
        startTime: "0h 5m 12s",
      },
    ],
  },
];
