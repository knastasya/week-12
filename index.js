const username = document.getElementById('name');
const button = document.getElementById('button');
const url = document.getElementById('href'); 
const writeText = document.getElementById('text');
const form = document.getElementById("form");
const inputYes = document.getElementById("yes");
const inputNo = document.getElementById("no");

//контейнера для коммента
const messages = document.querySelector(".messages");

//формат времени 
function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();
  
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  year = year.toString().slice(-2); 
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min; 

  return `${day}.${month}.${year} ${hour}:${min}`; //полная дата
}

//учёт регистра для фио
function capitalize(x) {
    return x.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

//проверяем имя
function checkName(a) {
	const inputUserName = username.value;
    let inputUserNameResult = inputUserName[0].toUpperCase() + inputUserName.substring(1).toLowerCase();
    a.textContent = capitalize(inputUserNameResult); 
}

//text area
function showComment(b) {
    const inputText = writeText.value;
    b.textContent = inputText;

    //проверка на спам
    let textAntiSpam = inputText.replace(/viagra|XXX/gi, '***');
    b.textContent = textAntiSpam;
    b.style.display = getComputedStyle(b).display == 'flex' ? 'none' : 'flex';
    return textAntiSpam;
}

//контейнер для комментария
function createMessage() {
  const userMessage = document.createElement("div");
  userMessage.className = "container-user-message";
  messages.prepend(userMessage);

  //имя
  const userMessageName = document.createElement("div");
  userMessageName.className = "enter-name";

  // условия для радиокнопки
  inputNo.checked == true || username.value == ""? userMessageName.textContent = "Username" : userMessageName.textContent = checkName(userMessage);
  userMessage.append(userMessageName);

  // аватар
  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src = url.value;
  avatar.style.display = getComputedStyle(avatar).display == 'flex';
  userMessage.prepend(avatar);

  // рандомные картинки
  const picture = new Array (
    "./assets/png-transparent-account-avatar-profile-user-avatars-icon.png",
    "./assets/People_Medical_Education_Science_nerd_woman-1024.webp",
    "./assets/man5-1024.webp",
    "./assets/sunmag-001-small-avatar.png",
    "./assets/4b0d8a3809bff41e4f010fc5add5effe.jpg",
    "./assets/sunmag-002-small-avatar.png",
    "./assets/случайный-человек-аватар-значок-вектор-изолированы-на-белом-фоне-223352790.jpg");
    n = Math.floor(Math.random() * 7);
    avatar.src = url.value === "" ? picture[n] : url.value;

// текст комментария
const messageText = document.createElement("div");
messageText.className = "enter-text";
messageText.innerHTML = showComment(messageText); 
userMessage.append(messageText); 

  // время
  let date = new Date();
  const time = document.querySelector(".container-user-message").append(formatDate(date));
}

button.addEventListener('click', function() {
    createMessage();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.target.reset();
  });