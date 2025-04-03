import "./styles.css";
import { Button } from "../Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/github.jpg", "GitHub","https://github.com/serxa92")}
${Button("/icons/linkedin.jpg", "LinkedIn","https://www.linkedin.com/in/sergio-agulla/")}
</div>
`;