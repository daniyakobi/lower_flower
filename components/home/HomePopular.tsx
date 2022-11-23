import * as React from 'react'
import Slider from '../default/Slider'
import { SliderSlide } from '../../types/interfaces'
import Link from 'next/link'

import h_popular_styles from '../../styles/components/HomePopular.module.scss'
import first from '../../public/popular/1.png'
import second from '../../public/popular/2.png'
import third from '../../public/popular/3.png'

const HomePopular = () => {
  const slides: SliderSlide[] = [
    { id: 1, title: 'Лучший день', link: '/', price: 167.000, img: first, tag: 'new' },
    { id: 2, title: 'Лучший день', link: '/', price: 167.000, img: second, tag: '' },
    { id: 3, title: 'Лучший день', link: '/', price: 167.000, img: third, tag: 'sale' },
    { id: 4, title: 'Лучший день', link: '/', price: 167.000, img: third, tag: '' }
  ]

  const classes = {
    main: h_popular_styles.home_popular__list,
    slide: h_popular_styles.home_popular__list_card,
    track: h_popular_styles.home_popular__list_track,
    arrows: h_popular_styles.home_popular__list_arrows,
    tag: h_popular_styles.home_popular__list_card_tag,
    title: h_popular_styles.home_popular__list_card_title,
    price: h_popular_styles.home_popular__list_card_price
  }

  return(
    <div className={ h_popular_styles.home_popular }>
      <div className={ `container ${ h_popular_styles.container }`}>
        <h2 className={ h_popular_styles.home_popular__title }>
          <div>Популярные</div>
          <div>букеты</div>
        </h2>
        <div className={ h_popular_styles.home_popular__text }>
          <p>Самые любимые композиции наших клиентов</p>
        </div>
        <Slider classes={ classes } slides={ slides } slidesView={ 3 } pagination={ false } type='loop' autoplay={ true } gap='30px' />
        <Link href='/catalog'>
          <a className={ h_popular_styles.home_popular__link }>
            смотреть весь каталог
            <svg width="40" height="6" viewBox="0 0 40 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="#D978AC"/>
            </svg>
          </a>
        </Link>
      </div>
      <div className={ h_popular_styles.home_popular__green }>
        <svg width="778" height="1391" viewBox="0 0 778 1391" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_21)">
            <path d="M398 1132C346.282 1212.16 398.068 726.653 194 595C-10.0684 463.347 -79.9444 371.315 -28.2269 291.151C23.4907 210.986 230.846 252.726 434.915 384.379C638.983 516.032 449.718 1051.84 398 1132Z" fill="#43FFD2" fill-opacity="0.47"/>
          </g>
          <defs>
            <filter id="filter0_f_1_21" x="-294.605" y="0.395508" width="1072.14" height="1390.48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_21"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div className={ h_popular_styles.home_popular__purple }>
        <svg width="1001" height="1007" viewBox="0 0 1001 1007" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_22)">
            <path d="M739.258 599.799C697.438 664.621 602.278 816.975 469.717 731.455C337.157 645.934 217.394 354.924 259.214 290.102C301.033 225.28 442.396 242.059 574.957 327.58C707.517 413.1 781.077 534.977 739.258 599.799Z" fill="#7D2253"/>
          </g>
          <defs>
            <filter id="filter0_f_1_22" x="0.741211" y="0.63623" width="1000.24" height="1006.24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_22"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default HomePopular