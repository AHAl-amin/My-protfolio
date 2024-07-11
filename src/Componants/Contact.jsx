const Contact = () => {
  return (
    <div className="">
      <h2 className="font-bold text-4xl text-center text-orange-800">
        Contact
      </h2>
      <div className="flex lg:flex-row flex-col gap-10 py-10 md:px-10 px-5">
        <div className="flex-1 text-gray-300 font-bold md:text-[27px] text-[16px] space-y-3 flex flex-col justify-center items-center">
          <p>Al-amin Hossain</p>
          <p>Email : mdalaminhossain573190@gmail.com</p>
          <p>Phone : +8801919457711</p>
          <p>Framgate,Dhaka,Bangladesh</p>
        </div>
        <div className="flex-1">
          <form className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
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
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-sky-800 text-white">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
