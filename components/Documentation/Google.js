import React from 'react';
import Image from 'next/image';
import Googlesnip from '../../public/Googlesnip.png';
import Googlecl from '../../public/Googlecl.png';
import Googlepo from '../../public/Googlepo.png';
// import {FaLinkedin} from 'react-icons/fa';

const Google = () => {
    return (
        <div className="py-10">
            
            <h1 className=" text-3xl font-light">Google</h1>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 1:</strong> Initialize a new object for Google client</h3>
            <Image src={Googlesnip} className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 2:</strong> Use our createLink function to redirect the user to a page to enter their Google credentials for authorization.</h3>
            <Image src={Googlecl} className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 3:</strong> Call our processAuth function, entering the current url as a parameter. This will extract the current code, exchanging the code for a bearer token. The function then exchanges the token for the information about the user provided from the third party API.</h3>
            <Image src={Googlepo} className="rounded" />
            
        </div>
    )
}

export default Google;