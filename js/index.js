// light dark mode
const toggleSwitch = document.querySelector('body');
function switchTheme(e) {
    if (e.target.checked) {
        toggleSwitch.setAttribute('data-theme', 'dark');
    }
    else {
        toggleSwitch.setAttribute('data-theme', 'light');
    }

}




