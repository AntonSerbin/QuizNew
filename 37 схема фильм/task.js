//задания на уровень
const pauseAfterTask = 20; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:20,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Красная жара",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Дневники Бреджит Джонс",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Ешь, молись, люби",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Ледниковый период",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Миллионер из трущоб"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Ночь в музее",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Парк Юрского Периода",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Пиксели",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Большой Куш",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Трасса 60"
			},
 	task11 = {task:``,
			pict:"./images/11.jpg",
			answer:"Хоббит (любой фильм)"
			},
 	task12 = {task:``,
			pict:"./images/12.jpg",
			answer:"Хроники Нарнии"
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
