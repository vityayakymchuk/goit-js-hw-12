export function createGallery(images) {
    const list = document.querySelector(".gallery");
    const markup = images.map(image => {
        return `<li class="list-item"><a href="${image.largeImageURL}">
        <img class="item-img" loading="lazy"     src="${image.webformatURL}" alt="${image.tags}"></a>  
        <div class="container">
        <h3 class="title">Likes</h3>
      <p>${image.likes}</p></div >
      <div class="container">
        <h3 class="title">Views</h3>
      <p>${image.views}</p></div >
      <div class="container">
        <h3 class="title">Comments</h3>
      <p>${image.comments}</p></div >
      <div class="container">
        <h3 class="title">Downloads</h3>
      <p class="info">${image.downloads}</p></div >
        </li>`
    }).join("");
    list.insertAdjacentHTML('beforeend', markup);
}
