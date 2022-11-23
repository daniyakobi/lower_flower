import * as React from 'react'
import Link from 'next/link'
import { HomeCatalogCard } from '../../types/interfaces'

import h_catalog_styles from '../../styles/components/HomeCatalog.module.scss'

const HomeCatalogCard: React.FC<HomeCatalogCard> = ({ title, classes, list, link, before }) => {
  return(
    <div className={ `${ h_catalog_styles.home_catalog__card } ${ classes }` }>
      <h3 className={ h_catalog_styles.home_catalog__card_title }>{ title }</h3>
      <ul className={ h_catalog_styles.home_catalog__card_list }>
        {
          list.map(item => {
            return (
              <li key={ item.id }>
                <Link href={ item.link }>
                  <a>
                    <span></span>
                    { item.title }
                  </a>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Link href={ link }>
        <a className={ h_catalog_styles.home_catalog__card_link }>смотреть каталог</a>
      </Link>
      <div className={ h_catalog_styles.home_catalog__card_before }>{ before }</div>
    </div>
  )
}

export default HomeCatalogCard