import React from 'react';
import Navbar from '../components/Navbar';
import Installation from '../components/Documentation/Installation';
import LinkedIn from '../components/Documentation/LinkedIn';
import Github from '../components/Documentation/Github';
import Google from '../components/Documentation/Google';
import Divider from '../components/Divider';

const Docs = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-gradient-to-r from-indigo-200 py-32">
            <h1 className="text-center text-4xl font-light py-5">Documentation</h1>
            <p className="text-center text-gray-500 font-light">A step by step implentation of DenoAuth in your application</p>
            </div>
            <Installation />
            <Divider />
            <div className="text-center md:text-left px-2 md:pl-20  py-10 bg-gray-50">
                <h1 className="text-2xl text-gray-600 font-light py-5">Implementation of different strategies</h1>
                <LinkedIn />
                <Github />
                <Google/>
            </div>
            <Divider />
        </div>
    )
}


export default Docs;