const galleryDataArr = [["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg", "London"], ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"], ["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg", "New York"], ["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg", "Nova Scotia"], ["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg", "Tokio"], ["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg", "Venice"]]

// this looks at every sub-array in galleryDataArr, generates an HTML img tag, then concatenate the tag into the gallery in index.html

let gallery = document.querySelector('.gallery')

galleryDataArr.forEach(image => {
  gallery.innerHTML += `
  <div class="image">
    <img src="${image[0]}" alt=${image[1]}>
    <div class="image__description">${image[1]}</div>
  </div>
  `
});



