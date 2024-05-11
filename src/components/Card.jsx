import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/", {
          params: {
            seed: "abc",
            results: 1,
          },
        });
        setUser(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const { name, location, email, login, dob, phone, cell, picture } = user;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden flex mt-40">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <img
          className="w-30 h-30 rounded-full mx-auto mt-16 "
          src={picture.large}
          alt={`${name.first} ${name.last}`}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-xl text-center text-pink-600 font-bold my-2">
          {name.title} {name.first} {name.last}
        </h2>
        <div className="flex items-center mb-2">
          <svg
            className="w-6 h-6 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-gray-700 font-semibold">
            {location.street.number} {location.street.name}, {location.city},{" "}
            {location.state}, {location.country} {location.postcode}
          </span>
        </div>
        <div className="flex items-center mb-2">
          <svg
            className="w-6 h-6 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-gray-700 font-semibold">{email}</span>
        </div>
        <div className="flex items-center mb-2">
          <svg
            className="w-6 h-6 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-gray-700 font-semibold">
            Age: {dob.age} years
          </span>
        </div>
        <div className="flex items-center mb-2">
          <svg
            className="w-6 h-6 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-gray-700 font-semibold">
            Phone: {phone} / {cell}
          </span>
        </div>
        <div className="flex items-center mb-2">
          <svg
            className="w-6 h-6 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span className="text-gray-700 font-semibold">
            Login: {login.username}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
