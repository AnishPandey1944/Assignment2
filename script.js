document.addEventListener('DOMContentLoaded', () => {
    const darkModeSetting = localStorage.getItem('darkMode');
    if (darkModeSetting === 'true') {
      document.body.classList.add('dark-mode');
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
      });
    }
  });
  