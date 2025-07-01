// AUTHENTICATION GUARD SCRIPT
window.addEventListener('DOMContentLoaded', () => {
  const auth = JSON.parse(localStorage.getItem('kasmo-auth'));

  // Block access to protected pages if not logged in
  const isLoginPage = window.location.pathname.includes('login.html');

  if (!auth?.loggedIn && !isLoginPage) {
    alert('Access denied. Please login first.');
    window.location.href = 'login.html';
  }
});
