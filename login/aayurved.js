// script.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.login-container');
    const inputs = document.querySelectorAll('.interactive-input');
    const button = document.querySelector('.interactive-button');

    // Effect when cursor is over the login container
    container.addEventListener('mousemove', (event) => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;
        container.style.transform = `rotateX(${(y - 0.5) * 5}deg) rotateY(${(x - 0.5) * 5}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

    // Effects on input fields
    inputs.forEach(input => {
        input.addEventListener('mousemove', () => {
            input.style.boxShadow = '0 0 10px rgba(0, 121, 107, 0.5)';
        });
        input.addEventListener('mouseout', () => {
            input.style.boxShadow = 'none';
        });
    });

    // Effect on button
    button.addEventListener('mousemove', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});