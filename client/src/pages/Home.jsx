import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial '
import NewsLetter from '../components/NewsLetter'
import RecommendedHotels from '../components/RecommendedHotels'

const Home = () => {


    return (
        <>
            <Hero />
            <RecommendedHotels />
            <FeaturedDestination />
            <ExclusiveOffers />
            <Testimonial />
            <NewsLetter/>
        </>
    )
}

export default Home