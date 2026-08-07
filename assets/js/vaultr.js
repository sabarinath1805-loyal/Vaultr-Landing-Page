(() => {
  const supportsReveal = 'IntersectionObserver' in window;
  document.documentElement.classList.toggle('js', supportsReveal);
  const banner = document.querySelector('[data-banner]');
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const heroDemo = document.querySelector('[data-hero-demo]');
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

  const demoModes = {
    review: {
      label: 'OUTBOUND NETWORK', value: '0 B',
      copy: 'Review a confidentiality clause without leaving your device.',
      runtime: 'Local', evidence: '3', confidence: '98%',
      result: 'Ready for a private pass.'
    },
    compare: {
      label: 'DOCUMENTS COMPARED', value: '02',
      copy: 'Compare two versions and surface the material change in seconds.',
      runtime: 'Local', evidence: '12', confidence: '96%',
      result: 'Ready to surface changes.'
    },
    draft: {
      label: 'DRAFTING CONTEXT', value: '04',
      copy: 'Draft a matter-aware response from the sources you selected.',
      runtime: 'Local', evidence: '8', confidence: '94%',
      result: 'Ready to draft from context.'
    }
  };
  if (heroDemo) {
    const modeButtons = [...heroDemo.querySelectorAll('[data-demo-mode]')];
    const status = heroDemo.querySelector('[data-demo-status]');
    const label = heroDemo.querySelector('[data-demo-label]');
    const value = heroDemo.querySelector('[data-demo-value]');
    const copy = heroDemo.querySelector('[data-demo-copy]');
    const result = heroDemo.querySelector('[data-demo-result]');
    const foot = heroDemo.querySelector('[data-demo-foot]');
    const run = heroDemo.querySelector('[data-demo-run]');
    const demoPanel = heroDemo.querySelector('[role="tabpanel"]');
    const metrics = {
      runtime: heroDemo.querySelector('[data-demo-metric="runtime"]'),
      evidence: heroDemo.querySelector('[data-demo-metric="evidence"]'),
      confidence: heroDemo.querySelector('[data-demo-metric="confidence"]')
    };
    let activeMode = 'review';
    let runTimer;
    const updateDemo = (mode) => {
      const content = demoModes[mode] || demoModes.review;
      activeMode = mode;
      modeButtons.forEach((button) => {
        const active = button.dataset.demoMode === mode;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
      });
      const activeButton = modeButtons.find((button) => button.dataset.demoMode === mode);
      if (activeButton && demoPanel) demoPanel.setAttribute('aria-labelledby', activeButton.id);
      if (label) label.textContent = content.label;
      if (value) value.textContent = content.value;
      if (copy) copy.textContent = content.copy;
      if (result) result.textContent = content.result;
      if (foot) foot.textContent = 'READY FOR A PRIVATE PASS';
      Object.entries(metrics).forEach(([key, element]) => { if (element) element.textContent = content[key]; });
      if (status) status.textContent = 'READY';
      run?.classList.remove('is-running');
      if (run) run.disabled = false;
    };
    modeButtons.forEach((button) => button.addEventListener('click', () => updateDemo(button.dataset.demoMode)));
    run?.addEventListener('click', () => {
      window.clearTimeout(runTimer);
      run.classList.add('is-running');
      run.disabled = true;
      if (status) status.textContent = 'RUNNING';
      if (foot) foot.textContent = 'PROCESSING ON DEVICE';
      if (result) result.textContent = 'Lex is reasoning locally…';
      runTimer = window.setTimeout(() => {
        run.classList.remove('is-running');
        run.disabled = false;
        if (status) status.textContent = 'COMPLETE';
        if (foot) foot.textContent = 'PRIVATE PASS COMPLETE';
        if (result) result.textContent = `${demoModes[activeMode].result} Nothing left the room.`;
      }, 720);
    });
    updateDemo(activeMode);
  }

  const workbench = document.querySelector('[data-workbench]');
  if (workbench) {
    const workbenchSteps = [...workbench.querySelectorAll('[data-workbench-step]')];
    const workbenchKicker = workbench.querySelector('[data-workbench-kicker]');
    const workbenchTitle = workbench.querySelector('[data-workbench-title]');
    const workbenchCopy = workbench.querySelector('[data-workbench-copy]');
    const workbenchChips = workbench.querySelector('[data-workbench-chips]');
    const workbenchStatus = workbench.querySelector('[data-workbench-status]');
    const workbenchRun = workbench.querySelector('[data-workbench-run]');
    const workbenchTraces = [...workbench.querySelectorAll('[data-workbench-trace]')];
    const workbenchPanel = workbench.querySelector('[role="tabpanel"]');
    const workbenchModes = {
      context: {
        kicker: 'CONTEXT / MATTER NORTHSTAR',
        title: 'Start with the record.',
        copy: 'Attach the matter sources and the firm playbook before Lex takes its first step.',
        chips: ['MERGER AGREEMENT', 'DISCLOSURE SCHEDULE', 'PLAYBOOK / M&A'],
        current: 'plan'
      },
      plan: {
        kicker: 'PLAN / CONTROLLED SEQUENCE',
        title: 'Let the agent plan the work.',
        copy: 'Lex maps the brief into supervised steps, choosing the right local skill without hiding the route.',
        chips: ['REVIEW CLAUSES', 'CHECK POLICY', 'DRAFT FINDINGS'],
        current: 'plan'
      },
      proof: {
        kicker: 'PROOF / REVIEW CHECKPOINT',
        title: 'Every result stays reviewable.',
        copy: 'Move from an answer to the exact source span, confidence signal, and owner before anything leaves the room.',
        chips: ['SOURCE SPANS', '98% CONFIDENCE', 'PARTNER SIGN-OFF'],
        current: 'proof'
      }
    };
    let workbenchTimer;
    const setWorkbenchMode = (mode) => {
      const content = workbenchModes[mode] || workbenchModes.context;
      workbenchSteps.forEach((step) => {
        const active = step.dataset.workbenchStep === mode;
        step.classList.toggle('is-active', active);
        step.setAttribute('aria-selected', String(active));
      });
      const activeStep = workbenchSteps.find((step) => step.dataset.workbenchStep === mode);
      if (activeStep && workbenchPanel) workbenchPanel.setAttribute('aria-labelledby', activeStep.id);
      if (workbenchKicker) workbenchKicker.textContent = content.kicker;
      if (workbenchTitle) workbenchTitle.textContent = content.title;
      if (workbenchCopy) workbenchCopy.textContent = content.copy;
      if (workbenchChips) workbenchChips.innerHTML = content.chips.map((chip) => `<span>${chip}</span>`).join('');
      workbenchTraces.forEach((trace) => {
        trace.classList.toggle('is-current', trace.dataset.workbenchTrace === content.current);
      });
      if (workbenchStatus) workbenchStatus.textContent = 'READY FOR REVIEW';
      if (workbenchRun) {
        workbenchRun.disabled = false;
        workbenchRun.classList.remove('is-running');
      }
    };
    workbenchSteps.forEach((step) => step.addEventListener('click', () => setWorkbenchMode(step.dataset.workbenchStep)));
    workbenchRun?.addEventListener('click', () => {
      window.clearTimeout(workbenchTimer);
      workbenchRun.classList.add('is-running');
      workbenchRun.disabled = true;
      if (workbenchStatus) workbenchStatus.textContent = 'LEX IS RUNNING LOCALLY…';
      workbenchTraces.forEach((trace) => trace.classList.remove('is-current'));
      workbenchTimer = window.setTimeout(() => {
        workbenchRun.classList.remove('is-running');
        workbenchRun.disabled = false;
        if (workbenchStatus) workbenchStatus.textContent = 'COMPLETE / 0 B OUTBOUND';
        workbenchTraces.forEach((trace) => trace.classList.add('is-complete'));
      }, 860);
    });
    setWorkbenchMode('context');
  }

  const boundaryLab = document.querySelector('[data-boundary-lab]');
  if (boundaryLab) {
    const boundaryTabs = [...boundaryLab.querySelectorAll('[data-boundary-mode]')];
    const boundaryTitle = boundaryLab.querySelector('[data-boundary-title]');
    const boundaryStatus = boundaryLab.querySelector('[data-boundary-status]');
    const boundaryPanel = boundaryLab.querySelector('[role="tabpanel"]');
    const boundarySource = boundaryLab.querySelector('[data-boundary-source]');
    const boundarySourceMeta = boundaryLab.querySelector('[data-boundary-source-meta]');
    const boundaryRuntime = boundaryLab.querySelector('[data-boundary-runtime]');
    const boundaryRuntimeMeta = boundaryLab.querySelector('[data-boundary-runtime-meta]');
    const boundaryAnswer = boundaryLab.querySelector('[data-boundary-answer]');
    const boundaryAnswerMeta = boundaryLab.querySelector('[data-boundary-answer-meta]');
    const boundaryExternal = boundaryLab.querySelector('[data-boundary-external]');
    const boundaryBlocked = boundaryLab.querySelector('[data-boundary-blocked]');
    const boundaryNote = boundaryLab.querySelector('[data-boundary-note]');
    const boundaryModes = {
      local: {
        title: 'Local runtime', status: 'OUTBOUND DENIED', source: 'Your Documents', sourceMeta: 'Firm-managed device',
        runtime: 'Lex, On Device', runtimeMeta: 'Inference stays local', answer: 'Your Answer', answerMeta: 'Returned to counsel',
        external: 'External servers', blocked: 'BLOCKED', note: 'Retrieval, indexing, and reasoning happen on the firm-managed device.'
      },
      network: {
        title: 'Private network', status: 'CONTROLLED PATH', source: 'Your Documents', sourceMeta: 'Approved matter store',
        runtime: 'Lex, Firm Network', runtimeMeta: 'Governed internal route', answer: 'Your Answer', answerMeta: 'Returned to the team',
        external: 'Public cloud', blocked: 'BLOCKED', note: 'A firm-controlled network can serve approved teams while the public cloud remains outside the route.'
      },
      airgap: {
        title: 'Air-gapped', status: 'NO NETWORK PATH', source: 'Your Documents', sourceMeta: 'Restricted environment',
        runtime: 'Lex, Air-Gapped', runtimeMeta: 'No external route', answer: 'Your Answer', answerMeta: 'Returned in-room',
        external: 'All external paths', blocked: 'BLOCKED', note: 'For restricted environments, the entire reasoning path stays inside the isolated room.'
      }
    };
    const setBoundaryMode = (mode) => {
      const content = boundaryModes[mode] || boundaryModes.local;
      boundaryTabs.forEach((tab) => {
        const active = tab.dataset.boundaryMode === mode;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      const activeTab = boundaryTabs.find((tab) => tab.dataset.boundaryMode === mode);
      if (activeTab && boundaryPanel) boundaryPanel.setAttribute('aria-labelledby', activeTab.id);
      if (boundaryTitle) boundaryTitle.textContent = content.title;
      if (boundaryStatus) boundaryStatus.textContent = content.status;
      if (boundarySource) boundarySource.textContent = content.source;
      if (boundarySourceMeta) boundarySourceMeta.textContent = content.sourceMeta;
      if (boundaryRuntime) boundaryRuntime.textContent = content.runtime;
      if (boundaryRuntimeMeta) boundaryRuntimeMeta.textContent = content.runtimeMeta;
      if (boundaryAnswer) boundaryAnswer.textContent = content.answer;
      if (boundaryAnswerMeta) boundaryAnswerMeta.textContent = content.answerMeta;
      if (boundaryExternal) boundaryExternal.textContent = content.external;
      if (boundaryBlocked) boundaryBlocked.innerHTML = `${content.blocked} <i aria-hidden="true">✕</i>`;
      if (boundaryNote) boundaryNote.textContent = content.note;
    };
    boundaryTabs.forEach((tab) => tab.addEventListener('click', () => setBoundaryMode(tab.dataset.boundaryMode)));
    boundaryTabs.forEach((tab, index) => tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? boundaryTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + boundaryTabs.length) % boundaryTabs.length;
      const nextTab = boundaryTabs[nextIndex];
      nextTab.focus();
      setBoundaryMode(nextTab.dataset.boundaryMode);
    }));
    setBoundaryMode('local');
  }

  const resourceLibrary = document.querySelector('[data-resource-library]');
  if (resourceLibrary) {
    const resourceFilters = [...resourceLibrary.querySelectorAll('[data-resource-filter]')];
    const resourceCards = [...resourceLibrary.querySelectorAll('[data-resource-kind]')];
    const resourceSearch = resourceLibrary.querySelector('[data-resource-search]');
    const resourceGrid = resourceLibrary.querySelector('[data-resource-grid]');
    const resourceEmpty = resourceLibrary.querySelector('[data-resource-empty]');
    let activeResourceFilter = 'all';
    const renderResources = (filter = activeResourceFilter) => {
      activeResourceFilter = filter;
      const query = (resourceSearch?.value || '').trim().toLowerCase();
      resourceFilters.forEach((tab) => {
        const active = tab.dataset.resourceFilter === filter;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      const activeTab = resourceFilters.find((tab) => tab.dataset.resourceFilter === filter);
      if (activeTab && resourceGrid) resourceGrid.setAttribute('aria-labelledby', activeTab.id);
      let matches = 0;
      resourceCards.forEach((card) => {
        const matchesFilter = filter === 'all' || card.dataset.resourceKind === filter;
        const matchesSearch = !query || card.textContent.toLowerCase().includes(query);
        const visible = matchesFilter && matchesSearch;
        card.hidden = !visible;
        if (visible) matches += 1;
      });
      if (resourceEmpty) resourceEmpty.hidden = matches !== 0;
    };
    resourceFilters.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        writeQueryState('resource', tab.dataset.resourceFilter);
        renderResources(tab.dataset.resourceFilter);
      });
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? resourceFilters.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + resourceFilters.length) % resourceFilters.length;
        const nextTab = resourceFilters[nextIndex];
        nextTab.focus();
        writeQueryState('resource', nextTab.dataset.resourceFilter);
        renderResources(nextTab.dataset.resourceFilter);
      });
    });
    resourceSearch?.addEventListener('input', () => renderResources());
    const initialResource = readQueryState('resource');
    renderResources(initialResource && resourceFilters.some((tab) => tab.dataset.resourceFilter === initialResource) ? initialResource : 'all');
  }

  const knowledgeRoom = document.querySelector('[data-knowledge-room]');
  if (knowledgeRoom) {
    const knowledgeFilters = [...knowledgeRoom.querySelectorAll('[data-knowledge-filter]')];
    const knowledgeCards = [...knowledgeRoom.querySelectorAll('[data-knowledge-card]')];
    const knowledgeSearch = knowledgeRoom.querySelector('[data-knowledge-search]');
    const knowledgeList = knowledgeRoom.querySelector('[data-knowledge-list]');
    const knowledgeEmpty = knowledgeRoom.querySelector('[data-knowledge-empty]');
    const knowledgeDetailKind = knowledgeRoom.querySelector('[data-knowledge-detail-kind]');
    const knowledgeDetailState = knowledgeRoom.querySelector('[data-knowledge-detail-state]');
    const knowledgeDetailTitle = knowledgeRoom.querySelector('[data-knowledge-detail-title]');
    const knowledgeDetailCopy = knowledgeRoom.querySelector('[data-knowledge-detail-copy]');
    const knowledgeDetailOwner = knowledgeRoom.querySelector('[data-knowledge-detail-owner]');
    const knowledgeDetailReview = knowledgeRoom.querySelector('[data-knowledge-detail-review]');
    const knowledgeUse = knowledgeRoom.querySelector('[data-knowledge-use]');
    const knowledgeUseStatus = knowledgeRoom.querySelector('[data-knowledge-use-status]');
    const knowledgeFoot = knowledgeRoom.querySelector('[data-knowledge-foot]');
    const knowledgeData = {
      liability: { kind: 'PLAYBOOK / CURATED', state: 'VERIFIED', title: 'Northstar liability playbook', copy: 'Four approved standards for caps, exclusions, indemnity, and closing conditions. Lex can use this set as a visible guardrail before a workflow begins.', owner: 'Knowledge team', review: '06 Aug 2026' },
      meridian: { kind: 'PRECEDENT / APPROVED', state: 'VERIFIED', title: 'Meridian employment set', copy: 'A trusted set of employment agreements and annotations for consistent review across the in-house matter queue.', owner: 'Employment group', review: '31 Jul 2026' },
      consent: { kind: 'PRECEDENT / REVIEWED', state: 'REVIEW', title: 'Supplier consent library', copy: 'Reviewed consent language and fallback positions for change-of-control notices, with owners attached to every clause.', owner: 'Transactional group', review: '02 Aug 2026' },
      privacy: { kind: 'POLICY / FIRM STANDARD', state: 'CURRENT', title: 'Privacy and AI policy', copy: 'The firm standard for approved runtimes, matter boundaries, review gates, and what can be shared beyond the room.', owner: 'KM / Security', review: '05 Aug 2026' }
    };
    let knowledgeActiveFilter = 'all';
    let knowledgeActiveKey = 'liability';
    const setKnowledgeDetail = (key) => {
      const content = knowledgeData[key] || knowledgeData.liability;
      knowledgeActiveKey = key;
      knowledgeCards.forEach((card) => card.classList.toggle('is-active', card.dataset.knowledgeKey === key));
      if (knowledgeDetailKind) knowledgeDetailKind.textContent = content.kind;
      if (knowledgeDetailState) knowledgeDetailState.textContent = content.state;
      if (knowledgeDetailTitle) knowledgeDetailTitle.textContent = content.title;
      if (knowledgeDetailCopy) knowledgeDetailCopy.textContent = content.copy;
      if (knowledgeDetailOwner) knowledgeDetailOwner.textContent = content.owner;
      if (knowledgeDetailReview) knowledgeDetailReview.textContent = content.review;
      if (knowledgeUseStatus) knowledgeUseStatus.textContent = 'Nothing added yet.';
      if (knowledgeUse) knowledgeUse.disabled = false;
    };
    const renderKnowledge = (filter = knowledgeActiveFilter) => {
      knowledgeActiveFilter = filter;
      const query = (knowledgeSearch?.value || '').trim().toLowerCase();
      const matches = knowledgeCards.filter((card) => {
        const kindMatches = filter === 'all' || card.dataset.knowledgeKind === filter;
        const textMatches = !query || card.textContent.toLowerCase().includes(query);
        const visible = kindMatches && textMatches;
        card.hidden = !visible;
        return visible;
      });
      knowledgeFilters.forEach((tab) => {
        const active = tab.dataset.knowledgeFilter === filter;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
      });
      const activeFilter = knowledgeFilters.find((tab) => tab.dataset.knowledgeFilter === filter);
      if (activeFilter && knowledgeList) knowledgeList.setAttribute('aria-labelledby', activeFilter.id);
      if (knowledgeEmpty) knowledgeEmpty.hidden = matches.length !== 0;
      const activeCard = matches.find((card) => card.dataset.knowledgeKey === knowledgeActiveKey) || matches[0];
      if (activeCard) setKnowledgeDetail(activeCard.dataset.knowledgeKey);
      if (knowledgeUseStatus && !activeCard) knowledgeUseStatus.textContent = 'No set selected.';
    };
    knowledgeFilters.forEach((tab, index) => {
      tab.addEventListener('click', () => { writeQueryState('knowledge', tab.dataset.knowledgeFilter); renderKnowledge(tab.dataset.knowledgeFilter); });
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? knowledgeFilters.length - 1 :
          (index + (event.key === 'ArrowRight' ? 1 : -1) + knowledgeFilters.length) % knowledgeFilters.length;
        const next = knowledgeFilters[nextIndex];
        writeQueryState('knowledge', next.dataset.knowledgeFilter);
        renderKnowledge(next.dataset.knowledgeFilter);
        next.focus();
      });
    });
    knowledgeCards.forEach((card) => card.addEventListener('click', () => setKnowledgeDetail(card.dataset.knowledgeKey)));
    knowledgeSearch?.addEventListener('input', () => renderKnowledge());
    knowledgeUse?.addEventListener('click', () => {
      const content = knowledgeData[knowledgeActiveKey] || knowledgeData.liability;
      if (knowledgeUseStatus) knowledgeUseStatus.textContent = `${content.title} added to a local workflow.`;
      if (knowledgeFoot) knowledgeFoot.textContent = 'Source set staged / 0 B outbound';
      knowledgeUse.disabled = true;
    });
    const initialKnowledge = readQueryState('knowledge');
    renderKnowledge(initialKnowledge && knowledgeFilters.some((tab) => tab.dataset.knowledgeFilter === initialKnowledge) ? initialKnowledge : 'all');
  }

  const governanceDesk = document.querySelector('[data-governance-desk]');
  if (governanceDesk) {
    const governanceViews = [...governanceDesk.querySelectorAll('[data-governance-view]')];
    const governanceViewLabel = governanceDesk.querySelector('[data-governance-view-label]');
    const governanceViewTitle = governanceDesk.querySelector('[data-governance-view-title]');
    const governanceViewCopy = governanceDesk.querySelector('[data-governance-view-copy]');
    const governanceViewPanel = governanceDesk.querySelector('[role="tabpanel"]');
    const governanceToggles = [...governanceDesk.querySelectorAll('[data-governance-toggle]')];
    const governanceStatus = governanceDesk.querySelector('[data-governance-status]');
    const governanceFoot = governanceDesk.querySelector('[data-governance-foot]');
    const governanceRun = governanceDesk.querySelector('[data-governance-run]');
    const governancePacket = governanceDesk.querySelector('[data-governance-packet]');
    const governanceRows = {
      access: governanceDesk.querySelector('[data-governance-row="access"]'),
      connection: governanceDesk.querySelector('[data-governance-row="connection"]'),
      retention: governanceDesk.querySelector('[data-governance-row="retention"]')
    };
    const governanceViewData = {
      access: { label: 'ACCESS / MATTER ROLES', title: 'Keep the room scoped.', copy: 'Only the people assigned to Northstar can see the handoff. Raw matter files remain firm-owned.' },
      connections: { label: 'CONNECTIONS / APPROVED PATHS', title: 'Make every route explicit.', copy: 'Show which approved system can read the matter and keep every other path denied by profile.' },
      retention: { label: 'RETENTION / OWNERSHIP', title: 'Keep the record yours.', copy: 'A local packet can prove the policy without creating a second uncontrolled copy of the matter.' }
    };
    let governanceActiveView = 'access';
    let governanceTimer;
    const renderGovernanceControls = () => {
      const selected = governanceToggles.filter((toggle) => toggle.checked && !toggle.disabled);
      const counsel = governanceDesk.querySelector('[data-governance-toggle="counsel"]')?.checked;
      const client = governanceDesk.querySelector('[data-governance-toggle="client"]')?.checked;
      const dms = governanceDesk.querySelector('[data-governance-toggle="dms"]')?.checked;
      if (governanceRows.access) governanceRows.access.textContent = counsel && client ? 'Assigned + scoped' : counsel ? 'Assigned counsel only' : 'No assigned owner';
      if (governanceRows.connection) governanceRows.connection.textContent = dms ? '1 approved system' : 'No systems approved';
      if (governanceRows.retention) governanceRows.retention.textContent = selected.length > 1 ? 'Firm-owned' : 'Review required';
      if (governanceFoot) governanceFoot.textContent = `${selected.length} controls selected / 0 B outbound`;
      if (governanceRun) governanceRun.disabled = selected.length === 0;
      governancePacket?.setAttribute('disabled', '');
      if (governanceStatus) governanceStatus.textContent = 'READY TO CHECK';
    };
    const setGovernanceView = (view, focus = false) => {
      governanceActiveView = governanceViewData[view] ? view : 'access';
      const content = governanceViewData[governanceActiveView];
      governanceViews.forEach((tab) => {
        const active = tab.dataset.governanceView === governanceActiveView;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
      });
      if (governanceViewLabel) governanceViewLabel.textContent = content.label;
      if (governanceViewTitle) governanceViewTitle.textContent = content.title;
      if (governanceViewCopy) governanceViewCopy.textContent = content.copy;
      const activeTab = governanceViews.find((tab) => tab.dataset.governanceView === governanceActiveView);
      if (activeTab && governanceViewPanel) governanceViewPanel.setAttribute('aria-labelledby', activeTab.id);
      if (focus) activeTab?.focus();
    };
    governanceViews.forEach((tab, index) => {
      tab.addEventListener('click', () => setGovernanceView(tab.dataset.governanceView));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? governanceViews.length - 1 :
          (index + (event.key === 'ArrowRight' ? 1 : -1) + governanceViews.length) % governanceViews.length;
        setGovernanceView(governanceViews[nextIndex].dataset.governanceView, true);
      });
    });
    governanceToggles.forEach((toggle) => toggle.addEventListener('change', renderGovernanceControls));
    governanceRun?.addEventListener('click', () => {
      window.clearTimeout(governanceTimer);
      governanceRun.disabled = true;
      governanceRun.classList.add('is-running');
      if (governanceStatus) governanceStatus.textContent = 'CHECKING POLICY';
      if (governanceFoot) governanceFoot.textContent = 'Validating local controls…';
      governanceTimer = window.setTimeout(() => {
        governanceRun.disabled = false;
        governanceRun.classList.remove('is-running');
        if (governanceStatus) governanceStatus.textContent = 'POLICY VERIFIED';
        if (governanceFoot) governanceFoot.textContent = 'Policy verified / 0 B outbound';
        governancePacket?.removeAttribute('disabled');
      }, 850);
    });
    governancePacket?.addEventListener('click', () => {
      if (governancePacket.disabled) return;
      governancePacket.innerHTML = 'Packet staged locally <span aria-hidden="true">✓</span>';
      if (governanceStatus) governanceStatus.textContent = 'ADMIN PACKET READY';
      if (governanceFoot) governanceFoot.textContent = 'Local packet staged / 0 B outbound';
    });
    setGovernanceView('access');
    renderGovernanceControls();
  }

  const ecosystemMap = document.querySelector('[data-ecosystem-map]');
  if (ecosystemMap) {
    const ecosystemTabs = [...ecosystemMap.querySelectorAll('[data-ecosystem-tab]')];
    const ecosystemLabel = ecosystemMap.querySelector('[data-ecosystem-label]');
    const ecosystemTitle = ecosystemMap.querySelector('[data-ecosystem-title]');
    const ecosystemCopy = ecosystemMap.querySelector('[data-ecosystem-copy]');
    const ecosystemPills = ecosystemMap.querySelector('[data-ecosystem-pills]');
    const ecosystemFoot = ecosystemMap.querySelector('[data-ecosystem-foot]');
    const ecosystemLink = ecosystemMap.querySelector('[data-ecosystem-link]');
    const ecosystemModes = {
      lex: {
        label: 'LEX / INTELLIGENCE',
        title: 'Every answer starts with the record.',
        copy: 'Lex reviews, compares, and drafts across the matter while keeping the reasoning next to the sources that make it defensible.',
        pills: ['REVIEW', 'COMPARE', 'DRAFT'], foot: '01 / INTELLIGENCE',
        href: 'platform.html#product', link: 'Open Lex in context'
      },
      vault: {
        label: 'VAULT / MATTER RECORD',
        title: 'The record stays complete and close.',
        copy: 'Keep contracts, pleadings, exhibits, and correspondence in one searchable private room with the matter context intact.',
        pills: ['SOURCE SETS', 'MATTER CONTEXT', 'LOCAL INDEX'], foot: '02 / RECORD',
        href: 'platform.html#platform', link: 'Open the private room'
      },
      workflows: {
        label: 'WORKFLOW STUDIO / SUPERVISED ACTION',
        title: 'Repeatable work gets a visible route.',
        copy: 'Turn review, diligence, and drafting into controlled local runs with explicit inputs, checkpoints, and owner sign-off.',
        pills: ['REDLINES', 'DILIGENCE', 'CHECKPOINTS'], foot: '03 / ACTION',
        href: 'workflows.html#studio', link: 'Open Workflow Studio'
      },
      command: {
        label: 'COMMAND CENTER / PRACTICE VISIBILITY',
        title: 'Make the system legible without opening the matter.',
        copy: 'See activity, runtime health, and governance signals while the privileged documents remain inside the room.',
        pills: ['ACTIVITY', 'HEALTH', 'AUDIT'], foot: '04 / VISIBILITY',
        href: 'command.html#dashboard', link: 'Open Command Center'
      },
      evidence: {
        label: 'EVIDENCE LEDGER / SOURCE PROVENANCE',
        title: 'Every conclusion leaves a trail.',
        copy: 'Move from an answer to its exact source span, confidence signal, and review state before the work moves forward.',
        pills: ['SOURCE SPANS', 'CONFIDENCE', 'REVIEW STATE'], foot: '05 / PROVENANCE',
        href: 'platform.html#evidence', link: 'Trace the evidence'
      },
      delivery: {
        label: 'DELIVERY ROOM / SCOPED HANDOFF',
        title: 'Share the answer. Keep the matter.',
        copy: 'Prepare a source-linked handoff with only the evidence and permissions a client or business partner needs. The private record stays with counsel.',
        pills: ['SCOPED ACCESS', 'SOURCE LINKS', 'OWNER CONTROL'], foot: '06 / HANDOFF',
        href: 'customers.html', link: 'See a practice room'
      }
    };
    const setEcosystemMode = (mode, focus = false) => {
      const content = ecosystemModes[mode] || ecosystemModes.lex;
      ecosystemTabs.forEach((tab) => {
        const active = tab.dataset.ecosystemTab === mode;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
      });
      if (ecosystemLabel) ecosystemLabel.textContent = content.label;
      if (ecosystemTitle) ecosystemTitle.textContent = content.title;
      if (ecosystemCopy) ecosystemCopy.textContent = content.copy;
      if (ecosystemPills) ecosystemPills.innerHTML = content.pills.map((pill) => `<span>${pill}</span>`).join('');
      if (ecosystemFoot) ecosystemFoot.textContent = content.foot;
      if (ecosystemLink) {
        ecosystemLink.href = content.href;
        ecosystemLink.innerHTML = `${content.link} <span aria-hidden="true">↗</span>`;
      }
      const activeTab = ecosystemTabs.find((tab) => tab.dataset.ecosystemTab === mode);
      if (activeTab) ecosystemMap.querySelector('[role="tabpanel"]')?.setAttribute('aria-labelledby', activeTab.id);
      if (focus) activeTab?.focus();
    };
    ecosystemTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => setEcosystemMode(tab.dataset.ecosystemTab));
      tab.addEventListener('keydown', (event) => {
        const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? ecosystemTabs.length - 1 :
          (index + (event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1) + ecosystemTabs.length) % ecosystemTabs.length;
        setEcosystemMode(ecosystemTabs[nextIndex].dataset.ecosystemTab, true);
      });
    });
    setEcosystemMode('lex');
  }

  const deliveryRoom = document.querySelector('[data-delivery-room]');
  if (deliveryRoom) {
    const deliveryViews = [...deliveryRoom.querySelectorAll('[data-delivery-view]')];
    const deliveryViewLabel = deliveryRoom.querySelector('[data-delivery-view-label]');
    const deliveryViewTitle = deliveryRoom.querySelector('[data-delivery-view-title]');
    const deliveryViewCopy = deliveryRoom.querySelector('[data-delivery-view-copy]');
    const deliveryViewPanel = deliveryRoom.querySelector('[role="tabpanel"]');
    const deliveryItems = [...deliveryRoom.querySelectorAll('[data-delivery-item]')];
    const deliveryRecipients = [...deliveryRoom.querySelectorAll('[data-delivery-recipient]')];
    const deliveryPreviewItems = deliveryRoom.querySelector('[data-delivery-preview-items]');
    const deliveryPreviewTitle = deliveryRoom.querySelector('[data-delivery-preview-title]');
    const deliveryPreviewCopy = deliveryRoom.querySelector('[data-delivery-preview-copy]');
    const deliveryRecipientCopy = deliveryRoom.querySelector('[data-delivery-recipient-copy]');
    const deliveryStatus = deliveryRoom.querySelector('[data-delivery-status]');
    const deliveryFoot = deliveryRoom.querySelector('[data-delivery-foot]');
    const deliveryPrepare = deliveryRoom.querySelector('[data-delivery-prepare]');
    const deliveryShare = deliveryRoom.querySelector('[data-delivery-share]');
    const deliveryViewData = {
      access: {
        label: 'SCOPED ACCESS',
        title: 'Invite without opening the room.',
        copy: 'Set an explicit boundary for the people who need to review the answer. They see the handoff, not the private matter.'
      },
      artifacts: {
        label: 'WORK PRODUCT',
        title: 'Deliver the useful layer.',
        copy: 'Share a decision brief and the evidence behind it, while the underlying record remains owned by counsel.'
      },
      activity: {
        label: 'ACTIVITY / OWNER VIEW',
        title: 'Know what moved and when.',
        copy: 'Keep a quiet record of the handoff, recipient, and review state before anything is made available outside the firm.'
      }
    };
    const deliveryCatalog = {
      summary: { label: 'Executive summary', detail: 'Prepared for the recipient' },
      sources: { label: 'Source spans', detail: '03 links back to the record' },
      notes: { label: 'Review notes', detail: 'Owner context included' },
      raw: { label: 'Raw matter files', detail: 'Not shared' }
    };
    let deliveryTimer;
    let deliveryActiveView = 'access';
    const selectedDeliveryRecipients = () => deliveryRecipients.filter((input) => input.checked && !input.disabled);
    const renderDeliveryRecipients = () => {
      const selected = selectedDeliveryRecipients();
      if (deliveryRecipientCopy) deliveryRecipientCopy.textContent = selected.length ? `${selected.length} scoped recipient${selected.length === 1 ? '' : 's'}` : 'No recipient selected';
      return selected;
    };
    const renderDeliveryItems = () => {
      const selected = deliveryItems.filter((input) => input.checked && !input.disabled);
      if (deliveryPreviewItems) {
        deliveryPreviewItems.innerHTML = selected.length
          ? selected.map((input, index) => {
            const item = deliveryCatalog[input.dataset.deliveryItem];
            return `<div><span>0${index + 1}</span><strong>${item.label}</strong><small>${item.detail}</small></div>`;
          }).join('')
          : '<p class="delivery-room__empty">Choose the smallest useful handoff before preparing the preview.</p>';
      }
      const recipients = renderDeliveryRecipients();
      if (deliveryFoot) deliveryFoot.textContent = selected.length && recipients.length
        ? `${selected.length} item${selected.length === 1 ? '' : 's'} · ${recipients.length} recipient${recipients.length === 1 ? '' : 's'} / 0 B outbound`
        : 'Choose scope and recipients / 0 B outbound';
      if (deliveryPrepare) deliveryPrepare.disabled = selected.length === 0 || recipients.length === 0;
    };
    const setDeliveryView = (view, focus = false) => {
      const content = deliveryViewData[view] || deliveryViewData.access;
      deliveryActiveView = deliveryViewData[view] ? view : 'access';
      deliveryViews.forEach((tab) => {
        const active = tab.dataset.deliveryView === deliveryActiveView;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
      });
      if (deliveryViewLabel) deliveryViewLabel.textContent = content.label;
      if (deliveryViewTitle) deliveryViewTitle.textContent = content.title;
      if (deliveryViewCopy) deliveryViewCopy.textContent = content.copy;
      const activeTab = deliveryViews.find((tab) => tab.dataset.deliveryView === deliveryActiveView);
      if (activeTab && deliveryViewPanel) deliveryViewPanel.setAttribute('aria-labelledby', activeTab.id);
      if (focus) activeTab?.focus();
    };
    deliveryViews.forEach((tab, index) => {
      tab.addEventListener('click', () => setDeliveryView(tab.dataset.deliveryView));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? deliveryViews.length - 1 :
          (index + (event.key === 'ArrowRight' ? 1 : -1) + deliveryViews.length) % deliveryViews.length;
        setDeliveryView(deliveryViews[nextIndex].dataset.deliveryView, true);
      });
    });
    deliveryItems.forEach((input) => input.addEventListener('change', () => {
      if (deliveryShare) { deliveryShare.setAttribute('aria-disabled', 'true'); deliveryShare.removeAttribute('disabled'); }
      if (deliveryStatus) deliveryStatus.textContent = 'PRIVATE DRAFT';
      renderDeliveryItems();
    }));
    deliveryRecipients.forEach((input) => input.addEventListener('change', () => {
      if (deliveryShare) { deliveryShare.setAttribute('aria-disabled', 'true'); deliveryShare.removeAttribute('disabled'); }
      if (deliveryStatus) deliveryStatus.textContent = 'PRIVATE DRAFT';
      renderDeliveryItems();
    }));
    deliveryPrepare?.addEventListener('click', () => {
      window.clearTimeout(deliveryTimer);
      const recipients = selectedDeliveryRecipients();
      deliveryPrepare.disabled = true;
      deliveryPrepare.classList.add('is-running');
      if (deliveryStatus) deliveryStatus.textContent = 'PREPARING LOCALLY';
      if (deliveryPreviewTitle) deliveryPreviewTitle.textContent = deliveryActiveView === 'activity' ? 'Handoff activity / owner view' : 'Decision brief: acquisition review';
      if (deliveryPreviewCopy) deliveryPreviewCopy.textContent = `The selected handoff is staged locally for ${recipients.length} scoped recipient${recipients.length === 1 ? '' : 's'}. Review the scope before you make it available.`;
      deliveryTimer = window.setTimeout(() => {
        deliveryPrepare.disabled = false;
        deliveryPrepare.classList.remove('is-running');
        if (deliveryStatus) deliveryStatus.textContent = 'READY TO SHARE';
        if (deliveryFoot) deliveryFoot.textContent = `${deliveryItems.filter((input) => input.checked && !input.disabled).length} item${deliveryItems.filter((input) => input.checked && !input.disabled).length === 1 ? '' : 's'} staged · ${selectedDeliveryRecipients().length} recipient${selectedDeliveryRecipients().length === 1 ? '' : 's'} / 0 B outbound`;
        if (deliveryShare) { deliveryShare.setAttribute('aria-disabled', 'false'); deliveryShare.removeAttribute('disabled'); }
      }, 850);
    });
    deliveryShare?.addEventListener('click', () => {
      if (deliveryShare.getAttribute('aria-disabled') === 'true') return;
      if (deliveryStatus) deliveryStatus.textContent = 'PREVIEW COPIED LOCALLY';
      if (deliveryFoot) deliveryFoot.textContent = 'Scoped preview copied / 0 B outbound';
      deliveryShare.setAttribute('aria-disabled', 'true');
      deliveryShare.innerHTML = 'Preview copied <span aria-hidden="true">✓</span>';
      window.setTimeout(() => { deliveryShare.innerHTML = 'Share preview <span aria-hidden="true">↗</span>'; }, 1800);
    });
    const initialDeliveryView = readQueryState('delivery');
    setDeliveryView(deliveryViewData[initialDeliveryView] ? initialDeliveryView : 'access');
    renderDeliveryItems();
  }

  const verificationLab = document.querySelector('[data-verification]');
  if (verificationLab) {
    const verificationChecks = [...verificationLab.querySelectorAll('[data-verification-check]')];
    const verificationRun = verificationLab.querySelector('[data-verification-run]');
    const verificationExport = verificationLab.querySelector('[data-verification-export]');
    const verificationStatus = verificationLab.querySelector('[data-verification-status]');
    const verificationResult = verificationLab.querySelector('[data-verification-result]');
    const verificationCopy = verificationLab.querySelector('[data-verification-copy]');
    let verificationTimers = [];
    const clearVerificationTimers = () => {
      verificationTimers.forEach((timer) => window.clearTimeout(timer));
      verificationTimers = [];
    };
    const resetVerification = () => {
      clearVerificationTimers();
      verificationChecks.forEach((check) => {
        check.classList.remove('is-running', 'is-complete');
        const state = check.querySelector('[data-verification-state]');
        if (state) state.textContent = 'READY';
      });
      if (verificationStatus) verificationStatus.textContent = 'READY TO RUN';
      if (verificationResult) verificationResult.textContent = 'Run four checks before a matter opens.';
      if (verificationCopy) verificationCopy.textContent = 'Nothing here replaces your own security review. It gives the review a shared starting point and a visible finish line.';
      if (verificationRun) {
        verificationRun.disabled = false;
        verificationRun.classList.remove('is-running');
      }
      if (verificationExport) {
        verificationExport.disabled = true;
        verificationExport.classList.remove('is-ready');
        verificationExport.innerHTML = 'Download local check <span aria-hidden="true">↓</span>';
      }
    };
    verificationRun?.addEventListener('click', () => {
      clearVerificationTimers();
      verificationRun.disabled = true;
      verificationRun.classList.add('is-running');
      verificationChecks.forEach((check) => {
        check.classList.remove('is-running', 'is-complete');
        const state = check.querySelector('[data-verification-state]');
        if (state) state.textContent = 'QUEUED';
      });
      if (verificationStatus) verificationStatus.textContent = 'CHECKING BOUNDARY…';
      if (verificationResult) verificationResult.textContent = 'Verifying the room in sequence.';
      if (verificationCopy) verificationCopy.textContent = 'Each checkpoint stays visible so your security lead can ask the next question before rollout.';
      verificationChecks.forEach((check, index) => {
        const timer = window.setTimeout(() => {
          check.classList.add('is-running');
          const state = check.querySelector('[data-verification-state]');
          if (state) state.textContent = 'CHECKING';
        }, 120 + index * 270);
        verificationTimers.push(timer);
        const completeTimer = window.setTimeout(() => {
          check.classList.remove('is-running');
          check.classList.add('is-complete');
          const state = check.querySelector('[data-verification-state]');
          if (state) state.textContent = 'PASS';
          if (index === verificationChecks.length - 1) {
            verificationRun.disabled = false;
            verificationRun.classList.remove('is-running');
            if (verificationStatus) verificationStatus.textContent = 'VERIFICATION COMPLETE / 4 CHECKS';
            if (verificationResult) verificationResult.textContent = 'The room is ready for a human review.';
            if (verificationCopy) verificationCopy.textContent = 'Bring the output into your deployment brief, then validate the same boundary against your own environment.';
            if (verificationExport) {
              verificationExport.disabled = false;
              verificationExport.classList.add('is-ready');
            }
          }
        }, 390 + index * 270);
        verificationTimers.push(completeTimer);
      });
    });
    verificationExport?.addEventListener('click', () => {
      const packet = [
        'VAULTR / LOCAL BOUNDARY CHECK',
        `Generated: ${new Date().toISOString()}`,
        'Status: verification complete / 4 checks',
        'Profile: validate against your deployment brief',
        '',
        '01 / Runtime selected — PASS',
        '02 / Outbound path — PASS',
        '03 / Evidence linked — PASS',
        '04 / Owner assigned — PASS',
        '',
        'This local packet is an illustrative review aid, not a certification or customer result.'
      ].join('\n');
      try {
        const url = URL.createObjectURL(new Blob([packet], { type: 'text/plain;charset=utf-8' }));
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'vaultr-boundary-check.txt';
        anchor.click();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        verificationExport.innerHTML = 'Packet downloaded locally <span aria-hidden="true">✓</span>';
      } catch (error) {
        verificationExport.textContent = 'Download unavailable in this browser';
      }
    });
    resetVerification();
  }

  const workflowComposer = document.querySelector('[data-workflow-composer]');
  if (workflowComposer) {
    const composerCatalog = {
      sources: { label: 'Source set', copy: 'Attach matter files' },
      extract: { label: 'Extract', copy: 'Pull the relevant facts' },
      compare: { label: 'Compare', copy: 'Surface the material delta' },
      review: { label: 'Review gate', copy: 'Leave the call with counsel' },
      approve: { label: 'Sign-off', copy: 'Assign the next owner' }
    };
    const composerSequence = workflowComposer.querySelector('[data-composer-sequence]');
    const composerStatus = workflowComposer.querySelector('[data-composer-status]');
    const composerTitle = workflowComposer.querySelector('[data-composer-title]');
    const composerCopy = workflowComposer.querySelector('[data-composer-copy]');
    const composerFoot = workflowComposer.querySelector('[data-composer-foot]');
    const composerRun = workflowComposer.querySelector('[data-composer-run]');
    const composerAddButtons = [...workflowComposer.querySelectorAll('[data-composer-add]')];
    let composerSteps = ['sources', 'review'];
    let composerTimer;
    const renderComposer = () => {
      if (!composerSequence) return;
      composerSequence.innerHTML = composerSteps.length
        ? composerSteps.map((key, index) => {
          const step = composerCatalog[key];
          return `<div class="composer-step" role="listitem"><span>0${index + 1}</span><div><strong>${step.label}</strong><small>${step.copy}</small></div><button type="button" aria-label="Remove ${step.label}" data-composer-remove="${key}">×</button></div>`;
        }).join('')
        : '<p class="composer-empty">Add a step to start the route.</p>';
      composerAddButtons.forEach((button) => {
        const added = composerSteps.includes(button.dataset.composerAdd);
        button.classList.toggle('is-added', added);
        button.setAttribute('aria-pressed', String(added));
      });
      composerSequence.querySelectorAll('[data-composer-remove]').forEach((button) => button.addEventListener('click', () => {
        composerSteps = composerSteps.filter((step) => step !== button.dataset.composerRemove);
        renderComposer();
      }));
      if (composerFoot) composerFoot.textContent = `${composerSteps.length} STEPS / 0 B OUTBOUND`;
      if (composerTitle) composerTitle.textContent = composerSteps.length ? `Compose a ${composerSteps.length}-step private run.` : 'Start with the route.';
      if (composerCopy) composerCopy.textContent = composerSteps.length ? 'Choose the steps counsel wants to see. The route stays explicit before Lex takes action.' : 'Add a source set, a review gate, or a sign-off before previewing the run.';
      if (composerRun) composerRun.disabled = composerSteps.length < 2;
    };
    composerAddButtons.forEach((button) => button.addEventListener('click', () => {
      const step = button.dataset.composerAdd;
      if (composerSteps.includes(step)) {
        composerSteps = composerSteps.filter((item) => item !== step);
      } else if (composerSteps.length < 5) {
        composerSteps = [...composerSteps, step];
      }
      if (composerStatus) composerStatus.textContent = 'READY TO BUILD';
      renderComposer();
    }));
    composerRun?.addEventListener('click', () => {
      window.clearTimeout(composerTimer);
      composerRun.disabled = true;
      composerRun.classList.add('is-running');
      if (composerStatus) composerStatus.textContent = 'PREVIEWING LOCAL RUN…';
      if (composerTitle) composerTitle.textContent = 'The route is ready for review.';
      if (composerCopy) composerCopy.textContent = 'Lex will follow each visible step, pause at the review gate, and leave the result attached to its sources.';
      composerSequence?.classList.add('is-running');
      composerTimer = window.setTimeout(() => {
        composerRun.disabled = false;
        composerRun.classList.remove('is-running');
        composerSequence?.classList.remove('is-running');
        if (composerStatus) composerStatus.textContent = 'PREVIEW COMPLETE / 0 B OUTBOUND';
        if (composerFoot) composerFoot.textContent = `${composerSteps.length} STEPS / READY FOR COUNSEL`;
      }, 980);
    });
    renderComposer();
  }

  const editorRoom = document.querySelector('[data-editor-room]');
  if (editorRoom) {
    const editorModes = [...editorRoom.querySelectorAll('[data-editor-mode]')];
    const editorDocument = editorRoom.querySelector('[role="tabpanel"]');
    const editorTitle = editorRoom.querySelector('[data-editor-document-title]');
    const editorHeading = editorRoom.querySelector('[data-editor-heading]');
    const editorStatus = editorRoom.querySelector('[data-editor-status]');
    const editorFoot = editorRoom.querySelector('[data-editor-foot]');
    const editorTrace = editorRoom.querySelector('[data-editor-trace]');
    const editorTraceLabel = editorRoom.querySelector('[data-editor-trace-label]');
    const editorTraceTitle = editorRoom.querySelector('[data-editor-trace-title]');
    const editorTraceCopy = editorRoom.querySelector('[data-editor-trace-copy]');
    const editorTracePage = editorRoom.querySelector('[data-editor-trace-page]');
    const editorTraceConfidence = editorRoom.querySelector('[data-editor-trace-confidence]');
    const editorTraceOwner = editorRoom.querySelector('[data-editor-trace-owner]');
    const editorCitations = [...editorRoom.querySelectorAll('[data-editor-citation]')];
    const editorSuggestion = editorRoom.querySelector('[data-editor-suggestion]');
    const editorAccept = editorRoom.querySelector('[data-editor-accept]');
    const editorDismiss = editorRoom.querySelector('[data-editor-dismiss]');
    const editorCommentToggle = editorRoom.querySelector('[data-editor-comment-toggle]');
    const editorCommentForm = editorRoom.querySelector('[data-editor-comment-form]');
    const editorCommentInput = editorCommentForm?.querySelector('textarea');
    const editorCommentList = editorRoom.querySelector('[data-editor-comment-list]');
    const editorSave = editorRoom.querySelector('[data-editor-save]');
    const editorModeData = {
      draft: { title: 'Closing recommendation', heading: 'Recommendation to proceed' },
      compare: { title: 'Liability cap / version delta', heading: 'Compare the decision before signing' }
    };
    const editorCitationData = {
      cap: {
        label: 'SOURCE / MERGER AGREEMENT', title: '§ 7.4 / Limitation of liability',
        copy: 'The source span supports the proposed cap change and is available to counsel before the suggestion is accepted.', page: '48', confidence: '98%', owner: 'J. Chen'
      },
      draft: {
        label: 'SOURCE / LOCAL DRAFT', title: 'Closing condition / Counsel note',
        copy: 'This language is a local drafting suggestion grounded in the reviewed clause and kept separate from the source record.', page: 'Draft', confidence: '94%', owner: 'Lex / J. Chen'
      },
      notice: {
        label: 'SOURCE / DISCLOSURE SCHEDULE', title: 'Schedule 5 / Supplier consent',
        copy: 'The schedule identifies five suppliers that require written notice before the transaction can close.', page: '22', confidence: '96%', owner: 'M. Patel'
      }
    };
    let editorActiveMode = 'draft';
    const setEditorMode = (mode, focus = false) => {
      editorActiveMode = editorModeData[mode] ? mode : 'draft';
      const content = editorModeData[editorActiveMode];
      editorModes.forEach((tab) => {
        const active = tab.dataset.editorMode === editorActiveMode;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
      });
      editorRoom.classList.toggle('is-compare', editorActiveMode === 'compare');
      if (editorTitle) editorTitle.textContent = content.title;
      if (editorHeading) editorHeading.textContent = content.heading;
      const activeTab = editorModes.find((tab) => tab.dataset.editorMode === editorActiveMode);
      if (activeTab && editorDocument) editorDocument.setAttribute('aria-labelledby', activeTab.id);
      if (editorStatus && editorActiveMode === 'compare') editorStatus.textContent = 'COMPARE VIEW';
      if (editorStatus && editorActiveMode === 'draft') editorStatus.textContent = 'LOCAL DRAFT';
      if (focus) activeTab?.focus();
    };
    const setEditorCitation = (citation, focus = false) => {
      const content = editorCitationData[citation] || editorCitationData.cap;
      if (editorTraceLabel) editorTraceLabel.textContent = content.label;
      if (editorTraceTitle) editorTraceTitle.textContent = content.title;
      if (editorTraceCopy) editorTraceCopy.textContent = content.copy;
      if (editorTracePage) editorTracePage.textContent = content.page;
      if (editorTraceConfidence) editorTraceConfidence.textContent = content.confidence;
      if (editorTraceOwner) editorTraceOwner.textContent = content.owner;
      editorTrace?.classList.add('is-changing');
      window.setTimeout(() => editorTrace?.classList.remove('is-changing'), 260);
      if (focus) editorRoom.querySelector(`[data-editor-citation="${citation}"]`)?.focus();
    };
    editorModes.forEach((tab, index) => {
      tab.addEventListener('click', () => setEditorMode(tab.dataset.editorMode));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? editorModes.length - 1 :
          (index + (event.key === 'ArrowRight' ? 1 : -1) + editorModes.length) % editorModes.length;
        setEditorMode(editorModes[nextIndex].dataset.editorMode, true);
      });
    });
    editorCitations.forEach((citation) => citation.addEventListener('click', () => setEditorCitation(citation.dataset.editorCitation)));
    editorAccept?.addEventListener('click', () => {
      editorSuggestion?.classList.add('is-accepted');
      if (editorStatus) editorStatus.textContent = 'SUGGESTION ACCEPTED LOCALLY';
      if (editorFoot) editorFoot.textContent = '04 citations linked / 0 B outbound';
      if (editorAccept) editorAccept.disabled = true;
      if (editorDismiss) editorDismiss.disabled = true;
    });
    editorDismiss?.addEventListener('click', () => {
      if (editorSuggestion) editorSuggestion.hidden = true;
      if (editorStatus) editorStatus.textContent = 'ORIGINAL RETAINED LOCALLY';
      if (editorFoot) editorFoot.textContent = '03 citations linked / 0 B outbound';
    });
    editorCommentToggle?.addEventListener('click', () => {
      editorCommentToggle.hidden = true;
      if (editorCommentForm) editorCommentForm.hidden = false;
      editorCommentInput?.focus();
    });
    editorCommentForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      const comment = editorCommentInput?.value.trim();
      if (!comment || !editorCommentList) return;
      const paragraph = document.createElement('p');
      const author = document.createElement('b');
      author.textContent = 'You';
      paragraph.append(author, ` ${comment}`);
      editorCommentList.append(paragraph);
      editorCommentInput.value = '';
      editorCommentForm.hidden = true;
      editorCommentToggle.hidden = false;
      if (editorStatus) editorStatus.textContent = 'COMMENT KEPT LOCALLY';
    });
    editorSave?.addEventListener('click', () => {
      editorSave.disabled = true;
      editorSave.innerHTML = 'Saved locally <span aria-hidden="true">✓</span>';
      if (editorStatus) editorStatus.textContent = 'DRAFT SAVED LOCALLY';
      if (editorFoot) editorFoot.textContent = '03 citations linked / 0 B outbound';
    });
    setEditorMode('draft');
    setEditorCitation('cap');
  }

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
        <label class="quick-nav__search"><span aria-hidden="true">⌘K</span><input id="quick-nav-search" type="search" autocomplete="off" placeholder="Search matters, sources, and surfaces" aria-label="Search matters, sources, and surfaces"></label>
        <div class="quick-nav__summary" role="status" aria-live="polite"><div><span class="quick-nav__summary-label">LOCAL WORKSPACE INDEX</span><strong data-quick-nav-count>4 matters · 16 surfaces</strong></div><span class="quick-nav__summary-status"><i aria-hidden="true"></i> 0 B outbound</span></div>
        <div class="quick-nav__section">
          <div class="quick-nav__section-head"><span>RECENT MATTERS</span><small>LOCAL / ILLUSTRATIVE</small></div>
          <nav class="quick-nav__items quick-nav__items--matter" aria-label="Local matter index">
            <a href="platform.html#product" data-quick-nav-item data-quick-nav-type="matter" data-quick-nav-keywords="northstar acquisition merger agreement liability indemnity cap diligence"><span><strong>Northstar acquisition</strong><small>24 sources · Lex workspace · owner M. Chen</small></span><kbd>MATTER</kbd></a>
            <a href="platform.html#knowledge" data-quick-nav-item data-quick-nav-type="matter" data-quick-nav-keywords="meridian employment precedent agreements annotations in house"><span><strong>Meridian employment</strong><small>18 sources · approved precedent set · owner A. Rao</small></span><kbd>MATTER</kbd></a>
            <a href="platform.html#knowledge" data-quick-nav-item data-quick-nav-type="matter" data-quick-nav-keywords="supplier consent change control notice fallback transactional review"><span><strong>Supplier consent library</strong><small>Reviewed precedent · fallback positions · review required</small></span><kbd>SOURCE</kbd></a>
            <a href="command.html#governance" data-quick-nav-item data-quick-nav-type="matter" data-quick-nav-keywords="privacy ai policy runtime boundary review gate security current"><span><strong>Privacy and AI policy</strong><small>Firm standard · current 05 Aug 2026 · KM / Security</small></span><kbd>POLICY</kbd></a>
          </nav>
        </div>
        <div class="quick-nav__section">
          <div class="quick-nav__section-head"><span>DESTINATIONS</span><small>PRODUCT SURFACES</small></div>
          <nav class="quick-nav__items" aria-label="Vaultr destinations">
          <a href="platform.html" data-quick-nav-item><span><strong>Platform</strong><small>Lex, Vault, Knowledge, Agents</small></span><kbd>01</kbd></a>
          <a href="platform.html#knowledge" data-quick-nav-item><span><strong>Knowledge Room</strong><small>Precedents, playbooks, and policies</small></span><kbd>02</kbd></a>
          <a href="workflows.html" data-quick-nav-item><span><strong>Workflow Studio</strong><small>Composer, redlines, and supervised runs</small></span><kbd>03</kbd></a>
          <a href="workflows.html#editor" data-quick-nav-item><span><strong>Source-linked Editor</strong><small>Draft, compare, cite, and comment</small></span><kbd>04</kbd></a>
          <a href="solutions.html" data-quick-nav-item><span><strong>Solutions</strong><small>Litigation, transactional, in-house</small></span><kbd>05</kbd></a>
          <a href="customers.html" data-quick-nav-item><span><strong>Practice Rooms</strong><small>Illustrative patterns for legal work</small></span><kbd>06</kbd></a>
          <a href="platform.html#delivery" data-quick-nav-item><span><strong>Delivery Room</strong><small>Scoped handoffs and client-ready work</small></span><kbd>07</kbd></a>
          <a href="command.html" data-quick-nav-item><span><strong>Command Center</strong><small>Practice activity and governance signals</small></span><kbd>08</kbd></a>
          <a href="command.html#governance" data-quick-nav-item><span><strong>Governance Desk</strong><small>Access, connections, and policy proof</small></span><kbd>09</kbd></a>
          <a href="platform.html#evidence" data-quick-nav-item><span><strong>Evidence Ledger</strong><small>Source, span, confidence</small></span><kbd>10</kbd></a>
          <a href="platform.html#proof" data-quick-nav-item><span><strong>Room Signals</strong><small>Boundary, ledger, runtime, root</small></span><kbd>11</kbd></a>
          <a href="security.html" data-quick-nav-item><span><strong>Security Center</strong><small>Runtime, network, and source boundary</small></span><kbd>12</kbd></a>
          <a href="privacy.html" data-quick-nav-item><span><strong>Privacy brief</strong><small>Data handling, ownership, and review boundaries</small></span><kbd>13</kbd></a>
          <a href="research.html" data-quick-nav-item><span><strong>Research &amp; architecture</strong><small>Inspect runtime, evidence, and source notes</small></span><kbd>14</kbd></a>
          <a href="deployment.html" data-quick-nav-item><span><strong>Deployment Desk</strong><small>Build a private deployment brief</small></span><kbd>15</kbd></a>
          <a href="https://github.com/sabarinath1805-loyal/Vaultr-AI" target="_blank" rel="noreferrer" data-quick-nav-item><span><strong>Open architecture</strong><small>Inspect the source and implementation notes</small></span><kbd>↗</kbd></a>
          </nav>
        </div>
        <p class="quick-nav__empty" data-quick-nav-empty hidden>No matching matter or destination.</p>
        <div class="quick-nav__foot"><span>Private by default</span><span>Nothing is transmitted</span></div>
      </section>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', quickNavMarkup);
  const quickNav = document.querySelector('[data-command-palette]');
  const quickNavTrigger = document.querySelector('[data-command-open]');
  const quickNavSearch = document.querySelector('#quick-nav-search');
  const quickNavItems = [...document.querySelectorAll('[data-quick-nav-item]')];
  const quickNavEmpty = document.querySelector('[data-quick-nav-empty]');
  const quickNavCount = document.querySelector('[data-quick-nav-count]');
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
      filterQuickNav('');
      quickNavPreviousFocus?.focus?.({ preventScroll: true });
    }
  };
  const filterQuickNav = (value) => {
    const query = value.trim().toLowerCase();
    let matches = 0;
    let matters = 0;
    let surfaces = 0;
    quickNavItems.forEach((item) => {
      const searchText = `${item.textContent} ${item.dataset.quickNavKeywords || ''}`.toLowerCase();
      const match = !query || searchText.includes(query);
      item.hidden = !match;
      if (match) {
        matches += 1;
        if (item.dataset.quickNavType === 'matter') matters += 1;
        else surfaces += 1;
      }
    });
    if (quickNavCount) quickNavCount.textContent = `${matters} matter${matters === 1 ? '' : 's'} · ${surfaces} surface${surfaces === 1 ? '' : 's'}`;
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
    const activeLexTab = lexTabs.find((tab) => tab.dataset.lexTab === mode);
    if (activeLexTab && lexAnswer) lexAnswer.setAttribute('aria-labelledby', activeLexTab.id);
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
  const workspaceDocument = document.querySelector('.workspace-document-view');
  const workspaceEmpty = document.querySelector('[data-lex-empty]');
  const clearLexSource = document.querySelector('[data-lex-clear]');
  const workspaceDocumentLabel = document.querySelector('[data-lex-document-label]');
  const workspaceDocumentPage = document.querySelector('[data-lex-document-page]');
  const workspaceDocumentTitle = document.querySelector('[data-lex-document-title]');
  const sourceFileData = {
    agreement: {
      label: 'MERGER AGREEMENT / § 7.4', page: 'Page 48', title: 'Representations and warranties',
      state: 'VERIFIED', answerTitle: 'Clause drift detected.', primary: '12 deviations flagged', secondary: 'Source spans linked',
      citation: '§ 7.4 / Merger Agreement', citationSecondary: '§ 12 / Disclosure Schedule'
    },
    schedule: {
      label: 'DISCLOSURE SCHEDULE / § 12', page: 'Page 12', title: 'Material contracts and obligations',
      state: 'VERIFIED', answerTitle: 'Material contracts linked.', primary: '06 references resolved', secondary: 'Source spans linked',
      citation: '§ 12 / Disclosure Schedule', citationSecondary: '§ 7.4 / Merger Agreement'
    },
    tracker: {
      label: 'DILIGENCE TRACKER / OPEN ITEMS', page: '18 open', title: 'Outstanding diligence requests',
      state: 'NEEDS REVIEW', answerTitle: 'Supplier consent needs review.', primary: '1 open item', secondary: 'Counsel decision required',
      citation: 'Open item 18 / Diligence Tracker', citationSecondary: 'Supplier consent / Northstar'
    },
    correspondence: {
      label: 'COUNSEL CORRESPONDENCE / 14 JUN', page: 'Thread 08', title: 'Closing conditions — follow-up',
      state: 'VERIFIED', answerTitle: 'Closing condition confirmed.', primary: '1 thread resolved', secondary: 'Source spans linked',
      citation: 'Thread 08 / Counsel Correspondence', citationSecondary: '§ 12 / Closing conditions'
    }
  };

  let sourceRequest = 0;
  const setLexSourceAnswer = (data, state = data.state) => {
    if (lexState) lexState.textContent = state;
    if (lexTitle) lexTitle.textContent = data.answerTitle;
    if (lexMetaPrimary) lexMetaPrimary.textContent = data.primary;
    if (lexMetaSecondary) lexMetaSecondary.textContent = data.secondary;
    if (lexCitation) lexCitation.textContent = data.citation;
    if (lexCitationSecondary) lexCitationSecondary.textContent = data.citationSecondary;
    lexAnswer?.classList.toggle('is-needs-review', state === 'NEEDS REVIEW');
  };

  const clearLexSourceSelection = () => {
    sourceRequest += 1;
    sourceFiles.forEach((item) => {
      item.classList.remove('is-active');
      item.setAttribute('aria-pressed', 'false');
    });
    workspaceDocument?.classList.add('is-empty');
    if (workspaceEmpty) workspaceEmpty.hidden = false;
    writeQueryState('source', 'none');
    if (lexLabel) lexLabel.textContent = 'LEX / EMPTY';
    setLexSourceAnswer({
      state: 'EMPTY',
      answerTitle: 'Choose a source to begin.',
      primary: '0 source spans',
      secondary: 'Select a file to trace evidence',
      citation: 'No source selected',
      citationSecondary: 'Waiting for a local source'
    }, 'EMPTY');
    lexAnswer?.classList.add('is-changing');
    window.setTimeout(() => lexAnswer?.classList.remove('is-changing'), 260);
  };

  const setSourceFile = (file) => {
    const data = sourceFileData[file?.dataset.lexFile];
    if (!data) return;
    const request = ++sourceRequest;
    sourceFiles.forEach((item) => {
      const active = item === file;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    workspaceDocument?.classList.remove('is-empty');
    if (workspaceEmpty) workspaceEmpty.hidden = true;
    if (workspaceDocumentLabel) workspaceDocumentLabel.textContent = data.label;
    if (workspaceDocumentPage) workspaceDocumentPage.textContent = data.page;
    if (workspaceDocumentTitle) workspaceDocumentTitle.textContent = data.title;
    writeQueryState('source', file.dataset.lexFile);
    if (lexLabel) lexLabel.textContent = 'LEX / TRACE';
    setLexSourceAnswer({
      ...data,
      answerTitle: 'Tracing source spans…',
      primary: 'Reading local source',
      secondary: 'Linking evidence',
      citation: data.label,
      citationSecondary: 'Local trace in progress'
    }, 'TRACING…');
    lexAnswer?.classList.add('is-changing');
    window.setTimeout(() => {
      if (request !== sourceRequest) return;
      setLexSourceAnswer(data);
      lexAnswer?.classList.remove('is-changing');
    }, 320);
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
  clearLexSource?.addEventListener('click', clearLexSourceSelection);
  const initialLexSource = readQueryState('source');
  if (initialLexSource === 'none') clearLexSourceSelection();
  else if (initialLexSource && sourceFileData[initialLexSource]) {
    const initialSource = sourceFiles.find((file) => file.dataset.lexFile === initialLexSource);
    if (initialSource) setSourceFile(initialSource);
  }

  const lexQuestion = document.querySelector('[data-lex-question]');
  if (lexQuestion) {
    const lexQuestionInput = lexQuestion.querySelector('[data-lex-question-input]');
    const lexQuestionStatus = lexQuestion.querySelector('[data-lex-question-status]');
    const lexQuestionApply = lexQuestion.querySelector('[data-lex-question-apply]');
    const lexQuestionChips = [...lexQuestion.querySelectorAll('[data-lex-question-chip]')];
    const lexQuestionData = [
      {
        match: ['indemnity', 'cap', 'changed', 'delta'],
        answerTitle: 'The cap moved from one year to two years.',
        primary: '2 clauses linked', secondary: 'Answer ready / 0 B', state: 'VERIFIED',
        citation: '§ 7.4 / Merger Agreement', citationSecondary: '§ 12 / Disclosure Schedule'
      },
      {
        match: ['consent', 'supplier', 'open'],
        answerTitle: 'Supplier consent is still open.',
        primary: '1 open item', secondary: 'Counsel decision required', state: 'NEEDS REVIEW',
        citation: 'Open item 18 / Diligence Tracker', citationSecondary: 'Supplier consent / Northstar'
      },
      {
        match: ['closing', 'ready', 'condition'],
        answerTitle: 'Closing condition confirmed in correspondence.',
        primary: '1 thread resolved', secondary: 'Source spans linked', state: 'VERIFIED',
        citation: 'Thread 08 / Counsel Correspondence', citationSecondary: '§ 12 / Closing conditions'
      }
    ];
    let lexQuestionRequest = 0;
    let lexQuestionTimer;

    const runLexQuestion = (question) => {
      const value = question.trim();
      if (!value) {
        lexQuestionStatus && (lexQuestionStatus.textContent = 'Ask a question about this matter.');
        lexQuestionInput?.focus();
        return;
      }
      const normalized = value.toLowerCase();
      const data = lexQuestionData.find((item) => item.match.some((term) => normalized.includes(term))) || {
        answerTitle: 'The answer is grounded in the Northstar record.',
        primary: '3 source spans linked', secondary: 'Local answer / 0 B', state: 'VERIFIED',
        citation: 'Merger Agreement / selected source set', citationSecondary: 'Northstar matter / local trace'
      };
      const request = ++lexQuestionRequest;
      window.clearTimeout(lexQuestionTimer);
      lexQuestion.classList.add('is-running');
      if (lexQuestionApply) lexQuestionApply.disabled = true;
      if (lexQuestionStatus) lexQuestionStatus.textContent = 'Reading the selected source set…';
      if (lexLabel) lexLabel.textContent = 'LEX / ASK';
      setLexSourceAnswer({ ...data, answerTitle: 'Tracing the answer…', primary: 'Reading local sources', secondary: 'Linking evidence' }, 'READING…');
      lexAnswer?.classList.add('is-changing');
      lexQuestionTimer = window.setTimeout(() => {
        if (request !== lexQuestionRequest) return;
        setLexSourceAnswer(data);
        lexQuestion.classList.remove('is-running');
        if (lexQuestionStatus) lexQuestionStatus.textContent = `${data.state === 'NEEDS REVIEW' ? 'Review required' : 'Answer grounded'} / 0 B outbound`;
        if (lexQuestionApply) lexQuestionApply.disabled = false;
        lexAnswer?.classList.remove('is-changing');
      }, 520);
    };

    lexQuestion.addEventListener('submit', (event) => {
      event.preventDefault();
      runLexQuestion(lexQuestionInput?.value || '');
    });
    lexQuestionChips.forEach((chip) => chip.addEventListener('click', () => {
      const value = chip.dataset.lexQuestionChip || '';
      if (lexQuestionInput) lexQuestionInput.value = value;
      runLexQuestion(value);
    }));
    lexQuestionApply?.addEventListener('click', () => {
      if (lexQuestionApply.disabled) return;
      lexQuestionApply.disabled = true;
      lexQuestionApply.innerHTML = 'Draft note staged <span aria-hidden="true">✓</span>';
      if (lexQuestionStatus) lexQuestionStatus.textContent = 'Local draft note staged / 0 B outbound';
      if (lexState) lexState.textContent = 'DRAFT READY';
    });
  }

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
    const accepted = redlineAction.dataset.redlineAccepted === 'true';
    redlineAction.dataset.redlineAccepted = String(!accepted);
    redlineAction.classList.toggle('is-complete', !accepted);
    redlineAction.innerHTML = accepted
      ? 'Accept in local draft <span aria-hidden="true">↗</span>'
      : 'Accepted in local draft <span aria-hidden="true">✓</span>';
    if (redlineStatus) redlineStatus.textContent = accepted
      ? 'Demo reset. Nothing leaves this room.'
      : 'Saved locally. No external request made.';
  });

  document.querySelectorAll('[data-diligence-action]').forEach((action) => {
    action.addEventListener('click', () => {
      const card = action.closest('[data-diligence-card]');
      if (!card) return;
      const tag = card.querySelector('.diligence-card__tag');
      let stateNote = card.querySelector('[data-diligence-state]');
      if (!stateNote) {
        stateNote = document.createElement('span');
        stateNote.className = 'diligence-card__owner';
        stateNote.dataset.diligenceState = '';
        card.insertBefore(stateNote, action);
      }
      const state = card.dataset.diligenceStage || 'open';
      if (state === 'open') {
        card.dataset.diligenceStage = 'review';
        card.classList.add('is-reviewing');
        tag.textContent = 'IN REVIEW';
        stateNote.textContent = 'Reviewing locally / awaiting verification';
        action.innerHTML = 'Verify locally <span aria-hidden="true">→</span>';
      } else if (state === 'review') {
        card.dataset.diligenceStage = 'verified';
        card.classList.remove('is-reviewing');
        card.classList.add('is-complete');
        tag.textContent = 'VERIFIED';
        stateNote.textContent = 'Verified locally / ready for checklist';
        action.innerHTML = 'Replay item <span aria-hidden="true">↺</span>';
      } else {
        card.dataset.diligenceStage = 'open';
        card.classList.remove('is-reviewing', 'is-complete');
        tag.textContent = 'CONSENT';
        stateNote.textContent = 'Open / awaiting review';
        action.innerHTML = 'Review item <span aria-hidden="true">→</span>';
      }
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
  const evidenceRowsPanel = document.querySelector('#evidence-rows');
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
    const activeEvidenceTab = evidenceFilters.find((tab) => tab.dataset.evidenceFilter === filter);
    if (activeEvidenceTab && evidenceRowsPanel) evidenceRowsPanel.setAttribute('aria-labelledby', activeEvidenceTab.id);
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

  const evidenceExport = document.querySelector('[data-evidence-export]');
  let evidenceExportTimer;
  evidenceExport?.addEventListener('click', () => {
    evidenceExport.classList.add('is-ready');
    evidenceExport.innerHTML = 'Packet staged locally / 0 B outbound <span aria-hidden="true">✓</span>';
    const packetRows = evidenceRows.filter((row) => !row.hidden).map((row) => {
      const data = evidenceDetailData[row.dataset.evidenceKey];
      return `${data.source} | ${data.span} | ${data.state} | ${data.confidence}\n${data.copy}`;
    });
    const packet = [
      'VAULTR / LOCAL REVIEW PACKET',
      'Matter: Northstar Acquisition',
      'Boundary: outbound_network denied',
      'Status: prepared locally / 0 B outbound',
      '',
      ...packetRows.flatMap((row, index) => [`${String(index + 1).padStart(2, '0')} / ${row}`, ''])
    ].join('\n');
    try {
      const url = URL.createObjectURL(new Blob([packet], { type: 'text/plain;charset=utf-8' }));
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'vaultr-local-review-packet.txt';
      anchor.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      // Keep the staged state visible when a browser blocks local downloads.
    }
    window.clearTimeout(evidenceExportTimer);
    evidenceExportTimer = window.setTimeout(() => {
      evidenceExport.classList.remove('is-ready');
      evidenceExport.innerHTML = 'Stage local packet <span aria-hidden="true">↓</span>';
    }, 4200);
  });

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
  const deploymentDetailNodes = [...document.querySelectorAll('[data-deployment-detail]')];
  let deploymentChangeTimer;
  const deploymentModeData = {
    local: 'Firm-managed devices. Local inference. A deployment profile built around your existing perimeter.',
    network: 'Private network deployment. Central governance with controlled access for approved teams and matters.',
    airgap: 'Air-gapped profile. No external network path for the most sensitive work and restricted environments.'
  };
  const deploymentModeDetails = {
    local: { route: 'Firm-managed device', network: 'Outbound denied', fit: 'Most private / offline capable', proof: 'Source + local packet' },
    network: { route: 'Approved firm network', network: 'Controlled internal route', fit: 'Shared team governance', proof: 'Boundary + access review' },
    airgap: { route: 'Restricted environment', network: 'No external path', fit: 'Sensitive / regulated matters', proof: 'Air-gap validation packet' }
  };
  const setDeploymentMode = (mode, animate = true) => {
    const selectedMode = deploymentModeData[mode] ? mode : 'local';
    writeQueryState('profile', selectedMode);
    deploymentProfiles.forEach((profile) => {
      const active = profile.dataset.deploymentMode === selectedMode;
      profile.classList.toggle('is-active', active);
      profile.setAttribute('aria-selected', String(active));
      profile.tabIndex = active ? 0 : -1;
    });
    if (deploymentProfileInput) deploymentProfileInput.value = selectedMode;
    if (deploymentProfileCopy) {
      deploymentProfileCopy.textContent = deploymentModeData[selectedMode];
      const active = deploymentProfiles.find((profile) => profile.dataset.deploymentMode === selectedMode);
      if (active) deploymentProfileCopy.setAttribute('aria-labelledby', active.id);
      if (animate) {
        deploymentProfileCopy.classList.add('is-changing');
        window.clearTimeout(deploymentChangeTimer);
        deploymentChangeTimer = window.setTimeout(() => deploymentProfileCopy.classList.remove('is-changing'), 280);
      }
    }
    const details = deploymentModeDetails[selectedMode];
    deploymentDetailNodes.forEach((node) => {
      const value = details?.[node.dataset.deploymentDetail];
      if (value) node.textContent = value;
    });
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

  const briefContents = () => {
    if (!currentBrief) return '';
    return [
      'VAULTR / PRIVATE DEPLOYMENT BRIEF',
      '----------------------------------',
      `Reference: ${currentBrief.id}`,
      `Profile: ${currentBrief.profile}`,
      `Practice area: ${currentBrief.practice}`,
      `Firm size: ${currentBrief.size}`,
      `Firm email: ${currentBrief.email}`,
      '',
      'Prepared locally. No data was transmitted by Vaultr.',
      `Created: ${currentBrief.created}`
    ].join('\n');
  };

  let copyBrief = deploymentBrief?.querySelector('[data-copy-brief]');
  if (downloadBrief && !copyBrief) {
    const actions = document.createElement('div');
    actions.className = 'deployment-brief__actions';
    downloadBrief.replaceWith(actions);
    actions.append(downloadBrief);
    copyBrief = document.createElement('button');
    copyBrief.type = 'button';
    copyBrief.className = 'button button--ghost deployment-brief__copy';
    copyBrief.setAttribute('data-copy-brief', '');
    copyBrief.textContent = 'Copy brief';
    actions.append(copyBrief);
  }

  deploymentForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.querySelector('[data-form-status]');
    if (!form.reportValidity()) {
      status?.classList.remove('is-success');
      status?.classList.add('is-error');
      if (status) status.textContent = 'Complete the firm email, practice area, and firm size to prepare the brief.';
      return;
    }
    const values = new FormData(form);
    const email = String(values.get('email') || '').trim();
    const practice = String(values.get('practice-area') || '').trim();
    const size = String(values.get('firm-size') || '').trim();
    const profile = String(values.get('deployment-profile') || 'local');
    const created = new Date().toISOString();
    const idDate = created.slice(0, 10).replaceAll('-', '');
    const idSuffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    currentBrief = { email, practice, size, profile: profileLabels[profile] || profileLabels.local, created, id: `VLT-${idDate}-${idSuffix}` };
    if (briefProfile) briefProfile.textContent = currentBrief.profile;
    if (briefPractice) briefPractice.textContent = currentBrief.practice;
    if (briefSize) briefSize.textContent = currentBrief.size;
    if (briefSummary) briefSummary.textContent = `A private ${currentBrief.profile.toLowerCase()} brief for ${currentBrief.practice.toLowerCase()} / ${currentBrief.size.toLowerCase()} is ready to share with your security lead. Reference ${currentBrief.id}.`;
    if (deploymentBrief) {
      deploymentBrief.hidden = false;
      deploymentBrief.classList.add('is-visible');
    }
    if (status) {
      status.textContent = 'Private brief prepared locally. Nothing was transmitted.';
      status.classList.remove('is-error');
      status.classList.add('is-success');
    }
  });

  downloadBrief?.addEventListener('click', () => {
    if (!currentBrief) return;
    const url = URL.createObjectURL(new Blob([briefContents()], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `vaultr-${currentBrief.id.toLowerCase()}-brief.txt`;
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  });

  copyBrief?.addEventListener('click', async () => {
    if (!currentBrief) return;
    const status = document.querySelector('[data-form-status]');
    try {
      await navigator.clipboard.writeText(briefContents());
      if (status) status.textContent = 'Brief copied locally. Nothing was transmitted.';
    } catch {
      if (status) status.textContent = 'Download the brief to share it locally. Clipboard access was unavailable.';
    }
    status?.classList.remove('is-error');
    status?.classList.add('is-success');
  });
})();
