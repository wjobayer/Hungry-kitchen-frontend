import React from "react";

const Newsletter = () => {
  return (
    <div className="container section-padding">
      <div className="bg-darkgray flex md:flex-row flex-col items-center justify-between py-16 rounded-lg px-0 md:px-10 flex-wrap">
        <div className="text-white w-full md:w-2/5 grow-0 px-4 md:px-0 mb-5 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl mb-3 font-semibold">Newsletter</h2>
          <p className="text-white/80">Don’t miss promotions and discounts.</p>
        </div>
        <div className="grow w-4/5 md:w-3/5 relative">
          <input
            type="email"
            className="py-5 px-5 rounded-full w-full focus:outline-none"
            placeholder="Enter your email"
          />
          <button className="bg-primary font-pt_sans absolute py-2 px-5 rounded-full text-white right-1 top-1 bottom-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
