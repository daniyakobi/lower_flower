import { StaticImageData } from './types'

// Товар
export interface Product {
  id: number,
  name: string,
  price: number,
  old_price: number,
  images: (string | StaticImageData)[],
  category: Category[],
  light: Light[],
  color: Color[],
  format: Format,
  flowers: Flower[],
  popular: boolean,
  new: boolean,
  sale: boolean,
  description: string
}

// Категория товаров 
export interface Category {
  id: number,
  name: string,
}

// Фильтр по цветку
export interface Flower {
  id: number,
  name: string,
}

// Фильтр по формату
export interface Format {
  id: number,
  name: string,
}

// Фильтр по свету
export interface Light {
  id: number,
  name: string,
}

// Фильтр по цвету
export interface Color {
  id: number,
  name: string,
}

// Слайды
export interface SliderSlide {
  id: number,
  title: string,
  link: string,
  price: number,
  img: string | StaticImageData,
  tag: string
}

// Слайдер
export interface Slider {
  slides: Array<SliderSlide>
  slidesView: number,
  classes: { main: string, track: string, slide: string, arrows: string, tag: string, title: string, price: string },
  pagination: boolean,
  type: string,
  autoplay: boolean,
  gap: string
}

// Категории на главной странице
export interface ListCatalog {
  id: number,
  title: string,
  link: string
}

// Карточка категории на главной странице
export interface HomeCatalogCard {
  title: React.ReactElement | string,
  classes: string,
  list: Array<ListCatalog>,
  link: string,
  before: string
}

// Карточка в блоке "Как сделать заказ"
export interface HomeHowOrderList {
  id: number,
  step: number,
  text: string
}

// Список карточек в блоке "Как сделать заказ"
export interface HomeHowOrderCard {
  item: HomeHowOrderList
}

// Форма
export interface Form {
  classes: {
    form: string,
    group: string,
    input: string,
    textarea: string,
    button: string,
    text: string
  }
}

// Хлебные крошки
export interface Breadcrumbs {
  classes: string
}

// Категории в каталоге
export interface Categories {
  id: number,
  title: string,
  link: string
}

// Селект
export interface Select {
  classes: string,
  show: boolean,
  active: number,
  list: CatalogTopSelect[],
  showItems: () => void,
  handler: () => void
}

// Фильтр в каталоге для селекта
export interface CatalogTopSelect {
  id: number,
  title: string
}