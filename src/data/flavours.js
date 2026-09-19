import relishImg from '../assets/images/flavour-relish.webp'
import nutsImg from '../assets/images/flavour-nuts.webp'
import fruityImg from '../assets/images/flavour-fruity.webp'
import creamyImg from '../assets/images/flavour-creamy.webp'

export const flavours = [
  {
    key: 'relish',
    name: 'Relish Spices',
    count: '6 flavours',
    items: ['Ginger', 'Nutmeg', 'Cinnamon', 'Chilli Pepper', 'Black Pepper', 'Suya Spice'],
    image: relishImg,
    alt: 'Relish Spices Chin-Chin packet',
  },
  {
    key: 'nuts',
    name: 'Nuts & Seeds',
    count: '8 flavours',
    items: ['Peanut', 'Almond', 'Sesame', 'Pecans', 'Macadamia', 'Hazelnut', 'Pistachios', 'Trail Mix'],
    image: nutsImg,
    alt: 'Nuts & Seeds Chin-Chin packet',
  },
  {
    key: 'fruity',
    name: 'Fruity',
    count: '7 flavours',
    items: ['Prunes', 'Apricot', 'Coconut', 'Fruit Mix', 'Lemon Zest', 'Cranberry', 'Strawberry'],
    image: fruityImg,
    alt: 'Fruity Chin-Chin packet',
  },
  {
    key: 'creamy',
    name: 'Creamy',
    count: '8 flavours',
    items: ['Baileys', 'Vanilla', 'Malted Milk', 'Shortbread', 'Buttermilk', 'Butterscotch', 'Chocolate', 'Salted Caramel'],
    image: creamyImg,
    alt: 'Creamy Chin-Chin packet',
  },
]
