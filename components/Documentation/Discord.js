import React from 'react';
import Image from 'next/image';
import DiscordSnip from '../../public/images/DiscordSnip.png';
import Discordlink from '../../public/images/Dicreatelink.png';
import Diprocess from '../../public/images/Diprocess.png';
// import {FaLinkedin} from 'react-icons/fa';

const Discord = () => {
    return (
        <div className="pt-5" id="discord">
            
            <h1 className=" text-3xl font-light">Discord</h1>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 1:</strong> Initialize a new object for Discord client</h3>
            <Image src={DiscordSnip} alt="Discord" className="rounded"/>
            <h3 className="text-medium font-light text-black-500 py-5"><strong className="text-black">Step 2:</strong> Use our createLink function to redirect the user to a page to enter their Discord credentials for authorization.</h3>
            <Image src={Discordlink} alt="Create Link" className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 3:</strong> Call our processAuth function, entering the current url as a parameter. This will extract the current code, exchanging the code for a bearer token. The function then exchanges the token for the information about the user provided from the third party API.</h3>
            <Image src={Diprocess} alt="Process Auth" className="rounded" />
            
        </div>
    )
}

export default Discord;