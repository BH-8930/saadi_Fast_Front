document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.r-animate');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0 });

            items.forEach((el, i) => {
            el.style.transitionDelay = `${(i % 4) * 0.1}s`;
            observer.observe(el);
});

            var waterTexts = [
                'برخی دره‌ها و کانال‌های سطح مریخ با فرسایش ناشی از جریان آب سازگارند.',
                'برخی دهانه‌های مریخ نشانه‌هایی از دریاچه‌های باستانی دارند.',
                'برخی کانی‌های موجود در سنگ‌های مریخ در ارتباط با آب شکل گرفته یا تغییر کرده‌اند.'
            ];

            var waterPoints = document.querySelectorAll('.water_point');
            var waterInfoText = document.getElementById('waterInfoText');

            waterPoints.forEach(function(point) {
                point.addEventListener('click', function() {
                    var index = parseInt(this.getAttribute('data-index'));

                    waterPoints.forEach(function(p) {
                        p.classList.remove('active');
                    });
                    this.classList.add('active');

                    waterInfoText.classList.remove('show');

                    setTimeout(function() {
                        waterInfoText.textContent = waterTexts[index];
                        waterInfoText.classList.add('show');
                    }, 200);
                });
            });

            var slider = document.getElementById('compareSlider');
            var presentImg = document.getElementById('comparePresent');

            if (slider && presentImg) {
                slider.addEventListener('input', function() {
                    presentImg.style.opacity = this.value / 100;
                });
            }

            var climateTexts = [
                'جوّ مریخ در گذشته احتمالاً ضخیم‌تر از امروز بوده است.',
                'برخی شواهد نشان می‌دهند مریخ دوره‌هایی با شرایط گرم‌تر داشته است.',
                'شرایط گذشته می‌توانسته در برخی دوره‌ها امکان وجود آب مایع را روی سطح فراهم کند.'
            ];

            var climateBtns = document.querySelectorAll('.climate_btn');
            var climateInfoText = document.getElementById('climateInfoText');

            climateBtns.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var index = parseInt(this.getAttribute('data-index'));

                    climateBtns.forEach(function(b) {
                        b.classList.remove('active');
                    });
                    this.classList.add('active');

                    climateInfoText.classList.remove('show');

                    setTimeout(function() {
                        climateInfoText.textContent = climateTexts[index];
                        climateInfoText.classList.add('show');
                    }, 200);
                });
            });
        });


const analyzeButton = document.getElementById("analyzeSample");

if (analyzeButton) {

    const carbonResult = document.getElementById("carbonResult");
    const organicResult = document.getElementById("organicResult");
    const lifeResult = document.getElementById("lifeResult");

    const carbonMark = document.getElementById("carbonMark");
    const organicMark = document.getElementById("organicMark");
    const lifeMark = document.getElementById("lifeMark");

    const items = document.querySelectorAll(".analysis_item");

    analyzeButton.addEventListener("click", () => {

        analyzeButton.disabled = true;
        analyzeButton.innerHTML = "در حال بررسی...";

        setTimeout(() => {

            items[0].classList.add("found");

            carbonResult.textContent = "شناسایی شد";
            carbonMark.textContent = "✓";

        }, 700);


        setTimeout(() => {

            items[1].classList.add("found");

            organicResult.textContent = "شناسایی شد";
            organicMark.textContent = "✓";

        }, 1500);


        setTimeout(() => {

            items[2].classList.add("found");

            lifeResult.textContent = "هنوز مشخص نیست";
            lifeMark.textContent = "?";

            analyzeButton.innerHTML = "بررسی دوباره ↗";
            analyzeButton.disabled = false;

        }, 2300);

    });

}