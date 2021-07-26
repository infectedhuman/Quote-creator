const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote')
const authorText=document.getElementById('author')
const twitterButton=document.getElementById('twitter')
const newQuoteBtn=document.getElementById('new-quote')
const loader=document.getElementById('loader');


let apiquotes = [];


//show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden=true;
}

function complete(){
    loader.hidden =true;
    quoteContainer.hidden=false;
}


//show new quotes

function newquotes() {
    loading();
    const quote=apiquotes[Math.floor(Math.random() * apiquotes.length)];
    console.log(quote);

    if(!quote.author){
        author.text.textContent="Anonymous";
    }
    else {  
    authorText.textContent = quote.author;
    }
    if(quote.text.length>50){
        quoteText.classList.add('long-quote');
    }
    else{  
        quoteText.classList.remove('long-quote');
}
quoteText.textContent = quote.text;
complete();
}


async function getquotes(){
    loading();
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiquotes=await response.json();
        console.log(apiquotes);
        newquotes();
    }catch(e){
        //catch error
    }
}

//tweet quotes on

    function tweetquotes(){
        const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
        window.open(twitterUrl,'_blank');
    }


//event listener


newQuoteBtn.addEventListener('click', newquotes);
twitterButton.addEventListener('click',tweetquotes);
getquotes();
