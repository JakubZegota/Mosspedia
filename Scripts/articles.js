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
const articleContainer = document.getElementById("secondary-article");
const secondaryArticle = document.createElement('span');

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
});

//NEXT ARTICLE BUTTON
const nextArticleButton = document.createElement('button');
nextArticleButton.classList.add('green-button');
nextArticleButton.textContent = "next";
nextArticleButton.addEventListener('click', function(){
    if (articlesArray.indexOf(currentArticle) < articlesArray.length-1) {
        const newIndex = articlesArray.indexOf(currentArticle) + 1;
        currentArticle = articlesArray[newIndex];
    } else {
        currentArticle = articlesArray[0];
    }
    articleContainer.textContent = currentArticle.artName;

});

previousButtonContainer.appendChild(previousArticleButton);
nextButtonContainer.appendChild(nextArticleButton);
articleContainer.textContent = currentArticle.artName;