/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')
      
const sendEmail = (e) =>{
    // alert("Thank you for your interest. I will get back to you shortly.")
    // console.log(contactName,contactEmail,contactProject,contactMessage)
  e.preventDefault()

  // Check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
    // Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    // Show message
    contactMessage.textContent = 'Write all the input fields 📩' 
  }else{
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm(`service_46h9jgp`,`template_bsb0mt2`,'#contact-form',`DoWMyCLt7lXjarpKR`)
      .then(() =>{
        // Show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent ✅'

        // Remove message after three seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000);

      }, (error) =>{
        alert('OOPS! SOMETHING HAS FAILED...', error)
      })

    // To clear the input field
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
  }
}
contactForm.addEventListener('submit', sendEmail)