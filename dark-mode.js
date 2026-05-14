function applyColorSchemePreference() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedPreference = localStorage.getItem('colorSchemePreference');

  if (storedPreference === 'dark' || (!storedPreference && prefersDarkMode)) {
    document.getElementById('stylesheet').setAttribute('href', 'dark.css');
    document.getElementById('toggleSwitch').checked = true;
  }
}

document.getElementById('toggleSwitch').addEventListener('change', function() {
  if (this.checked) {
    document.getElementById('stylesheet').setAttribute('href', 'dark.css');
    localStorage.setItem('colorSchemePreference', 'dark');
  } else {
    document.getElementById('stylesheet').setAttribute('href', 'light.css');
    localStorage.setItem('colorSchemePreference', 'light');
  }
});

applyColorSchemePreference();
