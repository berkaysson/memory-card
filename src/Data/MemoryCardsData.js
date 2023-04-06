// const images = [
//   {
//     id: 0,
//     name: "K-2SO",
//     imagePath: "/static/media/K-2SO.a9a8cf58762576fab18c.jpg",
//     selected: false,
//   },
//   {
//     id: 1,
//     name: "Ahsoka Tano",
//     imagePath: "/static/media/ahsoka.bdb98df088ab4d070daa.jpg",
//     selected: false,
//   },
//   {
//     id: 2,
//     name: "Anakin Skywalker",
//     imagePath: "/static/media/anakin.13a50fce9979b18a6505.jpg",
//     selected: false,
//   },
//   {
//     id: 3,
//     name: "Casian Andor",
//     imagePath: "/static/media/andor.be49a515be04b3092229.jpg",
//     selected: false,
//   },
//   {
//     id: 4,
//     name: "Asajj Ventress",
//     imagePath: "/static/media/asajj.caf4b709b30be214b439.jpg",
//     selected: false,
//   },
//   {
//     id: 5,
//     name: "BB-8",
//     imagePath: "/static/media/bb-8.56fb8ce46330e1ab4753.jpg",
//     selected: false,
//   },
//   {
//     id: 6,
//     name: "Boba Fett",
//     imagePath: "/static/media/bobafett.7d1059711a84dde9b4ce.jpg",
//     selected: false,
//   },
//   {
//     id: 7,
//     name: "Cad Bane",
//     imagePath: "/static/media/cadbane.ef7086e8191b6994b709.jpg",
//     selected: false,
//   },
//   {
//     id: 8,
//     name: "C3PO (CHAD)",
//     imagePath: "/static/media/chadc3po.43c3174d25597ed7e9d4.jpg",
//     selected: false,
//   },
//   {
//     id: 9,
//     name: "Chewbacca",
//     imagePath: "/static/media/chewbacca.bab3be84257e3f37278e.jpg",
//     selected: false,
//   },
//   {
//     id: 10,
//     name: "Kont Dooku",
//     imagePath: "/static/media/dooku.81289de499b7aa96ac25.jpg",
//     selected: false,
//   },
//   {
//     id: 11,
//     name: "General Grievous",
//     imagePath: "/static/media/grevious.505a19062d0ae92793d3.jpg",
//     selected: false,
//   },
//   {
//     id: 12,
//     name: "Grogu",
//     imagePath: "/static/media/grogu.103370198da4cc1df67b.jpg",
//     selected: false,
//   },
//   {
//     id: 13,
//     name: "Jabba the Hutt",
//     imagePath: "/static/media/jabba.96be34ccbda41474369f.jpg",
//     selected: false,
//   },
//   {
//     id: 14,
//     name: "Jyn Erso",
//     imagePath: "/static/media/jynerso.8084d467e4bc78cd0c67.jpg",
//     selected: false,
//   },
//   {
//     id: 15,
//     name: "Lando Calrissian",
//     imagePath: "/static/media/lando.570dd381d8d96edfab4a.jpg",
//     selected: false,
//   },
//   {
//     id: 16,
//     name: "Leia Organa",
//     imagePath: "/static/media/leia.57cc03943f5eb876bc5d.jpg",
//     selected: false,
//   },
//   {
//     id: 17,
//     name: "Luke Skywalker",
//     imagePath: "/static/media/luke.939efa59368d4f7f3a0c.jpg",
//     selected: false,
//   },
//   {
//     id: 18,
//     name: "Din Djarin",
//     imagePath: "/static/media/mando.d62743bc06cb3a86c678.jpg",
//     selected: false,
//   },
//   {
//     id: 19,
//     name: "Darth Maul",
//     imagePath: "/static/media/maul.dee199002f6ff80e0184.jpg",
//     selected: false,
//   },
//   {
//     id: 20,
//     name: "Obi wan Kenobi",
//     imagePath: "/static/media/obiwan.a504385e2c500f77095b.jpg",
//     selected: false,
//   },
//   {
//     id: 21,
//     name: "Padme Amidala",
//     imagePath: "/static/media/padme.025a42d31c64500f2656.jpg",
//     selected: false,
//   },
//   {
//     id: 22,
//     name: "Emperor Palpatine",
//     imagePath: "/static/media/palpatine.2b6d0680e5300de13dc4.jpg",
//     selected: false,
//   },
//   {
//     id: 23,
//     name: "Qui-gon Jinn",
//     imagePath: "/static/media/quikon.51ab95244a78431a345d.jpg",
//     selected: false,
//   },
//   {
//     id: 24,
//     name: "R2-D2",
//     imagePath: "/static/media/r2d2.687024ab46e86b12b95f.jpg",
//     selected: false,
//   },
//   {
//     id: 25,
//     name: "Captain Rex",
//     imagePath: "/static/media/rex.c8b6200a11d8ce8cbcee.jpg",
//     selected: false,
//   },
//   {
//     id: 26,
//     name: "Saw Gerrera",
//     imagePath: "/static/media/sawgerrera.493935bf509a0dd938d4.jpg",
//     selected: false,
//   },
//   {
//     id: 27,
//     name: "Han Solo",
//     imagePath: "/static/media/solo.4c14beb4a355cc280e56.jpg",
//     selected: false,
//   },
//   {
//     id: 28,
//     name: "Grand Moff Tarkin",
//     imagePath: "/static/media/tarkin.f15e6a2ec449263b4682.jpg",
//     selected: false,
//   },
//   {
//     id: 29,
//     name: "Darth Vader",
//     imagePath: "/static/media/vader.f15c91d49fab91b0f133.jpg",
//     selected: false,
//   },
//   {
//     id: 30,
//     name: "Mace Windu",
//     imagePath: "/static/media/windu.68f5d65d1570f5a2d361.jpg",
//     selected: false,
//   },
//   {
//     id: 31,
//     name: "Master Yoda",
//     imagePath: "/static/media/yoda.721b7546b26288ddb0d6.jpg",
//     selected: false,
//   },
// ];

const images = [];

function importAll(r) {
  let counter = 0;
  r.keys().forEach((key) => {
    images.push({
      id: counter,
      name: key.replace('./', '').split('.')[0],
      imagePath: r(key),
      selected:false,
    });
    counter++
  });
}

importAll(require.context('./Images/Cards', false, /\.(png|jpe?g|svg)$/));

export default images;
