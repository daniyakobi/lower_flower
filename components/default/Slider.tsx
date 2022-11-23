import * as React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Image from 'next/image';
import Link from 'next/link';
import { Slider } from '../../types/interfaces'

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

const Slider: React.FC<Slider> = ({ slides, slidesView, classes, pagination, type, autoplay, gap }) => {
  return(
    <Splide className={ `splide ${ classes.main }` } hasTrack={ false }
      options={
        {
          type: 'fade',
          perPage: 1,
          autoplay: autoplay,
          perMove: 1,
          direction: 'ltr'
        }
      }>
      <SplideTrack className={ `splide__track ${ classes.track }` }>
        {
          slides.map((item) => {
            return(
              <SplideSlide key={ item.id } className={ `splide__slide ${ classes.slide }` }>
                { item.tag !== '' ? <div className={ classes.tag }>{ item.tag }</div> : <></> }
                <Image src={ item.img } width={ 350 } height={ 450 } />
                <Link href={ item.link }><a className={ classes.title }>{ item.title }</a></Link>
                <div className={ classes.price }>{ item.price } ₽</div>
                <button>В корзину</button>
              </SplideSlide>
            )
          })
        }
      </SplideTrack>

      <div className={ `splide__arrows ${ classes.arrows }` }>
        <button className="splide__arrow splide__arrow--prev">
          <svg width="80" height="6" viewBox="0 0 80 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 3L75 0.113249V5.88675L80 3ZM0 3.5L75.5 3.5V2.5L0 2.5L0 3.5Z" fill="#43FFD2"/>
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--next">
          <svg width="80" height="6" viewBox="0 0 80 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 3L75 0.113249V5.88675L80 3ZM0 3.5L75.5 3.5V2.5L0 2.5L0 3.5Z" fill="#43FFD2"/>
          </svg>
        </button>
      </div>
    </Splide>
  )
}

export default Slider