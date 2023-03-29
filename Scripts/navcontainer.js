const tabArray = [
    tab1 = { tabHref: "index.html", tabName: "Homepage" },
    tab2 = { tabHref: "whymosses.html", tabName: "Why mosses" },
    tab3 = { tabHref: "gallery.html", tabName: "Gallery" },
    tab4 = { tabHref: "usefullinks.html", tabName: "Useful links" },
    tab5 = { tabHref: "articles.html", tabName: "Articles" }
];



function generateNavContainer(currentTab) {
    const navContainer = document.getElementById('nav-container');
    navContainer.classList.add('nav-container');

    const logo = document.createElement('img');
    logo.classList.add("logo");
    logo.src = "Resources/logo.png";
    navContainer.appendChild(logo);

    for (let tab of tabArray) {
        if (tab.tabHref !== currentTab) {
            const tabElement = document.createElement('a');
            tabElement.href = tab.tabHref;
            const buttonElement = document.createElement('button');
            buttonElement.classList.add('green-button');
            buttonElement.textContent = tab.tabName;
            tabElement.appendChild(buttonElement);
            navContainer.appendChild(tabElement);
        } else {
            const buttonElement = document.createElement('button');
            buttonElement.classList.add('green-button-current');
            buttonElement.textContent = tab.tabName;
            navContainer.appendChild(buttonElement);

        }
    }

    const div = document.createElement('div');
div.style.marginLeft = 'auto';

const input = document.createElement('input');
input.id = 'searchInput';
input.type = 'text';
div.appendChild(input);

const button = document.createElement('button');
button.classList.add('green-button');
button.textContent = 'Search';
button.onclick = function() {
  searchWebsite();
};
div.appendChild(button);

const script = document.createElement('script');
script.src = 'Scripts/search.js';
div.appendChild(script);

    // const div = document.createElement('div');
    // div.style.marginLeft = 'auto';
    // const input = document.createElement('input');
    // input.id = 'searchInput';
    // input.type = 'text';
    // div.appendChild(input);
    // const button = document.createElement('button');
    // button.classList.add('green-button');
    // button.textContent = 'Search';
    // button.onclick = "searchWebsite()";
    // div.appendChild(button);
    // const script = document.createElement('script');
    // script.src = 'Scripts/search.js';
    // div.appendChild(script);

    navContainer.appendChild(div);

}

