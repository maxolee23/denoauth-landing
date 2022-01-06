import React from 'react'

const Hero = () => {
    return (
        <div className="pt-36 pb-16 my-30 text-center h-fit bg-gradient-to-r from-orange-100">
            <h1 className="text-xl md:text-4xl font-light text-violet-900 ">Simple, secure authentication in Deno.</h1>
            <h3 className="text-xs px-20 md:text-sm font-light text-slate-800">DenOAuth is an Open-Source library for Deno. It allows clients to implement OAuth 2.0 in Deno applications.</h3>
            <div className="mt-20">
            <button type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-violet-400 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
      >
        Documentation
      </button>
      <button
        type="button"
        className="inline-flex items-center px-8 py-2 border border-gray-200 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
      >
        Github
      </button>
            </div>
        </div>
    )
}

export default Hero;