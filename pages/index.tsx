import type { NextPage } from 'next'
import MainContainer from '../components/containers/MainContainer'
import HomeMain from '../components/home/HomeMain'
import HomeCatalog from '../components/home/HomeCatalog'
import HomePopular from '../components/home/HomePopular'
import HomeHowOrder from '../components/home/HomeHowOrder'
import HomeOffer from '../components/home/HomeOffer'
import HomeQuestion from '../components/home/HomeQuestion'
import HomeSocials from '../components/home/HomeSocials'

import home_styles from '../styles/pages/Home.module.scss'

const Home: NextPage = () => {
  return (
    <MainContainer keywords='main page' classes={ home_styles.home }>
      <HomeMain />
      <HomeCatalog />
      <HomePopular />
      <HomeHowOrder />
      <HomeOffer />
      <HomeQuestion />
      <HomeSocials />
    </MainContainer>
  )
}

export default Home
