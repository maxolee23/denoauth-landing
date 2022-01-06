import React from 'react';
import Image from 'next/image';
import LinkedinSnip from '../../public/LinkedinSnip.png';
import Licreatelink from '../../public/licreatelink.png';
import Liprocess from '../../public/Liprocess.png';
// import {FaLinkedin} from 'react-icons/fa';

const LinkedIn = () => {
    return (
        <div className="pt-5" id="linkedin">
            
            <h1 className=" text-3xl font-light">LinkedIn</h1>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 1:</strong> Initialize a new object for LinkedIn client</h3>
            <Image src={LinkedinSnip} className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 2:</strong> Use our createLink function to redirect the user to a page to enter their LinkedIn credentials for authorization.</h3>
            <Image src={Licreatelink} className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 3:</strong> Call our processAuth function, entering the current url as a parameter. This will extract the current code, exchanging the code for a bearer token. The function then exchanges the token for the information about the user provided from the third party API.</h3>
            <Image src={Liprocess} className="rounded" />
            
        </div>
    )
}

export default LinkedIn;