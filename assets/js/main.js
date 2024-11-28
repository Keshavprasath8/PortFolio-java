/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/*===== MENU HIDDEN =====*/
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
 }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('blur-header') 
                      : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
   contactMessage.classList.remove('color-blue')
   contactMessage.classList.add('color-red')
   contactMessage.textContent = 'Write all the input fields 📩' 
 }else{
   emailjs.sendForm('service_fryc9eg','template_kr3jj4t','#contact-form','EuPNuu0p0GXP8125Z')
      .then(() =>{
         contactMessage.textContent = 'Message sent successfully ✅'
         setTimeout(() =>{
            contactMessage.textContent = ''
         }, 5000);

      }, (error) =>{
         alert('OOPS! SOMETHING HAS FAILED...', error)
       })

    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
}
}

contactForm.addEventListener('submit', sendEmail)
console.log(contactForm)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			   sectionTop = current.offsetTop - 58,
			   sectionId = current.getAttribute('id'),
			   sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})