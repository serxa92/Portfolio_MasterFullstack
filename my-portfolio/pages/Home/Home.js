import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  
  
    
    <section class="home">
    
    <p class = "hey">Hey, I'm</p>
    <h1>Sergio Agulla</h1>
    
    <p>FullStack developer passionate about video games, movies and sneakers.Take a look to see how I combine my technical skills and creative passions to make web development truly exciting.</p>
  
    </section>${Divider()}`;
};


