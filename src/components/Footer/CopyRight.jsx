import React from 'react'
import { FaSquareInstagram } from 'react-icons/fa6';
import { ImFacebook2 } from 'react-icons/im';
import PaymentIcons from './PaymentIcons';
function CopyRight() {
  return (
    <div className="p-2 flex justify-between flex-col items-center sm:flex-row">
      <div className="flex items-center gap-1 text-gray-400  m-3">
        <ImFacebook2 size={15} />
        <FaSquareInstagram size={17} />
      </div>
      <div className="order-3 sm:order-0  m-3">
        <PaymentIcons />
      </div>
      <p className="text-gray-300 text-sm  m-3">
        Copyright © 2020 Shop Pty. Ltd.
      </p>
    </div>
  );
}

export default CopyRight
