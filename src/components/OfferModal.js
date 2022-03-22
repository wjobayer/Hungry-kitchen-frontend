import React, { useState } from "react";

export default function OfferModal() {
  const [showModal, setShowModal] = useState(false);
  const [closeTimeOut, setCloseTimeOut] = useState(0);
  if (closeTimeOut === 0) {
    setTimeout(() => {
      setShowModal(true);
      setCloseTimeOut(2);
    }, 1000);
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="modal-content">
                {/* <div className="w-96 h-96 bg-white"></div> */}
                <div
                  className="absolute -top-2 -right-2 rounded rounded-[50%] bg-red-500 w-10 h-10 flex items-center justify-center  text-xl text-white"
                  onClick={() => setShowModal(false)}
                >
                  X
                </div>
                <img
                  className="absolute -top-20 z-50"
                  src="	https://html.dynamiclayers.net/te/caferio/assets/img/about01.png
"
                  alt=""
                />
                <div className="flex justify-between">
                  <div className="w-[500px]"></div>
                  <div className="w-[500px] h-[320px] p-4 flex justify-center items-center">
                    <div>
                      <h2 className="text-2xl">
                        Get{" "}
                        <span className="text-orange-400 font-bold ">-30%</span>
                        off on the{" "}
                        <span className="text-orange-400 font-bold">
                          First Order!!
                        </span>
                      </h2>
                      <div className="flex flex-col items-center ">
                        <h2 className="text-xl mt-4 mb-2">Use This Cupon:</h2>
                        <div className="text-3xl p-4 rounded rounded-xl bg-yellow-400 font-bold">
                          FIRST30OFF
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
