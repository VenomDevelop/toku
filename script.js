const getThemeFromLocalStorage = () => {
    let theme = localStorage.getItem('theme');
    return theme ? theme : 'light';
};

let currentTheme = getThemeFromLocalStorage();

const applyTheme = (theme) => {
    document.body.setAttribute("class", theme);
    localStorage.setItem('theme', theme);
};

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
});
