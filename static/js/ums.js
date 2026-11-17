// Sidebar toggle (mobile)
function toggleSidebar() {
  const sb = document.querySelector('.sidebar') || document.getElementById('appSidebar');
  if (sb) sb.classList.toggle('open');
}

function getCookie(name) {
  const v = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return v ? v.pop() : '';
}

// ---------- AI chat widget ----------
async function aiSend(message, boxId = 'aiMessages', inputId = null) {
  const box = document.getElementById(boxId);
  if (!box) return;
  addBubble(box, message, 'me');
  if (inputId) {
    const inp = document.getElementById(inputId);
    if (inp) inp.value = '';
  }
  const typing = addBubble(box, '<div class="spinner-border spinner-border-sm text-primary me-2" role="status"></div> Thinking...', 'bot');
  try {
    const res = await fetch(AI_REPLY_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'X-CSRFToken': getCookie('csrftoken')},
      body: JSON.stringify({message})
    });
    const data = await res.json();
    typing.innerHTML = `<div class="d-flex align-items-center gap-2 mb-1 fw-semibold text-primary"><i class="fa-solid fa-robot me-1"></i><span>Daffodil Assistant</span></div><div>${data.reply}</div>`;
    renderChips(data.suggestions, boxId, inputId);
    if (window.lucide) lucide.createIcons();
  } catch (e) {
    typing.innerHTML = '<span class="text-danger">Sorry, I could not reach the campus intelligence server.</span>';
  }
  box.scrollTop = box.scrollHeight;
}

function addBubble(box, html, cls) {
  const d = document.createElement('div');
  d.className = 'ai-bubble chat-bubble ' + cls;
  d.innerHTML = html;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
  return d;
}

function renderChips(list, boxId, inputId) {
  if (!list) return;
  const box = document.getElementById(boxId);
  const wrap = document.createElement('div');
  wrap.className = 'd-flex flex-wrap gap-1 mt-2 mb-2';
  list.forEach(s => {
    const c = document.createElement('span');
    c.className = 'ai-prompt-chip chip';
    c.textContent = s;
    c.onclick = () => aiSend(s, boxId, inputId);
    wrap.appendChild(c);
  });
  box.appendChild(wrap);
  box.scrollTop = box.scrollHeight;
}

function aiFormSubmit(ev, inputId, boxId) {
  ev.preventDefault();
  const inp = document.getElementById(inputId);
  if (!inp) return;
  const val = inp.value.trim();
  if (val) aiSend(val, boxId, inputId);
}
