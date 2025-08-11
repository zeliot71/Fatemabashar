let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Anthropologist','Ethnographic Researcher', 'Critical Analyst', 'Gender Expert', 'Academic Leader'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
 });

 const form = document.querySelector('form')
 {
    function sendEmail()
    {
            Email.send({
            SecureToken: "64b7ac34-fb7f-4454-b858-31fd962cf639",
            To: 'zihadsha701@gmail.com',
            From: 'zihadsha701@gmail.com',
            Subject: "This is the subject",
            Body: "And this is the body"
        }).then(
        message => alert(message)
        );
    }
 }

 form.addEventListener("submit",(e) =>{
     e.preventDefault();

function sendEmail() {
    const templateParams = {
        from_name: nameField.value,
        from_email: emailField.value,
        phone: phoneField.value || 'Not provided',
        subject: subjectField.value || 'Contact Form Submission',
        message: messageField.value,
        to_email: 'fatema.bashar@example.com' // Replace with actual email
    };
    
    // Show loading state
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate email sending (replace with actual email service)
    setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
        submitBtn.innerHTML = 'Send Message';
        submitBtn.disabled = false;
    }, 2000);
    
    // For actual implementation, use EmailJS or similar service:
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
        }, function(error) {
            alert('Sorry, there was an error sending your message. Please try again.');
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
        });
    */
}

// Form submit event
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            sendEmail();
        }
    });
}

// Resume Download Functionality
function downloadResume() {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // For now, we'll create a sample PDF URL
    // Replace this with the actual path to your resume PDF
    const resumeUrl = 'assets/Fatema_Bashar_Resume.pdf';
    
    link.href = resumeUrl;
    link.download = 'Fatema_Bashar_Resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // If PDF doesn't exist, show message
    link.onerror = function() {
        alert('Resume will be available soon. Please contact me directly for now.');
    };
}

// Add event listeners to all download CV buttons
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtns = document.querySelectorAll('.download-cv-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadResume();
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.pub-card, .conf-entry, .section-title').forEach(el => {
        observer.observe(el);
    });
    
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = this.querySelector('.btn-ripple');
            if (ripple) {
                ripple.style.width = '300px';
                ripple.style.height = '300px';
                setTimeout(() => {
                    ripple.style.width = '0';
                    ripple.style.height = '0';
                }, 400);
            }
        });
    });

});
});