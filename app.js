// --- BIBLE APP LOGIC & STATE ENGINE ---

// Global State
const state = {
  translation: localStorage.getItem('bible_translation') || 'kjv',
  book: localStorage.getItem('bible_book') || 'John',
  chapter: parseInt(localStorage.getItem('bible_chapter'), 10) || 1,
  modalType: 'books' // 'books', 'chapters', or 'translations'
};

// In-Memory Translation Data Cache
const translationCache = {};

// Bible Books Metadata (Default chapter counts for modal grids)
const BIBLE_BOOKS = [
  { name: 'Genesis', chapters: 50, testament: 'OT' },
  { name: 'Exodus', chapters: 40, testament: 'OT' },
  { name: 'Leviticus', chapters: 27, testament: 'OT' },
  { name: 'Numbers', chapters: 36, testament: 'OT' },
  { name: 'Deuteronomy', chapters: 34, testament: 'OT' },
  { name: 'Joshua', chapters: 24, testament: 'OT' },
  { name: 'Judges', chapters: 21, testament: 'OT' },
  { name: 'Ruth', chapters: 4, testament: 'OT' },
  { name: '1 Samuel', chapters: 31, testament: 'OT' },
  { name: '2 Samuel', chapters: 24, testament: 'OT' },
  { name: '1 Kings', chapters: 22, testament: 'OT' },
  { name: '2 Kings', chapters: 25, testament: 'OT' },
  { name: '1 Chronicles', chapters: 29, testament: 'OT' },
  { name: '2 Chronicles', chapters: 36, testament: 'OT' },
  { name: 'Ezra', chapters: 10, testament: 'OT' },
  { name: 'Nehemiah', chapters: 13, testament: 'OT' },
  { name: 'Esther', chapters: 10, testament: 'OT' },
  { name: 'Job', chapters: 42, testament: 'OT' },
  { name: 'Psalms', chapters: 150, testament: 'OT' },
  { name: 'Proverbs', chapters: 31, testament: 'OT' },
  { name: 'Ecclesiastes', chapters: 12, testament: 'OT' },
  { name: 'Song of Solomon', chapters: 8, testament: 'OT' },
  { name: 'Isaiah', chapters: 66, testament: 'OT' },
  { name: 'Jeremiah', chapters: 52, testament: 'OT' },
  { name: 'Lamentations', chapters: 5, testament: 'OT' },
  { name: 'Ezekiel', chapters: 48, testament: 'OT' },
  { name: 'Daniel', chapters: 12, testament: 'OT' },
  { name: 'Hosea', chapters: 14, testament: 'OT' },
  { name: 'Joel', chapters: 3, testament: 'OT' },
  { name: 'Amos', chapters: 9, testament: 'OT' },
  { name: 'Obadiah', chapters: 1, testament: 'OT' },
  { name: 'Jonah', chapters: 4, testament: 'OT' },
  { name: 'Micah', chapters: 7, testament: 'OT' },
  { name: 'Nahum', chapters: 3, testament: 'OT' },
  { name: 'Habakkuk', chapters: 3, testament: 'OT' },
  { name: 'Zephaniah', chapters: 3, testament: 'OT' },
  { name: 'Haggai', chapters: 2, testament: 'OT' },
  { name: 'Zechariah', chapters: 14, testament: 'OT' },
  { name: 'Malachi', chapters: 4, testament: 'OT' },
  { name: 'Matthew', chapters: 28, testament: 'NT' },
  { name: 'Mark', chapters: 16, testament: 'NT' },
  { name: 'Luke', chapters: 24, testament: 'NT' },
  { name: 'John', chapters: 21, testament: 'NT' },
  { name: 'Acts', chapters: 28, testament: 'NT' },
  { name: 'Romans', chapters: 16, testament: 'NT' },
  { name: '1 Corinthians', chapters: 16, testament: 'NT' },
  { name: '2 Corinthians', chapters: 13, testament: 'NT' },
  { name: 'Galatians', chapters: 6, testament: 'NT' },
  { name: 'Ephesians', chapters: 6, testament: 'NT' },
  { name: 'Philippians', chapters: 4, testament: 'NT' },
  { name: 'Colossians', chapters: 4, testament: 'NT' },
  { name: '1 Thessalonians', chapters: 5, testament: 'NT' },
  { name: '2 Thessalonians', chapters: 3, testament: 'NT' },
  { name: '1 Timothy', chapters: 6, testament: 'NT' },
  { name: '2 Timothy', chapters: 4, testament: 'NT' },
  { name: 'Titus', chapters: 3, testament: 'NT' },
  { name: 'Philemon', chapters: 1, testament: 'NT' },
  { name: 'Hebrews', chapters: 13, testament: 'NT' },
  { name: 'James', chapters: 5, testament: 'NT' },
  { name: '1 Peter', chapters: 5, testament: 'NT' },
  { name: '2 Peter', chapters: 3, testament: 'NT' },
  { name: '1 John', chapters: 5, testament: 'NT' },
  { name: '2 John', chapters: 1, testament: 'NT' },
  { name: '3 John', chapters: 1, testament: 'NT' },
  { name: 'Jude', chapters: 1, testament: 'NT' },
  { name: 'Revelation', chapters: 22, testament: 'NT' }
];

const TRANSLATIONS = {
  kjv: 'King James Version',
  web: 'World English Bible',
  asv: 'American Standard Version'
};

// UI Elements
const labelBookChapter = document.getElementById('label-book-chapter');
const labelTranslation = document.getElementById('label-translation');
const metaTranslation = document.getElementById('meta-translation');
const chapterTitle = document.getElementById('chapter-title');
const versesList = document.getElementById('verses-list');
const prevBtn = document.getElementById('prev-chapter');
const nextBtn = document.getElementById('next-chapter');

// Modal Elements
const navModal = document.getElementById('nav-modal');
const overlay = document.getElementById('overlay');
const navModalTitle = document.getElementById('nav-modal-title');
const navGrid = document.getElementById('nav-grid');
const btnBookSelect = document.getElementById('btn-book-select');
const btnTransSelect = document.getElementById('btn-trans-select');
const closeNavModalBtn = document.getElementById('close-nav-modal');

// Settings Modal Elements
const settingsModal = document.getElementById('settings-modal');
const openSettingsBtn = document.getElementById('open-settings');
const closeSettingsBtn = document.getElementById('close-settings');
const bgUploader = document.getElementById('bg-uploader');

// 1. Fetch Translation Data (with Memory Caching)
async function getTranslationData(code) {
  const codeLower = code.toLowerCase();
  if (translationCache[codeLower]) {
    return translationCache[codeLower];
  }

  const path = `./data/${codeLower}/${codeLower}.json`;
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Translation file not found at ${path}`);
  
  const data = await response.json();
  translationCache[codeLower] = data;
  return data;
}

// 2. Load & Display Current Chapter
async function loadChapter() {
  try {
    versesList.innerHTML = `<p style="text-align:center; padding: 2rem; opacity:0.6;">Loading scripture...</p>`;
    
    const bibleData = await getTranslationData(state.translation);

    // Find requested Book
    const targetBook = bibleData.books.find(
      b => b.name.toLowerCase() === state.book.toLowerCase()
    );

    if (!targetBook) throw new Error(`Book "${state.book}" not found in JSON.`);

    // Find requested Chapter
    const targetChapter = targetBook.chapters.find(
      c => c.chapter === state.chapter
    );

    if (!targetChapter) throw new Error(`Chapter ${state.chapter} not found in ${state.book}.`);

    // Render Verses
    renderChapter(targetBook.name, targetChapter);

    // Update Header Navigation Labels
    labelBookChapter.textContent = `${targetBook.name} ${state.chapter}`;
    labelTranslation.textContent = state.translation.toUpperCase();
    metaTranslation.textContent = bibleData.translation || TRANSLATIONS[state.translation] || state.translation.toUpperCase();

    // Persist State
    localStorage.setItem('bible_translation', state.translation);
    localStorage.setItem('bible_book', targetBook.name);
    localStorage.setItem('bible_chapter', state.chapter);

    updateStreak();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error('Error loading chapter JSON:', error);
    versesList.innerHTML = `
      <div style="text-align:center; padding: 3rem 1rem;">
        <p style="font-family: var(--ui-font); font-weight: 600; margin-bottom: 0.5rem; color: #cc3333;">Chapter or translation unavailable.</p>
        <p style="font-size: 0.85rem; opacity: 0.7;">Make sure <code>data/${state.translation.toLowerCase()}/${state.translation.toLowerCase()}.json</code> exists.</p>
      </div>`;
  }
}

// 3. Render Verses to DOM
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

// 4. Modal Navigation Logic
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
      btn.onclick = () => {
        state.chapter = i;
        closeModal();
        loadChapter();
      };
      navGrid.appendChild(btn);
    }
  } else if (state.modalType === 'translations') {
    navModalTitle.textContent = 'Select Translation';
    Object.entries(TRANSLATIONS).forEach(([code, name]) => {
      const btn = document.createElement('button');
      btn.className = `chip-btn ${code === state.translation ? 'active' : ''}`;
      btn.textContent = code.toUpperCase();
      btn.style.gridColumn = 'span 2';
      btn.onclick = () => {
        state.translation = code;
        closeModal();
        loadChapter();
      };
      navGrid.appendChild(btn);
    });
  }
}

// 5. Next/Prev Chapter Navigation
prevBtn.addEventListener('click', () => {
  if (state.chapter > 1) {
    state.chapter--;
    loadChapter();
  } else {
    const currentIndex = BIBLE_BOOKS.findIndex(b => b.name.toLowerCase() === state.book.toLowerCase());
    if (currentIndex > 0) {
      state.book = BIBLE_BOOKS[currentIndex - 1].name;
      state.chapter = BIBLE_BOOKS[currentIndex - 1].chapters;
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
    const currentIndex = BIBLE_BOOKS.findIndex(b => b.name.toLowerCase() === state.book.toLowerCase());
    if (currentIndex < BIBLE_BOOKS.length - 1) {
      state.book = BIBLE_BOOKS[currentIndex + 1].name;
      state.chapter = 1;
      loadChapter();
    }
  }
});

// 6. Settings Modal & Aesthetics Handlers
openSettingsBtn.addEventListener('click', () => {
  settingsModal.classList.add('open');
  overlay.classList.add('active');
});

function closeSettingsModal() {
  settingsModal.classList.remove('open');
  overlay.classList.remove('active');
}

closeSettingsBtn.addEventListener('click', closeSettingsModal);
overlay.addEventListener('click', () => {
  closeModal();
  closeSettingsModal();
});
closeNavModalBtn.addEventListener('click', closeModal);

btnBookSelect.addEventListener('click', () => openModal('books'));
btnTransSelect.addEventListener('click', () => openModal('translations'));

function setTheme(theme) {
  if (theme === 'parchment') {
    document.body.removeAttribute('data-theme');
  } else {
    document.body.setAttribute('data-theme', theme);
  }
  localStorage.setItem('bible_theme', theme);
  updateActiveSegment('theme-control', theme);
}

function setFont(font, valKey = '') {
  document.documentElement.style.setProperty('--body-font', font);
  localStorage.setItem('bible_font', font);
  
  // Find matching font val if not explicitly passed
  if (!valKey) {
    if (font.includes('Playfair')) valKey = 'Editorial';
    else if (font.includes('Inter')) valKey = 'Sans';
    else valKey = 'Serif';
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

function toggleReaderMode() {
  const isActive = document.getElementById('chk-reader-mode').checked;
  document.body.classList.toggle('reader-mode', isActive);
  localStorage.setItem('bible_reader_mode', isActive);
}

function toggleScrollMode() {
  const isActive = document.getElementById('chk-scroll-mode').checked;
  document.body.classList.toggle('scroll-mode', isActive);
  localStorage.setItem('bible_scroll_mode', isActive);
}

// Custom Wallpaper Upload Handler
if (bgUploader) {
  bgUploader.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        const base64Img = `url('${evt.target.result}')`;
        document.documentElement.style.setProperty('--bg-image', base64Img);
        localStorage.setItem('bible_bg_img', base64Img);
      };
      reader.readAsDataURL(file);
    }
  });
}

function clearCustomBg() {
  document.documentElement.style.setProperty('--bg-image', 'none');
  localStorage.removeItem('bible_bg_img');
  if (bgUploader) bgUploader.value = '';
}

function updateActiveSegment(controlId, activeVal) {
  const container = document.getElementById(controlId);
  if (!container) return;
  Array.from(container.children).forEach(btn => {
    const val = btn.getAttribute('data-val') || btn.textContent.trim();
    if (val.toLowerCase() === activeVal.toLowerCase()) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 7. Streak Counter Logic
function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  let streakData = JSON.parse(localStorage.getItem('bible_streak_data')) || { lastDate: '', count: 0 };

  if (streakData.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (streakData.lastDate === yesterday) {
      streakData.count++;
    } else {
      streakData.count = 1;
    }
    streakData.lastDate = today;
    localStorage.setItem('bible_streak_data', JSON.stringify(streakData));
  }

  document.getElementById('streak-count').textContent = streakData.count;
}

// 8. Startup
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('bible_theme') || 'parchment';
  const savedFont = localStorage.getItem('bible_font');
  const savedAlign = localStorage.getItem('bible_text_align') || 'left';
  const savedBg = localStorage.getItem('bible_bg_img');
  const isReaderMode = localStorage.getItem('bible_reader_mode') === 'true';
  const isScrollMode = localStorage.getItem('bible_scroll_mode') === 'true';

  setTheme(savedTheme);
  if (savedFont) {
    setFont(savedFont);
  } else {
    setFont('Source Serif 4, Georgia, serif', 'Serif');
  }
  setTextAlign(savedAlign);

  if (savedBg) {
    document.documentElement.style.setProperty('--bg-image', savedBg);
  }

  if (isReaderMode) {
    document.body.classList.add('reader-mode');
    document.getElementById('chk-reader-mode').checked = true;
  }
  if (isScrollMode) {
    document.body.classList.add('scroll-mode');
    document.getElementById('chk-scroll-mode').checked = true;
  }

  loadChapter();
});
