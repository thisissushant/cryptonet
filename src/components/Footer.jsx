import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-purple-100 py-6 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <h1 className="text-black font-bold text-xl">
            Cryptonet Technologies Private Limited
          </h1>
        </div>
        <div className="mt-4 flex justify-center">
          {/* Add your footer links or additional content here */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
