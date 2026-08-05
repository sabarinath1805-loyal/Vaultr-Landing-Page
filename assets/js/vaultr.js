(() => {
  const banner = document.querySelector('[data-banner]');
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  document.querySelector('[data-close-banner]')?.addEventListener('click', () => {
    banner?.classList.add('is-hidden');
    header?.style.setProperty('top', '0');
  });

  const setMenu = (open) => {
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  const navDropdowns = [...document.querySelectorAll('[data-nav-dropdown]')];
  const closeNavDropdowns = () => navDropdowns.forEach((dropdown) => {
    dropdown.classList.remove('is-open');
    dropdown.querySelector('.nav-dropdown__trigger')?.setAttribute('aria-expanded', 'false');
  });
  navDropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('.nav-dropdown__trigger');
    trigger?.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = !dropdown.classList.contains('is-open');
      closeNavDropdowns();
      dropdown.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
    });
    dropdown.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavDropdowns));
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-nav-dropdown]')) closeNavDropdowns();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavDropdowns();
      if (mobileMenu?.classList.contains('is-open')) {
        setMenu(false);
        menuButton?.focus({ preventScroll: true });
      }
    }
  });

  let lastY = 0;
  const syncHeader = () => {
    const y = window.scrollY;
    header?.classList.toggle('is-fixed', y > 48);
    lastY = y;
  };
  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const quotes = [...document.querySelectorAll('[data-quote]')];
  const dots = [...document.querySelectorAll('[data-quote-dot]')];
  let currentQuote = 0;
  let quoteTimer;

  const showQuote = (index) => {
    currentQuote = (index + quotes.length) % quotes.length;
    quotes.forEach((quote, i) => quote.classList.toggle('is-active', i === currentQuote));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === currentQuote));
  };

  const restartCarousel = () => {
    if (!quotes.length) return;
    window.clearInterval(quoteTimer);
    quoteTimer = window.setInterval(() => showQuote(currentQuote + 1), 7000);
  };

  document.querySelector('[data-quote-prev]')?.addEventListener('click', () => { showQuote(currentQuote - 1); restartCarousel(); });
  document.querySelector('[data-quote-next]')?.addEventListener('click', () => { showQuote(currentQuote + 1); restartCarousel(); });
  dots.forEach((dot) => dot.addEventListener('click', () => { showQuote(Number(dot.dataset.quoteDot)); restartCarousel(); }));
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

  sourceFiles.forEach((file) => {
    file.addEventListener('click', () => {
      const data = sourceFileData[file.dataset.lexFile];
      if (!data) return;
      sourceFiles.forEach((item) => item.classList.toggle('is-active', item === file));
      if (workspaceDocumentLabel) workspaceDocumentLabel.textContent = data.label;
      if (workspaceDocumentPage) workspaceDocumentPage.textContent = data.page;
      if (workspaceDocumentTitle) workspaceDocumentTitle.textContent = data.title;
    });
  });

  const workflowTabs = [...document.querySelectorAll('[data-workflow-tab]')];
  const workflowPanels = [...document.querySelectorAll('[data-workflow-panel]')];
  const setWorkflow = (mode) => {
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

  const evidenceFilters = [...document.querySelectorAll('[data-evidence-filter]')];
  const evidenceRows = [...document.querySelectorAll('[data-evidence-state]')];
  const setEvidenceFilter = (filter) => {
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

  const commandTabs = [...document.querySelectorAll('[data-command-range]')];
  const commandDashboard = document.querySelector('#command-dashboard');
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
  const setCommandRange = (range) => {
    const data = commandData[range] || commandData.week;
    commandTabs.forEach((tab) => {
      const active = tab.dataset.commandRange === range;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    if (commandDashboard) commandDashboard.setAttribute('aria-labelledby', `command-range-${range}`);
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

  const deploymentProfiles = [...document.querySelectorAll('[data-deployment-mode]')];
  const deploymentProfileCopy = document.querySelector('[data-deployment-copy]');
  const deploymentProfileInput = document.querySelector('[data-deployment-profile-input]');
  const deploymentModeData = {
    local: 'Firm-managed devices. Local inference. A deployment profile built around your existing perimeter.',
    network: 'Private network deployment. Central governance with controlled access for approved teams and matters.',
    airgap: 'Air-gapped profile. No external network path for the most sensitive work and restricted environments.'
  };
  const setDeploymentMode = (mode) => {
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

  const impactInputs = [...document.querySelectorAll('[data-impact-input]')];
  const updateImpact = () => {
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
  };
  impactInputs.forEach((input) => input.addEventListener('input', updateImpact));
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
