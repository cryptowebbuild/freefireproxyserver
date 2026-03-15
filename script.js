document.addEventListener('DOMContentLoaded', () => {
    
    // ১. Mobile Menu Toggle Logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');

    if (btn && menu && icon) {
        btn.addEventListener('click', () => {
            if (menu.style.maxHeight && menu.style.maxHeight !== '0px') {
                menu.style.maxHeight = '0px';
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
            } else {
                menu.style.maxHeight = menu.scrollHeight + 'px';
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
            }
        });
    }

    // ২. FAQ Auto-Close Logic
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(targetDetail => {
        targetDetail.addEventListener('click', () => {
            detailsElements.forEach(detail => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });

    // ৩. Global Anti-Adblock System (পুরো সাইটের জন্য)
    const fakeAd = document.createElement('div');
    fakeAd.className = 'adsbox ad-placement doubleclick ad-banner';
    fakeAd.style.display = 'block';
    fakeAd.style.position = 'absolute';
    fakeAd.style.top = '-9999px';
    fakeAd.style.left = '-9999px';
    document.body.appendChild(fakeAd);

    setTimeout(function() {
        const modal = document.getElementById('anti-adblock-modal');
        if (modal) { // পেজে যদি Anti-Adblock Modal থাকে, তবেই কাজ করবে
            if (fakeAd.offsetHeight === 0 || window.getComputedStyle(fakeAd).display === 'none') {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // স্ক্রলিং বন্ধ করে দেবে
            }
        }
        fakeAd.remove(); 
    }, 600);

});
