// --- BIBLE APP LOGIC & STATE ENGINE ---

// Global State
const state = {
  translation: localStorage.getItem('bible_translation') || 'web',
  book: localStorage.getItem('bible_book') || 'john',
  chapter: parseInt(localStorage.getItem('bible_chapter'), 10) || 1
};

// UI Elements
const translationSelect = document.getElementById('translation-select');
const bookSelect = document.getElementById('book-select');
const chapterSelect = document.getElementById('chapter-select');
const chapterTitle = document.getElementById('chapter-title');
const versesList = document.getElementById('verses-list');
const prevBtn = document.getElementById('prev-chapter');
const nextBtn = document.getElementById('next-chapter');

// 1. Initialize UI Controls to match saved state
function initControls() {
  translationSelect.value = state.translation;
  bookSelect.value = state.book;
  updateChapterDropdown();
  chapterSelect.value = state.chapter;
}

// 2. Fetch and Render Local JSON
async function loadChapter() {
  const path = `./data/${state.translation}/${state.book.toLowerCase()}/${state.chapter}.json`;

  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Chapter file not found');
    
    const data = await response.json();
    renderChapter(data);

    // Save position to localStorage
    localStorage.setItem('bible_translation', state.translation);
    localStorage.setItem('bible_book', state.book);
    localStorage.setItem('bible_chapter', state.chapter);

    // Scroll back to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error('Error loading chapter:', error);
    versesList.innerHTML = `<p style="text-align:center; padding: 2rem; color: #cc3333;">Chapter unavailable offline. Please check your file paths.</p>`;
  }
}

// 3. Render Verses to DOM
function renderChapter(data) {
  chapterTitle.textContent = `${data.book} ${data.chapter}`;
  
  // Format verses HTML
  versesList.innerHTML = data.verses.map(v => `
    <div class="verse" data-verse="${v.verse}">
      <span class="verse-num">${v.verse}</span>${v.text}
    </div>
  `).join('');
}

// 4. Update Chapter Dropdown based on Book (Demo limited to 5 chapters per book)
function updateChapterDropdown() {
  // In a full app, this can be dynamically set per book (e.g. Genesis = 50, Psalms = 150)
  const maxChapters = 5; 
  chapterSelect.innerHTML = '';
  for (let i = 1; i <= maxChapters; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `Ch. ${i}`;
    chapterSelect.appendChild(opt);
  }
}

// 5. Navigation Event Listeners
translationSelect.addEventListener('change', (e) => {
  state.translation = e.target.value;
  loadChapter();
});

bookSelect.addEventListener('change', (e) => {
  state.book = e.target.value;
  state.chapter = 1;
  updateChapterDropdown();
  chapterSelect.value = 1;
  loadChapter();
});

chapterSelect.addEventListener('change', (e) => {
  state.chapter = parseInt(e.target.value, 10);
  loadChapter();
});

prevBtn.addEventListener('click', () => {
  if (state.chapter > 1) {
    state.chapter--;
    chapterSelect.value = state.chapter;
    loadChapter();
  }
});

nextBtn.addEventListener('click', () => {
  state.chapter++;
  chapterSelect.value = state.chapter;
  loadChapter();
});

// Initial Startup
window.addEventListener('DOMContentLoaded', () => {
  initControls();
  loadChapter();
});