import React from 'react'

const Press = () => {
    return (
        <div className="text-center bg-gray-50 py-16">
            <h1 className="text-2xl py-5">Articles</h1>
            <div className="flex justify-center">
                <a href="/"><div className="border rounded border-indigo-300 px-5 py-3 mx-2 bg-white hover:bg-gray-200 text-sm">Medium: How to DenoAuth</div></a>
                <a href="/"><div className="border rounded border-indigo-300 px-5 py-3 mx-2 bg-white hover:bg-gray-200 text-sm">ProductHunt: Denoauth stuff</div></a>
            </div>
        </div>
    )
}


export default Press;