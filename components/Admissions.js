export function Admissions() {
    return `
    <div class="container page-content">
      <h1>Admissions</h1>
      <div class="admissions-layout">
        <div class="admissions-info">
          <section>
            <h2>Admission Process</h2>
            <ol>
              <li>Submit the online application form.</li>
              <li>Schedule an entrance test/interview.</li>
              <li>Review fees structure and submit documents.</li>
              <li>Confirm admission with fee payment.</li>
            </ol>
          </section>
          <section>
            <h2>Fee Structure</h2>
            <table class="fee-table">
              <tr>
                <th>Grade</th>
                <th>Annual Fee</th>
              </tr>
              <tr>
                <td>Kindergarten</td>
                <td>$2,500</td>
              </tr>
              <tr>
                <td>Grades 1-5</td>
                <td>$3,500</td>
              </tr>
              <tr>
                <td>Grades 6-10</td>
                <td>$4,500</td>
              </tr>
              <tr>
                <td>Grades 11-12</td>
                <td>$5,500</td>
              </tr>
            </table>
          </section>
        </div>
        <div class="admissions-form-container glass">
          <h2>Apply Now</h2>
          <form class="admissions-form" onsubmit="event.preventDefault(); alert('Application Submitted! (Demo)');">
            <div class="form-group">
              <label for="name">Student Name</label>
              <input type="text" id="name" required placeholder="Enter student's full name">
            </div>
            <div class="form-group">
              <label for="grade">Grade Applying For</label>
              <select id="grade">
                <option>Kindergarten</option>
                <option>Grade 1</option>
                <option>Grade 6</option>
                <option>Grade 9</option>
                <option>Grade 11</option>
              </select>
            </div>
            <div class="form-group">
              <label for="parent">Parent/Guardian Name</label>
              <input type="text" id="parent" required placeholder="Enter parent's name">
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" required placeholder="For correspondence">
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" required placeholder="Enter phone number">
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  `;
}
