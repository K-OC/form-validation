// import { a } from "@react-spring/web";
import { createGlobalStyle } from "styled-components";
export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
:root {
    
    --header-font: "Mandali";

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}

}

html, body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
}

body {
    background-color: #b085f5;

}

a {
  text-decoration: none;
  color: blue;
  cursor: pointer;
}
`;

