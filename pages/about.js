import React from 'react';
import Navbar from '../components/Navbar';
import Team from '../components/About/Team';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="text-center pt-10 bg-gradient-to-r from-red-200 py-32">
                <h1 className="text-4xl font-light">About DenoAuth</h1>
                <p className="text-left text-sm text-gray-600 pt-16 px-20 lg:text-center">DenOAuth is an open-source library made for implementing authentication through third party APIs in Deno applications. DenOAuth attempts to create middleware that can be utilized in any type of application without relience on other third party modules. It is currently available with apps running on Oak (recommended), ABC, Pogo, and Opine application frameworks.</p>
            </div>
            <Team />
            <Footer />
        </div>
    )
}

export default About;