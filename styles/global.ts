import { css } from "@emotion/react";

const global = css`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    @font-face {
        font-family: sans-serif;
        src: url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        unicode-range: U+AC00-D7A3;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #111;
        font-family: "Montserrat", sans-serif;
    }

    a {
        text-decoration: none;
        color: #111;
    }

    li {
        list-style: none;
    }
`;

export default global;
