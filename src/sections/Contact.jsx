import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast'
import { Particles } from "../components/Particles";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    console.log({
  from_name: formData.name,
  to_name: "Nebiyu D. Nebiyeleul",
  from_email: formData.email,
  to_email: "danielnebiyuneb@gmail.com",
  message: formData.message,
});

    try {
      await emailjs.send("service_stj6yfy", "template_h4ix615", {
        from_name: formData.name,
        to_name: "Nebiyu D. Nebiyeleul",
        from_email: formData.email,
        to_email: "danielnebiyuneb@gmail.com",
        message: formData.message,
        
      }, "bE5lPjwtRZX1qeSBl"); 
      setIsLoading(false);
      toast.success("Email has successfully sent")
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      toast.error("Unable to send the email")
    }
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color="#ffffff" refresh/>
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform or bring a unique project. I'm here to help
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Mr. your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="yourname@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Hi, your message"
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
