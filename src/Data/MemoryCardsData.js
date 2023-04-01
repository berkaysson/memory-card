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

importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));

export default images;