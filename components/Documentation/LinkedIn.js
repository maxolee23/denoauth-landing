import React from 'react';
import Image from 'next/image';
import LinkedinSnip from '../../public/images/LinkedinSnip.png';
import Licreatelink from '../../public/images/Licreatelink.png';
import Liprocess from '../../public/images/Liprocess.png';
// import {FaLinkedin} from 'react-icons/fa';

const LinkedIn = () => {
    return (
        <div className="pt-5" id="linkedin">
            
            <h1 className=" text-3xl font-light">LinkedIn</h1>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 1:</strong> Initialize a new object for LinkedIn client</h3>
            <Image src={LinkedinSnip} alt="LinkedIn" className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 2:</strong> Use our createLink function to redirect the user to a page to enter their LinkedIn credentials for authorization.</h3>
            <Image src={Licreatelink} alt="Create Link" className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 3:</strong> Call our processAuth function, entering the current url as a parameter. This will extract the current code, exchanging the code for a bearer token. The function then exchanges the token for the information about the user provided from the third party API.</h3>
            <Image src={Liprocess} alt="Process Auth" className="rounded" />
            
        </div>
    )
}

export default LinkedIn;