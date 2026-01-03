import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import {
  FaGlobe,
  FaMapMarker,
  FaPhoneAlt,
  FaPhoneSquare,
} from "react-icons/fa";
const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_n5b1ly9",
        "template_mu5smbd",
        form.current,
        "EwKl-u4hib81u-gEK"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <ToastContainer />

      {/* section title  */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 md:text-lg text-md font-semibold">
          I'd love to hear from you-reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* container: info cards + contact form (stack on mobile, row on md+) */}
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8">
        {/* info cards */}
        <div className="bg-[#0d081f] md:w-1/2 w-full p-6 rounded-lg shadow-lg border border-gray-700">
          <div className="w-full h-32 my-4 border border-gray-600 rounded-md p-8 bg-[#131025] relative">
            <FaMapMarker
              size={30}
              className="text-green-500 absolute left-6 top-6"
            />
            <p className="text-gray-500 pl-14">ADDRESS</p>
            <h3 className="text-gray-500 pl-14">
              Herat , Afghanistan , Darb Araq
            </h3>
          </div>

          <div className="w-full h-32 my-4 border border-gray-600 rounded-md p-8 bg-[#131025] relative">
            <FaPhoneAlt
              size={30}
              className="text-green-500 absolute left-6 top-6"
            />
            <p className="text-gray-500 pl-14">PHONE NUMBER</p>
            <h3 className="text-gray-500 pl-14">(+93)791997152</h3>
          </div>

          <div className="w-full h-32 my-4 border border-gray-600 rounded-md p-8 bg-[#131025] relative">
            <FaGlobe
              size={30}
              className="text-green-500 absolute left-6 top-6"
            />
            <p className="text-gray-500 pl-14">website</p>
            <h3 className="text-gray-500 pl-14">Resume.com</h3>
          </div>
        </div>

        {/* contact form  */}
        <div className="w-full md:w-1/2 max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white text-center">
            Connect With Me
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full rounded-md p-3 bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full rounded-md p-3 bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-md p-3 bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full rounded-md p-3 bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            ></textarea>
            {/* send button  */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              {loading ? (
                // This shows when email is being sent
                <div className="flex items-center justify-center w-full space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                // This shows normally
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
