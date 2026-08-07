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
      source: 'MERGER AGREEMENT · §9.2', sourceMeta: '3 cited spans · 48 pages indexed',
      result: 'Ready for a private pass.'
    },
    compare: {
      label: 'DOCUMENTS COMPARED', value: '02',
      copy: 'Compare two versions and surface the material change in seconds.',
      runtime: 'Local', evidence: '12', confidence: '96%',
      source: 'REVISION 04 → REVISION 05', sourceMeta: '12 deltas · 2 material changes',
      result: 'Ready to surface changes.'
    },
    draft: {
      label: 'DRAFTING CONTEXT', value: '04',
      copy: 'Draft a matter-aware response from the sources you selected.',
      runtime: 'Local', evidence: '8', confidence: '94%',
      source: 'APPROVED PLAYBOOK / M&A', sourceMeta: '8 references · 1 review gate',
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
    const source = heroDemo.querySelector('[data-demo-source]');
    const sourceMeta = heroDemo.querySelector('[data-demo-source-meta]');
    const trace = heroDemo.querySelector('[data-demo-trace]');
    const traceState = heroDemo.querySelector('[data-demo-trace-state]');
    const run = heroDemo.querySelector('[data-demo-run]');
    const demoPanel = heroDemo.querySelector('[role="tabpanel"]');
    const metrics = {
      runtime: heroDemo.querySelector('[data-demo-metric="runtime"]'),
      evidence: heroDemo.querySelector('[data-demo-metric="evidence"]'),
      confidence: heroDemo.querySelector('[data-demo-metric="confidence"]')
    };
    let activeMode = 'review';
    let runTimer;
    const updateDemo = (mode, sync = true) => {
      const content = demoModes[mode] || demoModes.review;
      activeMode = mode;
      if (sync) writeQueryState('demo', mode);
      modeButtons.forEach((button) => {
        const active = button.dataset.demoMode === mode;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
        button.tabIndex = active ? 0 : -1;
      });
      const activeButton = modeButtons.find((button) => button.dataset.demoMode === mode);
      if (activeButton && demoPanel) demoPanel.setAttribute('aria-labelledby', activeButton.id);
      if (label) label.textContent = content.label;
      if (value) value.textContent = content.value;
      if (copy) copy.textContent = content.copy;
      if (source) source.textContent = content.source;
      if (sourceMeta) sourceMeta.textContent = content.sourceMeta;
      if (result) result.textContent = content.result;
      if (foot) foot.textContent = 'READY FOR A PRIVATE PASS';
      trace?.classList.remove('is-verified');
      if (traceState) traceState.textContent = 'READY';
      Object.entries(metrics).forEach(([key, element]) => { if (element) element.textContent = content[key]; });
      if (status) status.textContent = 'READY';
      window.clearTimeout(runTimer);
      run?.classList.remove('is-running');
      if (run) run.disabled = false;
    };
    modeButtons.forEach((button, index) => {
      button.addEventListener('click', () => updateDemo(button.dataset.demoMode));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? modeButtons.length - 1 : (index + direction + modeButtons.length) % modeButtons.length;
        const nextButton = modeButtons[nextIndex];
        nextButton?.focus();
        if (nextButton) updateDemo(nextButton.dataset.demoMode);
      });
    });
    run?.addEventListener('click', () => {
      window.clearTimeout(runTimer);
      run.classList.add('is-running');
      run.disabled = true;
      if (status) status.textContent = 'RUNNING';
      if (foot) foot.textContent = 'PROCESSING ON DEVICE';
      if (traceState) traceState.textContent = 'CHECKING';
      if (result) result.textContent = 'Lex is reasoning locally…';
      runTimer = window.setTimeout(() => {
        run.classList.remove('is-running');
        run.disabled = false;
        if (status) status.textContent = 'COMPLETE';
        if (foot) foot.textContent = 'PRIVATE PASS COMPLETE';
        trace?.classList.add('is-verified');
        if (traceState) traceState.textContent = 'VERIFIED';
        if (result) result.textContent = `${demoModes[activeMode].result} Nothing left the room.`;
      }, 720);
    });
    const initialDemo = readQueryState('demo');
    updateDemo(Object.prototype.hasOwnProperty.call(demoModes, initialDemo) ? initialDemo : activeMode, false);
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
    const workbenchHandoff = workbench.querySelector('[data-workbench-handoff]');
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
    const setWorkbenchMode = (mode, sync = true) => {
      const content = workbenchModes[mode] || workbenchModes.context;
      if (sync) writeQueryState('workbench', mode);
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
      workbenchTraces.forEach((trace) => trace.classList.remove('is-complete'));
      if (workbenchHandoff) {
        workbenchHandoff.hidden = true;
        workbenchHandoff.setAttribute('aria-disabled', 'true');
        workbenchHandoff.tabIndex = -1;
      }
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
      if (workbenchHandoff) {
        workbenchHandoff.hidden = true;
        workbenchHandoff.setAttribute('aria-disabled', 'true');
        workbenchHandoff.tabIndex = -1;
      }
      if (workbenchStatus) workbenchStatus.textContent = 'LEX IS RUNNING LOCALLY…';
      workbenchTraces.forEach((trace) => trace.classList.remove('is-current'));
      workbenchTimer = window.setTimeout(() => {
        workbenchRun.classList.remove('is-running');
        workbenchRun.disabled = false;
        workbenchTraces.forEach((trace) => trace.classList.add('is-complete'));
        if (workbenchHandoff) {
          workbenchHandoff.hidden = false;
          workbenchHandoff.setAttribute('aria-disabled', 'false');
          workbenchHandoff.tabIndex = 0;
        }
        if (workbenchStatus) workbenchStatus.textContent = 'COMPLETE / HANDOFF READY';
      }, 860);
    });
    workbenchHandoff?.addEventListener('click', (event) => {
      if (workbenchHandoff.getAttribute('aria-disabled') === 'true') event.preventDefault();
    });
    const initialWorkbench = readQueryState('workbench');
    setWorkbenchMode(Object.prototype.hasOwnProperty.call(workbenchModes, initialWorkbench) ? initialWorkbench : 'context', false);
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
    const setBoundaryMode = (mode, sync = true) => {
      const content = boundaryModes[mode] || boundaryModes.local;
      if (sync) writeQueryState('boundary', mode);
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
    const initialBoundary = readQueryState('boundary');
    setBoundaryMode(Object.prototype.hasOwnProperty.call(boundaryModes, initialBoundary) ? initialBoundary : 'local', false);
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
      if (knowledgeUseStatus) knowledgeUseStatus.textContent = `Opening Workflow Studio with ${content.title}…`;
      if (knowledgeFoot) knowledgeFoot.textContent = 'Source set staged / 0 B outbound';
      knowledgeUse.disabled = true;
      const workflowUrl = new URL('workflows.html', window.location.href);
      workflowUrl.searchParams.set('source', knowledgeActiveKey);
      workflowUrl.hash = 'studio';
      window.setTimeout(() => { window.location.href = workflowUrl.toString(); }, 320);
    });
    const initialKnowledge = readQueryState('knowledge');
    renderKnowledge(initialKnowledge && knowledgeFilters.some((tab) => tab.dataset.knowledgeFilter === initialKnowledge) ? initialKnowledge : 'all');
  }

  const agentLibrary = document.querySelector('[data-agent-library]');
  if (agentLibrary) {
    const agentFilters = [...agentLibrary.querySelectorAll('[data-agent-filter]')];
    const agentCards = [...agentLibrary.querySelectorAll('[data-agent-card]')];
    const agentSearch = agentLibrary.querySelector('[data-agent-search]');
    const agentList = agentLibrary.querySelector('[data-agent-list]');
    const agentEmpty = agentLibrary.querySelector('[data-agent-empty]');
    const agentDetailKind = agentLibrary.querySelector('[data-agent-detail-kind]');
    const agentDetailState = agentLibrary.querySelector('[data-agent-detail-state]');
    const agentDetailTitle = agentLibrary.querySelector('[data-agent-detail-title]');
    const agentDetailCopy = agentLibrary.querySelector('[data-agent-detail-copy]');
    const agentDetailInputs = agentLibrary.querySelector('[data-agent-detail-inputs]');
    const agentDetailGuardrail = agentLibrary.querySelector('[data-agent-detail-guardrail]');
    const agentDetailOutput = agentLibrary.querySelector('[data-agent-detail-output]');
    const agentSave = agentLibrary.querySelector('[data-agent-save]');
    const agentSaveIcon = agentLibrary.querySelector('[data-agent-save-icon]');
    const agentSaveLabel = agentLibrary.querySelector('[data-agent-save-label]');
    const agentSavedCount = agentLibrary.querySelector('[data-agent-saved-count]');
    const agentStage = agentLibrary.querySelector('[data-agent-stage]');
    const agentStageStatus = agentLibrary.querySelector('[data-agent-stage-status]');
    const agentFoot = agentLibrary.querySelector('[data-agent-foot]');
    const agentData = {
      diligence: { kind: 'TRANSACTIONAL / REVIEW', state: 'READY TO STAGE', title: 'Diligence exceptions', copy: 'Scan the approved matter set, cluster open exceptions, and leave each recommendation attached to the clause and owner that can resolve it.', inputs: 'Source set / playbook', guardrail: 'Pause on material risk', output: 'Review-ready packet', source: 'Diligence Tracker', span: 'Open items / 18', owner: 'J. Chen' },
      redline: { kind: 'TRANSACTIONAL / COMPARE', state: 'READY TO STAGE', title: 'Clause drift review', copy: 'Compare the signing set against the prior draft, surface material deltas, and keep the source span beside every proposed explanation.', inputs: 'Two document versions', guardrail: 'Materiality threshold', output: 'Cited delta brief', source: 'Merger Agreement', span: '§ 7.4 / Limitation', owner: 'M. Chen' },
      chronology: { kind: 'LITIGATION / ANALYSIS', state: 'READY TO STAGE', title: 'Chronology builder', copy: 'Turn filings, witness notes, and exhibits into a source-linked chronology that counsel can reorder before it becomes a case narrative.', inputs: 'Filings / exhibits / notes', guardrail: 'Counsel review gate', output: 'Source-linked timeline', source: 'Case Record', span: 'Chronology / 42 events', owner: 'A. Rao' },
      discovery: { kind: 'LITIGATION / DISCOVERY', state: 'READY TO STAGE', title: 'Discovery issue map', copy: 'Cluster discovery material by issue, flag privilege cues for review, and route unresolved calls to the owner instead of guessing.', inputs: 'Discovery corpus', guardrail: 'Privilege hold', output: 'Issue map / owner queue', source: 'Discovery Index', span: 'Issues / 09 clusters', owner: 'L. Grant' },
      policy: { kind: 'IN-HOUSE / GOVERNANCE', state: 'READY TO STAGE', title: 'Policy gap scan', copy: 'Check approved AI use against the firm standard, expose missing owners, and stage a remediation list without exporting the underlying policy set.', inputs: 'Policy set / controls', guardrail: 'No external route', output: 'Governance brief', source: 'Privacy & AI Policy', span: '§ 3 / Approved systems', owner: 'KM / Security' },
      intake: { kind: 'IN-HOUSE / INTAKE', state: 'READY TO STAGE', title: 'Contract intake triage', copy: 'Route incoming agreements by risk and owner, then carry the relevant fallback language into a reviewable local workflow.', inputs: 'Intake form / template', guardrail: 'Owner assignment', output: 'Triage queue', source: 'Contract Intake', span: 'Queue / 12 requests', owner: 'Legal Ops' }
    };
    let agentFilter = 'all';
    let agentActive = 'diligence';
    const savedAgentStorageKey = 'vaultr.saved-agents';
    let savedAgents = new Set();
    try {
      const storedAgents = JSON.parse(window.localStorage.getItem(savedAgentStorageKey) || '[]');
      if (Array.isArray(storedAgents)) savedAgents = new Set(storedAgents.filter((key) => Object.prototype.hasOwnProperty.call(agentData, key)));
    } catch (error) {
      savedAgents = new Set();
    }
    const persistSavedAgents = () => {
      try { window.localStorage.setItem(savedAgentStorageKey, JSON.stringify([...savedAgents])); } catch (error) { /* local-only preference is best effort */ }
    };
    const updateAgentSaveControl = () => {
      const saved = savedAgents.has(agentActive);
      agentSave?.setAttribute('aria-pressed', String(saved));
      agentSave?.classList.toggle('is-saved', saved);
      if (agentSaveIcon) agentSaveIcon.textContent = saved ? '★' : '☆';
      if (agentSaveLabel) agentSaveLabel.textContent = saved ? 'Saved to library' : 'Save to library';
      if (agentSavedCount) agentSavedCount.textContent = String(savedAgents.size).padStart(2, '0');
    };
    const setAgentDetail = (key) => {
      const content = agentData[key] || agentData.diligence;
      agentActive = key;
      agentCards.forEach((card) => {
        const active = card.dataset.agentKey === key;
        card.classList.toggle('is-active', active);
        card.setAttribute('aria-selected', String(active));
      });
      if (agentDetailKind) agentDetailKind.textContent = content.kind;
      if (agentDetailState) agentDetailState.textContent = content.state;
      if (agentDetailTitle) agentDetailTitle.textContent = content.title;
      if (agentDetailCopy) agentDetailCopy.textContent = content.copy;
      if (agentDetailInputs) agentDetailInputs.textContent = content.inputs;
      if (agentDetailGuardrail) agentDetailGuardrail.textContent = content.guardrail;
      if (agentDetailOutput) agentDetailOutput.textContent = content.output;
      updateAgentSaveControl();
      if (agentStage) { agentStage.disabled = false; agentStage.innerHTML = 'Stage in Workflow Studio <span aria-hidden="true">→</span>'; }
      if (agentStageStatus) agentStageStatus.textContent = 'Nothing staged yet.';
    };
    const renderAgents = (filter = agentFilter) => {
      agentFilter = filter;
      const query = (agentSearch?.value || '').trim().toLowerCase();
      agentFilters.forEach((tab) => {
        const active = tab.dataset.agentFilter === filter;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      const activeFilter = agentFilters.find((tab) => tab.dataset.agentFilter === filter);
      if (activeFilter && agentList) agentList.setAttribute('aria-labelledby', activeFilter.id);
      const visible = agentCards.filter((card) => {
        const kindMatches = filter === 'all' || filter === 'saved' || card.dataset.agentKind === filter;
        const savedMatches = filter !== 'saved' || savedAgents.has(card.dataset.agentKey);
        const normalizedText = card.textContent.toLowerCase().replace(/[\u2010-\u2015-]/g, ' ');
        const matchesSearch = !query || normalizedText.includes(query.replace(/[\u2010-\u2015-]/g, ' '));
        const shown = kindMatches && savedMatches && matchesSearch;
        card.hidden = !shown;
        return shown;
      });
      if (agentEmpty) {
        agentEmpty.hidden = visible.length !== 0;
        agentEmpty.textContent = filter === 'saved' ? 'No saved agents yet. Select an agent and save it here.' : 'No local agent matches that search.';
      }
      const next = visible.find((card) => card.dataset.agentKey === agentActive) || visible[0];
      if (next) setAgentDetail(next.dataset.agentKey);
      if (agentFoot) agentFoot.textContent = `${String(visible.length).padStart(2, '0')} ${filter === 'saved' ? 'saved' : 'curated'} agents / 0 B outbound`;
    };
    agentFilters.forEach((filter, index) => {
      filter.addEventListener('click', () => { writeQueryState('agent', filter.dataset.agentFilter); renderAgents(filter.dataset.agentFilter); });
      filter.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? agentFilters.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + agentFilters.length) % agentFilters.length;
        const next = agentFilters[nextIndex];
        writeQueryState('agent', next.dataset.agentFilter);
        renderAgents(next.dataset.agentFilter);
        next.focus();
      });
    });
    agentCards.forEach((card, index) => {
      card.addEventListener('click', () => setAgentDetail(card.dataset.agentKey));
      card.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const visible = agentCards.filter((item) => !item.hidden);
        const current = visible.indexOf(card);
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? visible.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + visible.length) % visible.length;
        visible[nextIndex]?.focus();
        if (visible[nextIndex]) setAgentDetail(visible[nextIndex].dataset.agentKey);
      });
    });
    agentSearch?.addEventListener('input', () => renderAgents());
    agentSave?.addEventListener('click', () => {
      const saved = savedAgents.has(agentActive);
      if (saved) savedAgents.delete(agentActive);
      else savedAgents.add(agentActive);
      persistSavedAgents();
      updateAgentSaveControl();
      renderAgents(agentFilter);
      if (agentStageStatus) agentStageStatus.textContent = saved ? 'Removed locally / no external request.' : 'Saved locally / available in Saved.';
    });
    agentStage?.addEventListener('click', () => {
      const content = agentData[agentActive] || agentData.diligence;
      agentStage.disabled = true;
      agentStage.innerHTML = 'Agent staged locally <span aria-hidden="true">✓</span>';
      if (agentStageStatus) agentStageStatus.textContent = 'Opening Workflow Studio with the guardrails attached…';
      if (agentFoot) agentFoot.textContent = 'AGENT STAGED / 0 B OUTBOUND';
      const workflowUrl = new URL('workflows.html', window.location.href);
      workflowUrl.searchParams.set('source', `agent-${agentActive}`);
      workflowUrl.hash = 'studio';
      window.setTimeout(() => { window.location.href = workflowUrl.toString(); }, 320);
    });
    const initialAgent = readQueryState('agent');
    renderAgents(initialAgent && agentFilters.some((filter) => filter.dataset.agentFilter === initialAgent) ? initialAgent : 'all');
  }

  const agentBuilder = document.querySelector('[data-agent-builder]');
  if (agentBuilder) {
    const builderSteps = [...agentBuilder.querySelectorAll('[data-builder-step]')];
    const builderPanels = [...agentBuilder.querySelectorAll('[data-builder-panel]')];
    const builderPurposes = [...agentBuilder.querySelectorAll('[data-builder-purpose]')];
    const builderSources = [...agentBuilder.querySelectorAll('[data-builder-source]')];
    const builderGuardrails = [...agentBuilder.querySelectorAll('[data-builder-guardrail]')];
    const builderOutput = agentBuilder.querySelector('[data-builder-output]');
    const builderBack = agentBuilder.querySelector('[data-builder-back]');
    const builderNext = agentBuilder.querySelector('[data-builder-next]');
    const builderTitle = agentBuilder.querySelector('[data-builder-title]');
    const builderSummary = agentBuilder.querySelector('[data-builder-summary]');
    const builderSourceSummary = agentBuilder.querySelector('[data-builder-source-summary]');
    const builderGuardrailSummary = agentBuilder.querySelector('[data-builder-guardrail-summary]');
    const builderOutputSummary = agentBuilder.querySelector('[data-builder-output-summary]');
    const builderStage = agentBuilder.querySelector('[data-builder-stage]');
    const builderStageStatus = agentBuilder.querySelector('[data-builder-stage-status]');
    const builderState = agentBuilder.querySelector('[data-builder-state]');
    const builderFoot = agentBuilder.querySelector('[data-builder-foot]');
    const builderStepsOrder = ['purpose', 'sources', 'guardrails', 'output'];
    const builderCopy = {
      review: { title: 'Northstar matter review', summary: 'Review the approved matter set, hold material risk for counsel, and leave each finding attached to its source.' },
      compare: { title: 'Northstar clause comparison', summary: 'Compare the signing set against the prior draft, surface material deltas, and keep the source span beside every change.' },
      draft: { title: 'Northstar response drafter', summary: 'Turn a source-linked finding into reviewable language while keeping the owner and evidence in the margin.' }
    };
    const builderOutputLabels = { packet: 'Cited review packet', delta: 'Material delta brief', draft: 'Source-linked draft' };
    let builderStep = 0;
    let builderPurpose = 'review';

    const renderBuilderPreview = () => {
      const copy = builderCopy[builderPurpose] || builderCopy.review;
      const selectedSources = builderSources.filter((input) => input.checked).length;
      const selectedGuardrails = builderGuardrails.filter((input) => input.checked).length;
      if (builderTitle) builderTitle.textContent = copy.title;
      if (builderSummary) builderSummary.textContent = copy.summary;
      if (builderSourceSummary) builderSourceSummary.textContent = `${String(selectedSources).padStart(2, '0')} selected`;
      if (builderGuardrailSummary) builderGuardrailSummary.textContent = `${String(selectedGuardrails).padStart(2, '0')} enforced`;
      if (builderOutputSummary) builderOutputSummary.textContent = builderOutputLabels[builderOutput?.value] || builderOutputLabels.packet;
      if (builderFoot) builderFoot.textContent = `STEP ${String(builderStep + 1).padStart(2, '0')} / 04 · ${builderStep === 3 ? 'READY TO STAGE' : 'DRAFT ONLY'}`;
    };
    const setBuilderStep = (step, focus = false) => {
      builderStep = Math.max(0, Math.min(builderStepsOrder.length - 1, typeof step === 'number' ? step : builderStepsOrder.indexOf(step)));
      const key = builderStepsOrder[builderStep];
      builderSteps.forEach((button) => {
        const active = button.dataset.builderStep === key;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-current', active ? 'step' : 'false');
      });
      builderPanels.forEach((panel) => {
        const active = panel.dataset.builderPanel === key;
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
      if (builderBack) builderBack.disabled = builderStep === 0;
      if (builderNext) {
        builderNext.innerHTML = builderStep === builderStepsOrder.length - 1 ? 'Review contract <span aria-hidden="true">→</span>' : 'Continue <span aria-hidden="true">→</span>';
      }
      renderBuilderPreview();
      if (focus) builderSteps[builderStep]?.focus();
    };
    builderSteps.forEach((button, index) => {
      button.addEventListener('click', () => setBuilderStep(index));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? builderSteps.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + builderSteps.length) % builderSteps.length;
        setBuilderStep(next, true);
      });
    });
    builderPurposes.forEach((button) => button.addEventListener('click', () => {
      builderPurpose = button.dataset.builderPurpose || 'review';
      builderPurposes.forEach((item) => item.classList.toggle('is-active', item === button));
      renderBuilderPreview();
    }));
    builderSources.forEach((input) => input.addEventListener('change', renderBuilderPreview));
    builderGuardrails.forEach((input) => input.addEventListener('change', renderBuilderPreview));
    builderOutput?.addEventListener('change', renderBuilderPreview);
    builderBack?.addEventListener('click', () => setBuilderStep(builderStep - 1));
    builderNext?.addEventListener('click', () => setBuilderStep(builderStep === builderStepsOrder.length - 1 ? builderStep : builderStep + 1));
    builderStage?.addEventListener('click', () => {
      const copy = builderCopy[builderPurpose] || builderCopy.review;
      builderStage.disabled = true;
      builderStage.innerHTML = 'Agent staged locally <span aria-hidden="true">✓</span>';
      builderState && (builderState.textContent = 'READY FOR REVIEW');
      builderStageStatus && (builderStageStatus.textContent = `${copy.title} is ready for counsel approval.`);
      builderFoot && (builderFoot.textContent = 'AGENT STAGED / 0 B OUTBOUND');
      const workflowUrl = new URL('workflows.html', window.location.href);
      workflowUrl.searchParams.set('source', `builder-${builderPurpose}`);
      workflowUrl.hash = 'studio';
      window.setTimeout(() => { window.location.href = workflowUrl.toString(); }, 420);
    });
    setBuilderStep(0);
  }

  const sharedSpace = document.querySelector('[data-shared-space]');
  if (sharedSpace) {
    const sharedTabs = [...sharedSpace.querySelectorAll('[data-shared-tab]')];
    const sharedPanels = [...sharedSpace.querySelectorAll('[data-shared-panel]')];
    const sharedTitle = sharedSpace.querySelector('[data-shared-title]');
    const sharedKicker = sharedSpace.querySelector('[data-shared-kicker]');
    const sharedFoot = sharedSpace.querySelector('[data-shared-foot]');
    const sharedFooterCopy = sharedSpace.querySelector('[data-shared-footer-copy]');
    const sharedInvite = sharedSpace.querySelector('[data-shared-invite]');
    const sharedApprove = sharedSpace.querySelector('[data-shared-approve]');
    const sharedStatus = sharedSpace.querySelector('[data-shared-status]');
    const sharedWorkflowStatus = sharedSpace.querySelector('[data-shared-workflow-status]');
    const sharedCopy = sharedSpace.querySelector('[data-shared-copy]');
    const sharedTitles = {
      overview: ['ROOM PULSE / 07 MAY 2026', 'One shared record. No version chase.'],
      documents: ['DOCUMENTS / CONTROLLED VIEW', 'Show the work. Withhold the record.'],
      workflows: ['WORKFLOWS / FIRM-POWERED', 'Let the client run the method—not own it.'],
      activity: ['ACTIVITY / AUDIT TRAIL', 'Every permission change has a visible finish line.']
    };
    let sharedActive = 'overview';
    const sharedStorageKey = 'vaultr.shared-room';
    let sharedState = { invite: false, approved: false };
    try {
      const storedSharedState = JSON.parse(window.localStorage.getItem(sharedStorageKey) || '{}');
      sharedState = { invite: storedSharedState?.invite === true, approved: storedSharedState?.approved === true };
    } catch (error) {
      sharedState = { invite: false, approved: false };
    }
    const persistSharedState = () => {
      try { window.localStorage.setItem(sharedStorageKey, JSON.stringify(sharedState)); } catch (error) { /* local-only room state is best effort */ }
    };
    const reflectSharedState = () => {
      if (sharedInvite) {
        sharedInvite.disabled = sharedState.invite;
        sharedInvite.innerHTML = sharedState.invite ? 'Invite drafted <span aria-hidden="true">&#10003;</span>' : 'Invite scoped collaborator <span aria-hidden="true">→</span>';
      }
      if (sharedApprove) {
        sharedApprove.disabled = sharedState.approved;
        sharedApprove.innerHTML = sharedState.approved ? 'Preview approved <span aria-hidden="true">&#10003;</span>' : 'Approve preview <span aria-hidden="true">→</span>';
      }
      if (sharedState.approved && sharedStatus) sharedStatus.textContent = 'Preview approved locally. Invite a scoped collaborator when ready.';
      if (sharedState.invite && sharedFooterCopy) sharedFooterCopy.textContent = sharedState.approved ? 'The client sees the approved artifact—not the raw matter record.' : 'Scoped invite drafted / view-only / expires in 24 hours.';
      if (sharedFoot) sharedFoot.textContent = sharedState.invite && sharedState.approved ? 'INVITE DRAFTED / PREVIEW APPROVED / 0 B OUTBOUND' : sharedState.invite ? 'INVITE DRAFTED / 0 B OUTBOUND' : sharedState.approved ? 'PREVIEW APPROVED / 0 B OUTBOUND' : '0 B OUTBOUND';
    };
    const setSharedTab = (key, focus = false, sync = true) => {
      const next = sharedTitles[key] ? key : 'overview';
      sharedActive = next;
      if (sync) writeQueryState('space', next);
      sharedTabs.forEach((tab) => {
        const active = tab.dataset.sharedTab === next;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      sharedPanels.forEach((panel) => {
        const active = panel.dataset.sharedPanel === next;
        panel.classList.toggle('is-active', active);
        panel.hidden = !active;
      });
      if (sharedKicker) sharedKicker.textContent = sharedTitles[next][0];
      if (sharedTitle) sharedTitle.textContent = sharedTitles[next][1];
      if (focus) sharedTabs.find((tab) => tab.dataset.sharedTab === next)?.focus();
    };
    sharedTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => setSharedTab(tab.dataset.sharedTab));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? sharedTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + sharedTabs.length) % sharedTabs.length;
        setSharedTab(sharedTabs[nextIndex].dataset.sharedTab, true);
      });
    });
    sharedInvite?.addEventListener('click', () => {
      sharedState.invite = true;
      persistSharedState();
      if (sharedFooterCopy) sharedFooterCopy.textContent = 'Scoped invite drafted / view-only / expires in 24 hours.';
      if (sharedFoot) sharedFoot.textContent = 'INVITE DRAFTED / 0 B OUTBOUND';
      reflectSharedState();
      if (sharedInvite) { sharedInvite.disabled = true; sharedInvite.innerHTML = 'Invite drafted <span aria-hidden="true">✓</span>'; }
    });
    sharedApprove?.addEventListener('click', () => {
      sharedState.approved = true;
      persistSharedState();
      if (sharedStatus) sharedStatus.textContent = 'Preview approved locally. Invite a scoped collaborator when ready.';
      if (sharedFoot) sharedFoot.textContent = 'PREVIEW APPROVED / 0 B OUTBOUND';
      if (sharedFooterCopy) sharedFooterCopy.textContent = 'The client sees the artifact—not the raw matter record.';
      sharedApprove.disabled = true;
      reflectSharedState();
      sharedApprove.innerHTML = 'Preview approved <span aria-hidden="true">✓</span>';
    });
    sharedSpace.querySelectorAll('[data-shared-run]').forEach((button) => button.addEventListener('click', () => {
      const name = button.dataset.sharedRun;
      if (sharedWorkflowStatus) sharedWorkflowStatus.textContent = `${name} is running in the local room…`;
      if (sharedFoot) sharedFoot.textContent = 'LOCAL RUN IN PROGRESS / 0 B OUTBOUND';
      sharedSpace.querySelectorAll('[data-shared-run]').forEach((item) => { item.disabled = true; });
      window.setTimeout(() => {
        if (sharedWorkflowStatus) sharedWorkflowStatus.textContent = `${name} complete. Review-ready output is waiting for counsel.`;
        if (sharedFoot) sharedFoot.textContent = 'RUN COMPLETE / HUMAN REVIEW REQUIRED';
        sharedSpace.querySelectorAll('[data-shared-run]').forEach((item) => { item.disabled = false; });
      }, 720);
    }));
    sharedCopy?.addEventListener('click', () => {
      const brief = 'Northstar / Acquisition review — 24 files, 3 approved artifacts, 0 B outbound.';
      navigator.clipboard?.writeText(brief).catch(() => {});
      if (sharedFooterCopy) sharedFooterCopy.textContent = 'Room brief copied locally. Nothing was uploaded.';
      if (sharedCopy) sharedCopy.innerHTML = 'Brief copied <span aria-hidden="true">✓</span>';
    });
    const initialSharedTab = readQueryState('space');
    setSharedTab(sharedTitles[initialSharedTab] ? initialSharedTab : sharedActive, false, false);
    reflectSharedState();
  }

  const monitorDesk = document.querySelector('[data-monitor-desk]');
  if (monitorDesk) {
    const monitorFilters = [...monitorDesk.querySelectorAll('[data-monitor-filter]')];
    const monitorCards = [...monitorDesk.querySelectorAll('[data-monitor-card]')];
    const monitorEmpty = monitorDesk.querySelector('[data-monitor-empty]');
    const monitorKind = monitorDesk.querySelector('[data-monitor-detail-kind]');
    const monitorState = monitorDesk.querySelector('[data-monitor-detail-state]');
    const monitorTitle = monitorDesk.querySelector('[data-monitor-detail-title]');
    const monitorCopy = monitorDesk.querySelector('[data-monitor-detail-copy]');
    const monitorSource = monitorDesk.querySelector('[data-monitor-detail-source]');
    const monitorOwner = monitorDesk.querySelector('[data-monitor-detail-owner]');
    const monitorCadence = monitorDesk.querySelector('[data-monitor-detail-cadence]');
    const monitorStatus = monitorDesk.querySelector('[data-monitor-detail-status]');
    const monitorOpen = monitorDesk.querySelector('[data-monitor-open]');
    const monitorSnooze = monitorDesk.querySelector('[data-monitor-snooze]');
    const monitorFoot = monitorDesk.querySelector('[data-monitor-foot]');
    const monitorSchedule = monitorDesk.querySelector('[data-monitor-schedule]');
    const monitorScheduleStatus = monitorDesk.querySelector('[data-monitor-schedule-status]');
    const monitorData = {
      liability: { kind: 'HIGH / MATERIAL CHANGE', state: 'NEEDS REVIEW', title: 'Liability cap changed.', copy: 'Lex found a material delta in the latest agreement. The change is held here until counsel decides whether it changes the negotiation position.', source: 'Merger Agreement v5', owner: 'M. Chen', cadence: 'Nightly / local', research: 'consent' },
      regulation: { kind: 'MEDIUM / POLICY WATCH', state: 'NEEDS REVIEW', title: 'Privacy policy update.', copy: 'A new approved-systems policy source is ready for a source-linked comparison. The runtime is waiting for a reviewer before it changes the firm standard.', source: 'Privacy & AI Policy', owner: 'KM / Security', cadence: 'Weekly / local', research: 'privacy' },
      renewal: { kind: 'WATCHING / DEADLINE', state: 'WATCHING', title: 'Renewal window opening.', copy: 'The vendor agreement enters its notice window in fourteen days. Keep the signal visible without escalating it to the matter team yet.', source: 'Vendor Agreement', owner: 'Legal Ops', cadence: 'Daily / local', research: 'closing' },
      horizon: { kind: 'WATCHING / REGULATORY', state: 'WATCHING', title: 'Regulatory digest ready.', copy: 'An approved regulation source has changed. Lex has clustered the update against the firm policy set and is waiting for a human decision before it creates a remediation task.', source: 'Approved regulation feed', owner: 'KM / Compliance', cadence: 'Weekly / local', research: 'regulatory' },
      exhibit: { kind: 'RESOLVED / SOURCE SET', state: 'RESOLVED', title: 'New exhibit indexed.', copy: 'Six pages were added to the Cedar case record and linked to the chronology. The source set is complete and the alert is closed.', source: 'Cedar Case Record', owner: 'A. Rao', cadence: 'Event / local', research: 'closing' }
    };
    let monitorFilter = 'all';
    let monitorActive = 'liability';
    const setMonitorDetail = (key, focus = false) => {
      const data = monitorData[key] || monitorData.liability;
      monitorActive = key;
      monitorCards.forEach((card) => {
        const active = card.dataset.monitorKey === key;
        card.classList.toggle('is-active', active);
        card.setAttribute('aria-selected', String(active));
      });
      if (monitorKind) monitorKind.textContent = data.kind;
      if (monitorState) monitorState.textContent = data.state;
      if (monitorTitle) monitorTitle.textContent = data.title;
      if (monitorCopy) monitorCopy.textContent = data.copy;
      if (monitorSource) monitorSource.textContent = data.source;
      if (monitorOwner) monitorOwner.textContent = data.owner;
      if (monitorCadence) monitorCadence.textContent = data.cadence;
      if (monitorStatus) monitorStatus.textContent = data.state === 'RESOLVED' ? 'Resolved locally. The source trail remains available.' : 'Nothing leaves the room. Review stays with counsel.';
      if (monitorOpen) { monitorOpen.disabled = data.state === 'RESOLVED'; monitorOpen.innerHTML = data.state === 'RESOLVED' ? 'Source trace archived <span aria-hidden="true">✓</span>' : 'Open source trace <span aria-hidden="true">→</span>'; }
      if (monitorSnooze) { monitorSnooze.disabled = data.state === 'RESOLVED'; monitorSnooze.textContent = data.state === 'WATCHING' ? 'Snooze 24h' : 'Hold 24h'; }
      if (focus) monitorCards.find((card) => card.dataset.monitorKey === key)?.focus();
    };
    const renderMonitors = (nextFilter = monitorFilter) => {
      monitorFilter = nextFilter;
      monitorFilters.forEach((filter) => {
        const active = filter.dataset.monitorFilter === monitorFilter;
        filter.classList.toggle('is-active', active);
        filter.setAttribute('aria-selected', String(active));
        filter.tabIndex = active ? 0 : -1;
      });
      const visible = monitorCards.filter((card) => {
        const shown = monitorFilter === 'all' || card.dataset.monitorKind === monitorFilter;
        card.hidden = !shown;
        return shown;
      });
      if (monitorEmpty) monitorEmpty.hidden = visible.length !== 0;
      const next = visible.find((card) => card.dataset.monitorKey === monitorActive) || visible[0];
      if (next) setMonitorDetail(next.dataset.monitorKey);
      if (monitorFoot) monitorFoot.innerHTML = `<i></i> ${String(visible.filter((card) => card.dataset.monitorKind === 'urgent').length).padStart(2, '0')} NEED REVIEW / LOCAL QUEUE`;
    };
    monitorFilters.forEach((filter, index) => {
      filter.addEventListener('click', () => renderMonitors(filter.dataset.monitorFilter));
      filter.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? monitorFilters.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + monitorFilters.length) % monitorFilters.length;
        renderMonitors(monitorFilters[nextIndex].dataset.monitorFilter);
        monitorFilters[nextIndex].focus();
      });
    });
    monitorCards.forEach((card, index) => {
      card.addEventListener('click', () => setMonitorDetail(card.dataset.monitorKey));
      card.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const visible = monitorCards.filter((item) => !item.hidden);
        const current = visible.indexOf(card);
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? visible.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + visible.length) % visible.length;
        setMonitorDetail(visible[nextIndex].dataset.monitorKey, true);
      });
    });
    monitorSchedule?.addEventListener('change', () => {
      const enabled = monitorSchedule.checked;
      if (monitorScheduleStatus) monitorScheduleStatus.textContent = enabled ? 'NEXT CHECK / TONIGHT 22:00' : 'SCHEDULE PAUSED / LOCAL ONLY';
      if (monitorFoot) monitorFoot.innerHTML = enabled ? '<i></i> 02 NEED REVIEW / LOCAL QUEUE' : '<i></i> QUEUE HELD / NO BACKGROUND RUN';
    });
    monitorOpen?.addEventListener('click', () => {
      const researchUrl = new URL('research.html', window.location.href);
      researchUrl.searchParams.set('monitor', monitorData[monitorActive]?.research || 'consent');
      researchUrl.hash = 'desk';
      window.location.href = researchUrl.toString();
    });
    monitorSnooze?.addEventListener('click', () => {
      if (monitorStatus) monitorStatus.textContent = 'Held for 24 hours. The local queue will bring it back if the source changes.';
      if (monitorFoot) monitorFoot.innerHTML = '<i></i> MONITOR HELD / 0 B OUTBOUND';
      monitorSnooze.disabled = true;
      monitorSnooze.textContent = 'Held 24h';
    });
    const initialMonitor = readQueryState('monitor');
    if (initialMonitor && monitorData[initialMonitor]) monitorActive = initialMonitor;
    renderMonitors();
  }

  const threadDesk = document.querySelector('[data-thread-desk]');
  if (threadDesk) {
    const threadFilters = [...threadDesk.querySelectorAll('[data-thread-filter]')];
    const threadCards = [...threadDesk.querySelectorAll('[data-thread-card]')];
    const threadEmpty = threadDesk.querySelector('[data-thread-empty]');
    const threadCount = threadDesk.querySelector('[data-thread-count]');
    const threadKind = threadDesk.querySelector('[data-thread-detail-kind]');
    const threadState = threadDesk.querySelector('[data-thread-detail-state]');
    const threadTitle = threadDesk.querySelector('[data-thread-detail-title]');
    const threadCopy = threadDesk.querySelector('[data-thread-detail-copy]');
    const threadPlanList = threadDesk.querySelector('[data-thread-plan-list]');
    const threadApprove = threadDesk.querySelector('[data-thread-approve]');
    const threadPause = threadDesk.querySelector('[data-thread-pause]');
    const threadStatus = threadDesk.querySelector('[data-thread-detail-status]');
    const threadOpen = threadDesk.querySelector('[data-thread-open]');
    const threadFoot = threadDesk.querySelector('[data-thread-foot]');
    const threadData = {
      closing: {
        kind: 'input', label: 'WAITING / PLAN REVIEW', state: 'NEEDS YOUR INPUT', title: 'Northstar closing recommendation', copy: 'Lex has prepared a five-step local plan. Approve the route or adjust the decision point before the first source pass begins.', owner: 'J. Chen', open: 'workflows.html?source=builder-review#studio', plan: [['Index the signing set', '24 sources / ready', 'complete'], ['Compare liability language', 'Waiting for approval', 'active'], ['Check supplier consent', 'Queued after step 02', ''], ['Draft the decision brief', 'Source-linked output', ''], ['Hold for counsel sign-off', 'Human review required', '']] },
      consent: {
        kind: 'running', label: 'RUNNING / LOCAL', state: 'IN PROGRESS', title: 'Supplier consent sweep', copy: 'The local run is checking the tracker against the change-of-control clauses and will pause if thresholds disagree.', owner: 'M. Patel', open: 'workflows.html?source=research-consent#studio', plan: [['Load supplier tracker', '04 open items / ready', 'complete'], ['Find consent thresholds', '12 sources / running', 'active'], ['Compare approved precedent', 'Queued next', ''], ['Route exceptions to owner', 'Review gate', '']] },
      policy: {
        kind: 'input', label: 'WAITING / CLARIFICATION', state: 'NEEDS AN ANSWER', title: 'Meridian policy gap scan', copy: 'The local plan found two approved-system references with different owners. Confirm which policy owner should receive the remediation queue.', owner: 'KM / Security', open: 'research.html?monitor=privacy#desk', plan: [['Index approved systems', '01 policy set / ready', 'complete'], ['Cluster policy gaps', '06 references / complete', 'complete'], ['Confirm remediation owner', 'Waiting for your answer', 'active']] },
      chronology: {
        kind: 'complete', label: 'COMPLETE / LOCAL', state: 'READY FOR REVIEW', title: 'Cedar chronology refresh', copy: 'The chronology is complete and every event remains linked to the filing, witness note, or exhibit that supports it.', owner: 'A. Rao', open: 'workflows.html#review-table', plan: [['Index filings and exhibits', '42 events / complete', 'complete'], ['Normalize dates and parties', '06 clusters / complete', 'complete'], ['Flag missing source spans', '03 items / complete', 'complete'], ['Prepare chronology packet', 'Ready for counsel', 'complete']] }
    };
    let threadFilter = 'all';
    let threadActive = 'closing';
    const setThreadDetail = (key, focus = false) => {
      const data = threadData[key] || threadData.closing;
      threadActive = key;
      threadCards.forEach((card) => {
        const active = card.dataset.threadKey === key;
        card.classList.toggle('is-active', active);
        card.setAttribute('aria-selected', String(active));
        if (active) {
          card.dataset.threadKind = data.kind;
          const cardLabel = card.querySelector('span');
          const cardMeta = card.querySelector('small');
          const cardAction = card.querySelector('b');
          if (cardLabel) cardLabel.textContent = data.label;
          if (cardMeta) cardMeta.textContent = `${data.plan.length} steps · ${data.owner}`;
          if (cardAction) cardAction.innerHTML = `${data.kind === 'complete' ? 'READY' : data.kind === 'running' ? 'RUNNING' : 'YOUR INPUT'} <span aria-hidden="true">&#8594;</span>`;
        }
      });
      if (threadKind) threadKind.textContent = data.label;
      if (threadState) threadState.textContent = data.state;
      if (threadTitle) threadTitle.textContent = data.title;
      if (threadCopy) threadCopy.textContent = data.copy;
      if (threadPlanList) threadPlanList.innerHTML = data.plan.map((step, index) => `<div class="${step[2] ? `is-${step[2]}` : ''}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${step[0]}</strong><small>${step[1]}</small></div>`).join('');
      if (threadOpen) threadOpen.href = data.open;
      if (threadApprove) { threadApprove.disabled = data.kind === 'complete' || data.kind === 'running'; threadApprove.innerHTML = data.kind === 'complete' ? 'Plan complete <span aria-hidden="true">&#10003;</span>' : data.kind === 'running' ? 'Running locally <span aria-hidden="true">&#8230;</span>' : 'Approve and run <span aria-hidden="true">&#8594;</span>'; }
      if (threadPause) { threadPause.disabled = data.kind === 'complete'; threadPause.textContent = data.kind === 'complete' ? 'Thread complete' : 'Pause thread'; }
      if (threadStatus) threadStatus.textContent = data.kind === 'input' ? 'Nothing runs until the plan is approved locally.' : data.kind === 'running' ? 'Local progress is visible. The thread will pause at the next decision point.' : 'Complete locally. Review the source-linked output in context.';
      if (focus) threadCards.find((card) => card.dataset.threadKey === key)?.focus();
    };
    const renderThreads = (nextFilter = threadFilter) => {
      threadFilter = nextFilter;
      threadFilters.forEach((filter) => {
        const active = filter.dataset.threadFilter === threadFilter;
        filter.classList.toggle('is-active', active);
        filter.setAttribute('aria-selected', String(active));
        filter.tabIndex = active ? 0 : -1;
      });
      const visible = threadCards.filter((card) => {
        const shown = threadFilter === 'all' || card.dataset.threadKind === threadFilter;
        card.hidden = !shown;
        return shown;
      });
      if (threadEmpty) threadEmpty.hidden = visible.length !== 0;
      const next = visible.find((card) => card.dataset.threadKey === threadActive) || visible[0];
      if (next) setThreadDetail(next.dataset.threadKey);
      if (threadCount) threadCount.textContent = `${String(visible.length).padStart(2, '0')} ACTIVE THREAD${visible.length === 1 ? '' : 'S'} / LOCAL INDEX`;
      if (threadFoot) threadFoot.innerHTML = `<i></i> ${String(threadCards.filter((card) => card.dataset.threadKind === 'input').length).padStart(2, '0')} NEEDS YOUR INPUT / LOCAL QUEUE`;
    };
    threadFilters.forEach((filter, index) => {
      filter.addEventListener('click', () => renderThreads(filter.dataset.threadFilter));
      filter.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? threadFilters.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + threadFilters.length) % threadFilters.length;
        renderThreads(threadFilters[nextIndex].dataset.threadFilter);
        threadFilters[nextIndex].focus();
      });
    });
    threadCards.forEach((card, index) => {
      card.addEventListener('click', () => setThreadDetail(card.dataset.threadKey));
      card.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const visible = threadCards.filter((item) => !item.hidden);
        const current = visible.indexOf(card);
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? visible.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + visible.length) % visible.length;
        setThreadDetail(visible[nextIndex].dataset.threadKey, true);
      });
    });
    threadApprove?.addEventListener('click', () => {
      const data = threadData[threadActive] || threadData.closing;
      if (data.kind !== 'input') return;
      data.kind = 'running';
      data.label = 'RUNNING / LOCAL';
      data.state = 'IN PROGRESS';
      if (threadStatus) threadStatus.textContent = 'Plan approved locally. Progress stays visible while the source pass runs.';
      if (threadFoot) threadFoot.innerHTML = '<i></i> THREAD RUNNING / 0 B OUTBOUND';
      renderThreads(threadFilter);
      setThreadDetail(threadActive);
    });
    threadPause?.addEventListener('click', () => {
      const data = threadData[threadActive] || threadData.closing;
      if (data.kind === 'complete') return;
      data.kind = 'input';
      data.label = 'PAUSED / LOCAL';
      data.state = 'PAUSED LOCALLY';
      if (threadStatus) threadStatus.textContent = 'The thread is paused locally. Resume it when counsel is ready.';
      if (threadFoot) threadFoot.innerHTML = '<i></i> THREAD PAUSED / LOCAL QUEUE';
      renderThreads(threadFilter);
      setThreadDetail(threadActive);
    });
    const initialThread = readQueryState('thread');
    if (initialThread && threadData[initialThread]) threadActive = initialThread;
    renderThreads();
  }

  const researchDesk = document.querySelector('[data-research-desk]');
  if (researchDesk) {
    const researchForm = researchDesk.querySelector('[data-research-form]');
    const researchSearch = researchDesk.querySelector('[data-research-search]');
    const researchFilters = [...researchDesk.querySelectorAll('[data-research-filter]')];
    const researchResults = [...researchDesk.querySelectorAll('[data-research-result]')];
    const researchEmpty = researchDesk.querySelector('[data-research-empty]');
    const researchKind = researchDesk.querySelector('[data-research-detail-kind]');
    const researchState = researchDesk.querySelector('[data-research-detail-state]');
    const researchTitle = researchDesk.querySelector('[data-research-detail-title]');
    const researchCopy = researchDesk.querySelector('[data-research-detail-copy]');
    const researchQuote = researchDesk.querySelector('[data-research-detail-quote]');
    const researchSource = researchDesk.querySelector('[data-research-detail-source]');
    const researchSpan = researchDesk.querySelector('[data-research-detail-span]');
    const researchOwner = researchDesk.querySelector('[data-research-detail-owner]');
    const researchStage = researchDesk.querySelector('[data-research-stage]');
    const researchStageStatus = researchDesk.querySelector('[data-research-stage-status]');
    const researchFoot = researchDesk.querySelector('[data-research-foot]');
    const researchData = {
      consent: { kind: 'PRECEDENT / SOURCE TRACE', state: 'VERIFIED', title: 'Change-of-control consent', copy: 'The agreement requires written consent before a change of control if the counterparty has a material supplier dependency. The result stays open to counsel because the tracker and clause use different thresholds.', quote: '“Neither party may assign this Agreement in connection with a change of control without prior written consent.”', source: 'Merger Agreement', span: '§ 9.2 / Assignment', owner: 'J. Chen' },
      indemnity: { kind: 'PRECEDENT / SOURCE TRACE', state: 'NEEDS REVIEW', title: 'Indemnity fallback position', copy: 'The negotiation playbook prefers a capped indemnity with a fraud carve-out. Lex found the fallback language in the approved precedent set and kept the decision with the deal lead.', quote: '“The indemnity cap will not apply to losses arising from fraud or wilful misconduct.”', source: 'Negotiation Playbook', span: '04 / Indemnity fallback', owner: 'M. Chen' },
      privacy: { kind: 'POLICY / SOURCE TRACE', state: 'CURRENT', title: 'Approved AI boundary', copy: 'The firm policy requires a local runtime for privileged matters, explicit review gates, and a recorded owner before any output is shared beyond the matter team.', quote: '“Approved AI systems must preserve the matter boundary and expose an auditable review path.”', source: 'Privacy & AI Policy', span: '§ 3 / Approved systems', owner: 'KM / Security' },
      closing: { kind: 'MEMO / SOURCE TRACE', state: 'NEEDS REVIEW', title: 'Closing conditions', copy: 'Counsel correspondence identifies supplier consent and the revised liability cap as the two conditions to resolve before execution.', quote: '“Confirm the consent position and cap language before circulating the final signing set.”', source: 'Counsel Thread', span: 'Thread 08 / Closing', owner: 'J. Chen' },
      regulatory: { kind: 'REGULATORY / SOURCE TRACE', state: 'WATCHING', title: 'Regulatory digest', copy: 'The approved regulation feed has a new source-linked update. Lex keeps the change in a review queue until counsel decides whether it affects a policy, contract, or control.', quote: '“New regulatory material is held for review before it becomes a firm action.”', source: 'Approved regulation feed', span: 'Digest / 03 linked sources', owner: 'KM / Compliance' }
    };
    let researchFilter = 'all';
    let researchActive = 'consent';
    const setResearchDetail = (key, focus = false) => {
      const data = researchData[key] || researchData.consent;
      researchActive = key;
      researchResults.forEach((result) => {
        const active = result.dataset.researchResult === key;
        result.classList.toggle('is-active', active);
        result.setAttribute('aria-selected', String(active));
        result.tabIndex = active ? 0 : -1;
      });
      if (researchKind) researchKind.textContent = data.kind;
      if (researchState) researchState.textContent = data.state;
      if (researchTitle) researchTitle.textContent = data.title;
      if (researchCopy) researchCopy.textContent = data.copy;
      if (researchQuote) researchQuote.textContent = data.quote;
      if (researchSource) researchSource.textContent = data.source;
      if (researchSpan) researchSpan.textContent = data.span;
      if (researchOwner) researchOwner.textContent = data.owner;
      if (researchStage) { researchStage.disabled = false; researchStage.innerHTML = 'Stage research memo <span aria-hidden="true">→</span>'; }
      if (researchStageStatus) researchStageStatus.textContent = 'Source trace ready for counsel.';
      if (focus) researchResults.find((result) => result.dataset.researchResult === key)?.focus();
    };
    const renderResearch = () => {
      const query = (researchSearch?.value || '').trim().toLowerCase();
      const normalizedQuery = query.replace(/[\u2010-\u2015-]/g, ' ');
      researchFilters.forEach((filter) => {
        const active = filter.dataset.researchFilter === researchFilter;
        filter.classList.toggle('is-active', active);
        filter.setAttribute('aria-selected', String(active));
        filter.tabIndex = active ? 0 : -1;
      });
      const visible = researchResults.filter((result) => {
        const matchesKind = researchFilter === 'all' || result.dataset.researchKind === researchFilter;
        const normalizedText = result.textContent.toLowerCase().replace(/[\u2010-\u2015-]/g, ' ');
        const matchesQuery = !normalizedQuery || normalizedText.includes(normalizedQuery);
        result.hidden = !(matchesKind && matchesQuery);
        return matchesKind && matchesQuery;
      });
      if (researchEmpty) researchEmpty.hidden = visible.length !== 0;
      const next = visible.find((result) => result.dataset.researchResult === researchActive) || visible[0];
      if (next) setResearchDetail(next.dataset.researchResult);
      if (researchFoot) researchFoot.innerHTML = `<span><i></i> ${String(visible.length).padStart(2, '0')} RESULTS / SOURCE-LINKED</span><strong>LOCAL CORPUS / NORTHSTAR</strong>`;
    };
    researchFilters.forEach((filter, index) => {
      filter.addEventListener('click', () => { researchFilter = filter.dataset.researchFilter; renderResearch(); });
      filter.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? researchFilters.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + researchFilters.length) % researchFilters.length;
        researchFilter = researchFilters[nextIndex].dataset.researchFilter;
        renderResearch();
        researchFilters[nextIndex].focus();
      });
    });
    researchResults.forEach((result, index) => {
      result.addEventListener('click', () => setResearchDetail(result.dataset.researchResult));
      result.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const visible = researchResults.filter((item) => !item.hidden);
        const current = visible.indexOf(result);
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? visible.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + visible.length) % visible.length;
        setResearchDetail(visible[nextIndex].dataset.researchResult, true);
      });
    });
    researchForm?.addEventListener('submit', (event) => { event.preventDefault(); renderResearch(); });
    researchSearch?.addEventListener('input', renderResearch);
    researchStage?.addEventListener('click', () => {
      researchStage.disabled = true;
      researchStage.innerHTML = 'Memo staged locally <span aria-hidden="true">✓</span>';
      if (researchStageStatus) researchStageStatus.textContent = 'Opening Workflow Studio with the citation attached…';
      if (researchFoot) researchFoot.innerHTML = '<span><i></i> MEMO STAGED / 0 B OUTBOUND</span><strong>LOCAL CORPUS / NORTHSTAR</strong>';
      const workflowUrl = new URL('workflows.html', window.location.href);
      workflowUrl.searchParams.set('source', `research-${researchActive}`);
      workflowUrl.hash = 'studio';
      window.setTimeout(() => { window.location.href = workflowUrl.toString(); }, 320);
    });
    renderResearch();
    const monitorSeed = readQueryState('monitor');
    const monitorResearchKey = { liability: 'consent', regulation: 'privacy', renewal: 'closing', horizon: 'regulatory', exhibit: 'closing' }[monitorSeed] || monitorSeed;
    if (monitorResearchKey && researchData[monitorResearchKey]) setResearchDetail(monitorResearchKey);
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
  const connectionsLab = document.querySelector('[data-connections-lab]');
  if (connectionsLab) {
    const connectionTabs = [...connectionsLab.querySelectorAll('[data-connection-tab]')];
    const connectionLabel = connectionsLab.querySelector('[data-connection-label]');
    const connectionStatus = connectionsLab.querySelector('[data-connection-status]');
    const connectionTitle = connectionsLab.querySelector('[data-connection-title]');
    const connectionCopy = connectionsLab.querySelector('[data-connection-copy]');
    const connectionRoute = connectionsLab.querySelector('[data-connection-route]');
    const connectionScope = connectionsLab.querySelector('[data-connection-scope]');
    const connectionBoundary = connectionsLab.querySelector('[data-connection-boundary]');
    const connectionCheck = connectionsLab.querySelector('[data-connection-check]');
    const connectionNote = connectionsLab.querySelector('[data-connection-note]');
    const connectionFoot = connectionsLab.querySelector('[data-connection-foot]');
    const connectionData = {
      imanage: { label: 'IMANAGE / DOCUMENT MANAGEMENT', status: 'APPROVED / READ-ONLY', title: 'Read the record where it already lives.', copy: 'Vaultr can index an approved matter workspace without creating a second uncontrolled copy. The route stays read-only until a firm owner changes the policy.', route: 'Firm-managed DMS', scope: 'Northstar / 24 sources', boundary: 'Local index / 0 B' },
      sharepoint: { label: 'SHAREPOINT / APPROVED REPOSITORY', status: 'REVIEW / SCOPED IMPORT', title: 'Bring only the matter set you approved.', copy: 'Select a firm-owned folder and import the source set into a local room. The connection never becomes a general-purpose cloud route.', route: 'Approved folder', scope: 'Meridian / 18 sources', boundary: 'Scoped import / 0 B' },
      m365: { label: 'MICROSOFT 365 / DRAFT SURFACE', status: 'REVIEW / LOCAL ADD-IN', title: 'Carry the answer into the work product.', copy: 'Use a local handoff to move a source-linked draft into the document surface your team already knows. The evidence remains attached to the decision.', route: 'Local document surface', scope: 'Northstar / 03 citations', boundary: 'Draft only / 0 B' },
      box: { label: 'BOX / SCOPED IMPORT', status: 'DENIED BY DEFAULT', title: 'Keep file exchange deliberate.', copy: 'A file exchange path stays closed until a matter owner approves the exact folder, recipients, and retention window.', route: 'Owner-approved folder', scope: 'No active scope', boundary: 'Blocked / 0 B' }
    };
    let connectionActive = 'imanage';
    let connectionTimer;
    const setConnection = (key, focus = false) => {
      connectionActive = connectionData[key] ? key : 'imanage';
      const data = connectionData[connectionActive];
      connectionTabs.forEach((tab) => {
        const active = tab.dataset.connectionTab === connectionActive;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      if (connectionLabel) connectionLabel.textContent = data.label;
      if (connectionStatus) connectionStatus.textContent = data.status;
      if (connectionTitle) connectionTitle.textContent = data.title;
      if (connectionCopy) connectionCopy.textContent = data.copy;
      if (connectionRoute) connectionRoute.textContent = data.route;
      if (connectionScope) connectionScope.textContent = data.scope;
      if (connectionBoundary) connectionBoundary.textContent = data.boundary;
      if (connectionNote) connectionNote.textContent = 'No connection data leaves the room.';
      if (connectionCheck) { connectionCheck.disabled = false; connectionCheck.classList.remove('is-running'); connectionCheck.innerHTML = 'Check local path <span aria-hidden="true">→</span>'; }
      if (connectionFoot) connectionFoot.textContent = `${String(connectionTabs.findIndex((tab) => tab.dataset.connectionTab === connectionActive) + 1).padStart(2, '0')} selected / policy not yet checked`;
      const activeTab = connectionTabs.find((tab) => tab.dataset.connectionTab === connectionActive);
      if (activeTab && connectionsLab.querySelector('[role="tabpanel"]')) connectionsLab.querySelector('[role="tabpanel"]').setAttribute('aria-labelledby', activeTab.id);
      if (focus) activeTab?.focus();
    };
    connectionTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => setConnection(tab.dataset.connectionTab));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? connectionTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + connectionTabs.length) % connectionTabs.length;
        setConnection(connectionTabs[nextIndex].dataset.connectionTab, true);
      });
    });
    connectionCheck?.addEventListener('click', () => {
      window.clearTimeout(connectionTimer);
      connectionCheck.disabled = true;
      connectionCheck.classList.add('is-running');
      if (connectionStatus) connectionStatus.textContent = 'CHECKING / LOCAL PATH';
      if (connectionNote) connectionNote.textContent = 'Validating scope, owner, and outbound policy locally…';
      if (connectionFoot) connectionFoot.textContent = 'Checking approved path / 0 B outbound';
      connectionTimer = window.setTimeout(() => {
        connectionCheck.disabled = false;
        connectionCheck.classList.remove('is-running');
        if (connectionStatus) connectionStatus.textContent = connectionActive === 'box' ? 'DENIED / POLICY INTACT' : 'PATH VERIFIED / 0 B OUTBOUND';
        if (connectionNote) connectionNote.textContent = connectionActive === 'box' ? 'The path remains closed until an owner approves the exact scope.' : 'Local path verified. The matter stays inside its deployment boundary.';
        if (connectionFoot) connectionFoot.textContent = connectionActive === 'box' ? 'Denied by profile / 0 B outbound' : 'Path verified / 0 B outbound';
      }, 820);
    });
    setConnection('imanage');
  }
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
      },
      monitors: {
        label: 'MONITOR DESK / REGULATORY HORIZON',
        title: 'See the change before it becomes a task.',
        copy: 'Keep approved regulation sources on a local watch, cluster the signal against firm controls, and hold the next decision for counsel.',
        pills: ['OFFICIAL SOURCES', 'LOCAL WATCH', 'HUMAN GATE'], foot: '07 / HORIZON',
        href: 'command.html#monitors', link: 'Open Monitor Desk'
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
    const deliveryDownload = deliveryRoom.querySelector('[data-delivery-download]');
    const deliveryShare = deliveryRoom.querySelector('[data-delivery-share]');
    const deliveryTimeline = deliveryRoom.querySelector('[data-delivery-timeline]');
    const deliveryPolicyNote = deliveryRoom.querySelector('[data-delivery-policy-note]');
    const deliveryApproval = deliveryRoom.querySelector('[data-delivery-policy="approval"]');
    const deliveryExpiry = deliveryRoom.querySelector('[data-delivery-expiry]');
    const deliveryImport = deliveryRoom.querySelector('[data-delivery-import]');
    const deliveryContext = deliveryRoom.querySelector('[data-delivery-context]');
    const deliveryPacketSets = {
      consent: { title: 'Supplier consent', source: 'Diligence Tracker', span: 'Open items / 04', copy: 'The top five suppliers may require notice before closing.' },
      cap: { title: 'Liability cap', source: 'Merger Agreement', span: '§ 7.4 / Limitation', copy: 'The revised cap is two times the fees paid under the agreement.' },
      dpa: { title: 'Subprocessor schedule', source: 'Disclosure Schedule', span: '§ 12 / Data processing', copy: 'The data processing addendum needs to be checked against the approved subprocessor list.' },
      board: { title: 'Board approval', source: 'Counsel Thread', span: 'Thread 08 / Approval', copy: 'Counsel correspondence confirms the approval memo is ready for the closing checklist.' },
      'research-consent': { title: 'Change-of-control consent', source: 'Merger Agreement', span: '§ 9.2 / Assignment', owner: 'J. Chen', copy: 'The top five suppliers may require notice before closing.' },
      'research-indemnity': { title: 'Indemnity fallback position', source: 'Merger Agreement', span: '§ 8.1 / Indemnity', owner: 'M. Chen', copy: 'The indemnity fallback position is held for the negotiation brief.' },
      'research-privacy': { title: 'Approved AI boundary', source: 'AI Use Policy', span: '§ 4 / Approved systems', owner: 'S. Patel', copy: 'The approved local runtime boundary is ready for the policy review.' },
      'research-closing': { title: 'Closing conditions', source: 'Diligence Tracker', span: 'Open items / 18', owner: 'J. Chen', copy: 'The remaining closing conditions are ready for an owner-scoped handoff.' },
      'editor-closing': { title: 'Closing recommendation', source: 'Merger Agreement', span: '§ 7.4 / Limitation', owner: 'J. Chen', copy: 'The source-linked closing recommendation is ready for a scoped delivery review.' },
      'agent-diligence': { title: 'Diligence exceptions', source: 'Diligence Tracker', span: 'Open items / 18', owner: 'J. Chen', copy: 'The staged agent packet groups the open exceptions for a source-linked review.' },
      'agent-redline': { title: 'Clause drift review', source: 'Merger Agreement', span: '§ 7.4 / Limitation', owner: 'M. Chen', copy: 'The staged agent packet keeps each material delta next to its supporting clause.' },
      'agent-chronology': { title: 'Chronology builder', source: 'Case Record', span: 'Chronology / 42 events', owner: 'A. Rao', copy: 'The staged agent packet gives counsel a source-linked timeline to reorder and review.' },
      'agent-discovery': { title: 'Discovery issue map', source: 'Discovery Index', span: 'Issues / 09 clusters', owner: 'L. Grant', copy: 'The staged agent packet keeps privilege cues and unresolved issues inside the review gate.' },
      'agent-policy': { title: 'Policy gap scan', source: 'Privacy & AI Policy', span: '§ 3 / Approved systems', owner: 'KM / Security', copy: 'The staged agent packet turns approved-runtime gaps into an owner-scoped governance brief.' },
      'agent-intake': { title: 'Contract intake triage', source: 'Contract Intake', span: 'Queue / 12 requests', owner: 'Legal Ops', copy: 'The staged agent packet routes each intake request to a visible owner and next step.' },
      'builder-review': { title: 'Northstar matter review', source: 'Merger Agreement', span: '§ 7.4 / Limitation', owner: 'J. Chen', copy: 'A custom review agent is ready for counsel approval with explicit sources and enforced guardrails.' },
      'builder-compare': { title: 'Northstar clause comparison', source: 'Merger Agreement', span: '§ 7.4 / Limitation', owner: 'M. Chen', copy: 'A custom comparison agent is ready to surface material deltas with a source-linked review gate.' },
      'builder-draft': { title: 'Northstar response drafter', source: 'Merger Agreement', span: '§ 9.2 / Assignment', owner: 'J. Chen', copy: 'A custom drafting agent is ready to move a finding into reviewable language without losing its evidence.' }
    };
    const importedPacket = deliveryPacketSets[readQueryState('packet') || readQueryState('source')];
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
    const resetDeliveryDownload = () => {
      if (!deliveryDownload) return;
      deliveryDownload.disabled = true;
      deliveryDownload.setAttribute('aria-disabled', 'true');
      deliveryDownload.innerHTML = 'Download brief <span aria-hidden="true">&#8595;</span>';
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
      if (deliveryPreviewItems) deliveryPreviewItems.hidden = deliveryActiveView === 'activity';
      if (deliveryTimeline) deliveryTimeline.hidden = deliveryActiveView !== 'activity';
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
      resetDeliveryDownload();
      if (deliveryStatus) deliveryStatus.textContent = 'PRIVATE DRAFT';
      renderDeliveryItems();
    }));
    deliveryRecipients.forEach((input) => input.addEventListener('change', () => {
      if (deliveryShare) { deliveryShare.setAttribute('aria-disabled', 'true'); deliveryShare.removeAttribute('disabled'); }
      resetDeliveryDownload();
      if (deliveryStatus) deliveryStatus.textContent = 'PRIVATE DRAFT';
      renderDeliveryItems();
    }));
    const renderDeliveryPolicy = () => {
      const approval = deliveryApproval?.checked;
      const expiry = deliveryExpiry?.value || '24 hours';
      if (deliveryPolicyNote) deliveryPolicyNote.textContent = `${approval ? 'Approval required' : 'Owner approval not required'} / ${expiry} access window`;
      if (deliveryShare) deliveryShare.setAttribute('aria-disabled', 'true');
      resetDeliveryDownload();
      if (deliveryStatus) deliveryStatus.textContent = 'PRIVATE DRAFT';
    };
    deliveryApproval?.addEventListener('change', renderDeliveryPolicy);
    deliveryExpiry?.addEventListener('change', renderDeliveryPolicy);
    deliveryPrepare?.addEventListener('click', () => {
      window.clearTimeout(deliveryTimer);
      const recipients = selectedDeliveryRecipients();
      deliveryPrepare.disabled = true;
      deliveryPrepare.classList.add('is-running');
      if (deliveryStatus) deliveryStatus.textContent = 'PREPARING LOCALLY';
      if (deliveryPreviewTitle) deliveryPreviewTitle.textContent = deliveryActiveView === 'activity' ? 'Handoff activity / owner view' : importedPacket ? `${importedPacket.title} / decision brief` : 'Decision brief: acquisition review';
      if (deliveryPreviewCopy) deliveryPreviewCopy.textContent = importedPacket
        ? `${importedPacket.copy} The staged packet keeps ${importedPacket.source} / ${importedPacket.span} attached for the recipient. Review the scope before you make it available.`
        : `The selected handoff is staged locally for ${recipients.length} scoped recipient${recipients.length === 1 ? '' : 's'} with ${deliveryApproval?.checked ? 'owner approval' : 'no approval gate'} and a ${deliveryExpiry?.value || '24 hours'} access window. Review the scope before you make it available.`;
      deliveryTimer = window.setTimeout(() => {
        deliveryPrepare.disabled = false;
        deliveryPrepare.classList.remove('is-running');
        if (deliveryStatus) deliveryStatus.textContent = 'READY TO SHARE';
        if (deliveryFoot) deliveryFoot.textContent = `${deliveryItems.filter((input) => input.checked && !input.disabled).length} item${deliveryItems.filter((input) => input.checked && !input.disabled).length === 1 ? '' : 's'} staged · ${selectedDeliveryRecipients().length} recipient${selectedDeliveryRecipients().length === 1 ? '' : 's'} / 0 B outbound`;
        if (deliveryShare) { deliveryShare.setAttribute('aria-disabled', 'false'); deliveryShare.removeAttribute('disabled'); }
        if (deliveryDownload) { deliveryDownload.setAttribute('aria-disabled', 'false'); deliveryDownload.removeAttribute('disabled'); }
      }, 850);
    });
    deliveryDownload?.addEventListener('click', () => {
      if (deliveryDownload.getAttribute('aria-disabled') === 'true') return;
      const selectedItems = deliveryItems.filter((input) => input.checked && !input.disabled).map((input) => deliveryCatalog[input.dataset.deliveryItem]?.label).filter(Boolean);
      const selectedRecipients = selectedDeliveryRecipients().map((input) => input.closest('label')?.querySelector('strong')?.textContent?.trim()).filter(Boolean);
      const sourceLine = importedPacket ? `${importedPacket.source} / ${importedPacket.span}` : 'Northstar matter record / selected source set';
      const brief = [
        '# Vaultr / Scoped Handoff',
        '',
        'Matter: Acquisition review',
        `Source context: ${sourceLine}`,
        `Recipients: ${selectedRecipients.join(', ') || 'None selected'}`,
        `Access window: ${deliveryExpiry?.value || '24 hours'}`,
        `Owner approval: ${deliveryApproval?.checked ? 'Required' : 'Not required'}`,
        '',
        '## Shared work product',
        ...(selectedItems.length ? selectedItems.map((item) => `- ${item}`) : ['- No items selected']),
        '',
        'Raw matter files remain withheld. This brief was generated locally; 0 B outbound.'
      ].join('\n');
      const blob = new Blob([brief], { type: 'text/markdown;charset=utf-8' });
      const href = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href;
      link.download = 'vaultr-scoped-handoff.md';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(href);
      deliveryDownload.disabled = true;
      deliveryDownload.innerHTML = 'Brief downloaded <span aria-hidden="true">&#10003;</span>';
      if (deliveryStatus) deliveryStatus.textContent = 'HANDOFF DOWNLOADED LOCALLY';
      if (deliveryFoot) deliveryFoot.textContent = 'Scoped brief downloaded / 0 B outbound';
      window.setTimeout(() => resetDeliveryDownload(), 1800);
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
    renderDeliveryPolicy();
    if (importedPacket) {
      if (deliveryImport) deliveryImport.hidden = false;
      deliveryItems.forEach((input) => {
        if (!input.disabled) input.checked = ['summary', 'sources', 'notes'].includes(input.dataset.deliveryItem);
      });
      if (deliveryContext) {
        deliveryContext.hidden = false;
        deliveryContext.textContent = `SOURCE CONTEXT / ${importedPacket.source} · ${importedPacket.span}${importedPacket.owner ? ` · OWNER ${importedPacket.owner}` : ''}`;
      }
      if (deliveryStatus) deliveryStatus.textContent = 'PACKET IMPORTED';
      if (deliveryPreviewTitle) deliveryPreviewTitle.textContent = `${importedPacket.title} / decision brief`;
      if (deliveryPreviewCopy) deliveryPreviewCopy.textContent = `${importedPacket.copy} The staged packet keeps ${importedPacket.source} / ${importedPacket.span} attached for the recipient.`;
      if (deliveryFoot) deliveryFoot.textContent = 'Review packet imported / 0 B outbound';
    }
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
      approve: { label: 'Sign-off', copy: 'Assign the next owner' },
      branch: { label: 'Decision branch', copy: 'Route by risk threshold' }
    };
    const composerSourceSets = {
      liability: { title: 'Northstar liability playbook', copy: 'Northstar liability playbook / staged locally' },
      meridian: { title: 'Meridian employment set', copy: 'Meridian employment set / staged locally' },
      consent: { title: 'Supplier consent library', copy: 'Supplier consent library / staged locally' },
      privacy: { title: 'Privacy and AI policy', copy: 'Privacy and AI policy / staged locally' },
      'research-consent': { title: 'Change-of-control consent', copy: 'Change-of-control consent / research memo staged locally', packet: 'research-consent', source: 'Merger Agreement', span: '§ 9.2 / Assignment', owner: 'J. Chen' },
      'research-indemnity': { title: 'Indemnity fallback position', copy: 'Indemnity fallback position / research memo staged locally', packet: 'research-indemnity', source: 'Merger Agreement', span: '§ 8.1 / Indemnity', owner: 'M. Chen' },
      'research-privacy': { title: 'Approved AI boundary', copy: 'Approved AI boundary / research memo staged locally', packet: 'research-privacy', source: 'AI Use Policy', span: '§ 4 / Approved systems', owner: 'S. Patel' },
      'research-closing': { title: 'Closing conditions', copy: 'Closing conditions / research memo staged locally', packet: 'research-closing', source: 'Diligence Tracker', span: 'Open items / 18', owner: 'J. Chen' },
      'agent-diligence': { title: 'Diligence exceptions', copy: 'Diligence exceptions / agent staged locally', packet: 'agent-diligence', source: 'Diligence Tracker', span: 'Open items / 18', owner: 'J. Chen' },
      'agent-redline': { title: 'Clause drift review', copy: 'Clause drift review / agent staged locally', packet: 'agent-redline', source: 'Merger Agreement', span: '§ 7.4 / Limitation', owner: 'M. Chen' },
      'agent-chronology': { title: 'Chronology builder', copy: 'Chronology builder / agent staged locally', packet: 'agent-chronology', source: 'Case Record', span: 'Chronology / 42 events', owner: 'A. Rao' },
      'agent-discovery': { title: 'Discovery issue map', copy: 'Discovery issue map / agent staged locally', packet: 'agent-discovery', source: 'Discovery Index', span: 'Issues / 09 clusters', owner: 'L. Grant' },
      'agent-policy': { title: 'Policy gap scan', copy: 'Policy gap scan / agent staged locally', packet: 'agent-policy', source: 'Privacy & AI Policy', span: '§ 3 / Approved systems', owner: 'KM / Security' },
      'agent-intake': { title: 'Contract intake triage', copy: 'Contract intake triage / agent staged locally', packet: 'agent-intake', source: 'Contract Intake', span: 'Queue / 12 requests', owner: 'Legal Ops' },
      'builder-review': { title: 'Northstar matter review', copy: 'Northstar matter review / custom agent staged locally', packet: 'builder-review', source: 'Merger Agreement', span: '§ 7.4 / Limitation', owner: 'J. Chen' },
      'builder-compare': { title: 'Northstar clause comparison', copy: 'Northstar clause comparison / custom agent staged locally', packet: 'builder-compare', source: 'Merger Agreement', span: '§ 7.4 / Limitation', owner: 'M. Chen' },
      'builder-draft': { title: 'Northstar response drafter', copy: 'Northstar response drafter / custom agent staged locally', packet: 'builder-draft', source: 'Merger Agreement', span: '§ 9.2 / Assignment', owner: 'J. Chen' }
    };
    const importedSource = composerSourceSets[readQueryState('source')];
    if (importedSource) composerCatalog.sources.copy = importedSource.copy;
    const composerSequence = workflowComposer.querySelector('[data-composer-sequence]');
    const composerStatus = workflowComposer.querySelector('[data-composer-status]');
    const composerTitle = workflowComposer.querySelector('[data-composer-title]');
    const composerCopy = workflowComposer.querySelector('[data-composer-copy]');
    const composerDisclosure = workflowComposer.querySelector('[data-composer-disclosure]');
    const composerFoot = workflowComposer.querySelector('[data-composer-foot]');
    const composerRun = workflowComposer.querySelector('[data-composer-run]');
    const composerDelivery = workflowComposer.querySelector('[data-composer-delivery]');
    const composerAddButtons = [...workflowComposer.querySelectorAll('[data-composer-add]')];
    let composerSteps = ['sources', 'review'];
    let composerTimer;
    const renderComposer = () => {
      if (!composerSequence) return;
      composerSequence.innerHTML = composerSteps.length
        ? composerSteps.map((key, index) => {
          const step = composerCatalog[key];
          return `<div class="composer-step${key === 'branch' ? ' composer-step--branch' : ''}" role="listitem"><span>0${index + 1}</span><div><strong>${step.label}</strong><small>${step.copy}</small></div><button type="button" aria-label="Remove ${step.label}" data-composer-remove="${key}">×</button></div>`;
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
      if (composerCopy) composerCopy.textContent = composerSteps.includes('branch')
        ? 'The route can branch on a visible threshold before the next action. Counsel still owns the gate and the outcome.'
        : composerSteps.length ? 'Choose the steps counsel wants to see. The route stays explicit before Lex takes action.' : 'Add a source set, a review gate, or a sign-off before previewing the run.';
      if (composerRun) composerRun.disabled = composerSteps.length < 2;
      if (composerDelivery) composerDelivery.hidden = true;
    };
    composerAddButtons.forEach((button) => button.addEventListener('click', () => {
      const step = button.dataset.composerAdd;
      if (composerSteps.includes(step)) {
        composerSteps = composerSteps.filter((item) => item !== step);
      } else if (composerSteps.length < 6) {
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
      if (composerCopy) composerCopy.textContent = composerSteps.includes('branch')
        ? `Lex will evaluate the visible threshold${importedSource ? ` using ${importedSource.title}` : ''}, route the run, pause at the review gate, and leave each outcome attached to its sources.`
        : `Lex will follow each visible step${importedSource ? ` using ${importedSource.title}` : ''}, pause at the review gate, and leave the result attached to its sources.`;
      composerSequence?.classList.add('is-running');
      composerTimer = window.setTimeout(() => {
        composerRun.disabled = false;
        composerRun.classList.remove('is-running');
        composerSequence?.classList.remove('is-running');
        if (composerStatus) composerStatus.textContent = 'PREVIEW COMPLETE / 0 B OUTBOUND';
        if (composerFoot) composerFoot.textContent = `${composerSteps.length} STEPS / READY FOR COUNSEL`;
        if (composerDelivery && importedSource?.packet) {
          const deliveryUrl = new URL('platform.html', window.location.href);
          deliveryUrl.searchParams.set('packet', importedSource.packet);
          deliveryUrl.searchParams.set('source', readQueryState('source'));
          deliveryUrl.hash = 'delivery';
          composerDelivery.href = deliveryUrl.toString();
          composerDelivery.hidden = false;
        }
      }, 980);
    });
    renderComposer();
    if (importedSource) {
      if (composerStatus) composerStatus.textContent = 'SOURCE SET IMPORTED';
      if (composerCopy) composerCopy.textContent = `${importedSource.title} is staged as the first step. Add a review gate, branch, or sign-off before previewing the run.`;
      if (composerDisclosure) {
        composerDisclosure.textContent = 'Source imported';
        composerDisclosure.classList.add('is-imported');
      }
    }
  }

  const matterList = document.querySelector('[data-matter-list]');
  if (matterList) {
    const listFilters = [...matterList.querySelectorAll('[data-list-filter]')];
    const listRows = [...matterList.querySelectorAll('[data-list-row]')];
    const listEmpty = matterList.querySelector('[data-list-empty]');
    const listKind = matterList.querySelector('[data-list-detail-kind]');
    const listState = matterList.querySelector('[data-list-detail-state]');
    const listTitle = matterList.querySelector('[data-list-detail-title]');
    const listCopy = matterList.querySelector('[data-list-detail-copy]');
    const listSource = matterList.querySelector('[data-list-detail-source]');
    const listOwner = matterList.querySelector('[data-list-detail-owner]');
    const listDue = matterList.querySelector('[data-list-detail-due]');
    const listStatus = matterList.querySelector('[data-list-detail-status]');
    const listFoot = matterList.querySelector('[data-list-foot]');
    const listMonitor = matterList.querySelector('[data-list-monitor]');
    const listDraft = matterList.querySelector('[data-list-draft]');
    const listData = {
      liability: { kind: 'OPEN / MATERIAL TERM', state: 'OWNER ACTION', title: 'Resolve revised liability cap.', copy: 'The latest agreement changes the cap to two times fees. Decide whether the change remains a closing condition before the next client preview.', source: 'Merger Agreement / § 7.4', owner: 'J. Chen', due: '08 Aug 2026', monitor: 'liability' },
      consent: { kind: 'REVIEW / CONSENT', state: 'NEEDS REVIEW', title: 'Confirm supplier consent.', copy: 'The disclosure schedule identifies five suppliers. Confirm notice requirements before the signing set goes to the client.', source: 'Disclosure Schedule / Schedule 5', owner: 'M. Patel', due: '10 Aug 2026', monitor: 'regulation' },
      dpa: { kind: 'OPEN / POLICY CHECK', state: 'OWNER ACTION', title: 'Verify DPA schedule.', copy: 'Compare the data processing addendum with the approved subprocessor list and record the exception, if any.', source: 'Data Processing Addendum / § 12', owner: 'KM / Security', due: '12 Aug 2026', monitor: 'regulation' },
      board: { kind: 'OPEN / APPROVAL', state: 'OWNER ACTION', title: 'Circulate board memo.', copy: 'Counsel correspondence confirms the approval memo is ready. Keep the board-facing version separate from the raw thread.', source: 'Counsel Thread / Thread 08', owner: 'A. Rao', due: '07 Aug 2026', monitor: 'exhibit' },
      signing: { kind: 'DONE / CHECKPOINT', state: 'COMPLETE', title: 'Prepare final signing set.', copy: 'The final signing set was prepared and checked against the closing checklist. The source trail remains available for audit.', source: 'Closing Checklist / Item 05', owner: 'M. Chen', due: '15 Aug 2026', monitor: 'exhibit' },
      insurance: { kind: 'OPEN / EXHIBIT', state: 'OWNER ACTION', title: 'Confirm insurance certificate.', copy: 'The insurance schedule is missing the latest certificate. Request the approved version before the diligence packet is finalized.', source: 'Insurance Schedule / Exhibit C', owner: 'L. Grant', due: '16 Aug 2026', monitor: 'exhibit' }
    };
    let listFilter = 'all';
    let listActive = 'liability';
    const setListDetail = (key, focus = false) => {
      const data = listData[key] || listData.liability;
      listActive = key;
      listRows.forEach((row) => {
        const active = row.dataset.listKey === key;
        row.classList.toggle('is-active', active);
        row.setAttribute('aria-selected', String(active));
      });
      if (listKind) listKind.textContent = data.kind;
      if (listState) listState.textContent = data.state;
      if (listTitle) listTitle.textContent = data.title;
      if (listCopy) listCopy.textContent = data.copy;
      if (listSource) listSource.textContent = data.source;
      if (listOwner) listOwner.textContent = data.owner;
      if (listDue) listDue.textContent = data.due;
      if (listStatus) listStatus.textContent = rowFor(key)?.dataset.listKind === 'done' ? 'Complete locally. Source and owner remain attached.' : 'Source and owner stay attached to the item.';
      if (listMonitor) listMonitor.disabled = rowFor(key)?.dataset.listKind === 'done';
      if (listDraft) listDraft.disabled = rowFor(key)?.dataset.listKind === 'done';
      if (focus) rowFor(key)?.focus();
    };
    const rowFor = (key) => listRows.find((row) => row.dataset.listKey === key);
    const renderList = (nextFilter = listFilter) => {
      listFilter = nextFilter;
      listFilters.forEach((filter) => {
        const active = filter.dataset.listFilter === listFilter;
        filter.classList.toggle('is-active', active);
        filter.setAttribute('aria-selected', String(active));
        filter.tabIndex = active ? 0 : -1;
      });
      const visible = listRows.filter((row) => {
        const shown = listFilter === 'all' || row.dataset.listKind === listFilter;
        row.hidden = !shown;
        return shown;
      });
      if (listEmpty) listEmpty.hidden = visible.length !== 0;
      const next = visible.find((row) => row.dataset.listKey === listActive) || visible[0];
      if (next) setListDetail(next.dataset.listKey);
      const open = listRows.filter((row) => row.dataset.listKind === 'open').length;
      const review = listRows.filter((row) => row.dataset.listKind === 'review').length;
      const done = listRows.filter((row) => row.dataset.listKind === 'done').length;
      if (listFoot) listFoot.innerHTML = `<i></i> ${String(open).padStart(2, '0')} OPEN / ${String(review).padStart(2, '0')} NEEDS REVIEW / ${String(done).padStart(2, '0')} DONE`;
    };
    listFilters.forEach((filter, index) => {
      filter.addEventListener('click', () => renderList(filter.dataset.listFilter));
      filter.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? listFilters.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + listFilters.length) % listFilters.length;
        renderList(listFilters[nextIndex].dataset.listFilter);
        listFilters[nextIndex].focus();
      });
    });
    listRows.forEach((row) => {
      row.addEventListener('click', (event) => { if (!event.target.closest('[data-list-toggle]')) setListDetail(row.dataset.listKey); });
      row.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const visible = listRows.filter((item) => !item.hidden);
        const current = visible.indexOf(row);
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? visible.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + visible.length) % visible.length;
        setListDetail(visible[nextIndex].dataset.listKey, true);
      });
      row.querySelector('[data-list-toggle]')?.addEventListener('click', (event) => {
        event.stopPropagation();
        const check = event.currentTarget;
        const complete = !check.classList.contains('is-complete');
        check.classList.toggle('is-complete', complete);
        row.dataset.listKind = complete ? 'done' : 'open';
        const state = row.querySelector('b');
        if (state) state.textContent = complete ? 'DONE' : 'OPEN';
        setListDetail(row.dataset.listKey);
        renderList();
      });
    });
    listMonitor?.addEventListener('click', () => {
      const monitor = listData[listActive]?.monitor || 'liability';
      const monitorUrl = new URL('command.html', window.location.href);
      monitorUrl.searchParams.set('monitor', monitor);
      monitorUrl.hash = 'monitors';
      window.location.href = monitorUrl.toString();
    });
    listDraft?.addEventListener('click', () => {
      const draftUrl = new URL('workflows.html', window.location.href);
      draftUrl.searchParams.set('list', listActive);
      draftUrl.hash = 'editor';
      window.location.href = draftUrl.toString();
    });
    const initialList = readQueryState('list');
    if (initialList && listData[initialList]) listActive = initialList;
    renderList();
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
    const editorSaveState = editorRoom.querySelector('[data-editor-save-state]');
    const editorSignoff = editorRoom.querySelector('[data-editor-signoff]');
    const editorExport = editorRoom.querySelector('[data-editor-export]');
    const editorHistory = editorRoom.querySelector('[data-editor-history]');
    const editorHistoryToggle = editorRoom.querySelector('[data-editor-history-toggle]');
    const editorHistoryPanel = editorRoom.querySelector('[data-editor-history-panel]');
    const editorVersionChoices = [...editorRoom.querySelectorAll('[data-editor-version]')];
    const editorHistoryRestore = editorRoom.querySelector('[data-editor-history-restore]');
    const editorVersionLabel = editorRoom.querySelector('[data-editor-version-label]');
    const editorDocumentVersion = editorRoom.querySelector('[data-editor-document-version]');
    const editorModeData = {
      draft: { title: 'Closing recommendation', heading: 'Recommendation to proceed' },
      compare: { title: 'Liability cap / version delta', heading: 'Compare the decision before signing' }
    };
    const editorVersionData = {
      3: { label: 'VERSION 03 / PRIVATE DRAFT', document: 'PRIVATE DRAFT / V3', title: 'Closing recommendation', heading: 'Recommendation to proceed', state: 'LOCAL DRAFT', save: 'Saved locally · 2 min ago · 4 reviewers' },
      2: { label: 'VERSION 02 / REVIEWED DRAFT', document: 'REVIEWED DRAFT / V2', title: 'Closing recommendation', heading: 'Recommendation to proceed', state: 'VERSION 02 / REVIEWED', save: 'Saved locally · 06 Aug 2026 · 3 reviewers' },
      1: { label: 'VERSION 01 / SOURCE PASS', document: 'SOURCE PASS / V1', title: 'Initial source pass', heading: 'Issue summary for counsel', state: 'VERSION 01 / READ ONLY', save: 'Saved locally · 05 Aug 2026 · 1 reviewer' }
    };
    let editorVersion = '3';
    let editorHistoryOpen = false;
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
    const setEditorVersion = (version, focus = false) => {
      editorVersion = editorVersionData[version] ? String(version) : '3';
      const content = editorVersionData[editorVersion];
      editorVersionChoices.forEach((choice) => {
        const active = choice.dataset.editorVersion === editorVersion;
        choice.classList.toggle('is-active', active);
        choice.setAttribute('aria-pressed', String(active));
      });
      if (editorVersionLabel) editorVersionLabel.textContent = content.label;
      if (editorDocumentVersion) editorDocumentVersion.textContent = content.document;
      if (editorTitle && editorActiveMode === 'draft') editorTitle.textContent = content.title;
      if (editorHeading && editorActiveMode === 'draft') editorHeading.textContent = content.heading;
      if (editorStatus && editorVersion === '3') editorStatus.textContent = 'LOCAL DRAFT';
      if (editorStatus && editorVersion !== '3') editorStatus.textContent = content.state;
      if (editorSaveState) editorSaveState.textContent = content.save;
      if (editorHistoryRestore) editorHistoryRestore.disabled = editorVersion === '3';
      const historyNumber = editorHistoryToggle?.querySelector('span');
      if (historyNumber) historyNumber.textContent = `0${editorVersion}`;
      if (focus) editorVersionChoices.find((choice) => choice.dataset.editorVersion === editorVersion)?.focus();
    };
    const setEditorHistory = (open) => {
      editorHistoryOpen = open;
      if (editorHistoryPanel) editorHistoryPanel.hidden = !open;
      editorHistoryToggle?.setAttribute('aria-expanded', String(open));
      editorHistory?.classList.toggle('is-open', open);
    };
    document.addEventListener('click', (event) => {
      if (editorHistoryOpen && editorHistory && !editorHistory.contains(event.target)) setEditorHistory(false);
    });
    document.addEventListener('keydown', (event) => {
      if (editorHistoryOpen && event.key === 'Escape') { event.preventDefault(); setEditorHistory(false); editorHistoryToggle?.focus(); }
    });
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
    editorHistoryToggle?.addEventListener('click', () => setEditorHistory(!editorHistoryOpen));
    editorVersionChoices.forEach((choice) => choice.addEventListener('click', () => {
      setEditorVersion(choice.dataset.editorVersion);
      setEditorHistory(false);
    }));
    editorHistoryRestore?.addEventListener('click', () => {
      const restored = editorVersion;
      setEditorVersion('3');
      setEditorHistory(false);
      if (editorStatus) editorStatus.textContent = `VERSION ${String(restored).padStart(2, '0')} RESTORED LOCALLY`;
      if (editorSaveState) editorSaveState.textContent = `Restored locally · Version ${String(restored).padStart(2, '0')} · ready for review`;
      if (editorFoot) editorFoot.textContent = 'VERSION RESTORED / 0 B OUTBOUND';
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
      if (editorSaveState) editorSaveState.textContent = 'Saved locally · just now · 4 reviewers';
      if (editorFoot) editorFoot.textContent = '03 citations linked / 0 B outbound';
    });
    editorSignoff?.addEventListener('click', () => {
      editorSignoff.disabled = true;
      editorSignoff.innerHTML = 'Sign-off requested <span aria-hidden="true">✓</span>';
      editorRoom.classList.add('is-signoff-requested');
      if (editorStatus) editorStatus.textContent = 'SIGN-OFF REQUESTED / J. CHEN';
      if (editorSaveState) editorSaveState.textContent = 'Review gate open · J. Chen notified locally';
      if (editorFoot) editorFoot.textContent = 'REVIEW GATE OPEN / 0 B OUTBOUND';
    });
    editorExport?.addEventListener('click', () => {
      const title = editorTitle?.textContent || 'Vaultr local draft';
      const text = editorDocument?.innerText || '';
      const exportHtml = `<html><head><meta charset="utf-8"><title>${title}</title></head><body><h1>${title}</h1><p>Vaultr / Northstar Acquisition · local export</p><hr><pre style="font:16px Georgia;white-space:pre-wrap">${text.replace(/[&<>]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[char]))}</pre></body></html>`;
      const blob = new Blob([exportHtml], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'vaultr-northstar-closing-recommendation.doc';
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      editorExport.disabled = true;
      editorExport.innerHTML = 'Word handoff ready <span aria-hidden="true">✓</span>';
      if (editorStatus) editorStatus.textContent = 'LOCAL WORD HANDOFF PREPARED';
      if (editorFoot) editorFoot.textContent = 'EXPORT READY / 0 B OUTBOUND';
    });
    setEditorMode('draft');
    setEditorCitation('cap');
    const initialEditorVersion = readQueryState('version');
    setEditorVersion(initialEditorVersion && editorVersionData[initialEditorVersion] ? initialEditorVersion : '3');
    const editorListSeed = readQueryState('list');
    const editorListData = {
      liability: { title: 'Liability response', heading: 'Resolve the cap before signing', citation: 'cap' },
      consent: { title: 'Supplier consent response', heading: 'Confirm the notice path', citation: 'notice' },
      dpa: { title: 'DPA schedule review', heading: 'Verify the approved processors', citation: 'notice' },
      board: { title: 'Board approval note', heading: 'Make the decision legible', citation: 'draft' },
      signing: { title: 'Final signing set', heading: 'Prepare the last review', citation: 'draft' },
      insurance: { title: 'Insurance certificate request', heading: 'Close the missing exhibit', citation: 'notice' }
    };
    if (editorListSeed && editorListData[editorListSeed]) {
      const content = editorListData[editorListSeed];
      if (editorTitle) editorTitle.textContent = content.title;
      if (editorHeading) editorHeading.textContent = content.heading;
      if (editorStatus) editorStatus.textContent = 'LIST ITEM IMPORTED / LOCAL DRAFT';
      if (editorSaveState) editorSaveState.textContent = 'List item imported · source context attached';
      setEditorCitation(content.citation);
    }
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
        <div class="quick-nav__head"><div><span class="quick-nav__eyebrow">VAULTR / WORKSPACE INDEX</span><h2 id="quick-nav-title">Find the source. Move the work.</h2></div><button class="quick-nav__close" type="button" aria-label="Close quick navigation" data-quick-nav-close>Esc</button></div>
        <label class="quick-nav__search"><span aria-hidden="true">⌘K</span><input id="quick-nav-search" type="search" autocomplete="off" placeholder="Search matters, sources, and surfaces" aria-label="Search matters, sources, and surfaces"></label>
        <div class="quick-nav__summary" role="status" aria-live="polite"><div><span class="quick-nav__summary-label">LOCAL WORKSPACE INDEX</span><strong data-quick-nav-count>4 matters · 06 sources · 18 surfaces</strong></div><span class="quick-nav__summary-status"><i aria-hidden="true"></i> 0 B outbound</span></div>
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
          <div class="quick-nav__section-head"><span>SOURCE INDEX</span><small>LOCAL CORPUS / NORTHSTAR</small></div>
          <nav class="quick-nav__items quick-nav__items--matter" aria-label="Local source index">
            <a href="workflows.html?list=liability#editor" data-quick-nav-item data-quick-nav-type="source" data-quick-nav-keywords="merger agreement liability cap limitation section 7.4 fees signing"><span><strong>Merger Agreement / § 7.4</strong><small>Liability cap · 184 pages · 98% confidence</small></span><kbd>SOURCE</kbd></a>
            <a href="research.html?monitor=consent#desk" data-quick-nav-item data-quick-nav-type="source" data-quick-nav-keywords="merger agreement change control consent assignment section 9.2 suppliers"><span><strong>Merger Agreement / § 9.2</strong><small>Change-of-control consent · 5 suppliers</small></span><kbd>SOURCE</kbd></a>
            <a href="workflows.html#review-table" data-quick-nav-item data-quick-nav-type="source" data-quick-nav-keywords="diligence tracker open items supplier consent exceptions closing"><span><strong>Diligence Tracker / Open items</strong><small>04 unresolved items · owner queue</small></span><kbd>SOURCE</kbd></a>
            <a href="command.html?thread=policy#threads" data-quick-nav-item data-quick-nav-type="source" data-quick-nav-keywords="privacy ai policy approved systems governance section 3 owner security"><span><strong>Privacy &amp; AI Policy / § 3</strong><small>Approved systems · KM / Security</small></span><kbd>SOURCE</kbd></a>
            <a href="workflows.html?list=board#editor" data-quick-nav-item data-quick-nav-type="source" data-quick-nav-keywords="counsel thread board approval closing memo thread 08"><span><strong>Counsel Thread / 08</strong><small>Board approval · closing checklist</small></span><kbd>SOURCE</kbd></a>
            <a href="workflows.html?list=insurance#editor" data-quick-nav-item data-quick-nav-type="source" data-quick-nav-keywords="insurance schedule exhibit c certificate diligence missing"><span><strong>Insurance Schedule / Exhibit C</strong><small>Certificate request · L. Grant</small></span><kbd>SOURCE</kbd></a>
          </nav>
        </div>
        <div class="quick-nav__section">
          <div class="quick-nav__section-head"><span>DESTINATIONS</span><small>PRODUCT SURFACES</small></div>
          <nav class="quick-nav__items" aria-label="Vaultr destinations">
          <a href="platform.html" data-quick-nav-item><span><strong>Platform</strong><small>Lex, Vault, Knowledge, Agents</small></span><kbd>01</kbd></a>
          <a href="platform.html#knowledge" data-quick-nav-item><span><strong>Knowledge Room</strong><small>Precedents, playbooks, and policies</small></span><kbd>02</kbd></a>
          <a href="platform.html#agents" data-quick-nav-item data-quick-nav-keywords="agent library transactional litigation in-house playbook review"><span><strong>Agent Library</strong><small>Governed legal agents, ready to stage</small></span><kbd>03</kbd></a>
          <a href="workflows.html" data-quick-nav-item><span><strong>Workflow Studio</strong><small>Composer, redlines, and supervised runs</small></span><kbd>03</kbd></a>
          <a href="workflows.html#editor" data-quick-nav-item><span><strong>Source-linked Editor</strong><small>Draft, compare, cite, and comment</small></span><kbd>04</kbd></a>
          <a href="workflows.html#review-table" data-quick-nav-item data-quick-nav-keywords="tabular review extraction structured facts issues rows diligence"><span><strong>Tabular Review</strong><small>Extract issues across a matter</small></span><kbd>05</kbd></a>
          <a href="workflows.html#lists" data-quick-nav-item data-quick-nav-keywords="matter list closing checklist chronology tasks owners deadlines signoff"><span><strong>Matter List</strong><small>Source-linked owners, deadlines, and sign-off</small></span><kbd>06</kbd></a>
          <a href="solutions.html" data-quick-nav-item><span><strong>Solutions</strong><small>Litigation, transactional, in-house</small></span><kbd>05</kbd></a>
          <a href="customers.html" data-quick-nav-item><span><strong>Practice Rooms</strong><small>Illustrative patterns for legal work</small></span><kbd>06</kbd></a>
          <a href="customers.html#shared-space" data-quick-nav-item data-quick-nav-keywords="shared space portal collaboration client permissions audit"><span><strong>Shared Matter Room</strong><small>Scoped client collaboration with an audit trail</small></span><kbd>07</kbd></a>
          <a href="platform.html#delivery" data-quick-nav-item><span><strong>Delivery Room</strong><small>Scoped handoffs and client-ready work</small></span><kbd>07</kbd></a>
          <a href="command.html" data-quick-nav-item><span><strong>Command Center</strong><small>Practice activity and governance signals</small></span><kbd>08</kbd></a>
          <a href="command.html#threads" data-quick-nav-item data-quick-nav-keywords="active threads plan mode progress tracker parallel runs waiting input approval"><span><strong>Active Threads</strong><small>Approve plans and supervise parallel runs</small></span><kbd>09</kbd></a>
          <a href="command.html#governance" data-quick-nav-item><span><strong>Governance Desk</strong><small>Access, connections, and policy proof</small></span><kbd>09</kbd></a>
          <a href="command.html#connections" data-quick-nav-item><span><strong>Connections Lab</strong><small>Approved bridges into the legal stack</small></span><kbd>10</kbd></a>
          <a href="platform.html#evidence" data-quick-nav-item><span><strong>Evidence Ledger</strong><small>Source, span, confidence</small></span><kbd>11</kbd></a>
          <a href="platform.html#proof" data-quick-nav-item><span><strong>Room Signals</strong><small>Boundary, ledger, runtime, root</small></span><kbd>12</kbd></a>
          <a href="security.html" data-quick-nav-item><span><strong>Security Center</strong><small>Runtime, network, and source boundary</small></span><kbd>13</kbd></a>
          <a href="privacy.html" data-quick-nav-item><span><strong>Privacy brief</strong><small>Data handling, ownership, and review boundaries</small></span><kbd>14</kbd></a>
          <a href="research.html#desk" data-quick-nav-item><span><strong>Research &amp; architecture</strong><small>Cited research and source traces</small></span><kbd>15</kbd></a>
          <a href="deployment.html" data-quick-nav-item><span><strong>Deployment Desk</strong><small>Build a private deployment brief</small></span><kbd>16</kbd></a>
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
    let sources = 0;
    let surfaces = 0;
    quickNavItems.forEach((item) => {
      const searchText = `${item.textContent} ${item.dataset.quickNavKeywords || ''}`.toLowerCase();
      const match = !query || searchText.includes(query);
      item.hidden = !match;
      if (match) {
        matches += 1;
        if (item.dataset.quickNavType === 'matter') matters += 1;
        else if (item.dataset.quickNavType === 'source') sources += 1;
        else surfaces += 1;
      }
    });
    if (quickNavCount) quickNavCount.textContent = `${matters} matter${matters === 1 ? '' : 's'} · ${sources} source${sources === 1 ? '' : 's'} · ${surfaces} surface${surfaces === 1 ? '' : 's'}`;
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

  const roomIndexConfig = document.body.classList.contains('workflow-page') ? [
    { id: 'studio', label: 'Workflow studio' },
    { id: 'review-table', label: 'Tabular review' },
    { id: 'lists', label: 'Matter list' },
    { id: 'editor', label: 'Source editor' },
    { id: 'impact', label: 'Capacity model' }
  ] : document.body.classList.contains('detail-page') ? [
    { id: 'proof', label: 'Room signals' },
    { id: 'product', label: 'Lex room' },
    { id: 'evidence', label: 'Evidence ledger' },
    { id: 'platform', label: 'Control plane' },
    { id: 'workflows', label: 'Workflow studio' },
    { id: 'solutions', label: 'Practice rooms' },
    { id: 'command-center', label: 'Command center' },
    { id: 'threads', label: 'Active threads' },
    { id: 'monitors', label: 'Monitor desk' },
    { id: 'deployment', label: 'Deployment desk' }
  ] : [
    { id: 'gallery', label: 'Visual archive' },
    { id: 'features', label: 'Utility' },
    { id: 'comparison', label: 'Architecture' },
    { id: 'privacy', label: 'Boundary' },
    { id: 'quotes', label: 'Counsel' },
    { id: 'deployment', label: 'Deployment' }
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
    const lexThread = lexQuestion.parentElement?.querySelector('[data-lex-thread]');
    const lexThreadList = lexThread?.querySelector('[data-lex-thread-list]');
    const lexThreadClear = lexThread?.querySelector('[data-lex-thread-clear]');
    const lexThreadStorageKey = 'vaultr.lex-thread';
    let lexThreadEntries = [];
    try {
      const storedThread = JSON.parse(window.localStorage.getItem(lexThreadStorageKey) || '[]');
      if (Array.isArray(storedThread)) lexThreadEntries = storedThread.filter((entry) => entry && typeof entry.question === 'string').slice(0, 5);
    } catch (error) {
      lexThreadEntries = [];
    }
    const persistLexThread = () => {
      try { window.localStorage.setItem(lexThreadStorageKey, JSON.stringify(lexThreadEntries)); } catch (error) { /* local-only history is best effort */ }
    };
    const renderLexThread = () => {
      if (!lexThread || !lexThreadList) return;
      lexThread.hidden = lexThreadEntries.length === 0;
      lexThreadList.replaceChildren(...lexThreadEntries.map((entry, index) => {
        const item = document.createElement('li');
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.lexThreadIndex = String(index);
        const question = document.createElement('strong');
        question.textContent = entry.question;
        const meta = document.createElement('small');
        meta.textContent = `${entry.state || 'VERIFIED'} · ${entry.answerTitle || 'Answer ready'}`;
        button.append(question, meta);
        button.addEventListener('click', () => {
          if (lexQuestionInput) lexQuestionInput.value = entry.question;
          runLexQuestion(entry.question);
        });
        item.append(button);
        return item;
      }));
    };
    const addLexThreadEntry = (entry) => {
      lexThreadEntries = [entry, ...lexThreadEntries.filter((item) => item.question !== entry.question)].slice(0, 5);
      persistLexThread();
      renderLexThread();
    };
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
        addLexThreadEntry({ question: value, answerTitle: data.answerTitle, state: data.state, citation: data.citation });
        if (lexQuestionStatus) lexQuestionStatus.textContent = `${data.state === 'NEEDS REVIEW' ? 'Review required' : 'Answer grounded'} / 0 B outbound · ${lexThreadEntries.length} in thread`;
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
    lexThreadClear?.addEventListener('click', () => {
      lexThreadEntries = [];
      persistLexThread();
      renderLexThread();
      if (lexQuestionStatus) lexQuestionStatus.textContent = 'Local thread cleared / 0 B outbound';
      lexQuestionInput?.focus();
    });
    renderLexThread();
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

  const reviewTable = document.querySelector('[data-review-table]');
  if (reviewTable) {
    const reviewFilters = [...reviewTable.querySelectorAll('[data-review-filter]')];
    const reviewRows = [...reviewTable.querySelectorAll('[data-review-row]')];
    const reviewEmpty = reviewTable.querySelector('[data-review-empty]');
    const reviewSummary = reviewTable.querySelector('[data-review-summary]');
    const reviewDetail = reviewTable.querySelector('[data-review-detail]');
    const reviewDetailType = reviewTable.querySelector('[data-review-detail-type]');
    const reviewDetailState = reviewTable.querySelector('[data-review-detail-state]');
    const reviewDetailTitle = reviewTable.querySelector('[data-review-detail-title]');
    const reviewDetailCopy = reviewTable.querySelector('[data-review-detail-copy]');
    const reviewDetailSource = reviewTable.querySelector('[data-review-detail-source]');
    const reviewDetailSpan = reviewTable.querySelector('[data-review-detail-span]');
    const reviewDetailOwner = reviewTable.querySelector('[data-review-detail-owner]');
    const reviewDetailAction = reviewTable.querySelector('[data-review-detail-action]');
    const reviewStage = reviewTable.querySelector('[data-review-stage]');
    const reviewExport = reviewTable.querySelector('[data-review-export]');
    const reviewDeliveryLink = reviewTable.querySelector('[data-review-delivery-link]');
    const reviewStageStatus = reviewTable.querySelector('[data-review-stage-status]');
    const reviewDetails = {
      consent: { type: 'OPEN ITEM / SOURCE TRACE', state: 'NEEDS REVIEW', title: 'Supplier consent', copy: 'The top five suppliers may require notice before closing. Lex kept the issue open because the consent language is split across the tracker and the change-of-control clause.', source: 'Diligence Tracker', span: 'Open items / 04', owner: 'J. Chen' },
      cap: { type: 'VERIFIED / SOURCE TRACE', state: 'VERIFIED', title: 'Liability cap', copy: 'The revised cap is two times the fees paid under the agreement. The change is linked to the comparison run and the closing recommendation.', source: 'Merger Agreement', span: '§ 7.4 / Limitation', owner: 'M. Chen' },
      dpa: { type: 'OPEN ITEM / SOURCE TRACE', state: 'NEEDS REVIEW', title: 'Subprocessor schedule', copy: 'The data processing addendum references a schedule that needs to be checked against the approved subprocessor list before execution.', source: 'Disclosure Schedule', span: '§ 12 / Data processing', owner: 'A. Rao' },
      board: { type: 'VERIFIED / SOURCE TRACE', state: 'VERIFIED', title: 'Board approval', copy: 'Counsel correspondence confirms the approval memo is source-linked and ready for the closing checklist.', source: 'Counsel Thread', span: 'Thread 08 / Approval', owner: 'J. Chen' }
    };
    let reviewFilter = 'all';
    let selectedReview = 'consent';
    const selectReview = (key) => {
      const data = reviewDetails[key] || reviewDetails.consent;
      selectedReview = key;
      reviewRows.forEach((row) => {
        const active = row.dataset.reviewRow === key;
        row.classList.toggle('is-selected', active);
        row.setAttribute('aria-expanded', String(active));
      });
      if (reviewDetailType) reviewDetailType.textContent = data.type;
      if (reviewDetailState) reviewDetailState.textContent = data.state;
      if (reviewDetailTitle) reviewDetailTitle.textContent = data.title;
      if (reviewDetailCopy) reviewDetailCopy.textContent = data.copy;
      if (reviewDetailSource) reviewDetailSource.textContent = data.source;
      if (reviewDetailSpan) reviewDetailSpan.textContent = data.span;
      if (reviewDetailOwner) reviewDetailOwner.textContent = data.owner;
      reviewDetail?.classList.remove('is-changing');
      window.requestAnimationFrame(() => reviewDetail?.classList.add('is-changing'));
      window.setTimeout(() => reviewDetail?.classList.remove('is-changing'), 260);
      if (reviewDetailAction) {
        reviewDetailAction.disabled = false;
        reviewDetailAction.innerHTML = 'Open source trace <span aria-hidden="true">&#8599;</span>';
      }
    };
    const renderReviewRows = (filter = reviewFilter) => {
      reviewFilter = filter;
      reviewFilters.forEach((button) => {
        const active = button.dataset.reviewFilter === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
      });
      const visibleRows = reviewRows.filter((row) => filter === 'all' || row.dataset.reviewState === filter);
      reviewRows.forEach((row) => { row.hidden = !visibleRows.includes(row); });
      if (reviewEmpty) reviewEmpty.hidden = visibleRows.length > 0;
      if (reviewSummary) reviewSummary.textContent = `${String(visibleRows.length).padStart(2, '0')} rows / 0 B outbound`;
      if (!visibleRows.some((row) => row.dataset.reviewRow === selectedReview)) selectReview(visibleRows[0]?.dataset.reviewRow || 'consent');
    };
    reviewFilters.forEach((button) => button.addEventListener('click', () => renderReviewRows(button.dataset.reviewFilter)));
    reviewRows.forEach((row) => row.addEventListener('click', () => selectReview(row.dataset.reviewRow)));
    reviewDetailAction?.addEventListener('click', () => {
      reviewDetailAction.disabled = true;
      reviewDetailAction.innerHTML = 'Source trace selected <span aria-hidden="true">&#10003;</span>';
      if (reviewDetailState) reviewDetailState.textContent = 'TRACE OPEN';
    });
    reviewExport?.addEventListener('click', () => {
      const csvEscape = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;
      const visibleRows = reviewRows.filter((row) => !row.hidden);
      const lines = [
        ['Issue', 'Source', 'Span', 'State', 'Owner', 'Finding'].map(csvEscape).join(','),
        ...visibleRows.map((row) => {
          const data = reviewDetails[row.dataset.reviewRow] || reviewDetails.consent;
          return [data.title, data.source, data.span, data.state, data.owner, data.copy].map(csvEscape).join(',');
        })
      ];
      const blob = new Blob([lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
      const href = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href;
      link.download = 'vaultr-northstar-review.csv';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(href);
      reviewExport.disabled = true;
      reviewExport.innerHTML = 'CSV saved locally <span aria-hidden="true">&#10003;</span>';
      if (reviewSummary) reviewSummary.textContent = `${String(visibleRows.length).padStart(2, '0')} rows / 0 B outbound`;
      window.setTimeout(() => {
        reviewExport.disabled = false;
        reviewExport.innerHTML = 'Export CSV <span aria-hidden="true">&#8595;</span>';
      }, 1600);
    });
    reviewStage?.addEventListener('click', () => {
      reviewStage.disabled = true;
      reviewStage.textContent = 'Packet staged';
      if (reviewStageStatus) reviewStageStatus.textContent = 'STAGED LOCALLY';
      if (reviewDeliveryLink) {
        const deliveryUrl = new URL('platform.html', window.location.href);
        deliveryUrl.searchParams.set('packet', selectedReview);
        deliveryUrl.hash = 'delivery';
        reviewDeliveryLink.href = deliveryUrl.toString();
        reviewDeliveryLink.hidden = false;
      }
    });
    renderReviewRows('all');
  }

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
  const setDeploymentMode = (mode, animate = true, sync = true) => {
    const selectedMode = Object.prototype.hasOwnProperty.call(deploymentModeData, mode) ? mode : 'local';
    if (sync) writeQueryState('profile', selectedMode);
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
  if (Object.prototype.hasOwnProperty.call(deploymentModeData, initialDeploymentProfile)) setDeploymentMode(initialDeploymentProfile, false, false);

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
