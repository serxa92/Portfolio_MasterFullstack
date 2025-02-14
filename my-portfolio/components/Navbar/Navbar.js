import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector(".switch__input");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector(".switch__input");
  if (themeBtn.innerText === "☀️") {
    themeBtn.innerText = "🌙";
  } else {
    themeBtn.innerText = "☀️";
  }
};

export const Navbar = () => `
<nav>
<h2>Sergio Agulla</h2>
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <a href="#" id="aboutme">Me</a>
    </li>
    <li>
            <div class="switch">
        <input type="checkbox" class="switch__input" id="Switch">
        <label class="switch__label" for="Switch">
            <span class="switch__indicator"></span>
            <span class="switch__decoration"></span>
        </label>
    </div>

    </li>
</ul>
</nav>
`;
