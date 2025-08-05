document.addEventListener('DOMContentLoaded', function () {
    const switcher = document.querySelector('.lang-switcher');
    if (!switcher) return;

    const button = document.getElementById('lang-switcher-button');
    const dropdown = document.getElementById('lang-switcher-dropdown');

    button.addEventListener('click', function (event) {
        event.stopPropagation();
        switcher.classList.toggle('open');
    });

    window.addEventListener('click', function (event) {
        if (switcher.classList.contains('open')) switcher.classList.remove('open');
    });
});