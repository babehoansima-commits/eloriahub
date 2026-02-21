// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  
  // ===== NAVBAR SCROLL EFFECT =====
  const header = document.querySelector('.header');
  
  function updateNavbar() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', updateNavbar);
  updateNavbar(); // Initial check
  
  // ===== MOBILE MENU TOGGLE =====
  const hamburger = document.querySelector('.header__hamburger');
  const mobileMenu = document.querySelector('.header__mobile-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // ===== CLOSE MOBILE MENU ON LINK CLICK =====
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // ===== SMOOTH SCROLL POUR LES LIENS =====
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});


// ===== INTERSECTION OBSERVER POUR TOUTES LES SECTIONS =====
function initScrollAnimations() {
  const sections = document.querySelectorAll('.section-mission, .section-community, .section-gallery');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  sections.forEach(section => observer.observe(section));
}

// À AJOUTER dans le DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // ... ton code existant ...
  initScrollAnimations(); // Déjà présent si tu l'avais
});


// À AJOUTER dans la fonction initScrollAnimations
function initScrollAnimations() {
  const sections = document.querySelectorAll(
    '.section-mission, .section-actions, .section-community, .section-gallery'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  sections.forEach(section => observer.observe(section));
}

// Dans script.js - fonction initScrollAnimations
function initScrollAnimations() {
  const sections = document.querySelectorAll(
    '.section-mission, .section-actions, .section-themes, .section-articles, .section-community, .section-gallery'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  sections.forEach(section => observer.observe(section));
}

// ===== FONCTION POUR LES ARTICLES (MODALS) =====
function initArticles() {
  // Tous les boutons "Lire"
  const readButtons = document.querySelectorAll('.article-card__btn');
  const modals = document.querySelectorAll('.article-modal');
  const closeButtons = document.querySelectorAll('.article-modal__close');
  const body = document.body;
  
  // Vérifier qu'on a bien des boutons
  if (!readButtons.length) return;
  
  // Ouvrir le modal correspondant
  readButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Récupérer l'ID de l'article (data-article="1" par exemple)
      const articleId = this.dataset.article;
      
      // Chercher le modal avec l'ID correspondant
      const targetModal = document.getElementById(`article-${articleId}`);
      
      if (targetModal) {
        // Fermer tous les autres modals (au cas où)
        modals.forEach(modal => modal.classList.remove('active'));
        
        // Ouvrir celui-ci
        targetModal.classList.add('active');
        
        // Bloquer le scroll du body
        body.classList.add('modal-open');
      }
    });
  });
  
  // Fermer avec le bouton retour
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Trouver le modal parent et le fermer
      const modal = this.closest('.article-modal');
      if (modal) {
        modal.classList.remove('active');
        body.classList.remove('modal-open');
      }
    });
  });
  
  // Fermer en cliquant sur l'overlay (fond flou)
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      // Si on clique directement sur l'overlay (pas sur le contenu)
      if (e.target.classList.contains('article-modal__overlay')) {
        this.classList.remove('active');
        body.classList.remove('modal-open');
      }
    });
  });
  
  // Fermer avec la touche Échap
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.article-modal.active');
      if (activeModal) {
        activeModal.classList.remove('active');
        body.classList.remove('modal-open');
      }
    }
  });
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  
  // Navbar scroll effect
  const header = document.querySelector('.header');
  function updateNavbar() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar);
  updateNavbar();
  
  // Mobile menu
  const hamburger = document.querySelector('.header__hamburger');
  const mobileMenu = document.querySelector('.header__mobile-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // Fermer menu mobile sur clic lien
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // === INIT ARTICLES (modals) ===
  initArticles();
  
  // Carrousels (si tu les as)
  if (typeof initCommunityCarousel === 'function') initCommunityCarousel();
  if (typeof initGalleryCarousel === 'function') initGalleryCarousel();
  
  // Scroll animations
  initScrollAnimations();
});

// ===== FONCTION ARTICLES (à copier ici) =====
function initArticles() {
  // Colle le code de la fonction ici
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const sections = document.querySelectorAll(
    '.section-mission, .section-actions, .section-themes, .section-articles, .section-community, .section-gallery'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  sections.forEach(section => observer.observe(section));
}


// ===== FONCTION PRINCIPALE : au chargement de la page =====
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. NAVBAR : change de couleur quand on scroll
  const header = document.querySelector('.header');
  
  function updateNavbar() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', updateNavbar);
  updateNavbar(); // Vérifie tout de suite
  
  // 2. MENU MOBILE : ouverture/fermeture du hamburger
  const hamburger = document.querySelector('.header__hamburger');
  const mobileMenu = document.querySelector('.header__mobile-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      
      // Empêche le scroll de la page quand le menu est ouvert
      if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }
  
  // 3. FERMER LE MENU MOBILE quand on clique sur un lien
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // 4. SCROLL DOUX pour les ancres (liens vers #mission, #articles, etc.)
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // 5. === ARTICLES : ouverture/fermeture des modals ===
  initArticles();
  


  
  // 7. CARROUSELS (si tu les as)
  if (typeof initCommunityCarousel === 'function') initCommunityCarousel();
  if (typeof initGalleryCarousel === 'function') initGalleryCarousel();
  
});

// ===== FONCTION POUR LES ARTICLES =====
function initArticles() {
  // Récupère tous les boutons "Lire"
  const readButtons = document.querySelectorAll('.article-card__btn');
  // Récupère tous les modals
  const modals = document.querySelectorAll('.article-modal');
  // Récupère tous les boutons "Retour"
  const closeButtons = document.querySelectorAll('.article-modal__close');
  const body = document.body;
  
  // S'il n'y a pas de boutons, on arrête
  if (!readButtons.length) return;
  
  // Ouvrir le modal quand on clique sur "Lire"
  readButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Récupère le numéro de l'article (data-article="1" par exemple)
      const articleId = this.dataset.article;
      
      // Cherche le modal qui a l'ID correspondant (ex: article-1)
      const targetModal = document.getElementById('article-' + articleId);
      
      if (targetModal) {
        // Ferme tous les modals au cas où
        modals.forEach(function(modal) {
          modal.classList.remove('active');
        });
        
        // Ouvre le bon modal
        targetModal.classList.add('active');
        
        // Empêche le scroll de la page
        body.classList.add('modal-open');
      }
    });
  });
  
  // Fermer avec le bouton "Retour"
  closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Trouve le modal parent et le ferme
      const modal = this.closest('.article-modal');
      if (modal) {
        modal.classList.remove('active');
        body.classList.remove('modal-open');
      }
    });
  });
  
  // Fermer en cliquant sur le fond flou (overlay)
  modals.forEach(function(modal) {
    modal.addEventListener('click', function(e) {
      // Si on clique directement sur l'overlay (pas sur le contenu)
      if (e.target.classList.contains('article-modal__overlay')) {
        this.classList.remove('active');
        body.classList.remove('modal-open');
      }
    });
  });
  
  // Fermer avec la touche Echap
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.article-modal.active');
      if (activeModal) {
        activeModal.classList.remove('active');
        body.classList.remove('modal-open');
      }
    }
  });
}

// ===== FONCTION POUR LES ANIMATIONS AU SCROLL =====
function initScrollAnimations() {
  // Toutes les sections qui doivent apparaître en fondu
  const sections = document.querySelectorAll(
    '.section-mission, .section-actions, .section-themes, .section-articles, .section-community, .section-gallery'
  );
  
  // Crée un observateur qui surveille quand les sections deviennent visibles
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 }); // Se déclenche quand 20% de la section est visible
  
  // Observe chaque section
  sections.forEach(function(section) {
    observer.observe(section);
  });
}

// ===== FONCTIONS POUR LES CARROUSELS (si tu les as) =====
function initCommunityCarousel() {
  // Ton code du premier carrousel ici (si existant)
}

function initGalleryCarousel() {
  // Ton code du second carrousel ici (si existant)
}

// Ajoute .section-equipe à la liste des sections animées
function initScrollAnimations() {
  const sections = document.querySelectorAll(
    '.section-mission, .section-actions, .section-themes, .section-articles, .section-equipe, .section-community, .section-gallery'
  );
  
  // ... reste du code inchangé
}