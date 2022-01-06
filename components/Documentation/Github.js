import React from 'react';
import Image from 'next/image';
import GithubSnip from '../../public/images/GithubSnip.png';
import Ghcreatelink from '../../public/images/Ghcreatelink.png';
import Ghprocess from '../../public/images/Ghprocess.png';
// import {FaLinkedin} from 'react-icons/fa';

const Github = () => {
    return (
        <div className="pt-10" id="github">
            
            <h1 className=" text-3xl font-light">Github</h1>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 1:</strong> Initialize a new object for Github client</h3>
            <Image src={GithubSnip} className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 2:</strong> Use our createLink function to redirect the user to a page to enter their Github credentials for authorization.</h3>
            <Image src={Ghcreatelink} className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 3:</strong> Call our processAuth function, entering the current url as a parameter. This will extract the current code, exchanging the code for a bearer token. The function then exchanges the token for the information about the user provided from the third party API.</h3>
            <Image src={Ghprocess} className="rounded" />
            
        </div>
    )
}

export default Github;