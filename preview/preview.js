// Highlight active icon & scroll to section
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Remove active from all
    icons.forEach(i => i.classList.remove('active'));
    // Add to clicked
    icon.classList.add('active');

    // Scroll to section if data-target exists
    const targetId = icon.getAttribute('data-target');
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Toggle sidebar visibility (for future use or collapsible behavior)
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
}

document.getElementById('toggleSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('expanded');
});
