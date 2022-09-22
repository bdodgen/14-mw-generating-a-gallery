const galleryDataArr = [["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg", "London"], ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"], ["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg", "New York"], ["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg", "Nova Scotia"], ["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg", "Tokio"], ["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg", "Venice"]]

// this looks at every sub-array in galleryDataArr, generates an HTML img tag, then concatenate the tag into the gallery in index.html

galleryDataArr.forEach(element => {
  let newImg = '<img src=' + element[0] + ' alt=' + element[1] + '>'
  document.querySelector('.gallery').innerHTML += newImg
});
