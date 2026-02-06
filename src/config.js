export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

console.log("🔌 API Configured to:", API_BASE_URL || "Relative Path (Same Domain)");

// If VITE_API_URL is set (in production), it will be used.
// If not (development), it defaults to '' which uses the local proxy in vite.config.js.
