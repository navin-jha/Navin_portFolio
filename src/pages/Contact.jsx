import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_j7sdppn",
        "template_7818yaq",
        formRef.current,
        "7aAbpS5-MnbAj1cBs"
      );

      toast.success("Email sent successfully ✅");
      formRef.current.reset();
    } catch (error) {
      toast.error("Email failed ❌");
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* Marquee Header */}
      <div className="overflow-hidden mx-4 my-6 rounded-lg shadow-lg bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">
        <h1 className="animate-marquee whitespace-nowrap px-4 py-3 text-sm sm:text-base md:text-xl font-semibold text-white">
          🚀 Hi, Let’s build something great together! Send me a message and I’ll get back to you soon.
        </h1>
      </div>

      {/* Contact Form */}
      <div className="flex items-center justify-center px-4">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full max-w-xl p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-md bg-white shadow-lg"
        >
          {/* Inputs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Enter name..."
              className="rounded-md shadow-md p-3 sm:p-4 w-full outline-none focus:ring-2 focus:ring-slate-400"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Enter email..."
              className="rounded-md shadow-md p-3 sm:p-4 w-full outline-none focus:ring-2 focus:ring-slate-400"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Enter message..."
            rows="4"
            className="rounded-md shadow-md p-3 sm:p-4 outline-none focus:ring-2 focus:ring-slate-400"
            required
          />

          <button
            type="submit"
            className="bg-slate-300 hover:bg-slate-400 rounded-md p-3 sm:p-4 shadow-md font-semibold transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
