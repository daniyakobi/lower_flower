import * as React from 'react'
import { Select } from '../../types/interfaces'

import select_styles from '../../styles/components/Select.module.scss'

const Select: React.FC<Select> = ({ classes, show, active, list, showItems, handler }) => {
  return (
    <div className={ `${ select_styles.select } ${ classes }` }>
      {
        list.map((item) => {
          if(item.id == active) {
            return (
              <div className={ `${ select_styles.select__item } ${ show ? select_styles.active : '' }` } onClick={ showItems } key={ item.id }>
                { item.title }
              </div>
            )
          }
        })
      }
      {
        show ?
          <div className={ select_styles.select__items}>
            {
              list.map((item) => {
                if(item.id != active) {
                  return (
                    <div className={ select_styles.select__item } onClick={ handler } data-id={ item.id } key={ item.id }>
                      { item.title }
                    </div>
                  )
                }
              })
            }
          </div> : <></>
      }
      <div className={ `${ select_styles.select__arrow } ${ show ? select_styles.active : '' }` }>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.58891 9.7845C5.63478 9.85112 5.69615 9.90559 5.76775 9.94323C5.83935 9.98086 5.91902 10.0005 5.99991 10.0005C6.08079 10.0005 6.16046 9.98086 6.23206 9.94323C6.30366 9.90559 6.36504 9.85112 6.41091 9.7845L10.9109 3.2845C10.963 3.20953 10.9935 3.12172 10.9992 3.0306C11.0049 2.93949 10.9855 2.84856 10.9432 2.7677C10.9008 2.68683 10.8371 2.61912 10.7589 2.57193C10.6808 2.52473 10.5912 2.49986 10.4999 2.5H1.49991C1.40883 2.50038 1.31958 2.52557 1.24175 2.57288C1.16392 2.62019 1.10046 2.68782 1.05819 2.7685C1.01592 2.84917 0.99645 2.93985 1.00186 3.03077C1.00727 3.12168 1.03737 3.20941 1.08891 3.2845L5.58891 9.7845Z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

export default Select