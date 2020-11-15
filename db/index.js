const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4, DATE } = Sequelize;
const conn = new Sequelize('postgres://localhost/reggeaton_sequelize');

const Artists = conn.define('artist', {
  id: {
    type: UUID,
    primaryKey: true,
    notNull: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    notNull: true,
  },
  image: {
    type: STRING,
    notNull: true,
  },
});

const Albums = conn.define('album', {
  id: {
    type: UUID,
    primaryKey: true,
    notNull: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    notNull: true,
  },
  released: {
    type: DATE,
    isDate: true,
  },
  image: {
    type: STRING,
    notNull: true,
  },
});

Albums.belongsTo(Artists);
Artists.hasMany(Albums);
Artists.belongsTo(Artists, { as: 'bestFriend' });

const sync = async () => {
  await conn.sync({ force: true });
  const [
    jBalvin,
    badBunny,
    ozuna,
    oasis,
    colores,
    vibras,
    yhlqmdlg,
    x100pre,
    oasis1,
    aura,
    nibiru,
    enoc,
  ] = await Promise.all([
    Artists.create({ name: 'J Balvin', image: 'jbalvin.jpg' }),
    Artists.create({ name: 'Bad Bunny', image: 'badbunny.jpeg' }),
    Artists.create({ name: 'Ozuna', image: 'ozuna.jpeg' }),
    Albums.create({
      name: 'Oasis',
      released: 'June 28, 2019',
      image: 'oasis.jpeg',
    }),
    Albums.create({
      name: 'Colores',
      released: 'March 19, 2020',
      image: 'colores.jpeg',
    }),
    Albums.create({
      name: 'Vibras',
      released: 'May 25, 2018',
      image: 'vibras.png',
    }),
    Albums.create({
      name: 'YHLQMDLG',
      released: 'February 29, 2020',
      image: 'YHLQMDLG.jpeg',
    }),
    Albums.create({
      name: 'X100PRE',
      released: 'December 24, 2018',
      image: 'X100PRE.jpeg',
    }),
    Albums.create({
      name: 'Oasis',
      released: 'June 28, 2019',
      image: 'oasis.jpeg',
    }),
    Albums.create({
      name: 'Aura',
      released: 'November 29, 2019',
      image: 'aura.jpeg',
    }),
    Albums.create({
      name: 'Nibiru',
      released: 'November 29, 2019',
      image: 'nibiru.jpeg',
    }),
    Albums.create({
      name: 'Enoc',
      released: 'September 4, 2020',
      image: 'enoc.png',
    }),
  ]);

  badBunny.bestFriendId = ozuna.id;
  ozuna.bestFriendId = badBunny.id;
  jBalvin.bestFriendId = badBunny.id;
  oasis.artistId = jBalvin.id;
  colores.artistId = jBalvin.id;
  vibras.artistId = jBalvin.id;
  yhlqmdlg.artistId = badBunny.id;
  x100pre.artistId = badBunny.id;
  oasis1.artistId = badBunny.id;
  aura.artistId = ozuna.id;
  nibiru.artistId = ozuna.id;
  enoc.artistId = ozuna.id;

  await Promise.all([
    badBunny.save(),
    ozuna.save(),
    jBalvin.save(),
    oasis.save(),
    colores.save(),
    vibras.save(),
    yhlqmdlg.save(),
    x100pre.save(),
    oasis1.save(),
    aura.save(),
    nibiru.save(),
    enoc.save(),
  ]);
};

module.exports = { sync, Artists, Albums };
