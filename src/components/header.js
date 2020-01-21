import React, { useState } from "react"
import { Link } from "gatsby"

//CSS
import classes from "../styles/header.module.css"
//image
import img from "../images/home/logo.png"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img src={img} alt="logo" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <Link
            to={`/`}
            href="#responsive-header"
            className="block mt-4 px-4 leading-none lg:inline-block lg:mt-0 text-gray-600 text-1xl font-mono hover:text-gray-900 mr-4"
            activeClassName={classes.activeNavItem}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to={`/about`}
            href="#responsive-header"
            className="block mt-4 px-4 leading-none lg:inline-block lg:mt-0 text-gray-600 text-1xl font-mono hover:text-gray-900 mr-4"
            activeClassName={classes.activeNavItem}
          >
            About Community
          </Link>
        </div>
        <div>
          <Link
            to={`/projects`}
            className="block mt-4 px-4 leading-none lg:inline-block lg:mt-0 text-gray-600 text-1xl font-mono hover:text-gray-900 mr-4"
            activeClassName={classes.activeNavItem}
          >
            Project & Resources
          </Link>
        </div>
        <div>
          <Link
            to={`/events`}
            className="block mt-4 px-4 leading-none lg:inline-block lg:mt-0 text-gray-600 text-1xl font-mono hover:text-gray-900 mr-4"
            activeClassName={classes.activeNavItem}
          >
            Events
          </Link>
        </div>
        <div>
          <Link
            to={`/joinus`}
            className="block mt-4 px-4 leading-none lg:inline-block lg:mt-0 text-gray-600 text-1xl font-mono hover:text-green-600 mr-4"
            activeClassName={classes.activeNavItem}
          >
            Join Community
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
