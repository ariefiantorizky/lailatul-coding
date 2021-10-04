const menu = new Swiper(".menu", {
    slidesPerView: 2,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        480: {
            slidesPerView: 3,
        },

        850: {
            slidesPerView: 4,
        },

        990: {
            slidesPerView: 5,
        },
    },
});

const jadwal = new Swiper(".jadwal", {
    slidesPerView: 2,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        480: {
            slidesPerView: 3,
        },

        850: {
            slidesPerView: 4,
        },

        990: {
            slidesPerView: 5,
        },
    },
});

const event = new Swiper(".event", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination-number",
        type: "fraction",
    },
});

const galeri = new Swiper(".galeri", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        480: {
            slidesPerView: 2,
        },

        990: {
            slidesPerView: 3,
        },
    },
});