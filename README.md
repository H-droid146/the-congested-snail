# The Congested Snail — Upgrade Pack
THIS WAS CREATED WITH AI
A responsive browser-game hub built with plain HTML, CSS, and JavaScript. No build tools, framework, server, or API key are required.

## What's included
- Expanded library of external browser games across Arcade, Racing, Puzzle, Action, Strategy, Sports, Multiplayer, Casual, and Word categories
- Live search across titles, genres, and descriptions
- Random-game surprise button
- Favorites, up to 12 recently played games, and clear-history control
- Five built-in games: Snail Trail, Match Stack, Click Dash, Reaction Rush, and Tiny Tic-Tac-Toe
- Game suggestion box with local saving, removal, and copy-to-share support
- Dark/light theme preference saved in the browser
- Responsive layouts, touch-friendly controls, keyboard support, and reduced-motion support
- Links to the Chat and Zen XYZ Google Sites pages provided by the site owner

## Important note about game requests
Suggestions are saved only in the visitor's current browser using local storage. They are **not automatically sent to the site owner** because this static GitHub Pages site has no server or form-submission service. Visitors can use **Copy saved suggestions** to copy and send them manually.

## Publish or update on GitHub Pages
1. Download and unzip the project.
2. Open the `the-congested-snail` folder.
3. In your GitHub repository, open the existing site files.
4. Upload/replace `index.html`, `styles.css`, `script.js`, and `README.md` in the same folder where your current `index.html` lives (usually the repository root). Do not upload the outer folder itself unless your Pages setup is configured to publish from that folder.
5. Commit the changes, wait a minute or two, then refresh your GitHub Pages site. A hard refresh (`Ctrl+Shift+R`) can help if an old CSS or JavaScript version is cached.

GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Run locally
Open `index.html` in a modern browser. GitHub Pages is recommended for the intended experience.

## Customize the library
Edit the `GAMES` array near the top of `script.js`. Each item uses a unique `id`, `title`, `category`, `description`, `symbol`, two `colors`, `kind` (`builtin` or `external`), and a `badge`; external games also need a `url`. Built-in game logic is handled by the rendering functions later in `script.js`.

## Access note
External sites may change, require accounts, or be unavailable on particular networks. This project does not hide traffic or bypass network controls; use sites permitted by your school or network administrator.


## Google Sites
Keep GitHub Pages as the hosted game library, then embed or link to https://h-droid146.github.io/the-congested-snail/ from Google Sites. To use a custom Google Sites address, publish the site and choose an available web address in Google Sites settings; availability and school-account restrictions are controlled by Google Workspace administrators.
