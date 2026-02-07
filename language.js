let currentLanguage = 'tr';

function detectBrowserLanguage() {
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();

    if (browserLang.includes('tr')) return 'tr';
    if (browserLang.includes('en')) return 'en';
    if (browserLang.includes('cs')) return 'cs';
    return 'en';
}

function getInitialLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'tr' || savedLang === 'en' || savedLang === 'cs')) {
        return savedLang;
    }
    return detectBrowserLanguage();
}

function toggleLanguageMenu() {
    const langMenu = document.getElementById('langMenu');
    if (langMenu) {
        langMenu.classList.toggle('show');
    }
}

function changeLanguage(lang) {
    if (lang !== 'tr' && lang !== 'en' && lang !== 'cs') return;

    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageContent(lang);

    const langMenu = document.getElementById('langMenu');
    if (langMenu) {
        langMenu.classList.remove('show');
    }
}

function updatePageContent(lang) {
    if (!translations || !translations[lang]) return;

    const t = translations[lang];
    const headerName = document.getElementById('headerName');

    if (headerName) {
        const urlParams = new URLSearchParams(window.location.search);
        const nameParam = urlParams.get('name');

        if (nameParam) {
            const decodedName = decodeURIComponent(nameParam);
            const capitalizedName = decodedName.charAt(0).toUpperCase() + decodedName.slice(1);
            headerName.textContent = `${t.headerPrefix} ${capitalizedName},`;
        } else {
            headerName.textContent = `${t.headerPrefix},`;
        }
    }

    const messageLines = document.querySelectorAll('.message-line');
    if (messageLines.length >= 2) {
        messageLines[0].textContent = t.message1;
        messageLines[1].textContent = t.message2;
    }

    const yesBtn = document.querySelector('.btn-yes');
    const noBtn = document.getElementById('noBtn');
    if (yesBtn) yesBtn.textContent = t.yesButton;
    if (noBtn) noBtn.textContent = t.noButton;

    const successTitle = document.querySelector('.success-title');
    const successSubtitle = document.querySelector('.success-subtitle');
    const loveMessage = document.querySelector('.love-message');
    if (successTitle) successTitle.textContent = t.successTitle;
    if (successSubtitle) successSubtitle.textContent = t.successSubtitle;
    if (loveMessage) loveMessage.textContent = t.loveMessage;

    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        const isSuccessPage = window.location.pathname.includes('success') || document.querySelector('.success-page');
        const titleText = isSuccessPage ? t.successPageTitle : t.pageTitle;
        pageTitle.textContent = titleText;
        document.title = titleText;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    currentLanguage = getInitialLanguage();
    document.documentElement.lang = currentLanguage;
    updatePageContent(currentLanguage);

    document.addEventListener('click', (e) => {
        const langBtn = document.getElementById('langBtn');
        const langMenu = document.getElementById('langMenu');
        if (langMenu && langBtn && !langBtn.contains(e.target) && !langMenu.contains(e.target)) {
            langMenu.classList.remove('show');
        }
    });
});
