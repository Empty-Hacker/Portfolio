document.addEventListener('DOMContentLoaded', function() {
    const dp = document.querySelector('.dp');
    const img = dp.querySelector('img');
    
    dp.classList.add('parallax');
    
    dp.addEventListener('mousemove', function(e) {
        const rect = dp.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        
        const xRotate = y/(rect.height/2) * 10; // Max 10 degree rotation
        const yRotate = -x/(rect.width/2) * 10; // Max 10 degree rotation
        
        img.style.transform = `
            translateZ(50px)
            rotateX(${xRotate}deg)
            rotateY(${yRotate}deg)
        `;
    });
    
    dp.addEventListener('mouseleave', function() {
        img.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
    });
});
