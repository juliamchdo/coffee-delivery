enum CoffeeType {
  TRADICIONAL = "TRADICIONAL",
  GELADO = "GELADO",
  COM_LEITE = "COM LEITE",
  ALCOOLICO = "ALCOÓLICO",
  ESPECIAL = "ESPECIAL",
}

export interface Coffee {
  type: CoffeeType[];
  name: string;
  description: string;
  price: number;
  image: string;
  id: number;
}

export const CoffeeOptions: Coffee[] = [
  {
    id: 1,
    type: [CoffeeType.TRADICIONAL],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    image: "traditional-expresso",
  },
  {
    type: [CoffeeType.TRADICIONAL],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: "american-expresso",
    id: 2,
  },
  {
    type: [CoffeeType.TRADICIONAL],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: "creamy-expresso",
    id: 3,
  },
  {
    type: [CoffeeType.TRADICIONAL, CoffeeType.GELADO],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: "cold-expresso",
    id: 4,
  },
  {
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    image: "coffee-milk",
    id: 5,
  },
  {
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: "latte",
    id: 6,
  },
  {
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    image: "capuccino",
    id: 7,
  },
  {
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    image: "macchiato",
    id: 8,
  },
  {
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: "mocaccino",
    id: 9,
  },
  {
    type: [CoffeeType.ESPECIAL, CoffeeType.COM_LEITE],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: "hot-chocolate",
    id: 10,
  },
  {
    type: [CoffeeType.ESPECIAL, CoffeeType.ALCOOLICO, CoffeeType.GELADO],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: "cuban",
    id: 11,
  },
  {
    type: [CoffeeType.ESPECIAL],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: "hawaiian",
    id: 12,
  },
  {
    type: [CoffeeType.ESPECIAL],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: "arabic",
    id: 13,
  },
  {
    type: [CoffeeType.ESPECIAL, CoffeeType.ALCOOLICO],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: "irish",
    id: 14,
  },
];
