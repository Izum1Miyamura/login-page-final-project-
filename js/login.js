// Demo credentials (in a real application, this would be handled server-side)
const DEMO_CREDENTIALS = {
    username: 'student'
};

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const rememberMe = document.getElementById('remember').checked;
    const errorMessage = document.getElementById('error-message');
    
    // Basic validation
    if (!username) {
        showError('Please enter your Student ID');
        return false;
    }
    
    // Check username (demo purposes only)
    if (username === DEMO_CREDENTIALS.username) {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        // Handle remember me
        if (rememberMe) {
            localStorage.setItem('rememberedUser', username);
        } else {
            localStorage.removeItem('rememberedUser');
        }
        
        // Redirect to home page
        window.location.href = 'pages/home.html';
    } else {
        showError('Invalid Student ID');
        shakeLoginBox();
    }
    
    return false;
}

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.opacity = '1';
}

function shakeLoginBox() {
    const loginBox = document.querySelector('.login-box');
    loginBox.classList.add('shake');
    setTimeout(() => {
        loginBox.classList.remove('shake');
    }, 500);
}

// Check for remembered user
document.addEventListener('DOMContentLoaded', function() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        document.getElementById('username').value = rememberedUser;
        document.getElementById('remember').checked = true;
    }
}); 