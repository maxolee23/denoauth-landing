import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Press from '../components/Press';
import Strategies from '../components/Strategies';

function Home () {
    return (
        <div>
            <Navbar />
            <Hero />
            <Strategies />
            <Press />
        </div>
    )
}

export default Home;