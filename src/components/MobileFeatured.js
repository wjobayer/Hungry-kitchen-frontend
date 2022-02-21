/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const MobileFeatured = () => {
  return (
    <div className="mobile-featured">
      <div className="container">
        <div className="mobile-featured__wrapper">
          <div className="mobile-featured__text-area">
            <div className="sub-title">Dine In or Take Away</div>
            <h2>Get Your Order 24/7 Right At Your Doorsteps</h2>
            <p>
              Plant-based diets may offer an advantage over those that are not
              plant based with respect to prevention and management of diabetes.
              the adventist health studies found that vegetarians have
              approximately half the risk of developing diabetes
            </p>

            <div className="flex gap-5 mt-10">
              <Link to="/category">
                <button className="btn-brand">Order Food</button>
              </Link>
              <button className="btn-brand-secondary">Search Food</button>
            </div>
          </div>
          <div className="mobile-featured__image">
            <div className="flex justify-center">
              <img
                src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/Online-delivery-1.png"
                alt="2913"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFeatured;
