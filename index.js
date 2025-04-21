const text = document.querySelector(".anim");
text.innerHTML = text.textContent
  .split("")
  .map(char => `<span class="char">${char}</span>`)
  .join("");