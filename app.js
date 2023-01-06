var translateBtn = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

//console.log(textInput);
// this console.log is used because it will print the value and we will fetch this below

function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured, please try after some time");
    alert("something wrong happened with server");
}

function clickEventHandler(){
     var inputText = textInput.value;

     fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var transaltedText = json.contents.translated;
            outputDiv.innerText = transaltedText;
        })
        .catch(errorHandler)
}

translateBtn.addEventListener("click",clickEventHandler);


