const hamburger = document.getElementById('hamburger')
if (hamburger) {
    hamburger.addEventListener('click', function() {
        const content = document.getElementById('toggle-content');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}
