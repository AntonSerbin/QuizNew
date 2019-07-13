//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:70,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:30,
//			formatAnswer:"",
			answer:"Hamburger, Big Mac",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Baldness shampoo, remedy for hair ",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Soul (in case of death the soul transferred to company's property)",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"They all are given a name",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Coca-Cola"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Sundial",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"DNA",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Noise. Headphones protected from the noise of the city",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Alive, moving (cartoon Moana and Harry Potter world)",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"They were bold (withot hair)"
			}
]		;


	  //устанавливаем имя уровня в локал
let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();
//устанавливаем title уровня последние 2 символа имени локала
if (!document.querySelector("title").innerHTML) document.querySelector("title").innerHTML="AreYouReady"+taskName.slice(-2);
