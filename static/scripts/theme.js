if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.querySelector('html').setAttribute('data-theme-dark', true);
  localStorage.theme = 'dark';
} else {
  document.querySelector('html').removeAttribute('data-theme-dark');
  localStorage.theme = 'light';
}
