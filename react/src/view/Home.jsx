import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateContext } from '../Contexts/ContextProvider';

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const categories = ['By S/N', 'By Product name', 'By Client'];
  const { currentUser } = useStateContext();

  return (
    <>
      <header></header>
      <main className="flex items-center justify-center flex-col font-mono">
        <div className="max-w-7xl py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-semibold text-gray-900">Bonjour, {currentUser.name}!</h1>
          <p className="text-xl font-extralight text-gray-600 pt-4">Vous Trouvez Vos Reclamations ci-dessous</p>
        </div>

        <form className="max-w-4xl mx-auto px-4 w-full">
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full shadow-md py-3 pl-12 pr-20 text-gray-500 border-none rounded-full outline-none bg-gray-50 focus:bg-white focus:border-sky-700"
            />
            <button
              onClick={(event) => {
                event.preventDefault();
                setDropdownOpen(!dropdownOpen);
              }}
              className="absolute right-0 z-10 drop-shadow-md block rounded-full bg-white p-3 hover:bg-gray-50 focus:outline-none text-xl"
            >
              <span className="sr-only">Open category dropdown</span>
              📚
            </button>
            <button className="absolute right-6 top-1/2 transform -translate-y-1/2 px-4 py-2 pr-10 shadow-sm text-white bg-sky-500 rounded-full hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-700">
              recherche
            </button>

            {dropdownOpen && (
              <div className="absolute top-4 right-0 mt-12 w-64 rounded-md shadow-lg bg-sky-500 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {categories.map((category) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      key={category} // Add a unique key for each item in the map
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </form>
        <button className="absolute bottom-14 right-14 bg-sky-500 hover:bg-sky-700 text-white font-bold py-3 px-5 text-lg rounded-l-full rounded-tr-full inline-flex items-center shadow-md">
          <Link to="/AddClaim" className="flex justify-center items-center">
            <FaIcons.FaPlusCircle className="ml-2 text-xl" />
            <span>Ajouter une Reclamation</span>
          </Link>
        </button>
      </main>
    </>
  );
}

export default Home;
