document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    const toSignup = document.getElementById('toggle-to-signup');
    const toLogin = document.getElementById('toggle-to-login');

    // Function to swap forms
    const swapForms = (e) => {
        if(e) e.preventDefault();
        loginForm.classList.toggle('hidden');
        signupForm.classList.toggle('hidden');
    };

    // Just show Login and hide signup)
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // If both are hidden, show login. If one is open, close it.
        if (loginForm.classList.contains('hidden') && signupForm.classList.contains('hidden')) {
            loginForm.classList.remove('hidden');
        } else {
            loginForm.classList.add('hidden');
            signupForm.classList.add('hidden');
        }
    });

    // The Swappers
    toSignup.addEventListener('click', swapForms);
    toLogin.addEventListener('click', swapForms);
});

    //for changing the background in diff screensize
    const el = document.getElementById('landing');

    function updateBg() {
      if (window.innerWidth < 640) {
        el.style.backgroundImage = "url('/images/landing-portrait.jpg')";
      } else {
        el.style.backgroundImage = "url('/images/landing.jpg')";
      }
    }

    updateBg();
    window.addEventListener('resize', updateBg);


