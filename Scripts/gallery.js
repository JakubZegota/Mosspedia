const imagesArray = [
  img1 = { imgSource: "mosscloseup.jpg", description: "Moss in close-up" },
  img2 = { imgSource: "mosscloseup2.jpg", description: "Anther picture of moss in close-up" },
  img3 = { imgSource: "mossgarden.jpg", description: "Moss garden" },
  img4 = { imgSource: "mossgarden2.jpg", description: "Another moss garden" },
  img5 = { imgSource: "terrarium.jpg", description: "Moss terrarium" },
  img6 = { imgSource: "lakedistrict.jpg", description: "Moss in Lake District, UK" }
];

const galleryContainer = document.getElementById("galery-container");

let i = 0;
for (const image of imagesArray) {
  const imageElement = new Image();
  imageElement.src = "Gallery/" + image.imgSource;
  imageElement.alt = "image=" + image.imgSource;
  imageElement.classList.add("gallery-img");
  imageElement.addEventListener('click', function () {
    showfullpicture(image);
  });

  if (i==0){
    const imageDiv = document.createElement('div');
      imageDiv.classList.add('gallery-column');
      image.imageContainer = imageDiv;
      imageDiv.appendChild(imageElement);
      galleryContainer.appendChild(imageDiv);
  } else if (i<3){
    const previousImgIndex = imagesArray.indexOf(image) - i;
      imagesArray[previousImgIndex].imageContainer.appendChild(imageElement);
  } else{
    console.log("error with gallery container indexes");
  }
  i++;
  if (i === 3) i = 0;
}

function showfullpicture(img) {
  imageSrc = img.imgSource;
  imageDescription = img.description;
  imageUrl = "Gallery/" + imageSrc;
  const fullscreenImage = document.createElement('div');
  fullscreenImage.classList.add('full-screen-image');

  //IMAGE DESCRIPTION CONTAINER
  const imageDescriptionContainer = document.createElement('div');
  imageDescriptionContainer.textContent = imageDescription;
  imageDescriptionContainer.classList.add('image-description');

  //BUTTON TO CLOSE IMAGE
  const closeImageButton = document.createElement('button');
  closeImageButton.classList.add('red-button');
  closeImageButton.textContent = "close";
  closeImageButton.addEventListener('click', function () {
    document.body.removeChild(fullscreenImage);
  });


  //IMAGE ELEMENT
  const image = document.createElement('img');
  image.src = imageUrl;
  image.style.maxWidth = '700px';
  image.style.maxHeight = '700px';
  image.style.borderRadius = '20px';
  image

  //BUTTON FOR NEXT PICTURE
  const nextPictureButton = document.createElement('button');
  nextPictureButton.classList.add('green-button');
  nextPictureButton.textContent = "next";
  nextPictureButton.addEventListener('click', function () {
    document.body.removeChild(fullscreenImage);
    const nextPictureIndex = imagesArray.indexOf(img) + 1;
    let nextPicture;
    if (nextPictureIndex === imagesArray.length - 1) {
      nextPicture = imagesArray[0];
    } else {
      nextPicture = imagesArray[nextPictureIndex];
    }
    showfullpicture(nextPicture);
  });


  //BUTTON FOR PREVIOUS PICTURE
  const previousPictureButton = document.createElement('button');
  previousPictureButton.classList.add('green-button');
  previousPictureButton.textContent = "previous";
  previousPictureButton.addEventListener('click', function () {
    document.body.removeChild(fullscreenImage);
    const previousPictureIndex = imagesArray.indexOf(img) - 1;
    let previousPicture;
    if (previousPictureIndex === -1) {
      previousPicture = imagesArray[imagesArray.length - 1];
    } else {
      previousPicture = imagesArray[previousPictureIndex];
    }
    showfullpicture(previousPicture);
  });


  imageDescriptionContainer.appendChild(document.createElement('br'));
  imageDescriptionContainer.appendChild(previousPictureButton);
  imageDescriptionContainer.appendChild(nextPictureButton);
  imageDescriptionContainer.appendChild(document.createElement('br'));
  imageDescriptionContainer.appendChild(document.createElement('br'));
  imageDescriptionContainer.appendChild(closeImageButton);
  fullscreenImage.appendChild(imageDescriptionContainer);
  fullscreenImage.appendChild(image);
  document.body.appendChild(fullscreenImage);
}