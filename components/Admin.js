export function Admin() {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = '/login';
    return '<p>Redirecting...</p>';
  }

  return `
    <div class="container page-content">
      <h1>Admin Dashboard</h1>
      <p>Manage Notices, Results, and Messages.</p>
      
      <div class="tabs">
        <button class="tab-btn active" onclick="openTab('notices')">Post Notice</button>
        <button class="tab-btn" onclick="openTab('results')">Upload Result</button>
        <button class="tab-btn" onclick="openTab('messages')">View Messages</button>
      </div>

      <!-- Tab 1: Notices -->
      <div id="notices" class="tab-content active glass">
        <h2>Create Notice</h2>
        <form id="notice-form" class="contact-form">
          <div class="form-group">
            <label>Title</label>
            <input type="text" name="title" required>
          </div>
          <div class="form-group">
            <label>Date</label>
            <input type="date" name="date" required>
          </div>
          <div class="form-group">
            <label>Content</label>
            <textarea name="content" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Post Notice</button>
        </form>
      </div>

      <!-- Tab 2: Results -->
      <div id="results" class="tab-content glass" style="display:none;">
        <h2>Upload Student Result</h2>
        <form id="upload-result-form" class="contact-form">
          <div class="form-group">
            <label>Student Name</label>
            <input type="text" name="student_name" required>
          </div>
          <div class="form-group">
            <label>Roll Number</label>
            <input type="text" name="roll_no" required>
          </div>
          <div class="form-group">
            <label>Class</label>
            <input type="text" name="class" required>
          </div>
          <h3>Subjects & Marks</h3>
          <div class="form-group">
            <label>Math</label>
            <input type="number" name="math" required>
          </div>
            <div class="form-group">
            <label>Science</label>
            <input type="number" name="science" required>
          </div>
            <div class="form-group">
            <label>English</label>
            <input type="number" name="english" required>
          </div>
          <button type="submit" class="btn btn-primary">Upload Result</button>
        </form>
      </div>

      <!-- Tab 3: Messages -->
      <div id="messages" class="tab-content glass" style="display:none;">
        <h2>Inquiry Messages</h2>
        <div id="messages-list">Loading...</div>
      </div>
    </div>
  `;
}

// Global Tab Helper
window.openTab = function (tabName) {
  document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.classList.add('active');

  // Load messages if tab matches
  if (tabName === 'messages') loadMessages();
}

async function loadMessages() {
  try {
    const res = await fetch('/api/messages');
    const data = await res.json();
    const list = document.getElementById('messages-list');
    if (data.data) {
      list.innerHTML = data.data.map(msg => `
              <div class="notice-item">
                  <div class="notice-date">${msg.date}</div>
                  <h3>${msg.subject} <small>from ${msg.name} (${msg.email})</small></h3>
                  <p>${msg.message}</p>
              </div>
          `).join('');
    }
  } catch (e) { console.error(e); }
}
