import React from 'react';
import { HalfCircleSpinner } from 'react-epic-spinners/dist/react-epic-spinners.cjs';

const ProjectList = ({ name, banner, link }) => (
  <div className="rounded overflow-hidden dark:bg-gray-800 shadow hover:shadow-lg border-box">
    <div className="relative h-64 sm:h-48">
      <div className="absolute flex items-center w-full h-full bg-gray-600">
        <div className="flex-1 text-center w-1">
          <div>
            <HalfCircleSpinner
              className="inline-block"
              animationDelay="1000"
              size={30}
              color="#ffff"
            />
          </div>
        </div>
        <img
          className="w-full h-full object-contain absolute"
          alt="test"
          src={banner}
        />
      </div>
    </div>
    <div className="text-sm dark:text-white sm:text-md mt-3 pr-3 pl-3">
      Project Name : {name}
    </div>
    <div className="px-3">
      <a href={link}>
        <button className="w-full bg-teal-500 hover:bg-teal-700 text-sm text-white py-2 rounded mt-3 mb-3 border-box">
          Open project
        </button>
      </a>
    </div>
  </div>
);

export default ProjectList;
