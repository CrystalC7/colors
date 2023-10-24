const multipler = [
  {
    title: "High",
    colors: ["#FF4949", "#525A71"],
  },
  {
    title: "medium",
    colors: ["#525A71", "#5162FF", "#7F30FF", "#24CB85", "#FFDF63", "#FF4949"],
  },

  {
    title: "Low",
    colors: ["#525A71", "#7F30FF", "#24CB85"],
  },
];

const multiplier = (colors, title) => {
  const element = document.createElement("li");
  element.innerHTML = ` 
    <div class="division">
        <h3>${title}</h3>
        <ul>
        ${colors
          .map(
            (hex) =>
              `<li class="multiplier">
            <div  id='${hex}' style="background-color: ${hex};" class=""></div>
            <p>${hex}</p>
          </li>
          `
          )
          .join("")}
        </ul>
      </div>
    `;

  element.querySelectorAll("div").forEach((el) => {
    el.addEventListener("click", () => copy(el.id));
  });

  return element;
};

const copy = (color) => {
  const copiedText = color;
  const toas = document.querySelector(".toast");
  toas.classList.add("toast-visible");

  if (color.length > 0) {
    navigator.clipboard
      .writeText(copiedText)
      .then(() => {})
      .catch((e) => console.log(e));
  }

  setTimeout(() => {
    toas.classList.remove("toast-visible");
  }, 500);
};

const printMutipliers = () => {
  const container = document.querySelector(".container");
  multipler.forEach((m) => {
    container.appendChild(multiplier(m.colors, m.title));
  });
};
printMutipliers();
