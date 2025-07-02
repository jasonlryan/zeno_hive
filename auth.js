// Authentication system for HIVE 3.0 workspace
(function () {
  // Check if user is authenticated
  function isAuthenticated() {
    const isAuth = sessionStorage.getItem("hive_authenticated") === "true";
    const authTime = localStorage.getItem("hive_auth_time");

    // Session expires after 24 hours
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (isAuth && authTime) {
      const timeDiff = Date.now() - parseInt(authTime);
      if (timeDiff > sessionDuration) {
        // Session expired
        logout();
        return false;
      }
      return true;
    }

    return false;
  }

  // Logout function
  function logout() {
    sessionStorage.removeItem("hive_authenticated");
    localStorage.removeItem("hive_auth_time");
    window.location.href = "login.html";
  }

  // Redirect to login if not authenticated
  function requireAuth() {
    // Skip auth check for login page
    if (window.location.pathname.includes("login.html")) {
      return;
    }

    if (!isAuthenticated()) {
      window.location.href = "login.html";
      return;
    }
  }

  // Add logout functionality to the header
  function addLogoutButton() {
    // Wait for DOM to be ready
    document.addEventListener("DOMContentLoaded", function () {
      const headerActions = document.querySelector(".header-actions");
      if (headerActions) {
        const logoutBtn = document.createElement("button");
        logoutBtn.className = "btn-secondary";
        logoutBtn.innerHTML = "🔒 Logout";
        logoutBtn.style.marginLeft = "12px";
        logoutBtn.onclick = logout;
        headerActions.appendChild(logoutBtn);
      }
    });
  }

  // Initialize authentication
  requireAuth();
  addLogoutButton();

  // Expose logout function globally
  window.hiveLogout = logout;
})();
