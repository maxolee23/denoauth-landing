import React from 'react';
import {FaMedium} from 'react-icons/fa'

const Press = () => {
    return (
        <div className="text-center bg-gray-50 py-16">
            <h1 className="text-2xl py-5">Articles</h1>
            <div className="flex justify-center">
                <a href="/"><div className="border rounded border-indigo-300 px-5 py-3 mx-2 bg-white hover:bg-gray-200 text-xs flex"><FaMedium className="w-5 h-5" /><p className="px-2 pt-1">Medium: How to DenOAuth</p></div></a>
                <a href="/"><div className="border rounded border-indigo-300 px-5 py-3 mx-2 bg-white hover:bg-gray-200 text-sm">ProductHunt: DenOAuth stuff</div></a>
            </div>
        </div>
    )
}


export default Press;