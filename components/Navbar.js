import Image from 'next/image';
import Denoauth from '../public/Denoauth.png';
import { useRouter} from 'next/router';
import {FaGithub} from 'react-icons/fa';
import {SiDeno} from 'react-icons/si'

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const Router = useRouter()
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky top-0">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                
                  <a href="/" className="px-20"><Image src={Denoauth} height="39" width="180" alt="logo" /></a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className={Router.pathname === "/" ? 'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium':'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}
                  >
                    Home
                  </a>
                  <a
                    href="/docs"
                    className={Router.pathname === "/docs" ? 'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium':'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}
                  >
                    Docs
                  </a>
                  <a
                    href="/about"
                    className={Router.pathname === "/about" ? 'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium':'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}
                  >
                    About
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/oslabs-beta/DenOAuth"
                    className="border-transparent text-gray-500  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    <FaGithub className="w-5 h-5"/>
                  </a>
                  <a
                    target="_blank"
                    href="https://deno.land/x/denoauth@v1.0.2"
                    className="border-transparent text-gray-500  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    <SiDeno className="w-5 h-5"/>
                  </a>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={Router.pathname === "/" ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/docs"
                className={Router.pathname === "/docs" ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"}
              >
                Docs
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className={Router.pathname === "/about" ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"}
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                target="_blank"
                href="https://github.com/oslabs-beta/DenOAuth"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <FaGithub className="w-5 h-5"/>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                target="_blank"
                href="https://deno.land/x/denoauth@v1.0.2"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <SiDeno className="w-5 h-5"/>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}