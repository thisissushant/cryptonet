import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-purple-100 fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-xl">
                Cryptonet Technologies Private Limited
              </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Add your navigation links here */}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Add your mobile menu button here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
