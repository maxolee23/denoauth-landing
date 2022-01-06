import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'

const Strategies = () => {
    return (
        <div className="text-center my-12">
            <h1 className="text-3xl font-light py-2">Strategies</h1>
            <div className="flex justify-center py-2">
                <a href="docs/#linkedin"><div>
                <FaLinkedin className="mx-10 w-14 h-14 text-[#0e76a8]"/>
                <h1 className="text-sm">Linkedin</h1>
                </div>
                </a>
                
                <a href="docs/#github">
                <div>
                <FaGithub className="mx-10 w-14 h-14" />
                <h1 className="text-sm">Github</h1>
                </div>
                </a>
                <a href="docs/#google">
                <div>
                <FcGoogle className="mx-10 w-14 h-14"/>
                <h1 className="text-sm">Google</h1>
                </div>
                </a>
            </div>
        </div>
    )
}


export default Strategies;