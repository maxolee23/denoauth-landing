import React from 'react';
import {FaLinkedin, FaGithub, FaSpotify} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import Link from 'next/link'

const Strategies = () => {
    return (
        <div className="text-center my-12">
            <h1 className="text-3xl font-extralight py-2">Available Strategies</h1>
            {/* <div className="flex justify-center py-2">
             */}
             <div className="grid grid-cols-2 md:grid-cols-4 py-2">
                <Link href="/docs#linkedin"><a className="justify-self-center py-2">
                <div >
                <FaLinkedin className="mx-10 w-14 h-14 text-[#0e76a8]"/>
                <h1 className="text-sm">Linkedin</h1>
                </div>
                </a>
                </Link>
                <Link href="/docs#github">
                <a className="justify-self-center py-2">
                <div>
                <FaGithub className="mx-10 w-14 h-14" />
                <h1 className="text-sm">Github</h1>
                </div>
                </a>
                </Link>
                <Link href="/docs#google">
                <a  className="justify-self-center py-2">
                <div>
                <FcGoogle className="mx-10 w-14 h-14"/>
                <h1 className="text-sm">Google</h1>
                </div>
                </a>
                </Link>
                <Link  href="/docs#spotify">
                <a className="justify-self-center py-2">
                <div>
                <FaSpotify className="mx-10 w-14 h-14 text-[#1DB954]"/>
                <h1 className="text-sm">Spotify</h1>
                </div>
                </a>
                </Link>
            </div>
        </div>
    )
}


export default Strategies;