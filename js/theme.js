
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;

    if (!themeToggle) return;

    function setTheme(theme) {
        root.setAttribute('data-bs-theme', theme);

        const isLight = theme === 'light';

        themeToggle.setAttribute(
            'aria-label',
            isLight ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'
        );

        themeToggle.setAttribute(
            'title',
            isLight ? 'Mode terang' : 'Mode gelap'
        );
    }

    // Gunakan tema yang sudah tersimpan, atau mulai dari gelap.
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', function () {
        const currentTheme =
            root.getAttribute('data-bs-theme') || 'dark';

        const nextTheme =
            currentTheme === 'dark' ? 'light' : 'dark';

        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
    });
});
