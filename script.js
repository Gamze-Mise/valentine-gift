document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const container = document.querySelector(".buttons");
    const yesBtn = document.querySelector(".btn-yes");
    const noBtn = document.getElementById("noBtn");

    if (!card || !container || !yesBtn || !noBtn) return;

    // Mektup açılma fonksiyonu
    let isOpened = false;

    function openLetter() {
        if (isOpened) return;
        isOpened = true;
        card.classList.remove("closed");
        card.classList.add("opened");
        card.style.cursor = "default";

        // Butonların pozisyonlarını ayarla (animasyon bittikten sonra)
        setTimeout(() => {
            lockButtonsToInitialLayout();
        }, 900);
    }

    // Mektup tıklama event'i
    card.addEventListener("click", (e) => {
        // Butonlara tıklama mektup açmayı tetiklemesin
        if (e.target.closest('.btn-yes') || e.target.closest('.btn-no')) {
            return;
        }
        if (!isOpened) {
            openLetter();
        }
    });

    const escapeSteps = (d) => [
        { dx: +d, dy: -d },
        { dx: 0, dy: +d },
        { dx: -d, dy: -d },
        { dx: +d, dy: +d },
        { dx: 0, dy: -d },
        { dx: 0, dy: +d }
    ];

    let step = -1;
    let distance = 80;
    let locked = false;

    function computeDistance() {
        const rect = noBtn.getBoundingClientRect();
        const isMobile = window.innerWidth <= 480;
        const baseDistance = isMobile ? 50 : 80;
        return Math.max(baseDistance, Math.round(Math.min(rect.width, rect.height) * 1.2));
    }

    function lockButtonsToInitialLayout() {
        // Mektup açılmadıysa buton pozisyonlarını ayarlama
        if (!isOpened) return;

        // Önce butonları normal flexbox pozisyonunda bırak
        [yesBtn, noBtn].forEach(btn => {
            btn.style.position = "";
            btn.style.left = "";
            btn.style.top = "";
            btn.style.margin = "";
        });

        // Kısa bir gecikme ile pozisyonları hesapla (flexbox yerleşimi için)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const containerRect = container.getBoundingClientRect();
                const yesRect = yesBtn.getBoundingClientRect();
                const noRect = noBtn.getBoundingClientRect();

                const yesLeft = yesRect.left - containerRect.left;
                const yesTop = yesRect.top - containerRect.top;
                const noLeft = noRect.left - containerRect.left;
                const noTop = noRect.top - containerRect.top;

                const neededHeight = Math.max(
                    yesTop + yesRect.height,
                    noTop + noRect.height
                );
                container.style.height = `${Math.ceil(neededHeight)}px`;

                [yesBtn, noBtn].forEach(btn => {
                    btn.style.position = "absolute";
                    btn.style.margin = "0";
                });

                yesBtn.style.left = `${yesLeft}px`;
                yesBtn.style.top = `${yesTop}px`;
                yesBtn.style.zIndex = "5";

                noBtn.style.left = `${noLeft}px`;
                noBtn.style.top = `${noTop}px`;
                noBtn.style.zIndex = "4";
                noBtn.style.transition = "transform 220ms ease";

                distance = computeDistance();
                applyCurrentStepTransform();
                locked = true;
            });
        });
    }

    function applyCurrentStepTransform() {
        if (step < 0) {
            noBtn.style.transform = "translate(0px, 0px)";
            return;
        }
        const steps = escapeSteps(distance);
        const { dx, dy } = steps[step];
        noBtn.style.transform = `translate(${dx}px, ${dy}px)`;
    }

    function moveNoButtonOneStep() {
        if (!isOpened) return;
        if (!locked) lockButtonsToInitialLayout();

        const stepsCount = escapeSteps(distance).length;
        step = (step + 1) % stepsCount;
        applyCurrentStepTransform();
    }

    yesBtn.addEventListener("click", () => {
        step = -1;
        noBtn.style.transform = 'translate(0px, 0px)';
        setTimeout(() => {
            window.location.href = "./success.html";
        }, 100);
    });

    noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
    });

    noBtn.addEventListener("mouseenter", () => {
        moveNoButtonOneStep();
    });

    // İlk yüklemede mektup kapalı durumda
    card.classList.add("closed");

    let resizeRAF = null;
    window.addEventListener("resize", () => {
        if (!isOpened) return;
        cancelAnimationFrame(resizeRAF);
        resizeRAF = requestAnimationFrame(() => lockButtonsToInitialLayout());
    });
});
