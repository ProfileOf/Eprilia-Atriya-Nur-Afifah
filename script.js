const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// PDF Modal Controls for multiple PDFs
const pdfButtons = document.querySelectorAll('.open-pdf-btn');
const pdfModal = document.querySelector('#pdf-modal');
const closePdfBtn = document.querySelector('#close-pdf');
const pdfViewer = document.querySelector('#pdf-viewer');

if (pdfButtons.length > 0 && pdfModal && closePdfBtn && pdfViewer) {
    pdfButtons.forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const pdfUrl = btn.getAttribute('data-pdf');
            if (!pdfUrl) return;
            
            // Jika layar mobile/tablet, buka di tab baru agar responsive & support zoom/scroll bawaan device
            if (window.innerWidth <= 768) {
                window.open(pdfUrl, '_blank');
            } else {
                pdfViewer.src = pdfUrl;
                pdfModal.style.display = 'flex';
                setTimeout(() => {
                    pdfModal.classList.add('active');
                }, 10);
            }
        };
    });

    const closeModal = () => {
        pdfModal.classList.remove('active');
        setTimeout(() => {
            pdfModal.style.display = 'none';
            pdfViewer.src = '';
        }, 300);
    };

    closePdfBtn.onclick = closeModal;

    pdfModal.onclick = (e) => {
        if (e.target === pdfModal) {
            closeModal();
        }
    };
}