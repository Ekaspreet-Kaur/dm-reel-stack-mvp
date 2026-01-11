/* =====================================
   REEL STACK VIEW (DM CONTEXT ONLY)
   ===================================== */

const reelStackContainer = document.getElementById("reelStackContainer");

/* ---------- Render Reel Stack ---------- */

function renderReelStack() {
  reelStackContainer.innerHTML = "";

  const { reelIds, startIndex } = AppState.reelStack;

  reelIds.forEach((reelId, index) => {
    const reelData = REELS[reelId];
    const reelEl = createReelElement(reelData, index);

    reelStackContainer.appendChild(reelEl);
  });

  // Scroll to the tapped reel
  requestAnimationFrame(() => {
    reelStackContainer.scrollTop =
      startIndex * window.innerHeight;
  });
}

/* ---------- Reel Element ---------- */

function createReelElement(reelData, index) {
  const reel = document.createElement("div");
  reel.classList.add("reel");

  const video = document.createElement("video");
  video.src = reelData.videoSrc;
  video.loop = true;
  video.playsInline = true;
  video.preload = "metadata";

  if (index === AppState.reelStack.startIndex) {
    video.autoplay = true;
  } else {
    video.autoplay = false;
  }

  const ui = document.createElement("div");
  ui.classList.add("reel-ui");

  const left = document.createElement("div");
  left.classList.add("reel-ui-left");

 const creator = document.createElement("div");
creator.classList.add("reel-creator");
creator.textContent = `@${reelData.creator}`;

const caption = document.createElement("div");
caption.classList.add("reel-caption");
caption.textContent = reelData.caption;

left.appendChild(creator);
left.appendChild(caption);

  const right = document.createElement("div");
  right.classList.add("reel-ui-right");

  right.innerHTML = `
    <div class="reel-action">
      ❤️
    </div>
    <div class="reel-action">
      💬
    </div>
    <div class="reel-action">
      🔗
    </div>
  `;

  ui.appendChild(left);
  ui.appendChild(right);

  const exitHint = document.createElement("div");
  exitHint.classList.add("reel-exit-hint");
  exitHint.textContent = "Swipe or tap back to return to chat";

  reel.appendChild(video);
  reel.appendChild(ui);
  reel.appendChild(exitHint);

  return reel;
}
