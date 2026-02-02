import './style.css'
import { Navigation } from './components/Navigation.js'
import { NoticeBoard } from './components/NoticeBoard.js'
import { Footer } from './components/Footer.js'
import { Home } from './components/Home.js'
import { About } from './components/About.js'
import { Academics } from './components/Academics.js'
import { Admissions } from './components/Admissions.js'
import { Notices } from './components/Notices.js'
import { Contact } from './components/Contact.js'
import { Gallery } from './components/Gallery.js'
import { Login } from './components/Login.js'
import { Admin } from './components/Admin.js'
import { Results } from './components/Results.js'

const routes = {
  '/': Home,
  '/about': About,
  '/academics': Academics,
  '/admissions': Admissions,
  '/notices': Notices,
  '/contact': Contact,
  '/gallery': Gallery,
  '/login': Login,
  '/admin': Admin,
  '/results': Results
};

function router() {
  const path = window.location.pathname;
  let component = routes[path] || Home;

  // Protected Route Check
  if (path === '/admin' && !localStorage.getItem('token')) {
    navigateTo('/login');
    return;
  }

  // Render structure
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${Navigation()}
    ${component === Home ? NoticeBoard() : ''}
    <main id="main-content">
      ${component()}
    </main>
    ${Footer()}
  `;

  // Re-attach listeners after rendering
  attachListeners();

  // Attach Page Specific Listeners (Quick implementation)
  if (path === '/login') attachLoginListener();
  if (path === '/admin') attachAdminListener();
  if (path === '/contact') attachContactListener();
  if (path === '/results') attachResultListener();
}

function attachContactListener() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          alert('Message sent successfully!');
          e.target.reset();
        } else {
          alert('Failed to send message.');
        }
      } catch (err) {
        console.error(err);
        alert('Error sending message.');
      }
    });
  }
}

function attachResultListener() {
  const form = document.getElementById('result-form');
  const display = document.getElementById('result-display');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const rollNo = e.target.rollNo.value;

      try {
        const res = await fetch(`/api/results/${rollNo}`);
        const data = await res.json();

        if (data.data) {
          const student = data.data;
          const marks = student.marks; // Already an object in MongoDB!
          display.style.display = 'block';
          display.innerHTML = `
            <h3>Result for ${student.student_name} (Roll: ${student.roll_no})</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
              <tr><th style="text-align: left; border-bottom: 2px solid #ddd; padding: 0.5rem;">Subject</th><th style="text-align: right; border-bottom: 2px solid #ddd; padding: 0.5rem;">Marks</th></tr>
              ${Object.entries(marks).map(([subject, mark]) => `
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #eee;">${subject}</td><td style="text-align: right; padding: 0.5rem; border-bottom: 1px solid #eee;">${mark}</td></tr>
              `).join('')}
            </table>
          `;
        } else {
          display.style.display = 'block';
          display.innerHTML = '<p style="color: red;">Result not found for this Roll Number.</p>';
        }
      } catch (err) {
        console.error(err);
        alert('Error fetching result.');
      }
    });
  }
}

function attachLoginListener() {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;

      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();

        if (data.token) {
          localStorage.setItem('token', data.token);
          alert('Login Successful!');
          navigateTo('/admin');
        } else {
          alert('Login Failed: ' + data.message);
        }
      } catch (err) {
        console.error(err);
        alert('Error logging in');
      }
    });
  }
}

function attachAdminListener() {
  const noticeForm = document.getElementById('notice-form');
  if (noticeForm) {
    noticeForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const date = e.target.date.value;
      const content = e.target.content.value;

      try {
        const res = await fetch('/api/notices', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, date, content })
        });

        if (res.ok) {
          alert('Notice Posted Successfully!');
          e.target.reset();
        } else {
          alert('Failed to post notice');
        }
      } catch (err) {
        console.error(err);
        alert('Error posting notice');
      }
    });
  }

  const resultForm = document.getElementById('upload-result-form');
  if (resultForm) {
    resultForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('/api/results', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (res.ok) {
          alert('Result Uploaded Successfully!');
          e.target.reset();
        } else {
          const err = await res.json();
          alert('Failed to upload result: ' + (err.error || 'Unknown error'));
        }
      } catch (err) {
        console.error(err);
        alert('Error uploading result');
      }
    });
  }
}

function navigateTo(url) {
  window.history.pushState(null, null, url);
  clearInterval(carouselInterval); // Stop carousel when leaving page
  router();
}

function attachListeners() {
  // Mobile Menu Logic
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Intercept link clicks for SPA feel
  document.querySelectorAll('a').forEach(link => {
    // Check if it's an internal link
    if (link.host === window.location.host && !link.getAttribute('target')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.getAttribute('href'));
        window.scrollTo(0, 0); // Scroll to top
      });
    }
  });

  // Start Carousel if on Home page
  if (window.location.pathname === '/') {
    initCarousel();
  }
}

let carouselInterval;

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  let currentSlide = 0;

  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Event Listeners
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  // Auto-play
  function startInterval() {
    carouselInterval = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(carouselInterval);
    startInterval();
  }

  startInterval();
}


// Handle browser back/forward buttons
window.addEventListener('popstate', router);

// Initial render
document.addEventListener('DOMContentLoaded', router);

