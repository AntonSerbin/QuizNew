//задания на уровень
let lang="eng";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Pirates of the Caribbean",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Ghost",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"1+1",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Million Dollar Baby",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Hulk, and other films"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Bad Santa",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Eternal Sunshine of the Spotless Mind",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Knockin' On Heaven's Door",
			secTask:20,
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Running man",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"300"
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
