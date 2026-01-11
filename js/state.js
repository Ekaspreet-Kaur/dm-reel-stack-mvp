/* =====================================
   GLOBAL APP STATE
   ===================================== */

const AppState = {
  currentView: "chat", // "chat" | "reelStack"
  activeChatId: CHAT.id,

  reelStack: {
    reelIds: [],
    startIndex: 0
  }
};

/* ---------- State Helpers ---------- */

function setView(viewName) {
  AppState.currentView = viewName;
}

function setReelStack(reelIds, startIndex = 0) {
  AppState.reelStack.reelIds = reelIds;
  AppState.reelStack.startIndex = startIndex;
}
