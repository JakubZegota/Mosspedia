const articlesArray = [
    art1 = { artName: "Moss lawns", artSrc: "mosslawns.txt" },
    art2 = { artName: "Green roofs and walls", artSrc: "roofsandwalls.txt" },
    art3 = { artName: "Aquascaping", artSrc: "aquascaping.txt" },
    art4 = { artName: "Life cycle of moss", artSrc: "lifecycle.txt" },
    art5 = { artName: "Moss bioreactors", artSrc: "bioreactors.txt" },
    art6 = { artName: "History of moss", artSrc: "history.txt" },
    art7 = { artName: "History of moss", artSrc: "history.txt" }
];

const previousButtonContainer = document.getElementById("previous-article-button");
const nextButtonContainer = document.getElementById("next-article-button");
const primaryArticle = document.getElementById("primary-article");
const articleContainer = document.getElementById("secondary-article");
const secondaryArticle = document.createElement('span');

// const articleButton = document.createElement("button");

let currentArticle = articlesArray[Math.floor(articlesArray.length / 2)];

//PREVIOUS ARTICLE BUTTON
const previousArticleButton = document.createElement('button');
previousArticleButton.classList.add('green-button');
previousArticleButton.textContent = "previous";
previousArticleButton.addEventListener('click', function () {
    if (articlesArray.indexOf(currentArticle) > 0) {
        const newIndex = articlesArray.indexOf(currentArticle) - 1;
        currentArticle = articlesArray[newIndex];
    } else {
        currentArticle = articlesArray[articlesArray.length - 1];
    }
    articleContainer.textContent = currentArticle.artName;
    readFile("Articles/" + currentArticle.artSrc, function (error, fileContent) {
        if (error) {
            console.error(error);
        } else {
            primaryArticle.innerHTML = fileContent.replace(/\n/g, "<br>");
        }
    });
    
});

//NEXT ARTICLE BUTTON
const nextArticleButton = document.createElement('button');
nextArticleButton.classList.add('green-button');
nextArticleButton.textContent = "next";
nextArticleButton.addEventListener('click', function () {
    if (articlesArray.indexOf(currentArticle) < articlesArray.length - 1) {
        const newIndex = articlesArray.indexOf(currentArticle) + 1;
        currentArticle = articlesArray[newIndex];
    } else {
        currentArticle = articlesArray[0];
    }
    articleContainer.textContent = currentArticle.artName;
    readFile("Articles/" + currentArticle.artSrc, function (error, fileContent) {
        if (error) {
            console.error(error);
        } else {
            primaryArticle.innerHTML = fileContent.replace(/\n/g, "<br>");
        }
    });
    

});


previousButtonContainer.appendChild(previousArticleButton);
nextButtonContainer.appendChild(nextArticleButton);
articleContainer.textContent = currentArticle.artName;

readFile("Articles/" + currentArticle.artSrc, function (error, fileContent) {
    if (error) {
        console.error(error);
    } else {
        primaryArticle.innerHTML = fileContent.replace(/\n/g, "<br>");
    }
});


function readFile(articleSrc, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        const fileContent = xhr.responseText;
        callback(null, fileContent);
    };

    xhr.onerror = function () {
        const errorMessage = "An error occurred while reading the file.";
        callback(errorMessage, null);
    };

    xhr.open("GET", articleSrc);
    xhr.send();
}
