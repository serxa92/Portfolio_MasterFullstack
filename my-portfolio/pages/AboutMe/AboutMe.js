import "./AboutMe.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/index.js";

export const AboutMe = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
  
    <section id="about">
  <div class="bento-about">
    
    <div class="bento-box quote">
      <p>"I build cool stuff.<br>Things that feel alive, useful and unique. I draw inspiration from nature. Whether it’s a walk in the woods or just taking a moment to disconnect and recharge, there’s always something that motivates me. When I’m not working on projects, you’ll probably find me exploring new games, diving into movie soundtracks, or hunting for the next must-have sneakers."</p>
    </div>

    
    <div class="bento-box-avatar">
      <img src="/images/Photoroom_20240813_190311.JPEG" alt="Sergio Agulla" class="yo" />
    </div>

    
    <div class="bento-box interests">
      <ul>
        <li><a href = "https://www.twitch.tv/serxa92">Watch me gaming here <img src="icons/enlace.png" alt="enlace externo"/></a></li>
        <li><a href = "https://www.instagram.com/4orty6icks/">Sneakers IG <img src="icons/enlace.png" alt="enlace externo"/></a></li>
        <li><a href = "https://open.spotify.com/user/serxa92?si=b592a9858f8e42ba">My Spotify profile <img src="icons/enlace.png" alt="enlace externo"/></a></li>
      </ul>
    </div>
  </div>
</section>${Divider()}


  `;
};
