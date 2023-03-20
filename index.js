
function showfullpicture(imagejpg, imageDescription) {

    imageUrl = "Gallery/"+imagejpg;

    const fullscreenImage = document.createElement('div');
    fullscreenImage.classList.add('full-screen-image');


    const imageDescriptionContainer = document.createElement('div');
    imageDescriptionContainer.textContent = imageDescription;
    imageDescriptionContainer.classList.add('image-description');

    const newLine = document.createElement('br');

    const closeImageButton = document.createElement('button');
    closeImageButton.classList.add('green-button');
    closeImageButton.textContent="close";



    closeImageButton.onclick = function () {
      document.body.removeChild(fullscreenImage);
    };
  
  
    const image = document.createElement('img');
    image.src = imageUrl;
    image.style.maxWidth= '700px';
    image.style.maxHeight='700px';
    image.style.borderRadius='20px';

    imageDescriptionContainer.appendChild(newLine);
    imageDescriptionContainer.appendChild(closeImageButton);
    fullscreenImage.appendChild(imageDescriptionContainer);
    fullscreenImage.appendChild(image);
    document.body.appendChild(fullscreenImage);
  }