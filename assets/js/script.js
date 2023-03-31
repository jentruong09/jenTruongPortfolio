// toggle icon nav
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    nav.classList.toggle('active')
}


// scroll function
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 50;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)


    // remove toggle icon and nav after clicking nav link
    menuIcon.classList.remove('bx-x')
    nav.classList.remove('active')
};