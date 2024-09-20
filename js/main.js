/* SHOW MENU */

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* MENU SHOW */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */
function shadowHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('shadow-header')
    else header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* EMAIL */

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_d1vsa4g','template_2s53c0b','#contact-form','TeOg9y6B9MtHEeGME').then(() => {
        contactMessage.textContent = 'Message sent successfully ✅'
        
        setTimeout(() => {
            contactMessage.textContent = ''}, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'An error occurred, please try again later ❌'

    }   )
    

}

contactForm.addEventListener('submit', sendEmail)


/* SHOW SCROLL UP */

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })

}

window.addEventListener('scroll', scrollActive) 