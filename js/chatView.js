/* =====================================
   CHAT VIEW RENDERING & INTERACTION
   ===================================== */

const chatContainer = document.getElementById("chatContainer");

/* ---------- Render Chat ---------- */

function renderChat() {
  chatContainer.innerHTML = "";

  CHAT.messages.forEach((message, index) => {
    if (message.type === "text") {
      renderTextMessage(message);
    }

    if (message.type === "reel") {
      renderReelMessage(message, index);
    }
  });

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

/* ---------- Text Message ---------- */

function renderTextMessage(message) {
  const msgEl = document.createElement("div");
  msgEl.classList.add(
    "message",
    message.sender === USERS.currentUser.id ? "outgoing" : "incoming"
  );

  msgEl.textContent = message.content;
  chatContainer.appendChild(msgEl);
}

/* ---------- Reel Message ---------- */

function renderReelMessage(message, messageIndex) {
  const reelData = REELS[message.reelId];

  const wrapper = document.createElement("div");
  wrapper.classList.add(
    "reel-message",
    message.sender === USERS.currentUser.id ? "outgoing" : "incoming"
  );

 const video = document.createElement("video");
video.src = reelData.videoSrc;
video.muted = true;
video.playsInline = true;
video.preload = "auto";

/* Force preview frame to show */
video.addEventListener("loadeddata", () => {
  video.play().then(() => {
    setTimeout(() => {
      video.pause();
      video.currentTime = 0;
    }, 120);
  }).catch(() => {});
});



  const overlay = document.createElement("div");
  overlay.classList.add("reel-overlay");

  wrapper.appendChild(video);
  wrapper.appendChild(overlay);

  /* ---------- Core Idea Logic ---------- */
  wrapper.addEventListener("click", () => {
    const reelMessages = CHAT.messages.filter(m => m.type === "reel");
    const reelIds = reelMessages.map(m => m.reelId);

    const startIndex = reelMessages.findIndex(
      m => m.reelId === message.reelId
    );

    setReelStack(reelIds, startIndex);
    openReelStack();
  });

  chatContainer.appendChild(wrapper);
}

/* ---------- Open Reel Stack ---------- */

function openReelStack() {
  renderReelStack();
  showView("reelStack");
}
