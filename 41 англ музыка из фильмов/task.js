//задания на уровень
let lang="eng";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {
			secTask:20,
			audio:"./music/01.mp3",
			secAnswer:10,
			answer:"Pretty woman"},
 	task2 = {
			audio:"./music/02.mp3",
			answer:"Star Wars"}
			,
 	task3 = {
			audio:"./music/03.mp3",
			answer:"Guardians of the Galaxy"},
 	task4 = {
			audio:"./music/04.mp3",
			answer:"The Bodyguard"},
 	task5 = {
			audio:"./music/05.mp3",
			answer:"Pirates of the Caribbean"},
 	task6 = {
			audio:"./music/06.mp3",
			answer:"D'Artagnan and Three Musketeers"},
 	task7 = {
			audio:"./music/07.mp3",
			answer:"The Good, the Bad and the Ugly"},
 	task8 = {
			audio:"./music/08.mp3",
			answer:"Mission: Impossible"},
 	task9 = {
			audio:"./music/09.mp3",
			answer:"Men in black"},
 	task10 = {
			audio:"./music/10.mp3",
			answer:"Police Academy"}
]			

	//устанавливаем имя уровня в локал
let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
	if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
	else i=i+2;
})();
//устанавливаем title уровня последние 2 символа имени локала
if (!document.querySelector("title").innerHTML) document.querySelector("title").innerHTML="AreYouReady"+taskName.slice(-2);