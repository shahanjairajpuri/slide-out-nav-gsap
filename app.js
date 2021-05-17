let card = document.getElementById('activator');

let tl = gsap.timeline({default: {ease: 'power2.inOut'}});
let toggle = false;

tl.to('.activator', {
    background: '#805ad5',
    'borderRadius': '5em 0 0 5em'
});

tl.to('nav', {
    'clipPath' : 'ellipse(100% 100% at 50% 50%)'
},'-=.5s')

tl.to('nav img', {
    opacity:1,
    transform: 'translateX(0)',
    stagger: .05
},'-=.5s')

tl.pause();

card.addEventListener('click', ()=>{
    toggle = !toggle;
    if(toggle ? tl.play() : tl.reverse());
})
