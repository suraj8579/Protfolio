document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('messageSent').classList.remove('hidden');
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
