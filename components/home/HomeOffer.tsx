import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import h_offer_styles from '../../styles/components/HomeOffer.module.scss'
import offer_1 from '../../public/main/offer_1.jpg'
import offer_2 from '../../public/main/offer_2.jpg'
import offer_3 from '../../public/main/offer_3.jpg'
import offer_4 from '../../public/main/offer_4.jpg'

const HomeOffer = () => {
  return(
    <div className={ h_offer_styles.home_offer }>
      <div className={ `container ${ h_offer_styles.container }` }>
        <h2 className={ h_offer_styles.home_offer__title }>
          <div>особенный</div>
          <div>повод?</div>
          <div className={ h_offer_styles.home_offer__title_line }></div>
        </h2>
        <div className={ `${ h_offer_styles.home_offer__image } ${ h_offer_styles.home_offer__image_first }` }>
          <Image src={ offer_1 } layout='fill' />
        </div>
        <div className={ h_offer_styles.home_offer__text }>
          <p>Мы готовы прийти на помощь и собрать уникальный букет, на любой вкус, бюджет и для любого события по вашему индивидуальному заказу.</p>
          <ul>
            <li>учтем даже самые изысканные пожелания;</li>
            <li>подберем свежайшие цветы и сделаем уникальный букет или композицию;</li>
            <li>оплатить можно при получении или онлайн на сайте</li>
          </ul>
          <div className={ h_offer_styles.home_offer__text_arrow }>
            <svg width="11" height="61" viewBox="0 0 11 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.09795 59.6018L9.5181 59.3308L9.5181 59.3308L9.09795 59.6018ZM10 61L9.71509 55.2335L4.86364 58.3635L10 61ZM9.58839 0.716134C-2.63574 18.4411 -2.99499 41.7801 8.6778 59.8729L9.5181 59.3308C-1.93569 41.5774 -1.58318 18.6763 10.4116 1.28387L9.58839 0.716134Z" fill="#43FFD2"/>
            </svg>
          </div>
          <Link href="/">
            <a className={ h_offer_styles.home_offer__text_link }>
              собрать индивидуальный букет
            </a>
          </Link>
        </div>
        <div className={ h_offer_styles.home_offer__image }>
          <Image src={ offer_2 } layout='fill' />
        </div>
        <div className={ `${ h_offer_styles.home_offer__image } ${ h_offer_styles.home_offer__image_third }` }>
          <Image src={ offer_3 } layout='fill' />
        </div>
        <div className={ h_offer_styles.home_offer__image }>
          <Image src={ offer_4 } layout='fill' />
        </div>
      </div>
      <svg className={ h_offer_styles.home_offer__purple } width="828" height="900" viewBox="0 0 828 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_1_23)">
          <path d="M562.127 491.246C523.706 550.8 435.621 690.35 353.262 637.217C270.903 584.083 225.458 358.388 263.879 298.833C302.301 239.279 400.212 234.073 482.571 287.206C564.93 340.339 600.549 431.691 562.127 491.246Z" fill="#7D2253"/>
        </g>
        <defs>
          <filter id="filter0_f_1_23" x="0.0517578" y="0.526367" width="827.544" height="898.525" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_23"/>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default HomeOffer