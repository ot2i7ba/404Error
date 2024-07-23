# Terminal Style 404 Error Page Template

This is a template for a 404 Error page styled to look like a terminal interface. It is inspired by Robin Selmer's 404 Template and modernized by me.

## Features

### index.html
- **Semantic HTML5 Structure**: Utilizes modern HTML5 elements for better semantics and accessibility.
- **Security Meta Tags**: Includes various security meta tags to enhance security and prevent common web vulnerabilities.
  - **Content-Security-Policy**: Restricts sources of content to prevent XSS attacks.
  - **Strict-Transport-Security**: Ensures the page is only accessed over HTTPS.
  - **Referrer-Policy**: Controls the information sent in the Referer header.
  - **X-Content-Type-Options**: Prevents MIME type sniffing.
  - **X-Frame-Options**: Prevents clickjacking by not allowing the page to be framed.
  - **X-XSS-Protection**: Enables the XSS filter built into most browsers.
- **Link to External JavaScript**: Includes `go-back.js` to provide "Go Back" functionality.

### styles.css
- **Normalize.css**: Ensures consistent rendering across all browsers by importing `normalize.css`.
- **Custom Fonts**: Uses the `Inconsolata` font, which is locally hosted to ensure GDPR compliance.
- **Root Variables**: Uses CSS variables for easy customization of colors, fonts, and other styles.
- **Responsive Design**: Includes media queries to ensure the page looks good on all devices.
- **Modern CSS Techniques**: Utilizes CSS Grid and Flexbox for layout and alignment.

### go-back.js
- **JavaScript DOMContentLoaded Event**: Ensures the script runs only after the DOM has fully loaded.
- **Event Listener for "Go Back" Link**: Adds a click event listener to the "Go Back" link that navigates to the previous page using the History API.
- **Error Handling**: Ensures no errors occur if JavaScript is not supported or enabled in the browser.

## Fonts
- **Inconsolata**: A monospaced font used to enhance the terminal-like appearance of the page. The font is hosted locally to ensure GDPR compliance.
  - Source: [Google Fonts - Inconsolata](https://fonts.google.com/specimen/Inconsolata)

## Techniques Used
- **HTML5 Semantic Elements**: Utilizes modern HTML5 elements like `<main>`, `<footer>`, etc.
- **CSS Variables**: Makes it easy to manage and customize styles.
- **CSS Grid and Flexbox**: Provides robust layout options.
- **JavaScript History API**: Used to navigate back to the previous page.

## Credits
- Inspired by [Robin Selmer's 404 Template](https://freefrontend.com/html-css-404-page-templates/)
  - **Original Source**: [CodePen by Robin Selmer](https://codepen.io/robinselmer/pen/vJjbOZ)
- **Normalize.css**: [Normalize.css by necolas](https://github.com/necolas/normalize.css)
- **Font**: [Inconsolata by Google Fonts](https://fonts.google.com/specimen/Inconsolata)
- **GIF**: [Giphy Image](https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif)

## Personal Note
This project is not only a practical 404 page for me but also a demo to help me re-familiarize myself with HTML, CSS, and JavaScript. I use these technologies infrequently, and this project allowed me to explore and understand recent developments and best practices in web development. Feel free to customize and use this template for your projects.
