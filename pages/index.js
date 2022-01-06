import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import Press from '../components/Home/Press';
import Strategies from '../components/Home/Strategies';
import Footer from '../components/Footer';

function Home () {

    // console.log(activeLink)

    return (
        <div>
            <Navbar/>
            <Hero />
            <Strategies />
            <Press />
            <Footer />
        </div>
    )
}

export default Home;