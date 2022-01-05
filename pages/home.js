import Navbar from '../components/Navbar';

function Home () {
    return (
        <div>
            <Navbar />
            <div className="text-center h-full">
            <h1 className="text-2xl items-center">DenoAuth: Authentication in Deno</h1>
            </div>
        </div>
    )
}

export default Home;