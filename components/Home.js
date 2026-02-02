export function Home() {
  return `
    <div class="carousel-container">
      <div class="carousel-slide active" style="background-image: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80');">
        <div class="carousel-content">
          <h1>Welcome to Excellence Academy</h1>
          <p>Empowering students to achieve greatness.</p>
          <a href="/admissions" class="btn btn-primary" data-link>Apply Now</a>
        </div>
      </div>
      <div class="carousel-slide" style="background-image: url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80');">
        <div class="carousel-content">
          <h1>World-Class Education</h1>
          <p>Nurturing curiosity and critical thinking.</p>
          <a href="/academics" class="btn btn-primary" data-link>Explore Academics</a>
        </div>
      </div>
      <div class="carousel-slide" style="background-image: url('https://images.unsplash.com/photo-1427504743050-dad446326749?w=1600&q=80');">
        <div class="carousel-content">
          <h1>Holistic Development</h1>
          <p>Sports, Arts, and Leadership programs.</p>
          <a href="/gallery" class="btn btn-primary" data-link>View Campus Life</a>
        </div>
      </div>
      
      <button class="carousel-control prev" aria-label="Previous Slide">❮</button>
      <button class="carousel-control next" aria-label="Next Slide">❯</button>
    </div>
    
    <section class="container" style="padding: 4rem 1rem; text-align: center;">
      <h2>Why Choose Us?</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
        <div class="feature-card">
          <h3>Experienced Faculty</h3>
          <p>Learn from the best educators committed to your success.</p>
        </div>
        <div class="feature-card">
          <h3>Modern Facilities</h3>
          <p>State-of-the-art labs, library, and sports complex.</p>
        </div>
        <div class="feature-card">
          <h3>Holistic Development</h3>
          <p>Focus on academic, physical, and moral growth.</p>
        </div>
      </div>
    </section>
  `;
}
