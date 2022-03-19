import { BiDollarCircle } from "react-icons/bi";
import { FcSalesPerformance } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
import { VscStarFull } from "react-icons/vsc";
import ProfileCard from "../components/ProfileCard";
import RiderProfileForm from "../components/RiderProfileForm";

const RiderProfile = () => {
  return (
    <>
      <div className="sales-value">
        <div className="sales-value__container">
          <div className="sales-value__wrapper">
            <div className="sales-value__wrapper__item">
              <div className="sales-value__wrapper__item__content">
                <div>
                  <GiTakeMyMoney className="bg-orange-500 text-white  text-4xl col-span-1" />
                </div>
                <div className="col-span-2">
                  <h1 className="text-right">Net Income</h1>
                  <h1 className="text-3xl text-right">1000$</h1>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xs text-center">Five Starred Food Item</h2>
              </div>
            </div>
            <div className="sales-value__wrapper__item">
              <div className="sales-value__wrapper__item__content">
                <div>
                  <BiDollarCircle className="bg-purple-500 text-white  text-4xl col-span-1" />
                </div>
                <div className="col-span-2">
                  <h1 className="text-right">Current Income</h1>
                  <h1 className="text-3xl text-right">600$</h1>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xs text-center">Five Starred Food Item</h2>
              </div>
            </div>
            <div className="sales-value__wrapper__item">
              <div className="sales-value__wrapper__item__content">
                <div>
                  <FcSalesPerformance className="bg-pink-500 text-white  text-4xl col-span-1" />
                </div>
                <div className="col-span-2">
                  <h1 className="text-right">Total Sales</h1>
                  <h1 className="text-3xl text-right">254</h1>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xs text-center">Five Starred Food Item</h2>
              </div>
            </div>
            <div className="sales-value__wrapper__item">
              <div className="sales-value__wrapper__item__content">
                <div>
                  <VscStarFull className="bg-blue-500 text-white  text-4xl col-span-1" />
                </div>
                <div className="col-span-2">
                  <h1 className="text-right">Five Starred Item</h1>
                  <h1 className="text-3xl text-right">24</h1>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xs text-center">Five Starred Food Item</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rider">
        <div className="rider__container">
          <div className="rider__wrapper">
            <div className="rider__wrapper__area">
              <RiderProfileForm />
            </div>
            <div className="rider__wrapper__info">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RiderProfile;
