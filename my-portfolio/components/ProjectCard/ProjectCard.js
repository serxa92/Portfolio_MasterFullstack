import "./ProjectCard.css";
import { Button } from "../Button/Button";

export const ProjectCard = (project) => `
<div class="efectito">
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>


</a>
</div>
</div>
<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
<div class  = "botones-card"><a href=${project.github}>
<img src="/icons/github.jpg" alt="GitHub Icon" />
</a>
<a href=${project.link}>
<img src="./public/icons/adjunto.jpg" alt="Link icon" />
</a></div>
</div>
</div>
</div>
`;
