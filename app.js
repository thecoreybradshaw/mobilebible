// --- BIBLE APP LOGIC & STATE ENGINE ---

// Global State
const state = {
  translation: localStorage.getItem('bible_translation') || 'kjv',
  book: localStorage.getItem('bible_book') || 'John',
  chapter: parseInt(localStorage.getItem('bible_chapter'), 10) || 1,
  modalType: 'books'
};

const translationCache = {};

const BIBLE_BOOKS = [
  { name: 'Genesis', chapters: 50 }, { name: 'Exodus', chapters: 40 },
  { name: 'Leviticus', chapters: 27 }, { name: 'Numbers', chapters: 36 },
  { name: 'Deuteronomy', chapters: 34 }, { name: 'Joshua', chapters: 24 },
  { name: 'Judges', chapters: 21 }, { name: 'Ruth', chapters: 4 },
  { name: '1 Samuel', chapters: 31 }, { name: '2 Samuel', chapters: 24 },
  { name: '1 Kings', chapters: 22 }, { name: '2 Kings', chapters: 25 },
  { name: '1 Chronicles', chapters: 29 }, { name: '2 Chronicles', chapters: 36 },
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
  { name: 'Romans', chapters: 16 }, { name: '1 Corinthians', chapters: 16 },
  { name: '2 Corinthians', chapters: 13 }, { name: 'Galatians', chapters: 6 },
  { name: 'Ephesians', chapters: 6 }, { name: 'Philippians', chapters: 4 },
  { name: 'Colossians', chapters: 4 }, { name: '1 Thessalonians', chapters: 5 },
  { name: '2 Thessalonians', chapters: 3 }, { name: '1 Timothy', chapters: 6 },
  { name: '2 Timothy', chapters: 4 }, { name: 'Titus', chapters: 3 },
  { name: 'Philemon', chapters: 1 }, { name: 'Hebrews', chapters: 13 },
  { name: 'James', chapters: 5 }, { name: '1 Peter', chapters: 5 },
  { name: '2 Peter', chapters: 3 }, { name: '1 John', chapters: 5 },
  { name: '2 John', chapters: 1 }, { name: '3 John', chapters: 1 },
  { name: 'Jude', chapters: 1 }, { name: 'Revelation', chapters: 22 }
];

const TRANSLATIONS = {
  kjv: 'King James Version',
  web: 'World English Bible',
  asv: 'American Standard Version'
};

// UI Elements
const labelBook = document.getElementById('label-book');
const labelChapter = document.getElementById('label-chapter');
const labelTranslation = document.getElementById('label-translation');
const metaTranslation = document.getElementById('meta-translation');
const chapterTitle = document.getElementById('chapter-title');
const versesList = document.getElementById('verses-list');
const prevBtn = document.getElementById('prev-chapter');
const nextBtn = document.getElementById('next-chapter');

const navModal = document.getElementById('nav-modal');
const overlay = document.getElementById('overlay');
const navModalTitle = document.getElementById('nav-modal-title');
const navGrid = document.getElementById('nav-grid');
const btnBookSelect = document.getElementById('btn-book-select');
const btnChapterSelect = document.getElementById('btn-chapter-select');
const btnTransSelect = document.getElementById('btn-trans-select');
const closeNavModalBtn = document.getElementById('close-nav-modal');

const settingsModal = document.getElementById('settings-modal');
const openSettingsBtn = document.getElementById('open-settings');
const closeSettingsBtn = document.getElementById('close-settings');

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

    localStorage.setItem('bible_translation', state.translation);
    localStorage.setItem('bible_book', targetBook.name);
    localStorage.setItem('bible_chapter', state.chapter);

    updateStreak();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error(error);
    versesList.innerHTML = `<div style="text-align:center; padding: 3rem 1rem; color: #cc3333;">Chapter unavailable.</div>`;
  }
}

function renderChapter(bookName, chapterData) {
  chapterTitle.textContent = `${bookName} ${chapterData.chapter}`;
  
  versesList.innerHTML = chapterData.verses.map(v => `
    <div class="verse" data-verse="${v.verse}" onclick="toggleVerseSelection(this)">
      <span class="verse-num">${v.verse}</span>${v.text}
    </div>
  `).join('');
}

function toggleVerseSelection(el) {
  el.classList.toggle('selected');
}

// Modal Handlers
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

// Settings Handlers
openSettingsBtn.addEventListener('click', () => {
  settingsModal.classList.add('open');
  overlay.classList.add('active');
});

function closeSettingsModal() {
  settingsModal.classList.remove('open');
  overlay.classList.remove('active');
}

closeSettingsBtn.addEventListener('click', closeSettingsModal);
overlay.addEventListener('click', () => { closeModal(); closeSettingsModal(); });
closeNavModalBtn.addEventListener('click', closeModal);

btnBookSelect.addEventListener('click', () => openModal('books'));
btnChapterSelect.addEventListener('click', () => openModal('chapters'));
btnTransSelect.addEventListener('click', () => openModal('translations'));

function setFont(font, valKey = '') {
  document.documentElement.style.setProperty('--body-font', font);
  localStorage.setItem('bible_font', font);
  if (!valKey) {
    if (font.includes('Playfair')) valKey = 'editorial';
    else if (font.includes('Inter')) valKey = 'sans';
    else if (font.includes('Cinzel')) valKey = 'cinzel';
    else if (font.includes('Fira')) valKey = 'mono';
    else valKey = 'serif';
  }
  updateActiveSegment('font-control', valKey);
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

function setPanelColor(colorValue, element) {
  document.documentElement.style.setProperty('--panel-bg', colorValue);
  localStorage.setItem('bible_panel_color', colorValue);
  if (element) {
    document.querySelectorAll('#panel-gallery .gallery-chip').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }
}

function setGalleryBg(bgValue, element) {
  document.documentElement.style.setProperty('--bg-color', bgValue);
  localStorage.setItem('bible_bg_gallery', bgValue);
  if (element) {
    document.querySelectorAll('#bg-gallery .gallery-chip').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }
}

function setTextColor(color) {
  document.documentElement.style.setProperty('--text-color', color);
  localStorage.setItem('bible_text_color', color);
}

function toggleReaderMode() {
  const isActive = document.getElementById('chk-reader-mode').checked;
  document.body.classList.toggle('reader-mode', isActive);
  localStorage.setItem('bible_reader_mode', isActive);
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

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  let streakData = JSON.parse(localStorage.getItem('bible_streak_data')) || { lastDate: '', count: 0 };

  if (streakData.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (streakData.lastDate === yesterday) streakData.count++;
    else streakData.count = 1;
    streakData.lastDate = today;
    localStorage.setItem('bible_streak_data', JSON.stringify(streakData));
  }
  document.getElementById('streak-count').textContent = streakData.count;
}

window.addEventListener('DOMContentLoaded', () => {
  const savedFont = localStorage.getItem('bible_font');
  const savedAlign = localStorage.getItem('bible_text_align') || 'left';
  const savedBg = localStorage.getItem('bible_bg_gallery');
  const savedPanel = localStorage.getItem('bible_panel_color');
  const savedTextColor = localStorage.getItem('bible_text_color');
  const isReaderMode = localStorage.getItem('bible_reader_mode') === 'true';

  if (savedFont) setFont(savedFont);
  else setFont('Source Serif 4, Georgia, serif', 'serif');

  setTextAlign(savedAlign);

  if (savedBg) document.documentElement.style.setProperty('--bg-color', savedBg);
  if (savedPanel) document.documentElement.style.setProperty('--panel-bg', savedPanel);
  if (savedTextColor) {
    document.documentElement.style.setProperty('--text-color', savedTextColor);
    document.getElementById('text-color-picker').value = savedTextColor;
  }

  if (isReaderMode) {
    document.body.classList.add('reader-mode');
    document.getElementById('chk-reader-mode').checked = true;
  }

  loadChapter();
});
