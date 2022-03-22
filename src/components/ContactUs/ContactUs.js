import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import Footer from "../../common/Footer";
import HeaderBlack from "../../common/HeaderBlack";
const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mcqbycc",
        "template_zbr792v",
        form.current,
        "ij3iTfogpWZcOO7-Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <HeaderBlack></HeaderBlack>
      <div
        style={{
          backgroundImage: `url("https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/img/banner.png") `,
          backgroundRepeat: "no-repeat",
          height: "50vh",
          marginTop: "-250px",
        }}
        className="lg:pb-44 sm:pb-40 "
      ></div>
      <h2
        style={{ marginTop: "-150px", marginBottom: "150px" }}
        className="text-3xl font-bold flex text-black justify-center"
      >
        Contact Us
      </h2>

      <span className="flex justify-evenly">
        <svg
          width="200"
          height="200"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="shape">
              <path
                fill="currentColor"
                d="M851,640.5Q835,781,696,802.5Q557,824,423,845Q289,866,223,745.5Q157,625,103,480.5Q49,336,186.5,265.5Q324,195,455,102.5Q586,10,659.5,157.5Q733,305,800,402.5Q867,500,851,640.5Z"
              ></path>
            </clipPath>
          </defs>
          <FaMapMarkerAlt
            style={{ color: "#FCB303" }}
            size={270}
            x={340}
            y={340}
          />
          <div></div>

          <g clip-path="url(#shape)">
            <path
              fill="none"
              stroke="#b6b7c1"
              stroke-width="9"
              d="M851,640.5Q835,781,696,802.5Q557,824,423,845Q289,866,223,745.5Q157,625,103,480.5Q49,336,186.5,265.5Q324,195,455,102.5Q586,10,659.5,157.5Q733,305,800,402.5Q867,500,851,640.5Z"
            />
          </g>
        </svg>
        <svg
          width="200"
          height="200"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="shape">
              <path
                fill="currentColor"
                d="M851,640.5Q835,781,696,802.5Q557,824,423,845Q289,866,223,745.5Q157,625,103,480.5Q49,336,186.5,265.5Q324,195,455,102.5Q586,10,659.5,157.5Q733,305,800,402.5Q867,500,851,640.5Z"
              ></path>
            </clipPath>
          </defs>
          <MdPhoneInTalk
            style={{ color: "#FCB303" }}
            size={270}
            x={340}
            y={340}
          />
          <g clip-path="url(#shape)">
            <path
              fill="none"
              stroke="#b6b7c1"
              stroke-width="9"
              d="M851,640.5Q835,781,696,802.5Q557,824,423,845Q289,866,223,745.5Q157,625,103,480.5Q49,336,186.5,265.5Q324,195,455,102.5Q586,10,659.5,157.5Q733,305,800,402.5Q867,500,851,640.5Z"
            />
          </g>
        </svg>
        <svg
          width="200"
          height="200"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="shape">
              <path
                fill="currentColor"
                d="M851,640.5Q835,781,696,802.5Q557,824,423,845Q289,866,223,745.5Q157,625,103,480.5Q49,336,186.5,265.5Q324,195,455,102.5Q586,10,659.5,157.5Q733,305,800,402.5Q867,500,851,640.5Z"
              ></path>
            </clipPath>
          </defs>
          <AiOutlineMail
            style={{ color: "#FCB303" }}
            size={270}
            x={340}
            y={340}
          />
          <g clip-path="url(#shape)">
            <path
              fill="none"
              stroke="#b6b7c1"
              stroke-width="9"
              d="M851,640.5Q835,781,696,802.5Q557,824,423,845Q289,866,223,745.5Q157,625,103,480.5Q49,336,186.5,265.5Q324,195,455,102.5Q586,10,659.5,157.5Q733,305,800,402.5Q867,500,851,640.5Z"
            />
          </g>
        </svg>
      </span>
      <div className="flex justify-center">
        <img
          src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/line-cauve.png"
          alt=""
        />
      </div>
      <div className="container flex mt-20">
        <div>
          <img
            style={{ height: "430px" }}
            className="mr-20 contact-img"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div>
          <div>
            <p style={{ color: "#F43127" }} className="text-1xl font-bold mb-5">
              Let's Start a Conversation
            </p>
            <p className="text-3xl font-bold mb-5">
              Send Us Message
              <br />
            </p>
            <p style={{ color: "#646464" }} className="text-1xl mb-10">
              Our support team is spread across the globe to give you answer
              fast.
            </p>
          </div>
          <div>
            <div className="contact-form-wrapper">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-item">
                  <input
                    className="border py-2 "
                    type="text"
                    name="name"
                    required=""
                    placeholder="Name"
                  />
                </div>

                <div className="form-item">
                  <input
                    className="border py-2"
                    type="text"
                    name="email"
                    required=""
                    placeholder="Email"
                  />
                </div>

                <div className="form-item">
                  <textarea
                    className="border py-2"
                    name="message"
                    required=""
                    placeholder="Message"
                  ></textarea>
                </div>
                <input
                  className="bg-yellow-400 p-3 px-8"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
