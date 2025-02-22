import React from "react";

function Infos() {
  return (
    <div className="p-8">
      <div className="container mx-auto flex flex-wrap md:justify-between justify-center">
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h2 className="font-bold text-gray-400 mb-2">Information</h2>
          <ul className="space-y-1 text-gray-200 text-[13px]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">About Zip</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Orders and Returns</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Advanced Search</a>
            </li>
            <li>
              <a href="#">Newsletter Subscription</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h2 className="font-bold text-gray-400 mb-2">PC Parts</h2>
          <ul className="space-y-1 text-gray-200 text-[13px]">
            <li>
              <a href="#">CPUs</a>
            </li>
            <li>
              <a href="#">Add On Cards</a>
            </li>
            <li>
              <a href="#">Hard Drives (Internal)</a>
            </li>
            <li>
              <a href="#">Graphic Cards</a>
            </li>
            <li>
              <a href="#">Keyboards / Mice</a>
            </li>
            <li>
              <a href="#">Cases / Power Supplies / Cooling</a>
            </li>
            <li>
              <a href="#">RAM (Memory)</a>
            </li>
            <li>
              <a href="#">Software</a>
            </li>
            <li>
              <a href="#">Speakers / Headsets</a>
            </li>
            <li>
              <a href="#">Motherboards</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h2 className="font-bold text-gray-400 mb-2">Desktop PCs</h2>
          <ul className="space-y-1 text-gray-200 text-[13px]">
            <li>
              <a href="#">Custom PCs</a>
            </li>
            <li>
              <a href="#">Servers</a>
            </li>
            <li>
              <a href="#">MSI All-in-One PCs</a>
            </li>
            <li>
              <a href="#">HP / Compaq PCs</a>
            </li>
            <li>
              <a href="#">ASUS PCs</a>
            </li>
            <li>
              <a href="#">Tecs PCs</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h2 className="font-bold text-gray-400 mb-2">Laptops</h2>
          <ul className="space-y-1 text-gray-200 text-[13px]">
            <li>
              <a href="#">Everyday Use Notebooks</a>
            </li>
            <li>
              <a href="#">MSI Workstation Series</a>
            </li>
            <li>
              <a href="#">MSI Prestige Series</a>
            </li>
            <li>
              <a href="#">Tablets and Pads</a>
            </li>
            <li>
              <a href="#">Notebooks</a>
            </li>
            <li>
              <a href="#">Infinity Gaming Notebooks</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5">
          <h2 className="font-bold text-gray-400 mb-2">Address</h2>
          <p className="text-gray-200 text-[13px]">
            Address: 1234 Street, Address City, 1234
          </p>
          <p className="text-gray-200 text-[13px]">
            Phone:{" "}
            <a href="tel:+2012345678" className="text-blue-400">
              (20) 1234 5678
            </a>
          </p>
          <p className="text-gray-200 text-[13px]">
            We are open: Monday - Thursday: 9:00 AM - 5:30 PM
          </p>
          <p className="text-gray-200 text-[13px]">Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-200 text-[13px]">Saturday: 9:00 AM - 5:00 PM</p>
          <p className="text-gray-200 text-[13px]">
            E-mail:{" "}
            <a href="mailto:shop@email.com" className="text-blue-400">
              shop@email.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Infos;
