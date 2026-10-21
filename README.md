# The Congested Snail

A responsive, dark-themed browser gaming portal made with plain HTML, CSS, and JavaScript.

## Included
- Search by game title, category, or description
- Category filters, favorites, and recent-play history
- Local storage for favorites, recent games, and theme preference
- Built-in Snail Trail (Snake-style) and Match Stack (memory matching) games
- Links to external browser-game platforms
- Responsive layout for desktop and mobile
- No build tools, framework, server, or API key required

## Run it on your computer
1. Download and unzip `the-congested-snail.zip`.
2. Open the folder.
3. Double-click `index.html` to open it in a browser.

Some browsers restrict features when opening local files, but the built-in games should work. For the intended experience, use GitHub Pages.

## Publish with GitHub Pages (free)
1. Sign in at https://github.com/ and create a **new public repository** named `the-congested-snail` (or another name you like).
2. Upload `index.html`, `styles.css`, and `script.js` to the repository root. You can also upload `README.md`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. Wait a minute or two, then revisit Settings → Pages for the published URL. It usually looks like `https://YOUR-USERNAME.github.io/the-congested-snail/`.
7. Open the URL and test search, favorites, the two built-in games, and external links.

GitHub's menus can change; use its current Pages documentation if a menu label differs:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Add it to Google Sites
Google Sites is a separate product and cannot host these source files as a normal custom-code website. Once your GitHub Pages site is published:
1. Open your Google Site in edit mode.
2. Select **Insert → Button**.
3. Set button text to `Play The Congested Snail`.
4. Paste your GitHub Pages URL.
5. Publish the Google Site.

You can also use **Insert → Embed → By URL** to try embedding the GitHub Pages URL, but Google Sites or browser security policies may prevent it from displaying inside the page. A button link is the reliable fallback.

## School access note
This site does not conceal traffic or bypass network controls. A school network may block GitHub Pages, individual game providers, or embedded content. Use only websites and games permitted by your school's rules and ask school IT/your teacher if you need an approved exception.

## Customize the library
Edit the `GAMES` array near the top of `script.js`. Each game object has:
- `id`: unique short identifier
- `title`: visible title
- `category`: Arcade, Racing, Puzzle, Action, or Strategy
- `description`: short summary
- `symbol`: emoji used for the card artwork
- `colors`: two background colors
- `kind`: `builtin` for built-in games, `external` for external links
- `url`: required for external games
- `badge`: small label on the cover

External sites may change or restrict access over time. Check links before sharing the site.


### Added links

The library and external-sites section now include the Chat and Zen XYZ Google Sites URLs supplied by the site owner. These links open in a new tab; their availability depends on the network and site settings.
