let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.oneclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove(active);
};

const sr = ScrollReveal({
    distance : '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text',{delay:200,origin:'bottom'})
sr.reveal('.home-img',{delay:400,origin:'top'})
sr.reveal('.about-img',{delay:400,origin:'top'})
sr.reveal('.about-img',{delay:400,origin:'top'})
sr.reveal('.about-text',{delay:200,origin:'right'})
sr.reveal('.service-content ',{delay:100,origin:'top'})
sr.reveal('.center',{delay:200,origin:'bottom'})
sr.reveal('.cta ',{delay:200,origin:'leftx'})
sr.reveal('.resume-content',{delay:200,orgin:'top'})
sr.reveal('.contact-form',{delay:200,orgin:'bottom'})