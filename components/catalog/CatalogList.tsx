import * as React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Select from '../default/Select'
import { CatalogTopSelect } from '../../types/interfaces'

import c_list_styles from '../../styles/components/CatalogList.module.scss'

const CatalogList = () => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(0)

  const showSelect = () => {
    setShow(!show)
  }

  const handleSelect = (e: any) => {
    setActive(e.target.dataset.id ? e.target.dataset.id : e.target.parentElement.dataset.id)
    setShow(false)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      document.body.style.cssText = `--scrollTop: ${ window.scrollY }px`
    })
  }, [])

  const selectList: CatalogTopSelect[] = [
    { id: 0, title: 'По популярности' },
    { id: 1, title: 'По убыванию цены' },
    { id: 2, title: 'По возрастанию цены' }    
  ]

  return (
    <div className={ c_list_styles.catalog_list }>
      <div className={ `container ${ c_list_styles.container }` }>
        <div className={ c_list_styles.catalog_list__top }>
          <Select 
            classes={ c_list_styles.catalog_list__select } 
            show={ show }
            active={ active }
            list={ selectList }
            showItems={ showSelect }
            handler={ handleSelect }
          />
        </div>
        <div className={ c_list_styles.catalog_list__content }>
          
        </div>
      </div>
    </div>
  )
}

export default CatalogList