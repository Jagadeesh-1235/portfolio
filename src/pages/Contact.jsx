import { toast, ToastContainer } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const notify = () =>
    toast("Email Sent Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0rdxb34",
        "template_vgarjwk",
        form.current,
        "4xZppja9nW3UAxXRr"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        notify(),
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center relative  items-center "
    >
      <div className="w-full max-w-7xl mt-16 relative flex flex-col items-center justify-between">
        <h1 className="text-center text-white text-4xl max-w-3xl">Contact</h1>
        <p className="text-center text-white text-sm lg:text-lg p-2 max-w-3xl mt-3">
          Feel Free To Reach Out To Me For Any Questions Or Opportunities!
        </p>
        <form
          className="w-[90%] max-w-xl flex flex-col bg-white p-9 rounded-2xl gap-4 mt-4 shadow-xl shadow-blue-300"
          ref={form}
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl  font-semibold">Email Me </h1>
          <input
            className="flex-1 bg-transparent border-2 border-black rounded-lg p-2"
            placeholder="Your Email"
            name="user_email"
          />
          <input
            className="flex-1 bg-transparent border-2 border-black rounded-lg p-2"
            placeholder="Your Name"
            name="user_name"
          />
          <input
            className="flex-1 bg-transparent border-2 border-black rounded-lg p-2"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="flex-1 bg-transparent border-2 border-black rounded-lg p-2"
            placeholder="Message"
            rows="4"
            name="message"
          ></textarea>
          <input
            className="w-full text-center cursor-pointer bg-black  text-white rounded-lg
          p-2 hover:text-pink-500 duration-300"
            type="submit"
            value="Send"
          />
        </form>
        <ToastContainer />
      </div>
    </div> 
  );
};

export default Contact;
