import "./styles.css";

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
// Espera a que el documento HTML se haya cargado completamente antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {

  // Selecciona todos los enlaces dentro de la lista de navegación
  const links = document.querySelectorAll("nav ul li a");

  // Recorre cada enlace y le añade un evento de escucha al hacer clic
  links.forEach((link) => {
    link.addEventListener("click", function () {

      // Recorre todos los enlaces y elimina la clase 'active' para asegurarse de que solo un enlace esté activo a la vez
      links.forEach((item) => item.classList.remove("active"));

      // Agrega la clase 'active' únicamente al enlace que ha sido clicado
      this.classList.add("active");
    });
  });

});


export const Navbar = () => `
<nav>
<h2>Sergio Agulla</h2>
<ul>
    <li>
        <a href="#" id="homelink" class="active">Home</a>
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
