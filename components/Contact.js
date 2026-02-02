export function Contact() {
  return `
    <div class="container page-content">
      <h1>Contact Us</h1>
      <div class="contact-layout">
        <div class="contact-info">
          <section>
            <h2>Get in Touch</h2>
            <p>We are here to answer your questions. Reach out to us via phone, email, or visit our campus.</p>
            <div class="contact-details">
              <p>📍 <strong>Address:</strong> 123 Education Lane, Knowledge City, State, 12345</p>
              <p>📞 <strong>Phone:</strong> (555) 123-4567</p>
              <p>✉️ <strong>Email:</strong> admission@excellence.edu</p>
              <p>🕒 <strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 4:00 PM</p>
            </div>
          </section>
          <section>
            <h2>Location</h2>
            <div class="map-placeholder">
               <!-- Embed Google Map Here -->
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f4f1a4e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633072871036!5m2!1sen!2sus" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </section>
        </div>
        <div class="contact-form-container glass">
          <h2>Send us a Message</h2>
          <form id="contact-form" class="contact-form">
            <div class="form-group">
              <label for="c-name">Name</label>
              <input type="text" id="c-name" name="name" required>
            </div>
            <div class="form-group">
              <label for="c-email">Email</label>
              <input type="email" id="c-email" name="email" required>
            </div>
            <div class="form-group">
              <label for="c-subject">Subject</label>
              <input type="text" id="c-subject" name="subject" required>
            </div>
            <div class="form-group">
              <label for="c-message">Message</label>
              <textarea id="c-message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  `;
}
