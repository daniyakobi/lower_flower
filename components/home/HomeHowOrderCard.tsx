import * as React from 'react'
import { HomeHowOrderCard} from '../../types/interfaces'

import h_how_order_styles from '../../styles/components/HomeHowOrder.module.scss'

const HomeHowOrderCard: React.FC<HomeHowOrderCard> = ({ item }) => {
  return(
    <div className={ h_how_order_styles.home_how_order__list_item }>
      <h3>{ item.step } шаг</h3>
      <p>{ item.text }</p>
    </div>
  )
}

export default HomeHowOrderCard