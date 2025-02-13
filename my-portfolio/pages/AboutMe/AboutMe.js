import "./AboutMe.css";
import { cleanPage } from "../../utils/cleanPage";
import { Button } from "../../components/Button/Button";

export const AboutMe = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  
      <section id="about" class = "efecto">
        <h2 class = "about2">Know Me</h2>
        <img class = "yo" src="/images/Photoroom_20240813_190311.JPEG">
        <p class = "description">Hey there! I’m a FullStack developer from Galicia, Spain, with a huge passion for video games, movies, music, sneakers, and nature. Ever since I wrote my first line of code, I knew I wanted to create things that people can see, feel, and interact with.

I love crafting smooth, dynamic, and accessible experiences—whether it’s a sleek interface, an engaging user interaction, or something that simply makes people go "Wow!". Every project is an opportunity to create something that resonates with people in a unique way.

Beyond coding, I draw inspiration from nature. Whether it’s a walk in the woods or just taking a moment to disconnect and recharge, there’s always something that motivates me. When I’m not working on projects, you’ll probably find me exploring new games, diving into movie soundtracks, or hunting for the next must-have sneakers.

Let’s create something awesome!🚀${Button("/icons/instagram.png", "Instagram","https://www.instagram.com/sergioagulla/")}</p>
    </section>`;
};
