import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'

const Strategies = () => {
    return (
        <div className="text-center my-20">
            <h1 className="text-3xl py-5">Strategies</h1>
            <div className="flex justify-center">
                <div>
                <FaLinkedin className="mx-10 w-14 h-14 text-[#0e76a8]"/>
                <h1 className="text-sm">Linkedin</h1>
                </div>
                <div>
                <FaGithub className="mx-10 w-14 h-14" />
                <h1 className="text-sm">Github</h1>
                </div>
                <div>
                <FcGoogle className="mx-10 w-14 h-14"/>
                <h1 className="text-sm">Google</h1>
                </div>
            </div>
        </div>
    )
}


export default Strategies;