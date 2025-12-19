import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  }, []);

 const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);
  setStatus({ type: "info", message: "Sending message..." });

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(
      (result) => {
        console.log("SUCCESS:", result.text);
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 3000);
      },
      (error) => {
        console.error("FAILED:", error);
        setStatus({
          type: "danger",
          message: "EmailJS error. Check console.",
        });
      }
    )
    .finally(() => setIsLoading(false));
};

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-5 skill-header">
          <h2 className="about-title text-white">CONTACT ME</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-card float-up">
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={isLoading}
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  disabled={isLoading}
                />
              </label>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                  required
                  disabled={isLoading}
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  disabled={isLoading}
                />
              </label>

              <button type="submit" className="btn-submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
