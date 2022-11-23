import * as React from 'react'
import HomeCatalogCard from './HomeCatalogCard'
import { ListCatalog } from '../../types/interfaces'

import h_catalog_styles from '../../styles/components/HomeCatalog.module.scss'

const HomeCatalog = () => {
  const first: ListCatalog[] = [
    { id: 1, title: 'Сборные букеты', link: '/' },
    { id: 2, title: 'Монобукеты', link: '/' },
    { id: 3, title: 'Композиции из цветов', link: '/' },
    { id: 4, title: 'Розы', link: '/' },
    { id: 5, title: 'Свадебные', link: '/' }
  ]
  const second: ListCatalog[] = [
    { id: 1, title: 'Букеты', link: '/' },
    { id: 2, title: 'Для интерьера', link: '/' },
    { id: 3, title: 'Композиции', link: '/' }
  ]
  const third: ListCatalog[] = [
    { id: 1, title: 'Шары', link: '/' },
    { id: 2, title: 'Игрушки', link: '/' },
    { id: 3, title: 'Открытки', link: '/' },
    { id: 4, title: 'Упаковка', link: '/' }
  ]

  return(
    <div className={ h_catalog_styles.home_catalog }>
      <div className={ `container ${ h_catalog_styles.container }` }>
        <h2 className={ h_catalog_styles.home_catalog__title }>Каталог</h2>
        <div className={ h_catalog_styles.home_catalog__text }>
          <p>У нас самый большой выбор цветов, букетов, открыток и подарков. Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет определиться с выбором</p>
          <p>Ознакомьтесь с нашими разделами каталога</p>
        </div>
        <HomeCatalogCard title='Цветы' classes={ h_catalog_styles.home_catalog__card_first } list={ first } link='/' before='Цветы' />
        <HomeCatalogCard title={ <>готовые букеты<br />из сухоцветов</> } classes={ h_catalog_styles.home_catalog__card_second } list={ second } link='/' before='Букеты' />
        <HomeCatalogCard title='Дополнительно' classes={ h_catalog_styles.home_catalog__card_third } list={ third } link='/' before='Дополнительно' />
      </div>
      <div className={ h_catalog_styles.home_catalog__green }>
        <svg width="977" height="1010" viewBox="0 0 977 1010" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_55)">
            <ellipse cx="624.707" cy="505.054" rx="439.72" ry="105.527" transform="rotate(32.8278 624.707 505.054)" fill="#43FFD2"/>
          </g>
          <defs>
            <filter id="filter0_f_1_55" x="0.75293" y="0.646973" width="1247.91" height="1008.81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_55"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div className={ h_catalog_styles.home_catalog__purple }>
        <svg width="767" height="933" viewBox="0 0 767 933" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_54)">
            <ellipse cx="212.637" cy="466.308" rx="353.772" ry="118.436" transform="rotate(32.8278 212.637 466.308)" fill="#7D2253"/>
          </g>
          <defs>
            <filter id="filter0_f_1_54" x="-341.558" y="0.192871" width="1108.39" height="932.229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_54"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default HomeCatalog