export function Login() {
    return `
    <div class="container page-content" style="max-width: 400px;">
      <h1>Admin Login</h1>
      <form id="login-form" class="contact-form glass" style="padding: 2rem;">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" required>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%;">Login</button>
      </form>
    </div>
  `;
}
