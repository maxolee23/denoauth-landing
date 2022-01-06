import React from 'react';
import Image from 'next/image';
import installation from '../../public/images/installation.png';

const Installation = () => {
    return (
        <div className="text-center md:text-left px-2 md:pl-20 py-10 bg-gray-50">
            <h1 className="text-2xl font-light text-gray-600">Installation</h1>
            <li className="text-left pl-2 pt-5">Make sure you have Deno installed on your machine. If not, you can install Deno <a className="text-indigo-500" href="https://deno.land/manual/getting_started/installation">here</a></li>
            <li className="text-left pl-2 pb-5">Import (your strategy of choice) from <a className="text-indigo-500" href="https://deno.land/x/denoauth@v1.0.2">https://deno.land/x/denoauth@v1.0.2</a> </li>
            <Image src={installation} alt="installation" width={600} height={25} className="rounded"/>
        </div>
    )
}


export default Installation;