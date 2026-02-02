export function Results() {
    return `
    <div class="container page-content" style="max-width: 600px;">
      <h1>Student Results</h1>
      <div class="contact-form-container glass">
        <h2>Check Your Result</h2>
        <form id="result-form" class="contact-form">
          <div class="form-group">
            <label for="rollNo">Enter Roll Number</label>
            <input type="text" id="rollNo" placeholder="e.g., 101" required>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">View Result</button>
        </form>
        <div id="result-display" style="margin-top: 2rem; display: none;"></div>
      </div>
    </div>
  `;
}
