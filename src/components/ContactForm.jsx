import "../css/contactForm.css"

const ContactForm = () => {
  return (
    <div>
      <h2>Kontaktiere Uns</h2>
      <form action="action_page.php">

        <label>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

        <label >Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

        <label>Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label>Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

        <input type="submit" value="Submit"/>
      </form>
    </div> 
  );
};


export default ContactForm;
