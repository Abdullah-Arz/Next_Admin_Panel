import React from 'react'

function page() {
  return (
    <div>
            <div class="w-auto px-5 py-5 bg-white rounded-md shadow-xl m-3">
  <div className="mt-3 mb-3 p-2">
    <div className="flex items-center flex-row">
      <div className="w-20 h-20 rounded-full bg-gray-300 animate-pulse"></div>
      <div className="ml-3">
        <div className="w-5/12 h-4 bg-gray-300 animate-pulse"></div>
        <div className="w-5/6 h-3 bg-gray-300 mt-1 animate-pulse"></div>
      </div>
    </div>
    <div className="mt-5 ml-5">
      <ul className="">
        <li className="text-sm font-medium">
         <span className="w-9/12 h-3 mb-2 bg-gray-300 inline-block animate-pulse"></span>
        </li>
        <li className="text-sm font-medium">
          <span className="w-10/12 h-3 mb-2 bg-gray-300 inline-block animate-pulse"></span>
        </li>
        <li className="text-sm font-medium">
           <span className="w-6/12 h-3 mb-2 bg-gray-300 inline-block animate-pulse"></span>
        </li>
        <li className="text-sm font-medium">
           <span className="w-10/12 h-3 mb-2 bg-gray-300 inline-block animate-pulse"></span>
        </li>
        <li className="text-sm font-medium">
         <span className="w-9/12 h-3 mb-2 bg-gray-300 inline-block animate-pulse"></span>
        </li>
      </ul>
    </div>

  </div>
            </div>
    </div>
  )
}

export default page