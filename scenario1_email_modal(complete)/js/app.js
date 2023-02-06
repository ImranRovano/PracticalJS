
// window.onload is used for normal website. init functions are usually used for single page websites
window.onload = function () {

    // to keep track of email modal when open and close
    let emailState = false;
    
    // target entire modal
    let emailModal  = document.getElementsByClassName('email-modal')[0];

    // target the X to close modal
    let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];
    
    // targets the input field where user types in email
    let emailInput = document.getElementsByClassName('email-modal__input')[0];
    
    // targets the send button
    let emailButton = document.getElementsByClassName('email-modal__button')[0];

    let thankContainer = document.getElementsByClassName('email-thank')[0];

    let declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0];

    // uses Regex(character pattern search) to verify if user input a proper email
    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test(email)
    }

    let showModal = () => {
        if(emailState == false) {
            // adds element with the class name in parenthasis
            emailModal.classList.add('email-modal--visible')
            //console.log('mouse left')
            emailState = true;
        }
    }

    let closeModal = () => {
        //console.log('clicked');
        emailModal.classList.remove('email-modal--visible');
    }

    let addErrors = () => {
        document.getElementsByClassName
        ('email-modal__form-group')[0].classList.add
        ('email-modal__form-group--error')
        document.getElementsByClassName
        ('email-modal__error-message')[0].classList.add
        ('email-modal__error-message--active')
    }
    
    let removeErrors = () => {
        document.getElementsByClassName
        ('email-modal__form-group')[0].classList.remove
        ('email-modal__form-group--error')
        document.getElementsByClassName
        ('email-modal__error-message')[0].classList.remove
        ('email-modal__error-message--active')
    }

    let showThankMessage = () => {
        thankContainer.classList.add('email-thank--success');
        setTimeout(() => {
            closeModal();
        }, 3000);
    };

    // trigger when clickong on the X to close
    closeButton.addEventListener('click', () => {
        closeModal();
    });
    //console.log(closeModal);

    emailInput.addEventListener('click', () => {
        removeErrors();
    });

    // triggers the click of the send button
    emailButton.addEventListener('click', () => {
        if(emailIsValid(emailInput.value)) {
            showThankMessage();
            //console.log(emailInput.value)
        } else {
            addErrors();
            //alert('this is not a valid email')
        } 
    });

    declineOffer.addEventListener('click', () => {
        closeModal();
    });

    // trigger for mouse leaving the webpage
    //use "document.body" for firefox
    document.body.addEventListener('mouseleave', () => {
        showModal();
    });

    //console.log(emailModal);


    console.log(document);
}