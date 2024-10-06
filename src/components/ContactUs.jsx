

const ContactUs = () => {
  return (
    <>
      <div className="form">
        <h1>CONTACT US</h1>
        <section id="contact">
          <div>
            <form>
              <label htmlFor="fname">First name:</label>
              <input type="text" id="fname" name="fname" />
              
              <label htmlFor="lname">Last name:</label>
              <input type="text" id="lname" name="lname" />
              
              <label htmlFor="email">Email address:</label><br />
              <input type="email" id="email" name="email" /><br />
              
              <label htmlFor="text">Comments:</label>
              <textarea id="text" name="text" rows="5"></textarea>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
