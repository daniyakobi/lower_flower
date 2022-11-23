import type { NextPage } from 'next'
import CatalogMain from '../components/catalog/CatalogMain'
import CatalogList from '../components/catalog/CatalogList'
import MainContainer from '../components/containers/MainContainer'

import catalog_styles from '../styles/pages/Catalog.module.scss'

const Catalog: NextPage = () => {
  return (
    <MainContainer keywords='catalog page' classes={ catalog_styles.catalog }>
      <CatalogMain />
      <CatalogList />
    </MainContainer>
  )
}

export default Catalog