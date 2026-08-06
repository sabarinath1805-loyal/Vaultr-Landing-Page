(() => {
  const supportsReveal = 'IntersectionObserver' in window;
  document.documentElement.classList.toggle('js', supportsReveal);
  const banner = document.querySelector('[data-banner]');
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const readQueryState = (key) => new URL(window.location.href).searchParams.get(key);
  const writeQueryState = (key, value) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.replaceState({}, '', url);
  };

  document.querySelector('[data-close-banner]')?.addEventListener('click', () => {
    banner?.classList.add('is-hidden');
    header?.style.setProperty('top', '0');
  });

  const setMenu = (open) => {
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu?.classList.toggle('is-open', open);
    mobileMenu?.setAttribute('aria-hidden', String(!open));
    if (open) header?.classList.remove('is-hidden');
    document.body.classList.toggle('menu-open', open);
    if (open) window.setTimeout(() => mobileMenu?.querySelector(dialogFocusableSelector)?.focus(), 0);
  };

  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  const quickNavMarkup = `
    <div class="quick-nav" data-command-palette hidden>
      <div class="quick-nav__scrim" data-quick-nav-close></div>
      <section class="quick-nav__panel" role="dialog" aria-modal="true" aria-labelledby="quick-nav-title">
        <div class="quick-nav__head"><div><span class="quick-nav__eyebrow">VAULTR / QUICK NAVIGATION</span><h2 id="quick-nav-title">Go where the work is.</h2></div><button class="quick-nav__close" type="button" aria-label="Close quick navigation" data-quick-nav-close>Esc</button></div>
        <label class="quick-nav__search"><span aria-hidden="true">⌘K</span><input id="quick-nav-search" type="search" autocomplete="off" placeholder="Search pages and product surfaces" aria-label="Search pages and product surfaces"></label>
        <nav class="quick-nav__items" aria-label="Vaultr destinations">
          <a href="platform.html" data-quick-nav-item><span><strong>Platform</strong><small>Lex, Vault, Knowledge, Agents</small></span><kbd>01</kbd></a>
          <a href="workflows.html" data-quick-nav-item><span><strong>Workflow Studio</strong><small>Redlines, diligence, supervised runs</small></span><kbd>02</kbd></a>
          <a href="solutions.html" data-quick-nav-item><span><strong>Solutions</strong><small>Litigation, transactional, in-house</small></span><kbd>03</kbd></a>
          <a href="customers.html" data-quick-nav-item><span><strong>Practice Rooms</strong><small>Illustrative patterns for legal work</small></span><kbd>04</kbd></a>
          <a href="command.html" data-quick-nav-item><span><strong>Command Center</strong><small>Practice activity and governance signals</small></span><kbd>05</kbd></a>
          <a href="index.html#evidence" data-quick-nav-item><span><strong>Evidence Ledger</strong><small>Source, span, confidence</small></span><kbd>06</kbd></a>
          <a href="index.html#proof" data-quick-nav-item><span><strong>Room Signals</strong><small>Boundary, ledger, runtime, root</small></span><kbd>07</kbd></a>
          <a href="security.html" data-quick-nav-item><span><strong>Security Center</strong><small>Runtime, network, and source boundary</small></span><kbd>08</kbd></a>
          <a href="deployment.html" data-quick-nav-item><span><strong>Deployment Desk</strong><small>Build a private deployment brief</small></span><kbd>09</kbd></a>
          <a href="https://github.com/sabarinath1805-loyal/Vaultr-AI" target="_blank" rel="noreferrer" data-quick-nav-item><span><strong>Open architecture</strong><small>Inspect the source and implementation notes</small></span><kbd>↗</kbd></a>
        </nav>
        <p class="quick-nav__empty" data-quick-nav-empty hidden>No matching destination.</p>
        <div class="quick-nav__foot"><span>Private by default</span><span>Nothing is transmitted</span></div>
      </section>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', quickNavMarkup);
  const quickNav = document.querySelector('[data-command-palette]');
  const quickNavTrigger = document.querySelector('[data-command-open]');
  const quickNavSearch = document.querySelector('#quick-nav-search');
  const quickNavItems = [...document.querySelectorAll('[data-quick-nav-item]')];
  const quickNavEmpty = document.querySelector('[data-quick-nav-empty]');
  const dialogFocusableSelector = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  const trapDialogFocus = (dialog, event) => {
    if (event.key !== 'Tab' || !dialog) return;
    const focusable = [...dialog.querySelectorAll(dialogFocusableSelector)].filter((element) => !element.hidden && getComputedStyle(element).display !== 'none');
    if (!focusable.length) return;
    const activeIndex = focusable.indexOf(document.activeElement);
    if (event.shiftKey && (activeIndex <= 0)) {
      event.preventDefault();
      focusable[focusable.length - 1].focus();
    } else if (!event.shiftKey && (activeIndex === focusable.length - 1 || activeIndex === -1)) {
      event.preventDefault();
      focusable[0].focus();
    }
  };
  let quickNavPreviousFocus;
  const setQuickNav = (open) => {
    if (!quickNav) return;
    if (open) quickNavPreviousFocus = document.activeElement;
    quickNav.hidden = !open;
    quickNav.setAttribute('aria-hidden', String(!open));
    quickNav.classList.toggle('is-open', open);
    document.body.classList.toggle('quick-nav-open', open);
    if (open) {
      quickNavSearch?.focus();
      quickNavSearch?.select();
    } else {
      quickNavSearch && (quickNavSearch.value = '');
      quickNavItems.forEach((item) => { item.hidden = false; });
      if (quickNavEmpty) quickNavEmpty.hidden = true;
      quickNavPreviousFocus?.focus?.({ preventScroll: true });
    }
  };
  const filterQuickNav = (value) => {
    const query = value.trim().toLowerCase();
    let matches = 0;
    quickNavItems.forEach((item) => {
      const match = !query || item.textContent.toLowerCase().includes(query);
      item.hidden = !match;
      if (match) matches += 1;
    });
    if (quickNavEmpty) quickNavEmpty.hidden = matches !== 0;
  };
  quickNavTrigger?.addEventListener('click', () => setQuickNav(true));
  quickNav?.querySelectorAll('[data-quick-nav-close]').forEach((element) => element.addEventListener('click', () => setQuickNav(false)));
  quickNavSearch?.addEventListener('input', () => filterQuickNav(quickNavSearch.value));
  quickNavItems.forEach((item) => item.addEventListener('click', () => setQuickNav(false)));
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if ((event.metaKey || event.ctrlKey) && key === 'k') {
      event.preventDefault();
      setQuickNav(quickNav?.hidden !== false);
      return;
    }
    if (key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
      event.preventDefault();
      setQuickNav(true);
      return;
    }
    if (event.key === 'Escape' && quickNav?.hidden === false) setQuickNav(false);
    if (quickNav?.hidden === false && event.key === 'Tab') trapDialogFocus(quickNav, event);
    if (quickNav?.hidden === false && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
      const visibleItems = quickNavItems.filter((item) => !item.hidden);
      if (!visibleItems.length) return;
      const activeIndex = visibleItems.indexOf(document.activeElement);
      const nextIndex = event.key === 'ArrowDown'
        ? (activeIndex + 1) % visibleItems.length
        : (activeIndex - 1 + visibleItems.length) % visibleItems.length;
      event.preventDefault();
      visibleItems[nextIndex].focus();
    }
  });

  const galleryItems = [...document.querySelectorAll('.gallery-ribbon__card, .art-strip')].map((figure) => {
    const image = figure.querySelector('img');
    if (!image) return null;
    return {
      figure,
      src: image.currentSrc || image.src,
      alt: image.alt || 'Vaultr archive artwork',
      caption: figure.querySelector('figcaption')?.textContent?.trim() || image.alt || 'Vaultr archive artwork'
    };
  }).filter(Boolean);

  if (galleryItems.length) {
    galleryItems.forEach((item) => {
      item.figure.setAttribute('tabindex', '0');
      item.figure.setAttribute('role', 'button');
      item.figure.setAttribute('aria-haspopup', 'dialog');
      item.figure.setAttribute('aria-label', `Open artwork: ${item.caption}`);
    });

    const galleryMarkup = `
      <div class="gallery-lightbox" data-gallery-lightbox hidden>
        <div class="gallery-lightbox__scrim" data-gallery-close></div>
        <section class="gallery-lightbox__panel" role="dialog" aria-modal="true" aria-labelledby="gallery-lightbox-title">
          <div class="gallery-lightbox__head"><div><span class="gallery-lightbox__eyebrow">VAULTR / VISUAL ARCHIVE</span><h2 id="gallery-lightbox-title">A private atmosphere.</h2></div><button class="gallery-lightbox__close" type="button" aria-label="Close artwork viewer" data-gallery-close>Esc</button></div>
          <figure class="gallery-lightbox__figure"><div class="gallery-lightbox__media"><img data-gallery-image alt=""></div><figcaption><span data-gallery-caption></span><span data-gallery-count></span></figcaption></figure>
          <div class="gallery-lightbox__foot"><span>Use ← → to move through the archive</span><div><button type="button" data-gallery-prev>Previous</button><button type="button" data-gallery-next>Next</button></div></div>
        </section>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', galleryMarkup);
    const galleryLightbox = document.querySelector('[data-gallery-lightbox]');
    const galleryImage = galleryLightbox?.querySelector('[data-gallery-image]');
    const galleryCaption = galleryLightbox?.querySelector('[data-gallery-caption]');
    const galleryCount = galleryLightbox?.querySelector('[data-gallery-count]');
    const galleryClose = galleryLightbox?.querySelector('.gallery-lightbox__close');
    const galleryPrev = galleryLightbox?.querySelector('[data-gallery-prev]');
    const galleryNext = galleryLightbox?.querySelector('[data-gallery-next]');
    let galleryIndex = 0;
    let galleryPreviousFocus;

    const renderGallery = () => {
      const item = galleryItems[galleryIndex];
      if (!item || !galleryImage) return;
      galleryImage.src = item.src;
      galleryImage.alt = item.alt;
      if (galleryCaption) galleryCaption.textContent = item.caption;
      if (galleryCount) galleryCount.textContent = `${String(galleryIndex + 1).padStart(2, '0')} / ${String(galleryItems.length).padStart(2, '0')}`;
    };
    const setGallery = (open, index = galleryIndex) => {
      if (!galleryLightbox) return;
      galleryIndex = (index + galleryItems.length) % galleryItems.length;
      if (open) {
        galleryPreviousFocus = document.activeElement;
        renderGallery();
      }
      galleryLightbox.hidden = !open;
      galleryLightbox.setAttribute('aria-hidden', String(!open));
      galleryLightbox.classList.toggle('is-open', open);
      document.body.classList.toggle('gallery-lightbox-open', open);
      if (open) galleryClose?.focus();
      else galleryPreviousFocus?.focus?.({ preventScroll: true });
    };
    const stepGallery = (delta) => {
      galleryIndex = (galleryIndex + delta + galleryItems.length) % galleryItems.length;
      renderGallery();
    };

    galleryItems.forEach((item, index) => {
      item.figure.addEventListener('click', () => setGallery(true, index));
      item.figure.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setGallery(true, index);
        }
      });
    });
    galleryLightbox?.querySelectorAll('[data-gallery-close]').forEach((element) => element.addEventListener('click', () => setGallery(false)));
    galleryPrev?.addEventListener('click', () => stepGallery(-1));
    galleryNext?.addEventListener('click', () => stepGallery(1));
    document.addEventListener('keydown', (event) => {
      if (galleryLightbox?.hidden !== false) return;
      if (event.key === 'Escape') setGallery(false);
      if (event.key === 'Tab') trapDialogFocus(galleryLightbox, event);
      if (event.key === 'ArrowLeft') { event.preventDefault(); stepGallery(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); stepGallery(1); }
    });
  }

  const roomIndexConfig = [
    { id: 'proof', label: 'Room signals' },
    { id: 'product', label: 'Lex room' },
    { id: 'evidence', label: 'Evidence ledger' },
    { id: 'platform', label: 'Control plane' },
    { id: 'workflows', label: 'Workflow studio' },
    { id: 'solutions', label: 'Practice rooms' },
    { id: 'command-center', label: 'Command center' },
    { id: 'deployment', label: 'Deployment desk' }
  ];
  const roomIndexSections = roomIndexConfig.map((item) => ({ ...item, element: document.getElementById(item.id) })).filter((item) => item.element);
  const pageFooter = document.querySelector('.footer');
  if (roomIndexSections.length >= 4) {
    const roomIndexMarkup = `<aside class="room-index" data-room-index aria-label="Room index"><span class="room-index__eyebrow">ROOM INDEX</span><nav>${roomIndexSections.map((item) => `<a href="#${item.id}" data-room-link="${item.id}"><i aria-hidden="true"></i><span>${item.label}</span></a>`).join('')}</nav></aside>`;
    document.body.insertAdjacentHTML('beforeend', roomIndexMarkup);
    const roomIndex = document.querySelector('[data-room-index]');
    const roomIndexLinks = [...document.querySelectorAll('[data-room-link]')];
    let roomIndexFrame;
    const syncRoomIndex = () => {
      const threshold = window.scrollY + window.innerHeight * .42;
      let active = roomIndexSections[0];
      roomIndexSections.forEach((section) => {
        if (section.element.offsetTop <= threshold) active = section;
      });
      roomIndexLinks.forEach((link) => {
        const isActive = link.dataset.roomLink === active.id;
        link.classList.toggle('is-active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      const footerVisible = pageFooter && pageFooter.getBoundingClientRect().top < window.innerHeight;
      roomIndex?.classList.toggle('is-visible', window.scrollY > 180 && !footerVisible);
    };
    const requestRoomIndexSync = () => {
      if (roomIndexFrame) return;
      roomIndexFrame = window.requestAnimationFrame(() => {
        roomIndexFrame = undefined;
        syncRoomIndex();
      });
    };
    window.addEventListener('scroll', requestRoomIndexSync, { passive: true });
    window.addEventListener('resize', requestRoomIndexSync, { passive: true });
    syncRoomIndex();
  }

  const navDropdowns = [...document.querySelectorAll('[data-nav-dropdown]')];
  const closeNavDropdowns = () => navDropdowns.forEach((dropdown) => {
    dropdown.classList.remove('is-open');
    const trigger = dropdown.querySelector('.nav-dropdown__trigger');
    trigger?.setAttribute('aria-expanded', 'false');
    const menu = dropdown.querySelector('.nav-dropdown__menu');
    menu?.setAttribute('aria-hidden', 'true');
  });
  const navTriggers = navDropdowns.map((dropdown) => dropdown.querySelector('.nav-dropdown__trigger')).filter(Boolean);
  const openNavDropdown = (dropdown) => {
    closeNavDropdowns();
    dropdown.classList.add('is-open');
    dropdown.querySelector('.nav-dropdown__trigger')?.setAttribute('aria-expanded', 'true');
    dropdown.querySelector('.nav-dropdown__menu')?.setAttribute('aria-hidden', 'false');
  };
  navDropdowns.forEach((dropdown, dropdownIndex) => {
    const trigger = dropdown.querySelector('.nav-dropdown__trigger');
    const menu = dropdown.querySelector('.nav-dropdown__menu');
    const links = [...(menu?.querySelectorAll('a') || [])];
    if (trigger && menu) {
      const menuId = menu.id || `nav-menu-${dropdownIndex + 1}`;
      menu.id = menuId;
      trigger.setAttribute('aria-controls', menuId);
      menu.setAttribute('role', 'menu');
      menu.setAttribute('aria-hidden', 'true');
      links.forEach((link) => link.setAttribute('role', 'menuitem'));
    }
    trigger?.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = !dropdown.classList.contains('is-open');
      if (open) openNavDropdown(dropdown);
      else closeNavDropdowns();
    });
    trigger?.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        openNavDropdown(dropdown);
        const target = event.key === 'ArrowUp' ? links[links.length - 1] : links[0];
        target?.focus();
        window.setTimeout(() => target?.focus(), 0);
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        closeNavDropdowns();
        const nextIndex = (dropdownIndex + (event.key === 'ArrowRight' ? 1 : -1) + navTriggers.length) % navTriggers.length;
        navTriggers[nextIndex]?.focus();
      } else if (event.key === 'Escape') {
        closeNavDropdowns();
        trigger.focus();
      }
    });
    links.forEach((link, linkIndex) => {
      link.addEventListener('click', closeNavDropdowns);
      link.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          event.preventDefault();
          const nextIndex = (linkIndex + (event.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
          links[nextIndex]?.focus();
        } else if (event.key === 'Home' || event.key === 'End') {
          event.preventDefault();
          (event.key === 'Home' ? links[0] : links[links.length - 1])?.focus();
        } else if (event.key === 'Escape') {
          event.preventDefault();
          closeNavDropdowns();
          trigger?.focus();
        } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          closeNavDropdowns();
          const nextIndex = (dropdownIndex + (event.key === 'ArrowRight' ? 1 : -1) + navTriggers.length) % navTriggers.length;
          navTriggers[nextIndex]?.focus();
        }
      });
    });
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-nav-dropdown]')) closeNavDropdowns();
  });
  document.addEventListener('keydown', (event) => {
    if (mobileMenu?.classList.contains('is-open') && event.key === 'Tab') trapDialogFocus(mobileMenu, event);
    if (event.key === 'Escape') {
      closeNavDropdowns();
      if (mobileMenu?.classList.contains('is-open')) {
        setMenu(false);
        menuButton?.focus({ preventScroll: true });
      }
    }
  });

  const scrollProgress = header ? document.createElement('div') : null;
  if (scrollProgress) {
    scrollProgress.className = 'scroll-progress';
    scrollProgress.setAttribute('aria-hidden', 'true');
    scrollProgress.innerHTML = '<span></span>';
    header.append(scrollProgress);
  }
  let lastY = 0;
  const syncHeader = () => {
    const y = window.scrollY;
    const delta = y - lastY;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(100, Math.max(0, (y / maxScroll) * 100));
    scrollProgress?.style.setProperty('--scroll-progress', `${progress}%`);
    scrollProgress?.classList.toggle('is-active', y > 30);
    header?.classList.toggle('is-fixed', y > 48);
    if (y <= 48 || delta < -4 || mobileMenu?.classList.contains('is-open')) {
      header?.classList.remove('is-hidden');
    } else if (delta > 4 && y > 110) {
      header?.classList.add('is-hidden');
    }
    lastY = y;
  };
  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

  if (supportsReveal) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }

  const quotes = [...document.querySelectorAll('[data-quote]')];
  const dots = [...document.querySelectorAll('[data-quote-dot]')];
  const quoteCarousel = document.querySelector('[data-carousel]');
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  let currentQuote = 0;
  let quoteTimer;

  const showQuote = (index) => {
    currentQuote = (index + quotes.length) % quotes.length;
    quotes.forEach((quote, i) => {
      const active = i === currentQuote;
      quote.classList.toggle('is-active', active);
      quote.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, i) => {
      const active = i === currentQuote;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  };

  const restartCarousel = () => {
    if (!quotes.length || reducedMotion) return;
    window.clearInterval(quoteTimer);
    quoteTimer = window.setInterval(() => showQuote(currentQuote + 1), 7000);
  };
  const pauseCarousel = () => window.clearInterval(quoteTimer);

  document.querySelector('[data-quote-prev]')?.addEventListener('click', () => { showQuote(currentQuote - 1); restartCarousel(); });
  document.querySelector('[data-quote-next]')?.addEventListener('click', () => { showQuote(currentQuote + 1); restartCarousel(); });
  dots.forEach((dot) => dot.addEventListener('click', () => { showQuote(Number(dot.dataset.quoteDot)); restartCarousel(); }));
  quoteCarousel?.addEventListener('mouseenter', pauseCarousel);
  quoteCarousel?.addEventListener('mouseleave', restartCarousel);
  quoteCarousel?.addEventListener('focusin', pauseCarousel);
  quoteCarousel?.addEventListener('focusout', (event) => {
    if (!quoteCarousel.contains(event.relatedTarget)) restartCarousel();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseCarousel();
    else restartCarousel();
  });
  showQuote(currentQuote);
  restartCarousel();

  const lexTabs = [...document.querySelectorAll('[data-lex-tab]')];
  const lexAnswer = document.querySelector('.lex-window__answer');
  const lexLabel = document.querySelector('[data-lex-label]');
  const lexTitle = document.querySelector('[data-lex-title]');
  const lexMetaPrimary = document.querySelector('[data-lex-meta-primary]');
  const lexMetaSecondary = document.querySelector('[data-lex-meta-secondary]');
  const lexState = document.querySelector('[data-lex-state]');
  const lexCitation = document.querySelector('[data-lex-citation]');
  const lexCitationSecondary = document.querySelector('[data-lex-citation-secondary]');
  const lexModes = {
    review: {
      label: 'LEX / REVIEW',
      title: 'Clause drift detected.',
      primary: '12 deviations flagged',
      secondary: 'Source spans linked',
      state: 'VERIFIED',
      citation: '§ 7.4 / Merger Agreement',
      citationSecondary: '§ 12 / Disclosure Schedule'
    },
    compare: {
      label: 'LEX / COMPARE',
      title: 'Section 7 favors the counterparty.',
      primary: '3 versions aligned',
      secondary: '0 bytes transmitted',
      state: 'ALIGNED',
      citation: 'v3 / Merger Agreement',
      citationSecondary: 'v2 / Prior Draft'
    },
    draft: {
      label: 'LEX / DRAFT',
      title: 'Response language ready.',
      primary: 'Tone: matter-specific',
      secondary: 'Source auditable',
      state: 'READY',
      citation: '§ 7.4 / Draft response',
      citationSecondary: '§ 12 / Disclosure Schedule'
    }
  };

  const setLexMode = (mode) => {
    const content = lexModes[mode] || lexModes.review;
    writeQueryState('mode', mode);
    lexTabs.forEach((tab) => {
      const active = tab.dataset.lexTab === mode;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    if (lexAnswer) {
      lexAnswer.classList.add('is-changing');
      window.setTimeout(() => lexAnswer.classList.remove('is-changing'), 260);
    }
    if (lexLabel) lexLabel.textContent = content.label;
    if (lexTitle) lexTitle.textContent = content.title;
    if (lexMetaPrimary) lexMetaPrimary.textContent = content.primary;
    if (lexMetaSecondary) lexMetaSecondary.textContent = content.secondary;
    if (lexState) lexState.textContent = content.state;
    if (lexCitation) lexCitation.textContent = content.citation;
    if (lexCitationSecondary) lexCitationSecondary.textContent = content.citationSecondary;
  };

  lexTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setLexMode(tab.dataset.lexTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? lexTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + lexTabs.length) % lexTabs.length;
      const nextTab = lexTabs[nextIndex];
      nextTab.focus();
      setLexMode(nextTab.dataset.lexTab);
    });
  });
  const initialLexMode = readQueryState('mode');
  if (initialLexMode && lexModes[initialLexMode]) setLexMode(initialLexMode);

  const sourceFiles = [...document.querySelectorAll('[data-lex-file]')];
  const workspaceDocumentLabel = document.querySelector('[data-lex-document-label]');
  const workspaceDocumentPage = document.querySelector('[data-lex-document-page]');
  const workspaceDocumentTitle = document.querySelector('[data-lex-document-title]');
  const sourceFileData = {
    agreement: { label: 'MERGER AGREEMENT / § 7.4', page: 'Page 48', title: 'Representations and warranties' },
    schedule: { label: 'DISCLOSURE SCHEDULE / § 12', page: 'Page 12', title: 'Material contracts and obligations' },
    tracker: { label: 'DILIGENCE TRACKER / OPEN ITEMS', page: '18 open', title: 'Outstanding diligence requests' },
    correspondence: { label: 'COUNSEL CORRESPONDENCE / 14 JUN', page: 'Thread 08', title: 'Closing conditions — follow-up' }
  };

  const setSourceFile = (file) => {
    const data = sourceFileData[file?.dataset.lexFile];
    if (!data) return;
    sourceFiles.forEach((item) => {
      const active = item === file;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    if (workspaceDocumentLabel) workspaceDocumentLabel.textContent = data.label;
    if (workspaceDocumentPage) workspaceDocumentPage.textContent = data.page;
    if (workspaceDocumentTitle) workspaceDocumentTitle.textContent = data.title;
  };
  sourceFiles.forEach((file, index) => {
    file.setAttribute('aria-pressed', String(file.classList.contains('is-active')));
    file.addEventListener('click', () => setSourceFile(file));
    file.addEventListener('keydown', (event) => {
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? sourceFiles.length - 1
          : (index + (event.key === 'ArrowDown' ? 1 : -1) + sourceFiles.length) % sourceFiles.length;
      const nextFile = sourceFiles[nextIndex];
      nextFile?.focus();
      setSourceFile(nextFile);
    });
  });

  const workflowTabs = [...document.querySelectorAll('[data-workflow-tab]')];
  const workflowPanels = [...document.querySelectorAll('[data-workflow-panel]')];
  const setWorkflow = (mode) => {
    writeQueryState('workflow', mode);
    workflowTabs.forEach((tab) => {
      const active = tab.dataset.workflowTab === mode;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    workflowPanels.forEach((panel) => {
      const active = panel.dataset.workflowPanel === mode;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
  };

  workflowTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setWorkflow(tab.dataset.workflowTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? workflowTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + workflowTabs.length) % workflowTabs.length;
      const nextTab = workflowTabs[nextIndex];
      nextTab.focus();
      setWorkflow(nextTab.dataset.workflowTab);
    });
  });
  const initialWorkflow = readQueryState('workflow');
  if (initialWorkflow && workflowTabs.some((tab) => tab.dataset.workflowTab === initialWorkflow)) setWorkflow(initialWorkflow);

  const redlineAction = document.querySelector('[data-redline-action]');
  const redlineStatus = document.querySelector('[data-redline-status]');
  redlineAction?.addEventListener('click', () => {
    redlineAction.classList.add('is-complete');
    redlineAction.innerHTML = 'Accepted in local draft <span aria-hidden="true">✓</span>';
    if (redlineStatus) redlineStatus.textContent = 'Saved locally. No external request made.';
  });

  document.querySelectorAll('[data-diligence-action]').forEach((action) => {
    action.addEventListener('click', () => {
      const card = action.closest('[data-diligence-card]');
      if (!card) return;
      card.classList.add('is-complete');
      card.querySelector('.diligence-card__tag').textContent = 'REVIEWED';
      action.innerHTML = 'Reviewed locally <span aria-hidden="true">✓</span>';
      action.disabled = true;
    });
  });

  const solutionTabs = [...document.querySelectorAll('[data-solution-tab]')];
  const solutionPanels = [...document.querySelectorAll('[data-solution-panel]')];
  const setSolution = (mode) => {
    writeQueryState('practice', mode);
    solutionTabs.forEach((tab) => {
      const active = tab.dataset.solutionTab === mode;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    solutionPanels.forEach((panel) => {
      const active = panel.dataset.solutionPanel === mode;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
  };

  solutionTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setSolution(tab.dataset.solutionTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? solutionTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + solutionTabs.length) % solutionTabs.length;
      const nextTab = solutionTabs[nextIndex];
      nextTab.focus();
      setSolution(nextTab.dataset.solutionTab);
    });
  });
  const initialPractice = readQueryState('practice');
  if (initialPractice && solutionTabs.some((tab) => tab.dataset.solutionTab === initialPractice)) setSolution(initialPractice);

  const evidenceFilters = [...document.querySelectorAll('[data-evidence-filter]')];
  const evidenceRows = [...document.querySelectorAll('[data-evidence-state]')];
  const evidenceDetail = document.querySelector('[data-evidence-detail]');
  const evidenceDetailType = document.querySelector('[data-evidence-detail-type]');
  const evidenceDetailState = document.querySelector('[data-evidence-detail-state]');
  const evidenceDetailSource = document.querySelector('[data-evidence-detail-source]');
  const evidenceDetailSpan = document.querySelector('[data-evidence-detail-span]');
  const evidenceDetailConfidence = document.querySelector('[data-evidence-detail-confidence]');
  const evidenceDetailCopy = document.querySelector('[data-evidence-detail-copy]');
  const evidenceDetailData = {
    agreement: {
      type: 'PDF / § 7.4', source: 'Merger Agreement', span: '§ 7.4 / Representations', confidence: '98%', state: 'VERIFIED',
      copy: 'The seller shall disclose all material contracts and obligations prior to closing.'
    },
    schedule: {
      type: 'PDF / § 12', source: 'Disclosure Schedule', span: '§ 12 / Material contracts', confidence: '96%', state: 'VERIFIED',
      copy: 'Material contracts are cross-referenced to the obligations they support.'
    },
    tracker: {
      type: 'XLS / OPEN ITEMS', source: 'Diligence Tracker', span: 'Open item 18 / Supplier consent', confidence: 'REVIEW', state: 'NEEDS REVIEW',
      copy: 'Supplier consent is unresolved. Keep the item open until counsel confirms the required approval.'
    },
    correspondence: {
      type: 'MSG / THREAD 08', source: 'Counsel Correspondence', span: '14 Jun / Closing conditions', confidence: '91%', state: 'VERIFIED',
      copy: 'Closing-condition language was confirmed against the latest counsel correspondence.'
    }
  };
  const closeEvidenceDetail = () => {
    evidenceRows.forEach((row) => {
      row.classList.remove('is-selected');
      row.setAttribute('aria-expanded', 'false');
    });
    if (evidenceDetail) {
      evidenceDetail.hidden = true;
      evidenceDetail.classList.remove('is-visible');
    }
  };
  const setEvidenceDetail = (key, row) => {
    const data = evidenceDetailData[key];
    if (!data || !evidenceDetail) return;
    const wasSelected = row.classList.contains('is-selected');
    closeEvidenceDetail();
    if (wasSelected) return;
    row.classList.add('is-selected');
    row.setAttribute('aria-expanded', 'true');
    if (evidenceDetailType) evidenceDetailType.textContent = data.type;
    if (evidenceDetailState) evidenceDetailState.innerHTML = `<i></i> ${data.state}`;
    if (evidenceDetailSource) evidenceDetailSource.textContent = data.source;
    if (evidenceDetailSpan) evidenceDetailSpan.textContent = data.span;
    if (evidenceDetailConfidence) evidenceDetailConfidence.textContent = data.confidence;
    if (evidenceDetailCopy) evidenceDetailCopy.textContent = data.copy;
    evidenceDetail.hidden = false;
    evidenceDetail.classList.add('is-visible');
  };
  const setEvidenceFilter = (filter) => {
    writeQueryState('evidence', filter);
    closeEvidenceDetail();
    evidenceFilters.forEach((tab) => {
      const active = tab.dataset.evidenceFilter === filter;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    evidenceRows.forEach((row) => {
      row.hidden = filter !== 'all' && row.dataset.evidenceState !== filter;
    });
  };
  evidenceFilters.forEach((tab, index) => {
    tab.addEventListener('click', () => setEvidenceFilter(tab.dataset.evidenceFilter));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? evidenceFilters.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + evidenceFilters.length) % evidenceFilters.length;
      const nextTab = evidenceFilters[nextIndex];
      nextTab.focus();
      setEvidenceFilter(nextTab.dataset.evidenceFilter);
    });
  });
  evidenceRows.forEach((row) => {
    const selectEvidence = () => setEvidenceDetail(row.dataset.evidenceKey, row);
    row.addEventListener('click', selectEvidence);
    row.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectEvidence();
      }
    });
  });
  document.querySelector('[data-evidence-detail-close]')?.addEventListener('click', closeEvidenceDetail);
  const initialEvidence = readQueryState('evidence');
  if (initialEvidence && evidenceFilters.some((tab) => tab.dataset.evidenceFilter === initialEvidence)) setEvidenceFilter(initialEvidence);

  const commandTabs = [...document.querySelectorAll('[data-command-range]')];
  const commandDashboard = document.querySelector('#command-dashboard');
  commandDashboard?.setAttribute('aria-live', 'polite');
  let commandChangeTimer;
  const commandData = {
    week: {
      matters: '12', runs: '48', bytes: '0 B', hours: '86',
      notes: { matters: '+2 this week', runs: '+18% vs prior', bytes: 'Boundary intact', hours: 'Illustrative demo' },
      chart: ['32%', '45%', '28%', '58%', '70%', '83%', '92%'], label: 'Last 7 days'
    },
    month: {
      matters: '28', runs: '184', bytes: '0 B', hours: '312',
      notes: { matters: '+8 this month', runs: '+24% vs prior', bytes: 'Boundary intact', hours: 'Illustrative demo' },
      chart: ['42%', '38%', '62%', '48%', '72%', '85%', '96%'], label: 'Last 30 days'
    }
  };
  const setCommandRange = (range, animate = true) => {
    const data = commandData[range] || commandData.week;
    writeQueryState('range', range);
    commandTabs.forEach((tab) => {
      const active = tab.dataset.commandRange === range;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    if (commandDashboard) commandDashboard.setAttribute('aria-labelledby', `command-range-${range}`);
    if (animate && commandDashboard) {
      commandDashboard.classList.add('is-changing');
      window.clearTimeout(commandChangeTimer);
      commandChangeTimer = window.setTimeout(() => commandDashboard.classList.remove('is-changing'), 280);
    }
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'notes' || key === 'chart' || key === 'label') return;
      const element = document.querySelector(`[data-command-value="${key}"]`);
      if (element) element.textContent = value;
      const note = document.querySelector(`[data-command-note="${key}"]`);
      if (note) note.textContent = data.notes[key];
    });
    document.querySelectorAll('[data-command-bar]').forEach((bar, index) => {
      bar.style.setProperty('--bar', data.chart[index] || '5%');
    });
    const label = document.querySelector('[data-command-chart-label]');
    if (label) label.textContent = data.label;
  };

  commandTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setCommandRange(tab.dataset.commandRange));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? commandTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + commandTabs.length) % commandTabs.length;
      const nextTab = commandTabs[nextIndex];
      nextTab.focus();
      setCommandRange(nextTab.dataset.commandRange);
    });
  });
  const initialCommandRange = readQueryState('range');
  if (initialCommandRange && commandData[initialCommandRange]) setCommandRange(initialCommandRange, false);

  const deploymentProfiles = [...document.querySelectorAll('[data-deployment-mode]')];
  const deploymentProfileCopy = document.querySelector('[data-deployment-copy]');
  const deploymentProfileInput = document.querySelector('[data-deployment-profile-input]');
  let deploymentChangeTimer;
  const deploymentModeData = {
    local: 'Firm-managed devices. Local inference. A deployment profile built around your existing perimeter.',
    network: 'Private network deployment. Central governance with controlled access for approved teams and matters.',
    airgap: 'Air-gapped profile. No external network path for the most sensitive work and restricted environments.'
  };
  const setDeploymentMode = (mode, animate = true) => {
    writeQueryState('profile', mode);
    deploymentProfiles.forEach((profile) => {
      const active = profile.dataset.deploymentMode === mode;
      profile.classList.toggle('is-active', active);
      profile.setAttribute('aria-selected', String(active));
      profile.tabIndex = active ? 0 : -1;
    });
    if (deploymentProfileInput) deploymentProfileInput.value = mode;
    if (deploymentProfileCopy) {
      deploymentProfileCopy.textContent = deploymentModeData[mode] || deploymentModeData.local;
      const active = deploymentProfiles.find((profile) => profile.dataset.deploymentMode === mode);
      if (active) deploymentProfileCopy.setAttribute('aria-labelledby', active.id);
      if (animate) {
        deploymentProfileCopy.classList.add('is-changing');
        window.clearTimeout(deploymentChangeTimer);
        deploymentChangeTimer = window.setTimeout(() => deploymentProfileCopy.classList.remove('is-changing'), 280);
      }
    }
  };
  deploymentProfiles.forEach((profile, index) => {
    profile.addEventListener('click', () => setDeploymentMode(profile.dataset.deploymentMode));
    profile.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? deploymentProfiles.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + deploymentProfiles.length) % deploymentProfiles.length;
      const nextProfile = deploymentProfiles[nextIndex];
      nextProfile.focus();
      setDeploymentMode(nextProfile.dataset.deploymentMode);
    });
  });
  const initialDeploymentProfile = readQueryState('profile');
  if (initialDeploymentProfile && deploymentModeData[initialDeploymentProfile]) setDeploymentMode(initialDeploymentProfile, false);

  const impactInputs = [...document.querySelectorAll('[data-impact-input]')];
  const impactResults = document.querySelector('.impact-results');
  let impactChangeTimer;
  const updateImpact = (animate = false) => {
    const values = Object.fromEntries(impactInputs.map((input) => [input.dataset.impactInput, Number(input.value)]));
    const documents = values.matters * values.documents;
    const hours = values.matters * values.hours;
    const capacity = Math.round(hours * values.assumption / 100);
    const formatted = new Intl.NumberFormat('en-US');
    const outputValues = {
      matters: values.matters,
      documents: values.documents,
      hours: values.hours,
      assumption: `${values.assumption}%`
    };
    Object.entries(outputValues).forEach(([key, value]) => {
      const output = document.querySelector(`[data-impact-output="${key}"]`);
      if (output) output.textContent = value;
    });
    const results = { documents: formatted.format(documents), hours: formatted.format(hours), capacity: formatted.format(capacity) };
    Object.entries(results).forEach(([key, value]) => {
      const result = document.querySelector(`[data-impact-result="${key}"]`);
      if (result) result.textContent = value;
    });
    if (animate && impactResults) {
      impactResults.classList.add('is-changing');
      window.clearTimeout(impactChangeTimer);
      impactChangeTimer = window.setTimeout(() => impactResults.classList.remove('is-changing'), 220);
    }
  };
  impactInputs.forEach((input) => input.addEventListener('input', () => updateImpact(true)));
  updateImpact();

  const deploymentForm = document.querySelector('[data-deployment-form]');
  const deploymentBrief = document.querySelector('[data-deployment-brief]');
  const briefProfile = document.querySelector('[data-brief-profile]');
  const briefPractice = document.querySelector('[data-brief-practice]');
  const briefSize = document.querySelector('[data-brief-size]');
  const briefSummary = document.querySelector('[data-brief-summary]');
  const downloadBrief = document.querySelector('[data-download-brief]');
  const profileLabels = { local: 'Local runtime', network: 'Private network', airgap: 'Air-gapped' };
  let currentBrief = null;

  deploymentForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const email = String(values.get('email') || '').trim();
    const practice = String(values.get('practice-area') || '').trim();
    const size = String(values.get('firm-size') || '').trim();
    const profile = String(values.get('deployment-profile') || 'local');
    const status = document.querySelector('[data-form-status]');
    if (!email || !practice || !size) return;
    currentBrief = { email, practice, size, profile: profileLabels[profile] || profileLabels.local, created: new Date().toISOString() };
    if (briefProfile) briefProfile.textContent = currentBrief.profile;
    if (briefPractice) briefPractice.textContent = currentBrief.practice;
    if (briefSize) briefSize.textContent = currentBrief.size;
    if (briefSummary) briefSummary.textContent = `A private ${currentBrief.profile.toLowerCase()} brief for ${currentBrief.practice.toLowerCase()} / ${currentBrief.size.toLowerCase()} is ready to share with your security lead.`;
    if (deploymentBrief) {
      deploymentBrief.hidden = false;
      deploymentBrief.classList.add('is-visible');
    }
    if (status) {
      status.textContent = 'Private brief prepared locally. Nothing was transmitted.';
      status.classList.add('is-success');
    }
  });

  downloadBrief?.addEventListener('click', () => {
    if (!currentBrief) return;
    const contents = [
      'VAULTR / PRIVATE DEPLOYMENT BRIEF',
      '----------------------------------',
      `Profile: ${currentBrief.profile}`,
      `Practice area: ${currentBrief.practice}`,
      `Firm size: ${currentBrief.size}`,
      `Firm email: ${currentBrief.email}`,
      '',
      'Prepared locally. No data was transmitted by Vaultr.',
      `Created: ${currentBrief.created}`
    ].join('\n');
    const url = URL.createObjectURL(new Blob([contents], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'vaultr-private-deployment-brief.txt';
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  });
})();
