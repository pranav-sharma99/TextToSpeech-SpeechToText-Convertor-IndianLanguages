const recognition = new webkitSpeechRecognition();
let selectedLanguage = "en-IN";
recognition.lang= selectedLanguage;

function changeLanguage() {
    selectedLanguage = document.querySelector('#languageSelect').value;
    recognition.lang = selectedLanguage;
}

let btn1= document.querySelector("#startlisten");
btn1.onclick =()=>{
    recognition.start();
}

let btn2= document.querySelector("#stoplisten");
btn2.onclick =()=>{
    recognition.stop();
}

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('output').innerHTML = `<p>You said: ${transcript}</p>`;
};

let btn3=document.querySelector("#speak");
btn3.onclick=()=>{
    const textToSpeak = document.querySelector('#textArea').value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = selectedLanguage;
    speechSynthesis.speak(utterance);
}
