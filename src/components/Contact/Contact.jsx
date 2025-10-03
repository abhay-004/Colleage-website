import React from "react";
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  //Form script web3
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8343bb74-af38-4195-bd85-7f2b245f0717");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact ">
      <div className="contact-col">
        <h3>
          Send us a message <img className="w-9 ml-2.5" src={message_icon} />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} />
            Contact@abhay.dev
          </li>
          <li>
            <img src={phone_icon} />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number"
            required
          />
          <label>Write Your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your message here"
            required
          ></textarea>
          <button type="submit" className="btn dark_btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span className="block my-5 mx-0">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
