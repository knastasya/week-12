let username = document.getElementById('name');
const button = document.getElementById('button');
let sendComment = document.getElementById('enterName');
let url = document.getElementById('href');
let avatar = document.getElementById('avatar');
let writeText = document.getElementById('text');
let sendText = document.getElementById('enterText');
const form = document.getElementById("form");

//учёт регистра для фио
function capitalize(x) {
    return x.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
} 

button.addEventListener('click', function() {
    let inputUserName = username.value;
    let inputUserNameResult = inputUserName[0].toUpperCase() + inputUserName.substring(1).toLowerCase();
    sendComment.textContent = capitalize(inputUserNameResult);  
    
    //подключение аватара в комментарии
    avatar.src = url.value;  

    //тест комментария
    let inputText = writeText.value;
    sendText.textContent = inputText;
    
    let textAntiSpam = inputText.replace(/viagra/gi, "***");
    sendText.textContent = textAntiSpam;

    if (inputText.includes('xxx')) {
         let textAntiSpamX= inputText.replace(/xxx/gi, "***");
         sendText.textContent = textAntiSpamX;
    }

    //очищение формы
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.target.reset();
      })

      //скрытие блока
      sendText.style.display = getComputedStyle(sendText).display == 'flex' ? 'none' : 'flex';
});


