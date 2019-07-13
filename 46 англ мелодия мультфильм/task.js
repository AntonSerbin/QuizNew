//задания на уровень
let lang="eng";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30 ,
			audio:"./music/01.mp3",
			secAnswer:10,
			answer:"Madagascar"
},
 	task2 = {task:``,
			audio:"./music/02.mp3",
			// secAnswer: ,
			answer:"The Lion King"
},
 	task3 = {task:``,
			// secTask: 5,
			audio:"./music/03.mp3",
			answer:"One Hundred And One Dalmatians"
},
 	task4 = {task:``,
			// secTask: 4,
			audio:"./music/04.mp3",
			answer:"Shrek"
},
 	task5 = {task:``,
			// secTask: 2,
			audio:"./music/05.mp3",
			secTask:40 ,
			answer:"A Monster in Paris"
},
 	task6 = {task:``,
			// secTask: 10,
			audio:"./music/06.mp3",
			answer:"Frozen"
},
 	task7 = {task:``,
			// secTask: 10,
			audio:"./music/07.mp3",
			answer:"Despicable Me"
},
 	task8 = {task:``,
			// secTask: 15,
			audio:"./music/08.mp3",
			answer:"Aladdin"
},
 	task9 = {task:``,
			secTask:45 ,
			audio:"./music/09.mp3",
			answer:"Darkwing Duck"
},
 	task10 = {task:``,
			// secTask: 15,
			secTask:25 ,
			audio:"./music/10.mp3",
			answer:"Chip 'n Dale: Rescue Rangers"
}
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
