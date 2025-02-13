import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  
    <section class="home">
    <p class = "hey">Hey, I'm</p>
    <h1>Sergio Agulla</h1>
    
    <p>FullStack developer passionate about video games, movies, music, and sneakers. My goal? To create interactive, engaging, and accessible experiences that leave a lasting impression.Take a look to see how I combine my technical skills and creative passions to make web development truly exciting.</p>
    
    <a href="mailto:sergioap.mail@gmail.com">Say hi →</a>
    </section>`;
};


