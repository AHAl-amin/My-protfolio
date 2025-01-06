import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const notify = () => toast("Successfully send your message");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9u7tptj", 
        "template_jetnnvk",
         form.current,
          {
        publicKey: "gUihkbIbdorz3rqgs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="">
      <h2 className="font-bold text-4xl text-center text-orange-800">
        Contact
      </h2>
      <div className="flex lg:flex-row flex-col gap-10 py-10 md:px-10 px-5">
        <Fade direction="up">
        
         <div className="flex-1 text-gray-300 font-bold md:text-[27px] text-[16px] space-y-3 flex flex-col justify-center items-center">
            <p>Al-amin Hossain</p>
            <p>Email : mdalaminhossain573190@gmail.com</p>
            <p>Phone : +8801919457711</p>
            <p>Framgate,Dhaka,Bangladesh</p>
          </div>
        
        </Fade>

        <div className="flex-1">
          <Fade direction="up">
       
            <div>

            <form ref={form}  onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="from_name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="from_email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                className="textarea textarea-primary"
                placeholder="Write now"
                name="message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
            
              <button onClick={notify} className="btn bg-sky-800 text-white">Send</button>
            </div>
          </form>
          <ToastContainer/>
            </div>
            </Fade>
        
          {/* <Fade direction="up">
          <div>
          <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="from_name" />
              <label>Email</label>
              <input type="email" name="from_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
            
          </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
