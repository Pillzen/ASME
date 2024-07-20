document.querySelectorAll('.member').forEach(member => {
    member.addEventListener('mouseover', function() {
        const index = Array.from(this.parentNode.children).indexOf(this);
        document.querySelectorAll('.member').forEach((m, i) => {
            if (m !== this) {
                const distance = Math.abs(i - index);
                const scale = Math.max(0.7, 1 - distance * 0.1);
                const translateY = distance * 5;
                m.style.transform = `scale(${scale}) translateY(${translateY}px)`;
                m.style.zIndex = 10 - distance;
            }
        });
    });

    member.addEventListener('mouseout', function() {
        document.querySelectorAll('.member').forEach(m => {
            m.style.transform = '';
            m.style.zIndex = '';
        });
    });
});