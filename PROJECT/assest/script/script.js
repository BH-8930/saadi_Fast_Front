const image = document.querySelector(".hero_img");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;
    const progress = Math.min(scroll / 600, 1);

    image.style.transform = `
        translateY(${progress * 300}px)
        scale(${1 - progress * 0.12})
    `;
});

const introPara = document.querySelector(".intro_para");

const paraObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.3 });

paraObserver.observe(introPara);

const introVideo = document.querySelector(".intro_video_section");

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.4 });

videoObserver.observe(introVideo);

const earthMoonPara = document.querySelector(".earth_moon_para");

const earthMoonObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.3 });

earthMoonObserver.observe(earthMoonPara);

const earthEl = document.querySelector(".earth");
const moonEl = document.querySelector(".moon");

const celestialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.4 });

celestialObserver.observe(earthEl);
celestialObserver.observe(moonEl);

const planetSection = document.querySelector(".planets_section");

const planetSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
}, { threshold: 0.3})

planetSectionObserver.observe(planetSection)

const spaceItems = document.querySelectorAll(".space_item");

const spaceTitle = document.querySelector("#spaceTitle");
const spaceText = document.querySelector("#spaceText");

const defaultTitle = " جهان را کشف کنید";

const defaultText =
    "برای کشف یکی از شگفت‌انگیزترین پدیده‌های کیهان، یکی از نقاط مدار را انتخاب کنید.";


spaceItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        spaceTitle.style.opacity = "0";
        spaceText.style.opacity = "0";

        setTimeout(() => {

            spaceTitle.textContent =
                item.dataset.title;

            spaceText.textContent =
                item.dataset.text;

            spaceTitle.style.opacity = "1";
            spaceText.style.opacity = "1";

        }, 150);

    });


    item.addEventListener("mouseleave", () => {

        spaceTitle.style.opacity = "0";
        spaceText.style.opacity = "0";

        setTimeout(() => {

            spaceTitle.textContent =
                defaultTitle;

            spaceText.textContent =
                defaultText;

            spaceTitle.style.opacity = "1";
            spaceText.style.opacity = "1";

        }, 150);

    });

});

const dsiPara = document.querySelector(".dsi_para");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

observer.observe(dsiPara);

const deepSpace = document.querySelector(".deep_space");

const deepSpaceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

deepSpaceObserver.observe(deepSpace);

const finalText = document.querySelector(".final_text");

const finalTextObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

finalTextObserver.observe(finalText);

const stories = document.querySelector(".stories");

const storiesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

storiesObserver.observe(stories);