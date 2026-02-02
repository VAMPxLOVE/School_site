export function Notices() {
    // Use a placeholder ID that we will populate via JS after render
    setTimeout(() => {
        fetch('/api/notices')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('notices-list');
                if (container && data.data) {
                    container.innerHTML = data.data.map(notice => `
            <article class="notice-item">
              <div class="notice-date">${notice.date}</div>
              <h3>${notice.title}</h3>
              <p>${notice.content}</p>
            </article>
          `).join('');
                }
            })
            .catch(error => console.error('Error fetching notices:', error));
    }, 0);

    return `
    <div class="container page-content">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h1>Notice Archive</h1>
        <a href="/login" class="btn btn-primary" data-link>Admin Login</a>
      </div>
      <p>Stay updated with the latest news and announcements from Excellence Academy.</p>
      
      <div id="notices-list" class="notice-archive">
        <p>Loading notices...</p>
      </div>
    </div>
  `;
}
