import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("./public/icons/github.jpg", "GitHub","https://github.com/serxa92")}
${Button("./public/icons/linkedin.jpg", "LinkedIn","https://www.linkedin.com/in/sergio-agulla/")}
</div>
`;