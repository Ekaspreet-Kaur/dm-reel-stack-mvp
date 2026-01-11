/* =====================================
   UTILITY FUNCTIONS
   ===================================== */

function createElement(tag, classNames = [], attributes = {}) {
  const el = document.createElement(tag);

  classNames.forEach(cls => el.classList.add(cls));

  Object.keys(attributes).forEach(key => {
    el.setAttribute(key, attributes[key]);
  });

  return el;
}

function debounce(fn, delay = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}
