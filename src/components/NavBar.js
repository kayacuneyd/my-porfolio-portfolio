import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-700">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-yellow-600 text-4xl font-bold cursive tracking-widest"
          >
            Cüneyt Kaya
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-500 hover:text-white"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            activeClassName="text-white bg-yellow-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-500 hover:text-white"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            activeClassName="text-white bg-yellow-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-500 hover:text-white"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            activeClassName="text-white bg-yellow-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/cueneytkaya"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/kayacueneyt/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/kayacuneyd2019/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
