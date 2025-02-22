import React from 'react'

function NewsLetter() {
  return (
    <div className="flex justify-between flex-col items-center md:flex-row">
      <div>
        <h1 className="font-medium text-[38px]">Sign Up To Our Newsletter.</h1>
        <p className="font-light text-[16px]">
          Be the first to hear about the latest offers.
        </p>
      </div>
      <div className='flex items-center gap-3'>
        <input
          type="text"
          placeholder="Your Email"
          className="border-3 w-full p-2 self-end md:w-[390px] border-white h-[50px] focus:outline-none"
        />
        <button className="rounded-full bg-[#0156FF] h-[50px] w-[150px]">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter
