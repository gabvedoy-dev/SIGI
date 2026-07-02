const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.tab');
const screens = document.querySelectorAll('.screen');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('active'));
    screens.forEach(screen => screen.classList.remove('active'));

    tab.classList.add('active');
    const target = document.getElementById(tab.dataset.screen);
    target.classList.add('active');
  });
});
