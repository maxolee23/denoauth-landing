import React from 'react';
import Image from 'next/image';
import Spotifysnip from '../../public/images/Spotifysnip.png';
import Spotifycl from '../../public/images/Spotifycl.png';
import Spotifypo from '../../public/images/Spotifypo.png';

const Spotify = () => {
    return (
        <div className="pt-5" id="spotify">
            
            <h1 className=" text-3xl font-light">Spotify</h1>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 1:</strong> Initialize a new object for Spotify client</h3>
            <Image src={Spotifysnip} className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 2:</strong> Use our createLink function to redirect the user to a page to enter their Spotify credentials for authorization.</h3>
            <Image src={Spotifycl} className="rounded"/>
            <h3 className="text-medium font-light text-gray-500 py-5"><strong className="text-black">Step 3:</strong> Call our processAuth function, entering the current url as a parameter. This will extract the current code, exchanging the code for a bearer token. The function then exchanges the token for the information about the user provided from the third party API.</h3>
            <Image src={Spotifypo} className="rounded" />
            
        </div>
    )
}

export default Spotify;