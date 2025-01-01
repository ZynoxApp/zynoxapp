document.querySelectorAll('.faq').forEach(faq => {
    const question = faq.querySelector('.question');
    const toggleBtn = faq.querySelector('.toggle-btn');

    question.addEventListener('click', () => {
        const isOpen = faq.classList.contains('open');
        
        // Tüm açık olanları kapat
        document.querySelectorAll('.faq.open').forEach(openFaq => {
            openFaq.classList.remove('open');
        });

        // Şu anki tıklandığı aç/kapat
        if (!isOpen) {
            faq.classList.add('open');
        }
    });
});
