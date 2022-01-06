import React from 'react';
import {FaMedium, FaProductHunt} from 'react-icons/fa';
import Link from 'next/link'

const Press = () => {
    return (
        <div className="text-center bg-gray-50 py-16">
            <h1 className="text-2xl py-5">Articles</h1>
            <div className="flex justify-center">
                <Link href="https://medium.com/@dannguyen1191/denoauth-solution-deno-oauth-2-0-54d3b6a4ef35" passHref><a target="_blank" rel="noreferrer"><div className="border rounded border-indigo-300 px-5 py-3 mx-2 bg-white hover:bg-gray-200 text-xs flex"><FaMedium className="w-5 h-5" /><p className="px-2 pt-1">DenOAuth: solution = Deno + OAuth 2.0</p></div></a></Link>
                <div className="border rounded border-indigo-300 px-5 py-3 mx-2 bg-white hover:bg-gray-200 text-xs flex"><FaProductHunt className="w-5 h-5" /><p className="px-2 pt-1 text-xs lg:text-sm">ProductHunt: Coming soon</p></div>
            </div>
        </div>
    )
}


export default Press;