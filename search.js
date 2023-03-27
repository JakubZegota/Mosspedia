const websitesArray = [
    src1 = { websiteLink: "index.html", websiteName: "Homepage" },
    src2 = { websiteLink: "gallery.html", websiteName: "Gallery" },
    src3 = { websiteLink: "usefullinks.html", websiteName: "Useful Links" },
    src4 = { websiteLink: "whymosses.html", websiteName: "Why mosses" },
];

function searchWebsite() {
    const inputText = document.getElementById("searchInput").value;

    for (let website of websitesArray) {
        fetchWebsite(website.websiteLink)
            .then(websiteContent => {
                if (websiteContent.toLowerCase().includes(inputText.toLowerCase())) {
                    console.log(inputText, website.websiteName);
                    searchOutput(inputText.toLowerCase(), websiteContent.toLowerCase());
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}

function fetchWebsite(websiteURL) {
    return fetch(websiteURL)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            return doc.querySelector('article').innerText;
        })
        .catch(error => {
            console.log(error);
            return "error";
        });
}

function searchOutput(phrase, textToScan) {
    containingText = textToScan.replace(/\s{2,}/g, " ");
    const leftPosition = containingText.indexOf(phrase);

    let startPositon = leftPosition - 20;
    let lengthOfString = phrase.length + 40;
    let outputText;
  
    if (startPositon < 0) {
        startPositon = 0;
    }
    
    if (startPositon+lengthOfString > containingText.length){
        outputText = "..." + containingText.substr(startPositon)+"...";
    }else{
        outputText = "..." + containingText.substr(startPositon, lengthOfString) + "...";
    }

    console.log(outputText);

}