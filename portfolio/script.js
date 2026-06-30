/* ===== 스크롤 시 헤더 스타일 변경 ===== */
const header = document.getElementById('header');
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 50;
  header.classList.toggle('scrolled', scrolled);
  backTop.classList.toggle('visible', window.scrollY > 400);
});

/* ===== 맨 위로 버튼 ===== */
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== 모바일 햄버거 메뉴 ===== */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  nav.classList.toggle('open');
});

// 메뉴 링크 클릭 시 닫기
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    nav.classList.remove('open');
  });
});

/* ===== 스킬 바 애니메이션 (IntersectionObserver) ===== */
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      fill.style.width = fill.dataset.width + '%';
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

/* ===== 프로젝트 필터 ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

/* ===== 섹션 페이드인 애니메이션 ===== */
const sections = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  sectionObserver.observe(section);
});

/* ===== 방명록 ===== */
const GUESTBOOK_KEY = 'portfolio_guestbook';

function getComments() {
  return JSON.parse(localStorage.getItem(GUESTBOOK_KEY) || '[]');
}

function saveComments(comments) {
  localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(comments));
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderGuestbook() {
  const comments = getComments();
  const list = document.getElementById('guestbookList');
  const recentEl = document.getElementById('recentComment');

  // 메인홈 최신 댓글 미리보기
  if (comments.length > 0) {
    const latest = comments[0];
    document.getElementById('recentName').textContent = latest.name;
    document.getElementById('recentMessage').textContent = latest.message;
    recentEl.dataset.id = latest.id;
    recentEl.style.display = 'block';
  } else {
    recentEl.style.display = 'none';
  }

  // 댓글 목록 렌더링
  if (comments.length === 0) {
    list.innerHTML = '<p class="no-comments">아직 방명록이 없습니다. 첫 번째로 남겨보세요! 😊</p>';
    return;
  }

  list.innerHTML = comments.map(c => `
    <div class="comment-card" data-id="${c.id}">
      <div class="comment-header">
        <div class="comment-avatar">${escapeHtml(c.name.charAt(0).toUpperCase())}</div>
        <div class="comment-meta">
          <span class="comment-name">${escapeHtml(c.name)}</span>
          <span class="comment-date">${c.date}</span>
        </div>
        <div class="comment-actions">
          <button class="comment-action-btn edit-btn" onclick="startEdit('${c.id}')">✏️ 수정</button>
          <button class="comment-action-btn delete-btn" onclick="deleteComment('${c.id}')">🗑️ 삭제</button>
        </div>
      </div>
      <div class="comment-body" id="body-${c.id}">
        <p class="comment-text">${escapeHtml(c.message)}</p>
      </div>
    </div>
  `).join('');
}

function addComment(name, message) {
  const comments = getComments();
  comments.unshift({
    id: Date.now().toString(),
    name,
    message,
    date: new Date().toLocaleDateString('ko-KR')
  });
  saveComments(comments);
  renderGuestbook();
}

function deleteComment(id) {
  if (!confirm('댓글을 삭제할까요?')) return;
  const updated = getComments().filter(c => c.id !== id);
  saveComments(updated);
  renderGuestbook();
}

function deleteRecentComment() {
  const id = document.getElementById('recentComment').dataset.id;
  deleteComment(id);
}

function startEdit(id) {
  const comment = getComments().find(c => c.id === id);
  if (!comment) return;
  const body = document.getElementById(`body-${id}`);
  body.innerHTML = `
    <textarea class="edit-textarea" id="edit-${id}">${escapeHtml(comment.message)}</textarea>
    <div class="edit-actions">
      <button class="comment-action-btn save-btn" onclick="saveEdit('${id}')">💾 저장</button>
      <button class="comment-action-btn cancel-btn" onclick="renderGuestbook()">취소</button>
    </div>
  `;
  document.getElementById(`edit-${id}`).focus();
}

function saveEdit(id) {
  const textarea = document.getElementById(`edit-${id}`);
  const newMessage = textarea.value.trim();
  if (!newMessage) return;
  const comments = getComments();
  const idx = comments.findIndex(c => c.id === id);
  if (idx !== -1) {
    comments[idx].message = newMessage;
    saveComments(comments);
  }
  renderGuestbook();
}

function editRecentComment() {
  const id = document.getElementById('recentComment').dataset.id;
  document.getElementById('guestbook').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => startEdit(id), 700);
}

document.getElementById('guestbookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('guestName').value.trim();
  const message = document.getElementById('guestMsg').value.trim();
  if (name && message) {
    addComment(name, message);
    e.target.reset();
    document.getElementById('guestbook').scrollIntoView({ behavior: 'smooth' });
  }
});

renderGuestbook();

/* ===== 문의 폼 제출 ===== */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = '전송 완료! ✓';
  btn.style.background = '#22c55e';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '메시지 보내기';
    btn.style.background = '';
    btn.disabled = false;
    contactForm.reset();
  }, 3000);
});
