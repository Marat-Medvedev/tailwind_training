const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('hamburger-menu');
const words = ['products.', 'business.', 'lives.'];

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

let textAnimation = gsap.from('.text', {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power3.out'
});

let cursorAnimation = gsap.to('.text-cursor', {
    opacity: 0,
    ease: 'power2.inOut',
    repeat: -1
});

let boxAnimation = gsap.timeline();

boxAnimation.to('.text-box', {
    duration: 0.5,
    width: '100%',
    delay: 0.5,
    ease: 'power4.inOut'
})
    .to('.text-box', {
        duration: 1,
        height: '3rem',
        ease: 'elastic.out',
        onComplete: () => wordAnimation.play()
    });

let wordAnimation = gsap.timeline({repeat: -1}).pause();

words.forEach(word => {
    let tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
    });
    tl.to('.text-changing', {
        duration: 1,
        text: word
    });
    wordAnimation.add(tl);
});

//swiper

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});