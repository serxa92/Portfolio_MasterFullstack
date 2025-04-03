import "./AboutMe.css";
import { cleanPage } from "../../utils/cleanPage";


export const AboutMe = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section id="about" class = "efecto">
    
        <img class = "yo" src="/images/silueta.png">
        <p class = "description">Hey there! I’m a FullStack developer from Galicia, Spain, with a huge passion for video games, movies, music, sneakers, and nature. Ever since I wrote my first line of code, I knew I wanted to create things that people can see, feel, and interact with.I love crafting smooth, dynamic, and accessible experiences—whether it’s a sleek interface, an engaging user interaction, or something that simply makes people go "Wow!". Every project is an opportunity to create something that resonates with people in a unique way.</p><p class = "description">Beyond coding, I draw inspiration from nature. Whether it’s a walk in the woods or just taking a moment to disconnect and recharge, there’s always something that motivates me. When I’m not working on projects, you’ll probably find me exploring new games, diving into movie soundtracks, or hunting for the next must-have sneakers.Let’s create something awesome!</p>
    </section>`;

  // Agregar efecto de cambio de imagen al pasar el ratón

  const img = document.querySelector(".yo");

  if (img) {
    img.addEventListener("mouseenter", () => {
      img.classList.add("fade");
      setTimeout(() => {
        img.src = "/images/Photoroom_20240813_190311.JPEG";
        img.classList.remove("fade");
      }, 300);
    });

    img.addEventListener("mouseleave", () => {
      img.classList.add("fade");
      setTimeout(() => {
        img.src = "/images/silueta.png";
        img.classList.remove("fade");
      }, 300);
    });
  }
};
