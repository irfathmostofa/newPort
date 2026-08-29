import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  // EmailJS configuration - Replace these with your actual values
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_y71d5v8", // Your EmailJS Service ID
    TEMPLATE_ID: "template_fm81kqb", // Your EmailJS Template ID
    PUBLIC_KEY: "jdQyMu1n9_7neA8tu", // Your EmailJS Public Key
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactForm = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all required fields.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
      );

      if (result.status === 200) {
        const successMessage = `Thank you for contacting us, ${formData.name}!`;
        toast.success(successMessage, {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { name, email, subject, message } = formData;

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="py-20 md:py-28 px-4 sm:px-6 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="uppercase tracking-[10px] text-gray-500 text-sm mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let&apos;s Talk
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            I have got just what you need.{" "}
            <span className="text-[#F7AB0A]">
              Let&apos;s build something great.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-[#F7AB0A] h-6 w-6 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                className="text-lg sm:text-xl lg:text-2xl break-all hover:text-[#F7AB0A] transition-colors"
                href="tel:+8801941637656"
              >
                +8801941637656
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-[#F7AB0A] h-6 w-6 shrink-0"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a
                className="text-lg sm:text-xl lg:text-2xl break-all hover:text-[#F7AB0A] transition-colors"
                href="mailto:irfathmostofa1@gmail.com"
              >
                irfathmostofa1@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-[#F7AB0A] h-6 w-6 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg sm:text-xl lg:text-2xl">
                Chattogram, Bangladesh
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <form
              ref={form}
              onSubmit={contactForm}
              className="flex flex-col space-y-3 w-full mx-auto"
            >
              <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-3 sm:space-y-0">
                <input
                  className="contactInput w-full !text-white bg-gray-700/50 rounded-md px-4 py-3 border border-gray-600 focus:border-[#F7AB0A] focus:outline-none transition-colors"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  className="contactInput w-full !text-white bg-gray-700/50 rounded-md px-4 py-3 border border-gray-600 focus:border-[#F7AB0A] focus:outline-none transition-colors"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <input
                className="contactInput !text-white bg-gray-700/50 rounded-md px-4 py-3 border border-gray-600 focus:border-[#F7AB0A] focus:outline-none transition-colors"
                placeholder="Subject"
                type="text"
                name="subject"
                value={subject}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <textarea
                className="contactInput h-36 !text-white bg-gray-700/50 rounded-md px-4 py-3 border border-gray-600 focus:border-[#F7AB0A] focus:outline-none transition-colors resize-none"
                placeholder="Message"
                name="message"
                value={message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold text-lg transition-all ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#e69a09] hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-black"
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
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};
