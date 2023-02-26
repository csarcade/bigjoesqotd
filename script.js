const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author-name"),
quoteBtn = document.querySelector("button"),
sourceBtn = document.querySelector(".source"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
quoteList = "data/quotes.json";

//function to fetch the quote from API
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";
    //Fetching the random quote from API and then parsing the JSON into usable data
    fetch(quoteList).then(res => res.json()).then(result =>{
        quoteText.innerText = result.quote;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

sourceBtn.addEventListener("click", ()=> {
    window.open(result.link, "_blank"); //opens a new tab to the TikTok source video
});

copyBtn.addEventListener("click", ()=> {
    //Copies the quote to the users clipboard on copyBtn click
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=> {
    let tweetUrl = 'https://twitter.com/intent/tweet?url=' + quoteText.innerText;
    window.open(tweetUrl, "_blank"); //opens a new tab to Twitter passing the quote in the url
});

quoteBtn.addEventListener("click", randomQuote);