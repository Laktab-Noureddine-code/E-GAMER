import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

function ProductsList() {
  const [quantity, setQuantity] = useState(1);
  const items = [
    {
      id: 1,
      image: "./images/categories/desktop/desktop1.png",
      name: "MSI MEG Trident X 10SD-102AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
      price: 4349.0,
      quantity: 3,
    },
    {
      id: 2,
      image: "./images/categories/desktop/desktop2.png",
      name: "MSI MEG Trident X 10SD-102AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
      price: 4349.0,
      quantity: 3,
    },
  ];

  return (
    <div>
      <div className="p-4 max-w-4xl mx-auto">
        <div className="hidden md:grid grid-cols-5 font-semibold p-2 border-b border-gray-300">
          <p className="col-span-2">Item</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Subtotal</p>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          {items.map((item) => (
            <div className="relative border-b border-gray-300">
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 "
              >
                {/* desktop */}
                <div className="flex items-center gap-4 col-span-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover "
                  />
                  <p className="font-semibold md:text-sm text-gray-700">
                    {item.name}
                  </p>
                </div>
                <p className="font-bold hidden md:block">
                  ${item.price.toFixed(2)}
                </p>
                <div className="hidden md:block">
                  <div className="flex items-center gap-2 ">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-16 border rounded px-2 py-1 text-center"
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <p className="font-bold hidden md:block">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="absolute right-2 top-2 flex flex-col gap-1">
                  <button className="border border-gray-600 text-gray-600 rounded-full p-1">
                    <MdOutlineEdit size={20} />
                  </button>
                  <button className="border border-gray-600 text-gray-600 rounded-full p-1">
                    <IoIosClose size={20} />
                  </button>
                </div>
                {/* mobile */}
                <div className="block md:hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold mb-3">Price</p>
                      <p className="font-semibold">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="">
                      <p className="font-bold mb-3">Qty</p>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="w-16 block  border rounded px-2 py-1 text-center"
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <p className="font-bold mb-3">Subtotal</p>
                      <p className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between md:flex-row flex-col mt-6 px-3 md:px-2">
          <div className="flex gap-4 md:flex-row flex-col">
            <button className="px-4 my-1  py-2 bg-gray-200 text-gray-700 rounded-full">
              Continue Shopping
            </button>
            <button className="px-4 my-1 py-2 bg-black text-white rounded-full">
              Clear Shopping Cart
            </button>
          </div>
          <button className="px-4 my-1 py-2 bg-black text-white rounded-full">
            Update Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
