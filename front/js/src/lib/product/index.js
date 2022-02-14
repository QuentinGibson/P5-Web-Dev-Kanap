export function handleproductImage(imageElement) {
  const imageContainer = document.getElementsByClassName("item__img")[0];
  imageContainer.insertAdjacentHTML("beforeend", imageElement);
}
