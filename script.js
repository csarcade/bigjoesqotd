const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author-name"),
quoteBtn = document.querySelector(".qBtn"),
sourceBtn = document.querySelector(".source"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
dropdown = document.querySelector(".collapsible");;
let oldIndex = 0;

// Function to fetch the quote from API
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";
    
    // Fetching the random quote from API and then parsing the JSON into usable data
    fetch("https://csarcade.github.io/bigjoesqotd/data/quotes.json").then(res => res.json()).then(result =>{
        obj = result.quotes;
        randIndex = Math.floor(Math.random() * obj.length);
        // Simple way to prevent selecting the same index back to back
        if(randIndex == oldIndex) {
            randomQuote;
        } else {
            oldIndex = randIndex;
        };
        selObject = obj[randIndex];
        
        quoteText.innerText = selObject["quote"];
        authorName.innerText = selObject["author"];
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

window.onload = randomQuote;

sourceBtn.addEventListener("click", ()=> {
    // Opens a new tab to the TikTok source video
    open(selObject["link"], "_blank");
});

copyBtn.addEventListener("click", ()=> {
    // Copies the quote to the users clipboard on copyBtn click
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=> {
    let tweetUrl = 'https://twitter.com/intent/tweet?url=' + quoteText.innerText + " -" + authorName.innerText;
    // Opens a new tab to Twitter passing the quote in the url
    open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);

dropdown.addEventListener("click", () => {
    let content = dropdown.nextElementSibling;
    if(content.style.display === "block") {
        dropdown.style.transform = "rotate(0deg)";
        dropdown.style.transition = "transform 0.1s linear";
        content.style.display = "none";
    } else {
        dropdown.style.transform = "rotate(90deg)";
        dropdown.style.transition = "transform 0.1s linear";
        content.style.display = "block";
    }
});