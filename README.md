# Zariza Chowdhury portfolio

Static website for GitHub Pages. Files: index.html (content), style.css (look), script.js (mobile menu), assets/images/profile.jpg (photo), documents/CV.pdf (resume).

## Replace the photo and CV
Square JPG, about 600 x 600 px, named profile.jpg in assets/images/. Resume named CV.pdf in documents/. On GitHub, open the folder, choose Add file > Upload files, and upload a file with the same name. It replaces the old one.

## Publish
1. On github.com click New repository. Name it exactly zarizachow.github.io, set Public, click Create.
2. Click "uploading an existing file". Drag in everything from the unzipped folder (index.html, style.css, script.js, README.md and the assets and documents folders). Click Commit changes.
3. Go to Settings > Pages. Under Build and deployment choose Deploy from a branch, branch main, folder /(root), Save.
4. Wait 1 to 3 minutes. The site is at https://zarizachow.github.io

## Edit later
Open a file on GitHub and click the pencil icon, edit, then Commit changes. The site updates in a minute or two.
- New job or event: in index.html copy a whole <article class="entry"> block inside the Experience or Corporate Events section and change the text.
- New project: copy a whole <article class="case" id="..."> block in Key Projects. Give it a new unique id, for example id="my-project".
- Project link under a job or degree: add a link in that entry, such as <a href="#my-project">Project name</a>. The text after # must match the project id.
- Text, email and links: change them directly in index.html.
