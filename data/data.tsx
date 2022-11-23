import { Category, Color, Flower, Format, Light, Product } from '../types/interfaces'

import product_1 from '../public/products/1.jpg'
import product_2 from '../public/products/2.jpg'
import product_3 from '../public/products/3.jpg'
import product_4 from '../public/products/4.jpg'
import product_5 from '../public/products/5.jpg'
import product_6 from '../public/products/6.jpg'
import product_7 from '../public/products/7.jpg'
import product_8 from '../public/products/8.jpg'
import product_9 from '../public/products/9.jpg'
import product_10 from '../public/products/10.jpg'
import product_11 from '../public/products/11.jpg'
import product_12 from '../public/products/12.jpg'


export const categories: Category[] = [
  { id: 0, name: 'Букеты из гипсофил' },
  { id: 1, name: 'Букеты из ромашек' },
  { id: 2, name: 'Букеты из хризантем' },
  { id: 3, name: 'Комнатные цветы в горшках' },
  { id: 4, name: 'Монобукеты' },
  { id: 5, name: 'Сборные букеты' },
  { id: 6, name: 'Букет на праздник' },
  { id: 7, name: 'Композиции из цветов' },
  { id: 8, name: 'Конверты' },
  { id: 9, name: 'Открытки' },
  { id: 10, name: 'Подарки' },
  { id: 11, name: 'Букеты из сухоцветов' },
  { id: 12, name: 'Шары' },
  { id: 13, name: 'Популярное' },
  { id: 14, name: 'Букеты роз' },
  { id: 15, name: 'Цветы на похороны' },
  { id: 16, name: 'Упаковка подарков' },
]

export const lights: Light[] = [
  { id: 0, name: 'Нежные' },
  { id: 1, name: 'Яркие' }
]

export const formats: Format[] = [
  { id: 0, name: 'букет' },
  { id: 1, name: 'в вазе' },
  { id: 2, name: 'в конверте' },
  { id: 3, name: 'в корзине' },
  { id: 4, name: 'в шляпной коробке' },
  { id: 5, name: 'в ящике' }
]

export const colors: Color[] = [
  { id: 0, name: 'белый' },
  { id: 1, name: 'желтый' },
  { id: 2, name: 'зеленый' },
  { id: 3, name: 'красный' },
  { id: 4, name: 'оранжевый' },
  { id: 5, name: 'розовый' },
  { id: 6, name: 'синий' }
]

export const flowers: Flower[] = [
  { id: 0, name: 'Альстромерия' },
  { id: 1, name: 'Антуриум' },
  { id: 2, name: 'Аспарагус' },
  { id: 3, name: 'Астильба' },
  { id: 4, name: 'Астранция' },
]

export const products: Product[] = [
  {
    id: 0,
    name: 'Лучший день',
    price: 167.000,
    old_price: 0,
    images: [ product_1 ],
    category: [ categories[0] ],
    light: [ lights[0] ],
    color: [ colors[0] ],
    format: formats[0],
    flowers: [ flowers[0] ],
    popular: false,
    new: false,
    sale: false,
    description: ''
  },
  {
    id: 1,
    name: 'Лучший день',
    price: 167.000,
    old_price: 0,
    images: [ product_2 ],
    category: [ categories[1] ],
    light: [ lights[1] ],
    color: [ colors[1] ],
    format: formats[1],
    flowers: [ flowers[1] ],
    popular: false,
    new: true,
    sale: false,
    description: ''
  },
  {
    id: 2,
    name: 'Лучший день',
    price: 167.000,
    old_price: 0,
    images: [ product_3 ],
    category: [ categories[2] ],
    light: [ lights[2] ],
    color: [ colors[2] ],
    format: formats[2],
    flowers: [ flowers[2] ],
    popular: false,
    new: false,
    sale: false,
    description: ''
  },
  {
    id: 3,
    name: 'Лучший день',
    price: 167.000,
    old_price: 187.000,
    images: [ product_4 ],
    category: [ categories[3] ],
    light: [ lights[3] ],
    color: [ colors[3] ],
    format: formats[3],
    flowers: [ flowers[3] ],
    popular: false,
    new: false,
    sale: true,
    description: ''
  },
  {
    id: 4,
    name: 'Лучший день',
    price: 167.000,
    old_price: 0,
    images: [ product_5 ],
    category: [ categories[4] ],
    light: [ lights[4] ],
    color: [ colors[4] ],
    format: formats[4],
    flowers: [ flowers[4] ],
    popular: false,
    new: false,
    sale: false,
    description: ''
  },
  {
    id: 5,
    name: 'Лучший день',
    price: 167.000,
    old_price: 0,
    images: [ product_6 ],
    category: [ categories[5] ],
    light: [ lights[5] ],
    color: [ colors[5] ],
    format: formats[5],
    flowers: [ flowers[5] ],
    popular: false,
    new: false,
    sale: true,
    description: ''
  },
  {
    id: 6,
    name: 'Лучший день',
    price: 167.000,
    old_price: 0,
    images: [ product_7 ],
    category: [ categories[6] ],
    light: [ lights[6] ],
    color: [ colors[6] ],
    format: formats[6],
    flowers: [ flowers[6] ],
    popular: false,
    new: false,
    sale: false,
    description: ''
  },
  {
    id: 7,
    name: 'Лучший день',
    price: 167.000,
    old_price: 0,
    images: [ product_8 ],
    category: [ categories[7] ],
    light: [ lights[7] ],
    color: [ colors[7] ],
    format: formats[7],
    flowers: [ flowers[7] ],
    popular: false,
    new: false,
    sale: false,
    description: ''
  },
  {
    id: 8,
    name: 'Лучший день',
    price: 167.000,
    old_price: 187.000,
    images: [ product_9 ],
    category: [ categories[8] ],
    light: [ lights[8] ],
    color: [ colors[8] ],
    format: formats[8],
    flowers: [ flowers[8] ],
    popular: false,
    new: false,
    sale: true,
    description: ''
  },
  {
    id: 9,
    name: 'Лучший день',
    price: 167.000,
    old_price: 0,
    images: [ product_10 ],
    category: [ categories[9] ],
    light: [ lights[9] ],
    color: [ colors[9] ],
    format: formats[9],
    flowers: [ flowers[9] ],
    popular: false,
    new: false,
    sale: false,
    description: ''
  },
  {
    id: 10,
    name: 'Лучший день',
    price: 167.000,
    old_price: 187.000,
    images: [ product_11 ],
    category: [ categories[10] ],
    light: [ lights[10] ],
    color: [ colors[10] ],
    format: formats[10],
    flowers: [ flowers[10] ],
    popular: false,
    new: false,
    sale: true,
    description: ''
  },
  {
    id: 11,
    name: 'Лучший день',
    price: 167.000,
    old_price: 0,
    images: [ product_11 ],
    category: [ categories[11] ],
    light: [ lights[11] ],
    color: [ colors[11] ],
    format: formats[11],
    flowers: [ flowers[11] ],
    popular: false,
    new: false,
    sale: false,
    description: ''
  },
]