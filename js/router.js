/* =====================================
   SIMPLE VIEW ROUTER
   ===================================== */

const views = {
  chat: document.getElementById("chatView"),
  reelStack: document.getElementById("reelStackView")
};

const headerTitle = document.getElementById("headerTitle");
const backBtn = document.getElementById("backBtn");

/* ---------- View Switching ---------- */

function showView(viewName) {
  Object.keys(views).forEach(name => {
    if (name === viewName) {
      views[name].classList.remove("hidden");
      views[name].classList.add("active");
    } else {
      views[name].classList.remove("active");
      views[name].classList.add("hidden");
    }
  });

  updateHeader(viewName);
  setView(viewName);
}

/* ---------- Header Logic ---------- */

function updateHeader(viewName) {
  if (viewName === "chat") {
    headerTitle.textContent = USERS.friend.name;
    backBtn.classList.add("hidden");
  }

  if (viewName === "reelStack") {
    headerTitle.textContent = "Reels";
    backBtn.classList.remove("hidden");
  }
}

/* ---------- Back Button ---------- */

backBtn.addEventListener("click", () => {
  if (AppState.currentView === "reelStack") {
    showView("chat");
  }
});
