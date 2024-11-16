document.addEventListener('DOMContentLoaded', function () {
    // Функция для получения следующего изображения
    function getNextImage(currentSrc, imagePaths) {
        const currentIndex = imagePaths.indexOf(currentSrc);
        const nextIndex = (currentIndex + 1) % imagePaths.length;
        return imagePaths[nextIndex];
    }

    // Проверяем, находимся ли мы на странице index.html
    if (window.location.pathname.endsWith('index.html')) {
        const images = document.querySelectorAll('.imaidges img');

        const imagePaths = [
            [ // Для первого изображения (index 0)
                'static/images/image 1.png',
                'static/images/image 2.png'
            ],
            [ // Для второго изображения (index 1)
                'static/images/image 10.png',
                'static/images/image 11.png'
            ],
            [ // Для третьего изображения (index 2)
                'static/images/image 15.png',
                'static/images/image 13.png'
            ]
        ];

        images.forEach((img, index) => {
            img.addEventListener('click', function () {
                const currentSrc = this.src;
                const newSrc = getNextImage(currentSrc, imagePaths[index]);
                this.src = newSrc;
            });
        });
    }

    // Проверяем, находимся ли мы на странице herous.html
    if (window.location.pathname.endsWith('herous.html')) {
        const firstImage = document.querySelector('.imaidges img');

        const imagePaths = [
            'static/images/image 16.png',
            'static/images/image 17.png',
            'static/images/image 18.png',
            'static/images/image 19.png',
            'static/images/image 20.png',
            'static/images/image.png'
        ];

        firstImage.addEventListener('click', function () {
            const currentSrc = this.src;
            const newSrc = getNextImage(currentSrc, imagePaths);
            this.src = newSrc;
        });
    }
});