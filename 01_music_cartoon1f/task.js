//задания на уровень
let taskName = "";
document.querySelector("#rulesWindow").innerHTML = `
	    <h2>Правила уровня.</h2>
	    <br>
	    <p> На данном уровне Вам будут проиграны мелодии из фильмов.
	        Ваша задача определить НАЗВАНИЕ ФИЛЬМА и написать его в ответный бланк.<br>
	        На каждую мелодию-фильм будет дано 20 секунд.<br>
	        Формат ответа: Название фильма.<br>
			<br>
			Что б начать уровень нажмите СТАРТ.<br>
		</p>
	    <button id="#buttonCloseRules" class="buttonMenuRules"> СТАРТ </button>
	    <button id="buttonAnswersHidden" class="buttonMenuAnswers"> ОТВЕТЫ </button>  
	    <br>
	    <button class="buttonMenuRules" onclick="history.back()">Вернуться в главное меню</button>
`;

const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {
			secTask:20,
			audio:"./music/01.mp3",
			secAnswer:10,
			answer:"Красотка"
},
 	task2 = {
			audio:"./music/02.mp3",
			answer:"Звездные войны"
}
			,
 	task3 = {
			audio:"./music/03.mp3",
			answer:"Стражи галактики"
},
 	task4 = {
			audio:"./music/04.mp3",
			answer:"Телохранитель"
		},
 	task5 = {
			audio:"./music/05.mp3",
			answer:"Пираты карибского моря"
},
 	task6 = {
			audio:"./music/06.mp3",
			answer:"Три Мушкетера"
},
 	task7 = {
			audio:"./music/07.mp3",
			answer:"Хороший,плохой и злой"
},
 	task8 = {
			audio:"./music/08.mp3",
			answer:"Миссия невыполнима"
},
 	task9 = {
			audio:"./music/09.mp3",
			answer:"Люди в чёрном",
},
 	task10 = {
			audio:"./music/10.mp3",
			answer:"Полицейская академия",
}
]			