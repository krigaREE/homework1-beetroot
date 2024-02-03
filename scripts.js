document.querySelectorAll('.panel').forEach(panel => {
    panel.addEventListener('mousemove', e => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width / 2);
        const y = e.clientY - rect.top - (rect.height / 2);


        const moveX = x * 0.05;
        const moveY = y * 0.05;
        panel.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    panel.addEventListener('mouseleave', () => {
        panel.style.transform = 'none';
    });
});

document.querySelectorAll('.panel').forEach(panel => {
    panel.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top,
            centerX = rect.width / 2,
            centerY = rect.height / 2,
            deltaX = (x - centerX) / 50,
            deltaY = (y - centerY) / 50;

        panel.style.transform = `rotateY(${deltaX}deg) rotateX(${deltaY}deg)`;
    });

    panel.addEventListener('mouseleave', () => {
        panel.style.transform = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var githubPanel = document.getElementById('github-panel');
    githubPanel.addEventListener('click', function() {
        window.open('https://github.com/krigaREE', '_blank');
    });
});



