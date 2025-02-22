import React from "react";

function Summary() {
  return (
    <div className="bg-[#F5F7FF] px-4 py-2 flex flex-col justify-between">
      {/* total */}
      <div className="prices">
      <h1 className="text-[24px] font-semibold">Summary</h1>
        <div>
          <div className="flex items-center justify-between my-2 text-[13px] font-semibold">
            <p>Subtotal</p>
            <span>$13047.00</span>
          </div>
          <div className="flex items-center justify-between my-2 text-[13px] font-semibold">
            <p className="">Shipping </p>
            <span>$21.00</span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between my-2 text-[13px] font-semibold">
            <p>Tax</p>
            <span>$1.91</span>
          </div>
        </div>
      </div>
      <div className="btns">
        {/* order total */}
        <div className="flex items-center justify-between my-4 text-[18px] font-semibold">
          <p>Order Total</p>
          <span>$13090.00</span>
        </div>
        <div>
          <button className="w-full my-2 bg-[#0156FF] h-[50px] text-white cursor-pointer text-[14px] font-semibold rounded-full">
            Proceed to Checkout
          </button>
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 w-full my-2 bg-[#FFB800] h-[50px] text-white cursor-pointer text-[14px] font-semibold rounded-full  ">
            Check out with{" "}
            <img src="./images/payement/paypal-icon.png" className="w-[70px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
