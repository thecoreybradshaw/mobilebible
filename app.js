// --- BIBLE APP LOGIC & STATE ENGINE ---

const state = {
  translation: localStorage.getItem('bible_translation') || 'bsb',
  book: localStorage.getItem('bible_book') || 'John',
  chapter: parseInt(localStorage.getItem('bible_chapter'), 10) || 1,
  modalType: 'books',
  parallelTranslation: localStorage.getItem('bible_parallel_trans') || 'kjv',
  isParallelActive: localStorage.getItem('bible_parallel_mode') === 'true',
  activeTab: 'read',
  activePlan: localStorage.getItem('bible_active_plan') || 'gospels',
  planProgress: JSON.parse(localStorage.getItem('bible_plan_progress') || '{}')
};

const translationCache = {};

const BIBLE_BOOKS = [
  { name: 'Genesis', chapters: 50 }, { name: 'Exodus', chapters: 40 },
  { name: 'Leviticus', chapters: 27 }, { name: 'Numbers', chapters: 36 },
  { name: 'Deuteronomy', chapters: 34 }, { name: 'Joshua', chapters: 24 },
  { name: 'Judges', chapters: 21 }, { name: 'Ruth', chapters: 4 },
  { name: 'I Samuel', chapters: 31 }, { name: 'II Samuel', chapters: 24 },
  { name: 'I Kings', chapters: 22 }, { name: 'II Kings', chapters: 25 },
  { name: 'I Chronicles', chapters: 29 }, { name: 'II Chronicles', chapters: 36 },
  { name: 'Ezra', chapters: 10 }, { name: 'Nehemiah', chapters: 13 },
  { name: 'Esther', chapters: 10 }, { name: 'Job', chapters: 42 },
  { name: 'Psalms', chapters: 150 }, { name: 'Proverbs', chapters: 31 },
  { name: 'Ecclesiastes', chapters: 12 }, { name: 'Song of Solomon', chapters: 8 },
  { name: 'Isaiah', chapters: 66 }, { name: 'Jeremiah', chapters: 52 },
  { name: 'Lamentations', chapters: 5 }, { name: 'Ezekiel', chapters: 48 },
  { name: 'Daniel', chapters: 12 }, { name: 'Hosea', chapters: 14 },
  { name: 'Joel', chapters: 3 }, { name: 'Amos', chapters: 9 },
  { name: 'Obadiah', chapters: 1 }, { name: 'Jonah', chapters: 4 },
  { name: 'Micah', chapters: 7 }, { name: 'Nahum', chapters: 3 },
  { name: 'Habakkuk', chapters: 3 }, { name: 'Zephaniah', chapters: 3 },
  { name: 'Haggai', chapters: 2 }, { name: 'Zechariah', chapters: 14 },
  { name: 'Malachi', chapters: 4 }, { name: 'Matthew', chapters: 28 },
  { name: 'Mark', chapters: 16 }, { name: 'Luke', chapters: 24 },
  { name: 'John', chapters: 21 }, { name: 'Acts', chapters: 28 },
  { name: 'Romans', chapters: 16 }, { name: 'I Corinthians', chapters: 16 },
  { name: 'II Corinthians', chapters: 13 }, { name: 'Galatians', chapters: 6 },
  { name: 'Ephesians', chapters: 6 }, { name: 'Philippians', chapters: 4 },
  { name: 'Colossians', chapters: 4 }, { name: 'I Thessalonians', chapters: 5 },
  { name: 'II Thessalonians', chapters: 3 }, { name: 'I Timothy', chapters: 6 },
  { name: 'II Timothy', chapters: 4 }, { name: 'Titus', chapters: 3 },
  { name: 'Philemon', chapters: 1 }, { name: 'Hebrews', chapters: 13 },
  { name: 'James', chapters: 5 }, { name: 'I Peter', chapters: 5 },
  { name: 'II Peter', chapters: 3 }, { name: 'I John', chapters: 5 },
  { name: 'II John', chapters: 1 }, { name: 'III John', chapters: 1 },
  { name: 'Jude', chapters: 1 }, { name: 'Revelation', chapters: 22 }
];

const TRANSLATIONS = {
  bsb: 'Berean Standard Bible',
  kjv: 'King James Version',
  asv: 'American Standard Version',
  ylt: 'Youngs Literal Translation'
};

const BIBLE_MAPS = [
  { id: 'map-1', title: "Divided Israel and Judea", file: "./resources/maps/divided-israel.jpg", description: "Map of the divided kingdom when Israel and Judah were separate nations." },
  { id: 'map-2', title: "New Testament Israel", file: "./resources/maps/nt-israel.jpeg", description: "A map of Israel in the time of Jesus." },
  { id: 'map-3', title: "New Testament World", file: "./resources/maps/nt-world.jpg", description: "A map of the Mediterranean world in New Testament times." },
  { id: 'map-4', title: "The Seven Churches of Revelation", file: "./resources/maps/seven-churches.jpg", description: "Locations of the seven churches in Asia Minor (Revelation 2-3)." }
];

const READING_PLANS = {
  gospels: {
    title: "The Four Gospels (30-Day)",
    days: [
      { day: 1, book: 'Matthew', chapter: 1, label: 'Matthew 1 - Genealogy & Birth of Christ' },
      { day: 2, book: 'Matthew', chapter: 2, label: 'Matthew 2 - Visit of the Wise Men' },
      { day: 3, book: 'Matthew', chapter: 5, label: 'Matthew 5 - Sermon on the Mount' },
      { day: 4, book: 'Mark', chapter: 1, label: 'Mark 1 - Beginning of the Gospel' },
      { day: 5, book: 'Luke', chapter: 1, label: 'Luke 1 - Announcement of John & Jesus' },
      { day: 6, book: 'John', chapter: 1, label: 'John 1 - The Word Became Flesh' }
    ]
  },
  wisdom: {
    title: "Wisdom Literature (14-Day)",
    days: [
      { day: 1, book: 'Psalms', chapter: 1, label: 'Psalms 1 - The Two Paths' },
      { day: 2, book: 'Psalms', chapter: 23, label: 'Psalms 23 - The Lord is My Shepherd' },
      { day: 3, book: 'Proverbs', chapter: 1, label: 'Proverbs 1 - Beginning of Knowledge' },
      { day: 4, book: 'Ecclesiastes', chapter: 1, label: 'Ecclesiastes 1 - Everything is Meaningless' }
    ]
  }
};

const labelBook = document.getElementById('label-book');
const labelChapter = document.getElementById('label-chapter');
const labelTranslation = document.getElementById('label-translation');
const metaTranslation = document.getElementById('meta-translation');
const metaParallel = document.getElementById('meta-translation-parallel');
const chapterTitle = document.getElementById('chapter-title');
const versesList = document.getElementById('verses-list');
const parallelVersesList = document.getElementById('parallel-verses-list');
const prevBtn = document.getElementById('prev-chapter');
const nextBtn = document.getElementById('next-chapter');
const readHeader = document.getElementById('read-header');

const navModal = document.getElementById('nav-modal');
const overlay = document.getElementById('overlay');
const navModalTitle = document.getElementById('nav-modal-title');
const navGrid = document.getElementById('nav-grid');
const btnBookSelect = document.getElementById('btn-book-select');
const btnChapterSelect = document.getElementById('btn-chapter-select');
const btnTransSelect = document.getElementById('btn-trans-select');
const closeNavModalBtn = document.getElementById('close-nav-modal');

const mapViewerModal = document.getElementById('map-viewer-modal');
const closeMapModalBtn = document.getElementById('close-map-modal');
const mapImageDisplay = document.getElementById('map-image-display');
const mapTitle = document.getElementById('map-title');
const mapDescription = document.getElementById('map-description');

const toggleFullscreenBtn = document.getElementById('toggle-fullscreen');
const verseActionBar = document.getElementById('verse-action-bar');
const actionCount = document.getElementById('action-count');
const toastEl = document.getElementById('toast');

// --- TAB NAVIGATION ENGINE ---
function switchTab(tabId) {
  state.activeTab = tabId;

  document.querySelectorAll('.tab-view').forEach(view => view.classList.remove('active-tab'));
  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.add('active-tab');

  document.querySelectorAll('.nav-tab-item').forEach(btn => btn.classList.remove('active'));
  const targetBtn = document.getElementById(`tab-btn-${tabId}`);
  if (targetBtn) targetBtn.classList.add('active');

  if (readHeader) {
    readHeader.style.display = tabId === 'read' ? 'flex' : 'none';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- DATA FETCHING & SCRIPTURE LOAD ---
async function getTranslationData(code) {
  const codeLower = code.toLowerCase();
  if (translationCache[codeLower]) return translationCache[codeLower];

  const path = `./data/${codeLower}/${codeLower}.json`;
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Translation file not found at ${path}`);
  
  const data = await response.json();
  translationCache[codeLower] = data;
  return data;
}

async function loadChapter() {
  try {
    versesList.innerHTML = `<p style="text-align:center; padding: 2rem; opacity:0.6;">Loading scripture...</p>`;
    if (parallelVersesList) parallelVersesList.innerHTML = '';

    clearVerseSelection();
    
    const bibleData = await getTranslationData(state.translation);
    const targetBook = bibleData.books.find(b => b.name.toLowerCase() === state.book.toLowerCase());
    if (!targetBook) throw new Error(`Book not found.`);

    const targetChapter = targetBook.chapters.find(c => c.chapter === state.chapter);
    if (!targetChapter) throw new Error(`Chapter not found.`);

    renderChapter(targetBook.name, targetChapter);

    labelBook.textContent = targetBook.name;
    labelChapter.textContent = `Ch. ${state.chapter}`;
    labelTranslation.textContent = state.translation.toUpperCase();
    metaTranslation.textContent = bibleData.translation || TRANSLATIONS[state.translation];

    if (state.isParallelActive) {
      await loadParallelChapter(targetBook.name, state.chapter);
    }

    localStorage.setItem('bible_translation', state.translation);
    localStorage.setItem('bible_book', targetBook.name);
    localStorage.setItem('bible_chapter', state.chapter);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error(error);
    versesList.innerHTML = `<div style="text-align:center; padding: 3rem 1rem; color: #cc3333;">Chapter unavailable.</div>`;
  }
}

async function loadParallelChapter(bookName, chapterNum) {
  if (!parallelVersesList) return;

  try {
    const parallelData = await getTranslationData(state.parallelTranslation);
    if (metaParallel) metaParallel.textContent = parallelData.translation || TRANSLATIONS[state.parallelTranslation];

    const pBook = parallelData.books.find(b => b.name.toLowerCase() === bookName.toLowerCase());
    if (!pBook) return;

    const pChapter = pBook.chapters.find(c => c.chapter === chapterNum);
    if (!pChapter) return;

    parallelVersesList.innerHTML = pChapter.verses.map(v => `
      <div class="verse" data-verse="${v.verse}">
        <span class="verse-num">${v.verse}</span><span class="verse-text">${v.text}</span>
      </div>
    `).join('');
  } catch (err) {
    console.error("Parallel load error:", err);
    parallelVersesList.innerHTML = `<div style="text-align:center; padding: 3rem 1rem; color: #cc3333;">Translation file missing.</div>`;
  }
}

function renderChapter(bookName, chapterData) {
  chapterTitle.textContent = `${bookName} ${chapterData.chapter}`;
  versesList.innerHTML = chapterData.verses.map(v => `
    <div class="verse" data-verse="${v.verse}" onclick="toggleVerseSelection(this)">
      <span class="verse-num">${v.verse}</span><span class="verse-text">${v.text}</span>
    </div>
  `).join('');
}

// --- VERSE SELECTION & CLIPBOARD COPY ---
function toggleVerseSelection(el) {
  el.classList.toggle('selected');
  updateVerseActionBar();
}

function updateVerseActionBar() {
  const selectedVerses = document.querySelectorAll('.verse.selected');
  if (selectedVerses.length > 0) {
    actionCount.textContent = `${selectedVerses.length} verse${selectedVerses.length > 1 ? 's' : ''} selected`;
    verseActionBar.classList.add('active');
  } else {
    verseActionBar.classList.remove('active');
  }
}

function clearVerseSelection() {
  document.querySelectorAll('.verse.selected').forEach(el => el.classList.remove('selected'));
  updateVerseActionBar();
}

function copySelectedVerses() {
  const selectedEls = Array.from(document.querySelectorAll('.verse.selected'));
  if (selectedEls.length === 0) return;

  selectedEls.sort((a, b) => parseInt(a.dataset.verse, 10) - parseInt(b.dataset.verse, 10));

  const numbers = selectedEls.map(el => parseInt(el.dataset.verse, 10));
  const minNum = numbers[0];
  const maxNum = numbers[numbers.length - 1];
  const verseRef = minNum === maxNum ? `${minNum}` : `${minNum}-${maxNum}`;

  const formattedVerses = selectedEls.map(el => {
    const num = el.dataset.verse;
    const text = el.querySelector('.verse-text').textContent.trim();
    return `[${num}] ${text}`;
  }).join(' ');

  const fullText = `${state.book} ${state.chapter}:${verseRef} (${state.translation.toUpperCase()})\n"${formattedVerses}"`;

  navigator.clipboard.writeText(fullText).then(() => {
    showToast('Copied to clipboard!');
    clearVerseSelection();
  }).catch(err => {
    console.error('Clipboard copy failed:', err);
    showToast('Failed to copy text.');
  });
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 2200);
}

// --- FULLSCREEN ---
const supportsFullscreen = document.fullscreenEnabled || document.webkitFullscreenEnabled;
if (toggleFullscreenBtn) {
  if (!supportsFullscreen) {
    toggleFullscreenBtn.style.display = 'none';
  } else {
    toggleFullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.warn(`Fullscreen error: ${err.message}`));
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }
}

// --- SELECTION MODALS ---
function openModal(type) {
  state.modalType = type;
  navModal.classList.add('open');
  overlay.classList.add('active');
  renderModalContent();
}

function closeModal() {
  navModal.classList.remove('open');
  overlay.classList.remove('active');
}

function renderModalContent() {
  navGrid.innerHTML = '';
  if (state.modalType === 'books') {
    navModalTitle.textContent = 'Select Book';
    BIBLE_BOOKS.forEach(b => {
      const btn = document.createElement('button');
      btn.className = `chip-btn ${b.name.toLowerCase() === state.book.toLowerCase() ? 'active' : ''}`;
      btn.textContent = b.name;
      btn.onclick = () => {
        state.book = b.name;
        state.chapter = 1;
        state.modalType = 'chapters';
        renderModalContent();
      };
      navGrid.appendChild(btn);
    });
  } else if (state.modalType === 'chapters') {
    navModalTitle.textContent = `${state.book} - Select Chapter`;
    const bookObj = BIBLE_BOOKS.find(b => b.name.toLowerCase() === state.book.toLowerCase()) || { chapters: 50 };
    for (let i = 1; i <= bookObj.chapters; i++) {
      const btn = document.createElement('button');
      btn.className = `chip-btn ${i === state.chapter ? 'active' : ''}`;
      btn.textContent = i;
      btn.onclick = () => { state.chapter = i; closeModal(); loadChapter(); };
      navGrid.appendChild(btn);
    }
  } else if (state.modalType === 'translations') {
    navModalTitle.textContent = 'Select Translation';
    Object.entries(TRANSLATIONS).forEach(([code, name]) => {
      const btn = document.createElement('button');
      btn.className = `chip-btn ${code === state.translation ? 'active' : ''}`;
      btn.textContent = code.toUpperCase();
      btn.style.gridColumn = 'span 2';
      btn.onclick = () => { state.translation = code; closeModal(); loadChapter(); };
      navGrid.appendChild(btn);
    });
  }
}

prevBtn.addEventListener('click', () => {
  if (state.chapter > 1) {
    state.chapter--;
    loadChapter();
  } else {
    const idx = BIBLE_BOOKS.findIndex(b => b.name.toLowerCase() === state.book.toLowerCase());
    if (idx > 0) {
      state.book = BIBLE_BOOKS[idx - 1].name;
      state.chapter = BIBLE_BOOKS[idx - 1].chapters;
      loadChapter();
    }
  }
});

nextBtn.addEventListener('click', () => {
  const bookObj = BIBLE_BOOKS.find(b => b.name.toLowerCase() === state.book.toLowerCase()) || { chapters: 50 };
  if (state.chapter < bookObj.chapters) {
    state.chapter++;
    loadChapter();
  } else {
    const idx = BIBLE_BOOKS.findIndex(b => b.name.toLowerCase() === state.book.toLowerCase());
    if (idx < BIBLE_BOOKS.length - 1) {
      state.book = BIBLE_BOOKS[idx + 1].name;
      state.chapter = 1;
      loadChapter();
    }
  }
});

// MAP VIEWER
function openMap(mapId) {
  const mapObj = BIBLE_MAPS.find(m => m.id === mapId);
  if (!mapObj) return;

  mapTitle.textContent = mapObj.title;
  mapImageDisplay.src = mapObj.file;
  mapDescription.textContent = mapObj.description;

  if (mapViewerModal) mapViewerModal.classList.add('open');
  overlay.classList.add('active');
}

function closeMapModal() {
  if (mapViewerModal) mapViewerModal.classList.remove('open');
  overlay.classList.remove('active');
}

if (closeMapModalBtn) closeMapModalBtn.addEventListener('click', closeMapModal);
if (closeNavModalBtn) closeNavModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', () => { closeModal(); closeMapModal(); });

btnBookSelect.addEventListener('click', () => openModal('books'));
btnChapterSelect.addEventListener('click', () => openModal('chapters'));
btnTransSelect.addEventListener('click', () => openModal('translations'));

// --- READING PLANS ENGINE ---
function selectPlan(planKey) {
  state.activePlan = planKey;
  localStorage.setItem('bible_active_plan', planKey);

  document.querySelectorAll('.plan-card').forEach(card => card.classList.remove('active-plan'));
  const activeCard = document.getElementById(`plan-${planKey}`);
  if (activeCard) activeCard.classList.add('active-plan');

  renderPlanSchedule();
}

function renderPlanSchedule() {
  const planContainer = document.getElementById('plan-schedule-container');
  const planTitle = document.getElementById('current-plan-title');
  if (!planContainer) return;

  const currentPlan = READING_PLANS[state.activePlan] || READING_PLANS['gospels'];
  if (planTitle) planTitle.textContent = `${currentPlan.title} — Schedule`;

  planContainer.innerHTML = currentPlan.days.map(item => {
    const itemKey = `${state.activePlan}_day_${item.day}`;
    const isChecked = state.planProgress[itemKey] ? 'checked' : '';
    return `
      <div class="reading-item">
        <div style="display:flex; align-items:center; gap: 0.75rem;">
          <input type="checkbox" ${isChecked} onchange="togglePlanItem('${itemKey}', this.checked)" />
          <span>Day ${item.day}</span>
        </div>
        <span class="reading-link" onclick="navigateToPassage('${item.book}', ${item.chapter})">${item.label}</span>
      </div>
    `;
  }).join('');
}

function togglePlanItem(itemKey, isChecked) {
  state.planProgress[itemKey] = isChecked;
  localStorage.setItem('bible_plan_progress', JSON.stringify(state.planProgress));
}

function navigateToPassage(book, chapter) {
  state.book = book;
  state.chapter = chapter;
  switchTab('read');
  loadChapter();
}

// --- SETTINGS CONTROLS ---
const FONT_FAMILIES = {
  'sans': 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  'serif': '"Source Serif 4", Georgia, serif',
  'editorial': '"Playfair Display", Georgia, serif',
  'lora': 'Lora, Georgia, serif',
  'cinzel': 'Cinzel, Georgia, serif',
  'mono': '"Fira Code", monospace',
  'cinzel-decor': '"Cinzel Decorative", Georgia, serif',
  'playfair-sc': '"Playfair Display SC", Georgia, serif'
};

function setFont(fontKey, element) {
  const fontFamily = FONT_FAMILIES[fontKey] || FONT_FAMILIES['sans'];
  document.documentElement.style.setProperty('--body-font', fontFamily);
  localStorage.setItem('bible_font_key', fontKey);
  localStorage.setItem('bible_font', fontFamily);

  if (element) {
    document.querySelectorAll('#font-control button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
  } else {
    updateActiveSegment('font-control', fontKey);
  }
}

let currentFontSize = parseFloat(localStorage.getItem('bible_font_size')) || 1.15;
document.documentElement.style.setProperty('--font-size', `${currentFontSize}rem`);

function adjustFontSize(delta) {
  currentFontSize = Math.min(Math.max(0.85, currentFontSize + delta), 2.2);
  document.documentElement.style.setProperty('--font-size', `${currentFontSize}rem`);
  localStorage.setItem('bible_font_size', currentFontSize);
}

function setTextAlign(align) {
  document.documentElement.style.setProperty('--text-align', align);
  localStorage.setItem('bible_text_align', align);
  updateActiveSegment('align-control', align);
}

// Bar Color Gallery
function setPanelColor(colorValue, element, bgSize = 'auto') {
  document.documentElement.style.setProperty('--panel-bg', colorValue);
  document.documentElement.style.setProperty('--panel-size', bgSize);
  localStorage.setItem('bible_panel_color', colorValue);
  localStorage.setItem('bible_panel_size', bgSize);

  if (element) {
    document.querySelectorAll('#panel-gallery .gallery-chip').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }
}

// Background Gallery
function setGalleryBg(bgValue, type, element, solidFallbackColor = null, bgSize = 'auto') {
  if (type === 'texture') {
    document.documentElement.style.setProperty('--bg-image', bgValue);
    document.documentElement.style.setProperty('--bg-color', solidFallbackColor || '#fcfaf7');
    document.documentElement.style.setProperty('--bg-size', bgSize);
  } else if (type === 'gradient') {
    document.documentElement.style.setProperty('--bg-image', bgValue);
    document.documentElement.style.setProperty('--bg-color', 'transparent');
    document.documentElement.style.setProperty('--bg-size', 'auto');
  } else {
    document.documentElement.style.setProperty('--bg-image', 'none');
    document.documentElement.style.setProperty('--bg-color', bgValue);
    document.documentElement.style.setProperty('--bg-size', 'auto');
  }

  const isDark = bgValue === '#121110' || bgValue.includes('#141826') || bgValue.includes('#1a1918') || bgValue.includes('#2b231c');
  if (isDark) {
    if (!localStorage.getItem('bible_text_color')) {
      document.documentElement.style.setProperty('--text-color', '#fcfaf7');
    }
    document.documentElement.style.setProperty('--ui-text-color', '#fcfaf7');
    document.documentElement.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.08)');
    document.documentElement.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.15)');
    document.documentElement.style.setProperty('--verse-num-color', 'rgba(255, 255, 255, 0.45)');
    document.documentElement.style.setProperty('--accent-gold', '#f3cca1');
    document.documentElement.style.setProperty('--pill-bg', 'rgba(255, 255, 255, 0.15)');
    document.documentElement.style.setProperty('--pill-border', 'rgba(255, 255, 255, 0.22)');
    document.documentElement.style.setProperty('--active-pill', '#fcfaf7');
    document.documentElement.style.setProperty('--active-pill-text', '#121110');
  } else {
    if (!localStorage.getItem('bible_text_color')) {
      document.documentElement.style.setProperty('--text-color', '#2c2523');
    }
    document.documentElement.style.setProperty('--ui-text-color', '#2c2523');
    document.documentElement.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.65)');
    document.documentElement.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)');
    document.documentElement.style.setProperty('--verse-num-color', '#8c8273');
    document.documentElement.style.setProperty('--accent-gold', '#b8860b');
    document.documentElement.style.setProperty('--pill-bg', 'rgba(255, 255, 255, 0.65)');
    document.documentElement.style.setProperty('--pill-border', 'rgba(0, 0, 0, 0.12)');
    document.documentElement.style.setProperty('--active-pill', '#2c2523');
    document.documentElement.style.setProperty('--active-pill-text', '#ffffff');
  }

  localStorage.setItem('bible_bg_gallery', bgValue);
  localStorage.setItem('bible_bg_type', type);
  localStorage.setItem('bible_bg_size', bgSize);
  if (solidFallbackColor) {
    localStorage.setItem('bible_bg_fallback', solidFallbackColor);
  } else {
    localStorage.removeItem('bible_bg_fallback');
  }

  if (element) {
    document.querySelectorAll('#bg-gallery .gallery-chip').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }
}

function applyTextColor() {
  const colorInput = document.getElementById('text-color-picker');
  if (colorInput) {
    const chosenColor = colorInput.value;
    document.documentElement.style.setProperty('--text-color', chosenColor);
    localStorage.setItem('bible_text_color', chosenColor);
  }
}

function toggleReaderMode() {
  const isReader = document.body.classList.toggle('reader-mode');
  localStorage.setItem('bible_reader_mode', isReader);
  updateActiveButton('btn-reader-mode', isReader);
}

function toggleScrollMode() {
  const isScroll = document.body.classList.toggle('scroll-mode');
  localStorage.setItem('bible_scroll_mode', isScroll);
  updateActiveButton('btn-scroll-mode', isScroll);
}

function toggleParallelMode() {
  state.isParallelActive = !state.isParallelActive;
  document.body.classList.toggle('parallel-mode', state.isParallelActive);
  localStorage.setItem('bible_parallel_mode', state.isParallelActive);
  updateActiveButton('btn-parallel-mode', state.isParallelActive);

  const parallelSection = document.getElementById('parallel-select-section');
  if (parallelSection) {
    parallelSection.style.display = state.isParallelActive ? 'flex' : 'none';
  }

  loadChapter();
}

function setParallelTranslation(code) {
  state.parallelTranslation = code;
  localStorage.setItem('bible_parallel_trans', code);
  updateActiveSegment('parallel-trans-control', code);
  loadChapter();
}

function renderParallelTranslationOptions() {
  const control = document.getElementById('parallel-trans-control');
  if (!control) return;
  control.innerHTML = Object.entries(TRANSLATIONS).map(([code, name]) => `
    <button data-val="${code}" onclick="setParallelTranslation('${code}')">${code.toUpperCase()}</button>
  `).join('');
  updateActiveSegment('parallel-trans-control', state.parallelTranslation);
}

function updateActiveButton(btnId, isActive) {
  const btn = document.getElementById(btnId);
  if (btn) {
    if (isActive) btn.classList.add('active');
    else btn.classList.remove('active');
  }
}

function updateActiveSegment(controlId, activeVal) {
  const container = document.getElementById(controlId);
  if (!container) return;
  Array.from(container.children).forEach(btn => {
    const val = btn.getAttribute('data-val') || btn.textContent.trim();
    if (val.toLowerCase() === activeVal.toLowerCase()) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
  const savedFontKey = localStorage.getItem('bible_font_key') || 'sans';
  const savedAlign = localStorage.getItem('bible_text_align') || 'left';
  const savedBg = localStorage.getItem('bible_bg_gallery') || '#fcfaf7';
  const savedBgType = localStorage.getItem('bible_bg_type') || 'solid';
  const savedBgFallback = localStorage.getItem('bible_bg_fallback') || null;
  const savedBgSize = localStorage.getItem('bible_bg_size') || 'auto';
  const savedPanel = localStorage.getItem('bible_panel_color') || 'rgba(252, 250, 247, 0.9)';
  const savedPanelSize = localStorage.getItem('bible_panel_size') || 'auto';
  const savedTextColor = localStorage.getItem('bible_text_color');
  
  const isReaderMode = localStorage.getItem('bible_reader_mode') === 'true';
  const isScrollMode = localStorage.getItem('bible_scroll_mode') === 'true';
  const isParallelMode = localStorage.getItem('bible_parallel_mode') === 'true';

  setFont(savedFontKey);
  setTextAlign(savedAlign);
  setPanelColor(savedPanel, null, savedPanelSize);
  setGalleryBg(savedBg, savedBgType, null, savedBgFallback, savedBgSize);

  if (savedTextColor) {
    document.documentElement.style.setProperty('--text-color', savedTextColor);
    const picker = document.getElementById('text-color-picker');
    if (picker) picker.value = savedTextColor;
  }

  if (isReaderMode) {
    document.body.classList.add('reader-mode');
    updateActiveButton('btn-reader-mode', true);
  }
  if (isScrollMode) {
    document.body.classList.add('scroll-mode');
    updateActiveButton('btn-scroll-mode', true);
  }
  if (isParallelMode) {
    state.isParallelActive = true;
    document.body.classList.add('parallel-mode');
    updateActiveButton('btn-parallel-mode', true);
    const pSec = document.getElementById('parallel-select-section');
    if (pSec) pSec.style.display = 'flex';
  }

  renderParallelTranslationOptions();
  selectPlan(state.activePlan);
  switchTab('read');
  loadChapter();
});
