/* =============================================================
   UnifyHub – Main JavaScript
   All interactive features: Dark/Light mode, Language toggle,
   Particles, Typed.js, AOS, WOW, Owl Carousel, Counters,
   Calculator, Countdown Timer, Video Modal, Mouse Follower,
   Magnetic Buttons, Ripple Effect, Confetti, Visitor Counter,
   GSAP Scroll Animations, Progress Bar, Back to Top, Nav Scroll
   ============================================================= */

"use strict";

/* ===================================================================
   PLAN DATA (used by Calculator)
   =================================================================== */
const PLANS = {
  bronze:   { investment: 1000,  referralBonus: 200,  teamRate: 0.02  },
  silver:   { investment: 3000,  referralBonus: 600,  teamRate: 0.05  },
  gold:     { investment: 7000,  referralBonus: 1400, teamRate: 0.10  },
  platinum: { investment: 15000, referralBonus: 3000, teamRate: 0.15  },
};

let selectedPlan = 'bronze';

/* ===================================================================
   DOCUMENT READY
   =================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  initPreloader();
  initAOS();
  initWOW();
  initParticles();
  initTyped();
  initOwlCarousel();
  initNavbarScroll();
  initScrollProgress();
  initDarkMode();
  initLanguageToggle();
  initBackToTop();
  initMouseFollower();
  initMagneticButtons();
  initRippleEffect();
  initCalculator();
  initCountdown();
  initVideoModal();
  initConfetti();
  initVisitorCounter();
  initCounters();
  initContactForm();
  initNewsletterForm();
  initActiveNavLinks();
  initParallax();
  initGSAP();
  initLazyLoading();
});

/* ===================================================================
   PRELOADER
   =================================================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  // Hide after page loads or 2.5s max
  const hide = () => {
    preloader.classList.add('hide');
    document.body.classList.remove('no-scroll');
    setTimeout(() => preloader.remove(), 600);
  };
  if (document.readyState === 'complete') {
    setTimeout(hide, 400);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 400));
    setTimeout(hide, 3000); // hard fallback
  }
  document.body.classList.add('no-scroll');
}

/* ===================================================================
   AOS – Animate On Scroll
   =================================================================== */
function initAOS() {
  if (typeof AOS === 'undefined') return;
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });
}

/* ===================================================================
   WOW.js – Scroll Reveal
   =================================================================== */
function initWOW() {
  if (typeof WOW === 'undefined') return;
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 50,
    mobile: true,
    live: false,
  }).init();
}

/* ===================================================================
   PARTICLES.JS
   =================================================================== */
function initParticles() {
  if (typeof particlesJS === 'undefined' || !document.getElementById('particles-js')) return;
  particlesJS('particles-js', {
    particles: {
      number: { value: 65, density: { enable: true, value_area: 900 } },
      color: { value: ['#7c3aed', '#06b6d4', '#f59e0b'] },
      shape: { type: 'circle' },
      opacity: { value: 0.45, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false } },
      size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
      line_linked: { enable: true, distance: 140, color: '#7c3aed', opacity: 0.25, width: 1 },
      move: { enable: true, speed: 1.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
}

/* ===================================================================
   TYPED.JS – Typewriter Hero Effect
   =================================================================== */
function initTyped() {
  if (typeof Typed === 'undefined' || !document.getElementById('typed-text')) return;

  const isHindi = document.documentElement.getAttribute('data-lang') === 'hi';
  const stringsEn = [
    'UnifyHub Alliance Market',
    'Passive Income Freedom',
    'Network That Grows For You',
    'India\'s Biggest Alliance Market'
  ];
  const stringsHi = [
    'UnifyHub एलायंस मार्केट',
    'पैसिव इनकम फ्रीडम',
    'नेटवर्क जो आपके लिए बढ़ता है',
    'भारत का सबसे बड़ा एलायंस मार्केट'
  ];

  window._typedInstance = new Typed('#typed-text', {
    strings: isHindi ? stringsHi : stringsEn,
    typeSpeed: 55,
    backSpeed: 25,
    backDelay: 2400,
    loop: true,
    smartBackspace: true,
  });
}

/* ===================================================================
   OWL CAROUSEL – Testimonials & Team
   =================================================================== */
function initOwlCarousel() {
  if (typeof jQuery === 'undefined' || typeof jQuery.fn.owlCarousel === 'undefined') return;

  jQuery('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 800,
    dots: true,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0:   { items: 1 },
      577: { items: 1 },
      769: { items: 2 },
      1200: { items: 3 }
    }
  });

  jQuery('.team-carousel').owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 700,
    dots: true,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0:   { items: 1 },
      577: { items: 2 },
      769: { items: 3 },
      1200: { items: 4 }
    }
  });
}

/* ===================================================================
   NAVBAR – Scroll Behaviour & Active Links
   =================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handler = () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', handler, { passive: true });
  handler();
}

function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navbar .nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(s => observer.observe(s));
}

/* ===================================================================
   SCROLL PROGRESS BAR
   =================================================================== */
function initScrollProgress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ===================================================================
   DARK / LIGHT MODE TOGGLE
   =================================================================== */
function initDarkMode() {
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const root = document.documentElement;

  const saved = localStorage.getItem('unifyhub-theme') || 'dark';
  applyTheme(saved);

  btn && btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('unifyhub-theme', next);
  });

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }
}

/* ===================================================================
   LANGUAGE TOGGLE – EN / HI
   =================================================================== */
function initLanguageToggle() {
  const btn   = document.getElementById('langToggle');
  const label = document.getElementById('langLabel');
  const flag  = document.getElementById('langFlag');
  const root  = document.documentElement;

  const savedLang = localStorage.getItem('unifyhub-lang') || 'en';
  applyLanguage(savedLang);

  btn && btn.addEventListener('click', () => {
    const current = root.getAttribute('data-lang');
    const next = current === 'en' ? 'hi' : 'en';
    applyLanguage(next);
    localStorage.setItem('unifyhub-lang', next);
  });

  function applyLanguage(lang) {
    root.setAttribute('data-lang', lang);
    if (label) label.textContent = lang === 'en' ? 'EN' : 'हि';
    if (flag)  flag.textContent  = lang === 'en' ? '🇬🇧' : '🇮🇳';

    document.querySelectorAll('.lang-text').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (text !== null) el.textContent = text;
    });

    // Refresh Typed.js on language switch
    if (window._typedInstance) {
      window._typedInstance.destroy();
      window._typedInstance = null;
      setTimeout(initTyped, 100);
    }
  }
}

/* ===================================================================
   BACK TO TOP BUTTON
   =================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) btn.classList.add('show');
    else btn.classList.remove('show');
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===================================================================
   CUSTOM MOUSE FOLLOWER
   =================================================================== */
function initMouseFollower() {
  const dot     = document.getElementById('cursorDot');
  const outline = document.getElementById('cursorOutline');
  if (!dot || !outline) return;
  if (window.matchMedia('(hover: none)').matches) return; // touch devices

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;
  let animId;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  function animate() {
    outlineX = lerp(outlineX, mouseX, 0.13);
    outlineY = lerp(outlineY, mouseY, 0.13);
    outline.style.left = outlineX + 'px';
    outline.style.top  = outlineY + 'px';
    animId = requestAnimationFrame(animate);
  }
  animate();

  // Expand cursor on interactive elements
  const interactables = 'a, button, .plan-card, .video-thumb, .video-modal-btn, .magnetic-btn';
  document.querySelectorAll(interactables).forEach(el => {
    el.addEventListener('mouseenter', () => outline.classList.add('expand'));
    el.addEventListener('mouseleave', () => outline.classList.remove('expand'));
  });
}

/* ===================================================================
   MAGNETIC BUTTONS
   =================================================================== */
function initMagneticButtons() {
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      this.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
}

/* ===================================================================
   RIPPLE EFFECT ON CLICK
   =================================================================== */
function initRippleEffect() {
  document.querySelectorAll('.ripple-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect   = this.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top  - size / 2;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple-circle');
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
}

/* ===================================================================
   EARNINGS CALCULATOR
   =================================================================== */
function initCalculator() {
  const refSlider   = document.getElementById('refSlider');
  const teamSlider  = document.getElementById('teamSlider');
  const monthSlider = document.getElementById('monthsSlider');
  if (!refSlider) return;

  const refDisplay   = document.getElementById('refCountDisplay');
  const teamDisplay  = document.getElementById('teamCountDisplay');
  const monthDisplay = document.getElementById('monthsDisplay');

  const monthlyIncomeEl  = document.getElementById('monthlyIncome');
  const totalIncomeEl    = document.getElementById('totalIncome');
  const roiEl            = document.getElementById('roiValue');
  const directLineEl     = document.getElementById('directIncomeLine');
  const teamCommLineEl   = document.getElementById('teamCommLine');

  function calc() {
    const plan    = PLANS[selectedPlan];
    const refs    = parseInt(refSlider.value,  10);
    const team    = parseInt(teamSlider.value, 10);
    const months  = parseInt(monthSlider.value, 10);

    const directMonthly = refs * plan.referralBonus;
    const teamMonthly   = team * plan.investment * plan.teamRate;
    const totalMonthly  = directMonthly + teamMonthly;
    const totalEarning  = totalMonthly * months;
    const roi           = (plan.investment > 0) ? (totalEarning / plan.investment).toFixed(1) : 0;

    refDisplay.textContent   = refs;
    teamDisplay.textContent  = team;
    monthDisplay.textContent = months;

    monthlyIncomeEl.textContent  = '₹' + formatNum(totalMonthly);
    totalIncomeEl.textContent    = '₹' + formatNum(totalEarning);
    roiEl.textContent            = roi + 'x';
    directLineEl.textContent     = '₹' + formatNum(directMonthly);
    teamCommLineEl.textContent   = '₹' + formatNum(teamMonthly);
  }

  // Slider events
  [refSlider, teamSlider, monthSlider].forEach(s => s.addEventListener('input', calc));

  // Plan selector
  document.querySelectorAll('.plan-sel-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.plan-sel-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      selectedPlan = this.getAttribute('data-plan-val');
      calc();
    });
  });

  calc(); // initial render
}

function formatNum(n) {
  if (n >= 10000000) return (n / 10000000).toFixed(1) + 'Cr';
  if (n >= 100000)   return (n / 100000).toFixed(1) + 'L';
  if (n >= 1000)     return (n / 1000).toFixed(1) + 'K';
  return Math.round(n).toLocaleString('en-IN');
}

/* ===================================================================
   SCROLL COUNTER – animated number counting
   =================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-target'), 10);
  const suffix   = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const step     = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = formatCounter(Math.floor(current)) + suffix;
  }, step);
}

function formatCounter(n) {
  if (n >= 100000) return (n / 100000).toFixed(1) + 'L';
  return n.toLocaleString('en-IN');
}

/* ===================================================================
   COUNTDOWN TIMER
   =================================================================== */
function initCountdown() {
  const cdDays  = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMins  = document.getElementById('cd-mins');
  const cdSecs  = document.getElementById('cd-secs');
  if (!cdDays) return;

  // Offer deadline: 7 days from page load,
  // but persist in sessionStorage so it doesn't reset on refresh
  let deadline = sessionStorage.getItem('unifyhub-deadline');
  if (!deadline) {
    deadline = Date.now() + 7 * 24 * 60 * 60 * 1000;
    sessionStorage.setItem('unifyhub-deadline', deadline);
  }
  deadline = parseInt(deadline, 10);

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const diff  = deadline - Date.now();
    if (diff <= 0) {
      [cdDays, cdHours, cdMins, cdSecs].forEach(el => el.textContent = '00');
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    cdDays.textContent  = pad(d);
    cdHours.textContent = pad(h);
    cdMins.textContent  = pad(m);

    // Flip animation on seconds
    if (cdSecs.textContent !== pad(s)) {
      cdSecs.classList.add('flip');
      setTimeout(() => cdSecs.classList.remove('flip'), 400);
    }
    cdSecs.textContent = pad(s);
  }

  tick();
  setInterval(tick, 1000);
}

/* ===================================================================
   VIDEO MODAL
   =================================================================== */
function initVideoModal() {
  const modalEl  = document.getElementById('videoModal');
  const frameEl  = document.getElementById('videoFrame');
  if (!modalEl || !frameEl) return;

  const bsModal = new bootstrap.Modal(modalEl, { keyboard: true });

  document.querySelectorAll('.video-modal-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const src = this.getAttribute('data-video');
      if (!src) return;
      // Append autoplay=1 for YouTube
      frameEl.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1&rel=0';
      bsModal.show();
    });
  });

  // Stop video on modal close
  modalEl.addEventListener('hidden.bs.modal', () => {
    frameEl.src = '';
  });
}

/* ===================================================================
   CONFETTI EFFECT – CTA Buttons
   =================================================================== */
function initConfetti() {
  if (typeof confetti === 'undefined') return;

  document.querySelectorAll('.confetti-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { x, y },
        colors: ['#7c3aed', '#06b6d4', '#f59e0b', '#ffffff', '#10b981'],
        zIndex: 9999,
        scalar: 1.1,
        drift: 0.2,
      });
    });
  });
}

/* ===================================================================
   LIVE VISITOR COUNTER (simulated)
   =================================================================== */
function initVisitorCounter() {
  const el = document.getElementById('visitorCount');
  if (!el) return;

  let count = 800 + Math.floor(Math.random() * 200);
  el.textContent = count.toLocaleString('en-IN');

  setInterval(() => {
    const delta = Math.floor(Math.random() * 7) - 2; // -2 to +4
    count = Math.max(500, count + delta);
    el.textContent = count.toLocaleString('en-IN');
  }, 3500);
}

/* ===================================================================
   CONTACT FORM (client-side validation & feedback)
   =================================================================== */
function initContactForm() {
  const form     = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name    = form.querySelector('#contactName').value.trim();
    const email   = form.querySelector('#contactEmail').value.trim();
    const message = form.querySelector('#contactMessage').value.trim();
    const lang    = document.documentElement.getAttribute('data-lang');

    if (!name || !email || !message) {
      feedback.innerHTML = `<p class="form-error">
        <i class="fa-solid fa-circle-exclamation"></i>
        ${lang === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें।' : 'Please fill in all required fields.'}
      </p>`;
      return;
    }

    if (!isValidEmail(email)) {
      feedback.innerHTML = `<p class="form-error">
        <i class="fa-solid fa-circle-exclamation"></i>
        ${lang === 'hi' ? 'कृपया एक वैध ईमेल पता दर्ज करें।' : 'Please enter a valid email address.'}
      </p>`;
      return;
    }

    // Simulate submission
    const submitBtn = form.querySelector('[type=submit]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ' + (lang === 'hi' ? 'भेज रहे हैं…' : 'Sending…');

    setTimeout(() => {
      feedback.innerHTML = `<p class="form-success">
        <i class="fa-solid fa-circle-check"></i>
        ${lang === 'hi' ? 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।' : 'Thank you! We\'ll be in touch shortly.'}
      </p>`;
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> ' + (lang === 'hi' ? 'संदेश भेजें' : 'Send Message');
      setTimeout(() => { feedback.innerHTML = ''; }, 6000);

      // Trigger confetti on success
      if (typeof confetti !== 'undefined') {
        confetti({ particleCount: 60, spread: 60, origin: { x: 0.5, y: 0.8 } });
      }
    }, 1500);
  });
}

/* ===================================================================
   NEWSLETTER FORM
   =================================================================== */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = form.querySelector('input[type=email]');
    if (!input || !isValidEmail(input.value.trim())) return;
    const btn   = form.querySelector('button');
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    btn.disabled = true;
    input.value = '';
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      btn.disabled = false;
    }, 4000);
  });
}

/* ===================================================================
   SCROLL PARALLAX (lightweight CSS transform)
   =================================================================== */
function initParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const heroContent = hero.querySelector('.hero-content');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > window.innerHeight) return;
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
      heroContent.style.opacity   = 1 - scrolled / (window.innerHeight * 0.8);
    }
  }, { passive: true });
}

/* ===================================================================
   GSAP SCROLL ANIMATIONS
   =================================================================== */
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Stats counter section fade-in
  gsap.from('.stats-section .stat-card', {
    scrollTrigger: { trigger: '.stats-section', start: 'top 80%' },
    y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out'
  });

  // Plans stagger
  gsap.from('.plan-card', {
    scrollTrigger: { trigger: '#plans', start: 'top 70%' },
    y: 50, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'back.out(1.5)'
  });

  // Calculator slide in
  gsap.from('.calculator-wrap', {
    scrollTrigger: { trigger: '#calculator', start: 'top 75%' },
    y: 60, opacity: 0, duration: 0.9, ease: 'power3.out'
  });

  // Video thumbnails stagger
  gsap.from('.video-thumb', {
    scrollTrigger: { trigger: '#videos', start: 'top 75%' },
    scale: 0.92, opacity: 0, stagger: 0.1, duration: 0.65, ease: 'power2.out'
  });

  // Contact info items
  gsap.from('.contact-info-item', {
    scrollTrigger: { trigger: '#contact', start: 'top 75%' },
    x: -30, opacity: 0, stagger: 0.12, duration: 0.65, ease: 'power2.out'
  });

  // Footer brand
  gsap.from('.footer-brand', {
    scrollTrigger: { trigger: '#footer', start: 'top 85%' },
    y: 20, opacity: 0, duration: 0.6, ease: 'power2.out'
  });
}

/* ===================================================================
   LAZY LOADING for Images
   =================================================================== */
function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) return; // native support

  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if (!imgs.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img  = entry.target;
          const src  = img.getAttribute('data-src');
          if (src) img.src = src;
          observer.unobserve(img);
        }
      });
    },
    { rootMargin: '200px' }
  );

  imgs.forEach(img => observer.observe(img));
}

/* ===================================================================
   UTILITY
   =================================================================== */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
