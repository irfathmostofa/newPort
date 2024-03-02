import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const contactform = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("subject", subject);
    data.append("message", message);
    fetch(`${import.meta.env.VITE_SERVER}/contactformSubmit`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === true) {
          const successMessage = `Thank you for contacting us, ${name}!`;
          toast.success(successMessage, {
            position: "top-center",
          });
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          alert("Message Send failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ToastContainer />
      <div className="flex md:relative flex-col mt-40 md:mt-0 text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 md:min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="md:absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-0 items-center">
          <div className="">
            <h4 className="text-3xl font-semibold">
              I have got just what you need.
              <span className="decoration-[#F7AB0A]/50 underline">
                Lets Talk.
              </span>
            </h4>
            <div className="space-y-10 my-10">
              <div className="flex items-center space-x-5 justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-[#F7AB0A] h-7 w-7 animate-pulse"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <a className="text-2xl" href="tel:+8801941637656">
                  +8801941637656
                </a>
              </div>
              <div className="flex items-center space-x-5 justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-[#F7AB0A] h-7 w-7 animate-pulse"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a className="text-2xl" href="mailto:irfathmostofa1@gmail.com">
                  irfathmostofa1@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-5 justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-[#F7AB0A] h-7 w-7 animate-pulse"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-2xl">Chattogram Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="md:p-10 p-5">
            <form
              className="flex flex-col space-y-2 w-full mx-auto"
              onSubmit={contactform}
            >
              <div className="flex space-x-2 ">
                <input
                  className="contactInput w-full !text-white"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
                <input
                  className="contactInput w-full !text-white"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <input
                className="contactInput !text-white"
                placeholder="Subject"
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                required
              />
              <textarea
                className="contactInput h-36 !text-white"
                placeholder="Message"
                name="message"
                value={message}
                defaultValue={""}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
              <button
                type="submit"
                className=" bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
