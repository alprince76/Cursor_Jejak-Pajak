// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Animations for hero content
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('animate');
        document.querySelector('.hero-image').classList.add('animate');
    }, 200);

    // Play button hover effect
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
                alert('Video akan diputar');
            }, 300);
        });
    }

    // Parallax effect for background circles
    const circles = document.querySelectorAll('.circle');
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        circles.forEach((circle, index) => {
            const intensity = (index + 1) * 20;
            const directionX = index % 2 === 0 ? 1 : -1;
            const directionY = index % 3 === 0 ? 1 : -1;
            
            circle.style.transform = `translate(${directionX * x * intensity}px, ${directionY * y * intensity}px)`;
        });
    });

    // Floating animation for info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
        card.style.animation = `float ${3 + index * 0.2}s ease-in-out infinite alternate ${index * 0.2}s`;
    });

    // Create ripple effect for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Laptop screen subtle animation
    const laptopScreen = document.querySelector('.laptop-screen');
    if (laptopScreen) {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            
            // Subtle rotation effect based on mouse position
            laptopScreen.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
        });
    }
}); 