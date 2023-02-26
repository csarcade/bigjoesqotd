const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author-name"),
quoteBtn = document.querySelector("button"),
sourceBtn = document.querySelector(".source"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");
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