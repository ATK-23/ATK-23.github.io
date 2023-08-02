const toggleSwitch = document.getElementById('toggleSwitch');
const stylesheet = document.getElementById('stylesheet');

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme() {
  if (toggleSwitch.checked) {
    // Change to dark mode
    stylesheet.href = 'dark.css';
  } else {
    // Change to light mode
    stylesheet.href = 'light.css';
  }
}