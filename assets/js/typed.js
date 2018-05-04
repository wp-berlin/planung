var typed = new Typed('#intro', {
    typeSpeed: 60,
    backSpeed: 20,
    showCursor: false,
    autoInsertCss: false,
    loop: true,
    loopCount: Infinity,
    strings: [
        'WordPress Meetup for Devs',
        'WordPress Meetup for Admins',
        'WordPress Meetup for Web Developers',
        'WordPress Meetup for Dev Ops',
        'WordPress Meetup for Front End Developers',
        'WordPress Meetup <span>Tech Edition</span>',
    ],
    smartBackspace: true,
    // pseudo onStart; onStart does not fire and this fires only one for smartBackspace
    preStringTyped: function () {
        typed.el.classList.add('has-cursor');
    },
    onComplete: function (typed) {
        typed.el.children[0].classList.add('intro-highlight');
        setTimeout(function () {
            typed.el.classList.remove('has-cursor');
        }, 2000);
    }
});
