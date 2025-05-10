// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    event.target.style.backgroundColor = getRandomColor();
});

document.getElementById('hoverBox').addEventListener('mouseenter', (e) => {
    e.target.style.transform = 'scale(1.1)';
});

document.getElementById('hoverBox').addEventListener('mouseleave', (e) => {
    e.target.style.transform = 'scale(1)';
});

document.getElementById('keyInput').addEventListener('keyup', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

function handleSecret() {
    alert('🎉 You found the secret!');
}

// Interactive Tabs
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        
        // Remove active class
        document.querySelectorAll('.tab-btn, .tab-content').forEach(el => {
            el.classList.remove('active');
        });
        
        // Add active class
        tab.classList.add('active');
        document.getElementById(`tab${tabId}`).classList.add('active');
    });
});

// Form Validation
const form = document.getElementById('validationForm');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Username validation
    if (username.value.trim() === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    // Email validation
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email');
    } else {
        showSuccess(email);
    }

    // Password validation
    if (password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters');
    } else {
        showSuccess(password);
    }
}

function showError(input, message) {
    const feedback = input.nextElementSibling;
    feedback.textContent = message;
    input.style.borderColor = '#ef4444';
}

function showSuccess(input) {
    const feedback = input.nextElementSibling;
    feedback.textContent = '';
    input.style.borderColor = '#22c55e';
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}