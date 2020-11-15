module.exports = (artist, albums) => `
  <html>
    <head>
      <title>Reggeaton Albums</title>
      <link rel='stylesheet' href='/style.css'>
    </head>
    <body>
      <h1>Albums by ${artist}</h1>
      <ul id = 'artistList'>
        ${albums
          .map(
            (album) =>
              `<li class="artist"><img src=../${
                album.image
              }><span class='artistStyle'>${
                album.name
              }</span><div class='released'><span >Released: ${
                album.released.toLocaleString().split(',')[0]
              }</span></div></li>`
          )
          .join('')}
      </ul>
      <div class = 'back'><a href=/> Back to Artists</a></div>
    </body>
  </html>`;
