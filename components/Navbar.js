import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar({ blok, locale, locales, defaultLocale }) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const changeLocale = (loc) => {
    router.push(router.pathname, router.pathname, { locale: loc });
  };

  console.log(locale);

  console.log(blok.link1);
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-orange-500
      max-w-full
    "
    >
      <div
        className="container mx-auto
        sm:px-10
      "
      >
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-white font-bold text-2xl">{blok.logo}</a>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/about">
              <a className="text-white  text-l ">{blok.link1}</a>
            </Link>
            <Link href="/contact">
              <a className="text-white  text-l ml-4">{blok.link2}</a>
            </Link>
            <Link href="/blog">
              <a className="text-white  text-l ml-4">{blok.link3}</a>
            </Link>
            <Link href="/blog">
              <a className="text-white  text-l ml-4">{blok.link4}</a>
            </Link>
            <Link href="/blog">
              <a className="text-white  text-l ml-4">{blok.link5}</a>
            </Link>
            <Link href="/blog">
              <a className="text-white  text-l ml-4">{blok.link6}</a>
            </Link>
          </div>
          <div>
            <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded mr-4">
              Contact
            </button>

            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  current lang
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    lang1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    lang2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
