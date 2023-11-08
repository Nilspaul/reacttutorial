import "../css/contactForm.css"

const ContactForm = () => {
  return (
    <div>
      <h2>Kontaktiere uns</h2>
      <form action="#">

        <label htmlFor="fname">Vorname</label>
        <input type="text" id="fname" name="firstname" placeholder="Dein Vorname"/>

        <label htmlFor="lname">Nachname</label>
        <input type="text" id="lname" name="lastname" placeholder="Dein Nachname"/>

        <label htmlFor="message">Nachricht</label>
        <textarea id="message" name="message" placeholder="Hinterlass doch mal eine nette Nachricht :)"></textarea>

        <input type="submit" value="Absenden"/>
      </form>
    </div> 
  );
};


export default ContactForm;
