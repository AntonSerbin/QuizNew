//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Пост",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Крот",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Море",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Кора",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Порт"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"9",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"6",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"8",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"4",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"3"
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
