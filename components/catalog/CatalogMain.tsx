import * as React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '../default/Breadcrunbs'

import { categories } from '../../data/data'

import c_main_styles from '../../styles/components/CatalogMain.module.scss'
import flower from '../../public/catalog/main_flower.png'
import purple_tr from '../../public/catalog/main_purple_tr.png'
import purple_cl from '../../public/catalog/main_purple_cl.png'

const CatalogMain = () => {
  
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      document.body.style.cssText = `--scrollTop: ${ window.scrollY }px`
    })
  }, [])

  return (
    <div className={ c_main_styles.catalog_main }>
      <div className={ `container ${ c_main_styles.container }` }>
        <Breadcrumbs classes={ c_main_styles.catalog_main__breadcrumbs } />
        <div className={ c_main_styles.catalog_main__content }>
          <h1 className={ c_main_styles.catalog_main__title }>
            <div className={ c_main_styles.catalog_main__title_top }>
              Каталог
            </div>
            <div className={ c_main_styles.catalog_main__title_bottom }>
              букетов
            </div>
          </h1>
          <p className={ c_main_styles.catalog_main__text }>В нашем магазине самый большой выбор букетов для любых событий:</p>
          <div className={ c_main_styles.catalog_main__categories }>
            {
              categories.map((item) => {
                return(
                  <Link href={ `/catalog/${ item.id }` } key={ item.id }>
                    <a className={ c_main_styles.catalog_main__categories_item }>
                      { item.name }
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className={ c_main_styles.catalog_main__flower_left }>
        <Image src={ flower } layout='fill' />
      </div>
      <div className={ c_main_styles.catalog_main__flower_right }>
        <Image src={ flower } layout='fill' />
      </div>
      <div className={ c_main_styles.catalog_main__purple_tr }>
        <Image src={ purple_tr } layout='fill' />
      </div>
      <div className={ c_main_styles.catalog_main__purple_cl }>
        <Image src={ purple_cl } layout='fill' />
      </div>
    </div>
  )
}

export default CatalogMain