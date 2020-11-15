module.exports = (target, artists) => `
  <html>
    <head>
      <title>Reggeaton Albums</title>
      <link rel='stylesheet' href='/style.css'>
    </head>
    <body>
      <h1>Best Friends of ${target}!!</h1>
      <ul id = 'artistList'>
        ${
          artists.length === 0
            ? `Sorry ${target} doesn't have any friends`
            : artists
                .map(
                  (artist) =>
                    `<li class="artist"><img src=../${artist.image}><span class='artistStyle'>${artist.name}</span></li>`
                )
                .join('')
        }
      </ul>
      <div class = 'back'><a href=/> Back to Artists</a></div>
    </body>
  </html>`;
