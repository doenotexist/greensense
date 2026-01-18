const ctaButtons = document.querySelectorAll('.cta');

ctaButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (this === ctaButtons[0]) {
            const signUpSection = document.querySelector('.signup-form');
      signUpSection.scrollIntoView({ behavior: 'smooth' });
    }
    else if (this === ctaButtons[1]) {
      console.log('Sign up form would open here');
         }
  });
});
