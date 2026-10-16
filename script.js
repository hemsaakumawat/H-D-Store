// 1. Login & Signup
function openAuthModal(tab = 'login') {
    document.getElementById('authModal').classList.add('active');
    document.getElementById('authOverlay').classList.add('active');
    switchAuthTab(tab);
}

function switchAuthTab(tab) {
    let login = tab === 'login';
    document.getElementById('authLoginForm').classList.toggle('active', login);
    document.getElementById('authSignupForm').classList.toggle('active', !login);
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.getElementById('authOverlay').classList.remove('active');
}

function handleAuthSubmit(event, type) {
    event.preventDefault();
    showToast(type === 'login' ? 'Login successful!' : 'Signup successful!');
    closeAuthModal();
}

// 2. Toast Message
function showToast(message) {
    alert(message);
}

// 3. Contact Form
function handleFormSubmit(event) {
    event.preventDefault();

    let data = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        occasion: document.getElementById('giftType').value,
        message: document.getElementById('userMessage').value
    };

    fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        // alert(data.message);
        document.getElementById('contactForm').reset();
    })
    .catch(() => alert('Network error! try again.'));
}
