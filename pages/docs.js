import React from 'react';
import Navbar from '../components/Navbar';
import Installation from '../components/Documentation/Installation';
import LinkedIn from '../components/Documentation/LinkedIn';
import Github from '../components/Documentation/Github';
import Google from '../components/Documentation/Google';
import Discord from '../components/Documentation/Discord';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Spotify from '../components/Documentation/Spotify';

const Docs = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-gradient-to-r from-indigo-200 py-32">
            <h1 className="text-center text-4xl font-light py-5">Documentation</h1>
            <p className="text-center text-gray-500 font-light">A step by step implentation of DenOAuth in your application</p>
            </div>
            <Installation />
            <Divider />
            <div className="text-center md:text-left px-2 md:pl-20  py-5 bg-gray-50">
                <h1 className="text-2xl text-gray-600 font-light py-5">Implementation of different strategies</h1>
                <LinkedIn />
                <Github />
                <Google/>
                <Spotify />
                <Discord />
            </div>
            <Divider />
            <Footer />
        </div>
    )
}


export default Docs;