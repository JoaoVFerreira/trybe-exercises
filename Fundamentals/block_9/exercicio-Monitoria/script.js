
const getDogPicture = async () => {
  const endpoint = 'https://dog.ceo/api/breeds/image/random';

  const request = await fetch(endpoint);
  const response = await request.json();
  return await response.message;
}

getDogPicture();


const createPicture = async () => {
  const img = document.createElement("img");
  const body = document.querySelector("body");
  img.src = await getDogPicture();

  body.appendChild(img);
}

createPicture();


const getButtonDog = document.getElementById("btn-dog");
const generateRandomImageClick = getButtonDog.addEventListener(("click", async () => {
  const body = document.querySelector("body");
  const img = document.querySelector("img");
  body.removeChild(img);

  return await createPicture();

}))



//window.onload = createPicture();