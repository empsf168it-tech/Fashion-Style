/* ==========================================================================
   AURA STUDIO — JS CONTROLLER
   Custom magnetic cursor, Web Audio soundscape, 3D tilt, filters & modals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. CUSTOM MAGNETIC CURSOR
     ------------------------------------------------------------------------ */
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (cursorDot && cursorRing && window.innerWidth > 991) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const hoverables = document.querySelectorAll('a, button, .mn-card-panel, .mn-arrival-card, .mn-look-card, .mn-category-card, .mn-journal-card, input');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ------------------------------------------------------------------------
     2. HEADER SCROLL & MOBILE DRAWER
     ------------------------------------------------------------------------ */
  const header = document.getElementById('mnHeader');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
      if (backToTopBtn) backToTopBtn.classList.add('active');
    } else {
      header.classList.remove('scrolled');
      if (backToTopBtn) backToTopBtn.classList.remove('active');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawer = document.getElementById('mnDrawer');
  const drawerLinks = document.querySelectorAll('.mn-drawer-link');

  if (hamburgerBtn && drawer) {
    hamburgerBtn.addEventListener('click', () => drawer.classList.add('active'));
  }
  if (drawerCloseBtn && drawer) {
    drawerCloseBtn.addEventListener('click', () => drawer.classList.remove('active'));
  }
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => drawer.classList.remove('active'));
  });

  /* ------------------------------------------------------------------------
     3. AMBIENT SOUNDSCAPE SYNTHESIZER
     ------------------------------------------------------------------------ */
  const audioBtn = document.getElementById('audioBtn');
  let audioCtx = null;
  let isPlaying = false;
  let oscillator1 = null, oscillator2 = null, gainNode = null;

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if (!isPlaying) {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (!audioCtx) audioCtx = new AudioContext();

          if (audioCtx.state === 'suspended') {
            audioCtx.resume();
          }

          oscillator1 = audioCtx.createOscillator();
          oscillator2 = audioCtx.createOscillator();
          gainNode = audioCtx.createGain();

          oscillator1.type = 'sine';
          oscillator1.frequency.setValueAtTime(220.00, audioCtx.currentTime); // A3

          oscillator2.type = 'triangle';
          oscillator2.frequency.setValueAtTime(329.63, audioCtx.currentTime); // E4

          gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + 2.5);

          oscillator1.connect(gainNode);
          oscillator2.connect(gainNode);
          gainNode.connect(audioCtx.destination);

          oscillator1.start();
          oscillator2.start();

          isPlaying = true;
          audioBtn.classList.add('playing');
          audioBtn.querySelector('.mn-audio-text').textContent = 'AMBIENCE ON';
        } catch (e) {
          console.log('Audio error', e);
        }
      } else {
        if (gainNode && audioCtx) {
          gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
          setTimeout(() => {
            if (oscillator1) oscillator1.stop();
            if (oscillator2) oscillator2.stop();
            isPlaying = false;
            audioBtn.classList.remove('playing');
            audioBtn.querySelector('.mn-audio-text').textContent = 'SOUNDSCAPE';
          }, 1000);
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. HERO PARALLAX MOVEMENT
     ------------------------------------------------------------------------ */
  const heroVisual = document.getElementById('heroVisual');

  if (heroVisual && window.innerWidth > 991) {
    window.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
      heroVisual.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  }

  /* ------------------------------------------------------------------------
     5. 3D CARD TILT EFFECT
     ------------------------------------------------------------------------ */
  const tiltCards = document.querySelectorAll('.mn-card-panel, .mn-arrival-card, .mn-look-card, .mn-category-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });

  /* ------------------------------------------------------------------------
     6. INTERACTIVE LOOKBOOK FILTERS
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.mn-lookbook-filter-btn');
  const lookCards = document.querySelectorAll('.mn-look-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      lookCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     7. LOOKBOOK & ARRIVALS EDITORIAL LIGHTBOX MODAL
     ------------------------------------------------------------------------ */
  const modalBackdrop = document.getElementById('lookbookModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalMaterial = document.getElementById('modalMaterial');
  const modalCraft = document.getElementById('modalCraft');

  const modalTriggers = document.querySelectorAll('.mn-look-card, .mn-arrival-card');

  modalTriggers.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.querySelector('img').src;
      const title = card.getAttribute('data-title') || card.querySelector('h3')?.textContent || 'AURA EDITORIAL LOOK';
      const category = card.getAttribute('data-category-name') || 'SS 2026 COLLECTION';
      const desc = card.getAttribute('data-desc') || 'Designed with avant-garde technical draping and modern silhouette architecture.';
      const mat = card.getAttribute('data-material') || '100% Recycled Technical Silk & Polymer Thread';
      const craft = card.getAttribute('data-craftsmanship') || '75 Atelier Hours';

      if (modalImage) modalImage.src = imgSrc;
      if (modalTag) modalTag.textContent = category;
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalMaterial) modalMaterial.textContent = mat;
      if (modalCraft) modalCraft.textContent = craft;

      if (modalBackdrop) modalBackdrop.classList.add('active');
    });
  });

  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', () => modalBackdrop.classList.remove('active'));
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove('active');
    });
  }

  /* ------------------------------------------------------------------------
     8. NEWSLETTER SUBMISSION MODAL
     ------------------------------------------------------------------------ */
  const newsletterForm = document.getElementById('newsletterForm');
  const vipModal = document.getElementById('vipSuccessModal');
  const vipModalClose = document.getElementById('vipModalClose');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        if (vipModal) vipModal.classList.add('active');
        input.value = '';
      }
    });
  }

  if (vipModalClose && vipModal) {
    vipModalClose.addEventListener('click', () => vipModal.classList.remove('active'));
    vipModal.addEventListener('click', (e) => {
      if (e.target === vipModal) vipModal.classList.remove('active');
    });
  }

  /* ------------------------------------------------------------------------
     9. INTERSECTION OBSERVER SCROLL REVEAL
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

});
