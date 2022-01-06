import React from 'react';
import Image from 'next/image';
import denoauthfull from '../public/images/denoauthfull.png';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {SiDeno} from 'react-icons/si';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-5 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 pt-5 flex justify-center">
              <Link href="https://github.com/oslabs-beta/DenOAuth"><a target="_blank" rel="noreferrer" className="text-base text-gray-500 hover:text-gray-900 px-2">
                <FaGithub className="w-5 h-5"/>
              </a>
              </Link>
              <Link href="https://www.linkedin.com/company/denoauth">
              <a target="_blank" rel="noreferrer" className="text-base text-gray-500 hover:text-gray-900 px-2">
                <FaLinkedin className="w-5 h-5"/>
              </a>
              </Link>
              <Link href="https://deno.land/x/denoauth@v1.0.4">
              <a target="_blank" rel="noreferrer" className="text-base text-gray-500 hover:text-gray-900 px-2">
                <SiDeno  className="w-5 h-5"/>
              </a>
              </Link>
            </div>
        </nav>
        <div className="mt-2 flex justify-center space-x-6">
          <Image src={denoauthfull} alt="logo"height={100} width={225}/>
        </div>
      </div>
    </footer>
    )
}

export default Footer;
