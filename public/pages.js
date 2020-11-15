const express = require('express');
const { Artists, Albums } = require('../db');
const homepage = require('../public/homepage');
const albums1 = require('../public/albums');
const bestFriends = require('../public/bestFriends');
const router = express.Router();

router.get('/albums/:id', async (req, res, next) => {
  try {
    const albums = await Albums.findAll({
      where: {
        artistId: req.params.id,
      },
      include: [Artists],
    });
    res.send(albums1(albums[0].artist.name, albums));
  } catch (er) {
    console.log(er);
    res.redirect('/');
  }
});

router.get('/bestFriend/:id', async (req, res, next) => {
  try {
    const artist = await Artists.findAll({
      where: {
        bestFriendId: req.params.id,
      },
    });
    const target = await Artists.findByPk(req.params.id);
    console.log(artist);
    res.send(bestFriends(target.name, artist));
  } catch (er) {
    console.log(er);
    res.redirect('/');
  }
});

router.get('/', async (req, res, next) => {
  try {
    const artists = await Artists.findAll();
    res.send(homepage(artists));
  } catch (er) {
    console.log(er);
    res.redirect('/');
  }
});

module.exports = router;
