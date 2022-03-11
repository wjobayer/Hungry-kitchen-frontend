import React from "react";
<<<<<<< HEAD
=======
import { useSelector } from "react-redux";
import CartCalculation from "../components/CartCalculation";
>>>>>>> 7e2d50aaf2451032f135af9f9d985cbcb55bb9be
import CartCard from "./CartCard";

export default function Drawer({ children, isOpen, setIsOpen }) {
  const cartProducts = useSelector((state) => state.addToCart);
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">Cart</header>
          {/* {children} */}
          <button
            className="absolute top-0 right-3 text-red-400 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            x
          </button>
          {cartProducts.map((cart) => (
            <CartCard cart={cart} />
          ))}

          <div className="fixed bottom-0 w-full">
            <CartCalculation />
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}