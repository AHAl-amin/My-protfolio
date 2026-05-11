import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import img1 from '../assets/contact.png'

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  
  const notify = () => toast.success("Message sent successfully! I'll get back to you soon.");
 
  const sendEmail = (e) => {
    e.preventDefault();
    const currentForm = e.target;

    if (!(currentForm instanceof HTMLFormElement)) {
      const err = "Form element not found. Please refresh and try again.";
      console.error(err, currentForm);
      toast.error(err);
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_jeoxzpr",
        "template_ag4bvdg",
        currentForm,
        "yUuMT_z7WJgMA2KbG"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          notify();
          currentForm.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("FAILED...", error);
          const errorMessage = error.text || error.message || JSON.stringify(error);
          toast.error(`Failed to send message: ${errorMessage}`);
          setIsSending(false);
        }
      );
  };

  return (
    <section className="bg-gradient-primary  p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-accent mb-8 md:text-2xl text-xl flex justify-center font-bold">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Fade direction="up">
            <div className="flex justify-center">
              <img src={img1} alt="Contact" className="w-full max-w-md rounded-lg" />
            </div>
          </Fade>

          <div>
            <Fade direction="up">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-accent font-semibold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered bg-secondary text-light placeholder-light/50 border-accent border-opacity-30 focus:border-accent focus:outline-none"
                    name="name"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-accent font-semibold">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered bg-secondary text-light placeholder-light/50 border-accent border-opacity-30 focus:border-accent focus:outline-none"
                    name="email"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-accent font-semibold">Your Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered bg-secondary text-light placeholder-light/50 border-accent border-opacity-30 focus:border-accent focus:outline-none"
                    placeholder="Write your message here..."
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button className="btn-primary-custom w-full border border-accent hover:bg-accent/20 hover:text-[fffffff] transition transform py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
              <ToastContainer />
            </Fade>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;