import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc, image, link }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="h-full flex flex-col justify-between bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <a href={link}>
        <img
          className="rounded-t-lg w-full object-cover h-48"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-5 flex flex-col justify-between flex-grow h-full">
        <div>
          <a href={link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
        </div>
        <a
          href={link}
            className="w-fit inline-flex items-center gap-1 py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
