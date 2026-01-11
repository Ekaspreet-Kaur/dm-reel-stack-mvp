/* =====================================
   MOCK DATA (Realistic)
   ===================================== */

const USERS = {
  currentUser: {
    id: "u1",
    name: "You"
  },
  friend: {
    id: "u2",
    name: "Radhaaa"
  }
};

const CHAT = {
  id: "chat_001",
  participants: ["u1", "u2"],
  messages: [
    {
      id: "m1",
      type: "text",
      sender: "u2",
      content: "Wanna eat something delicious? Check these out!"
    },
    {
      id: "m2",
      type: "reel",
      sender: "u2",
      reelId: "r1"
    },
    {
      id: "m3",
      type: "reel",
      sender: "u2",
      reelId: "r2"
    },
    {
      id: "m4",
      type: "reel",
      sender: "u2",
      reelId: "r3"
    },
    {
      id: "m5",
      type: "text",
      sender: "u1",
      content: "These look amazing! Let's order some."
    }
  ]
};

const REELS = {
  r1: {
    id: "r1",
    creator: "FoodieRiya",
    videoSrc: "./assets/reels/reel1.mp4",
    caption: "Authentic Indian food vibes 🍛"
  },
  r2: {
    id: "r2",
    creator: "BurgerKingdom",
    videoSrc: "./assets/reels/reel2.mp4",
    caption: "burger cravings be like 🍔"
  },
  r3: {
    id: "r3",
    creator: "YummyDaily",
    videoSrc: "./assets/reels/reel3.mp4",
    caption: "Yummy in my tummy!"
  }
};

