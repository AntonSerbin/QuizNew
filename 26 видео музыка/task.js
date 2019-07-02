//задания на уровень
let taskName = "quiz26";
const pauseAfterTask = 30; //sec пауза после уровня на подумать

const tasks = [
 	task1 = {task:``,
			// secTask: 4,
			video:"./video/01",
			secAnswer:18,
			answer:"Ю.Лоза / Роллинг Стоунз"
		},
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:25,
			answer:"Ария/Стас Михайлов"
}
,
 	task3 = {task:``,
			// secTask: 5,
			video:"./video/03",
			secAnswer:25,
			answer:"Стинг/Белый Орел"
},
 	task4 = {task:``,
			// secTask: 4,
			video:"./video/04",
			secAnswer:25,
			answer:"Король и Шут/Серов"
},
 	task5 = {task:``,
			// secTask: 2,
			video:"./video/05",
			secAnswer:25,
			answer:"Led Zeppelin/Песняры"
},
 	task6 = {task:``,
			// secTask: 10,
			video:"./video/06",
			secAnswer:25,
			answer:"Ленинград/Корнелюк"
},
 	task7 = {task:``,
			// secTask: 10,
			video:"./video/07",
			secAnswer:25,
			answer:"Image Dragons/Руки вверх"
},
 	task8 = {task:``,
			// secTask: 15,
			video:"./video/08",
			secAnswer:25,
			answer:"Семен Слепаков/Алла Пугачева"
},
 	task9 = {task:``,
			// secTask:15,
			video:"./video/09",
			secAnswer:25,
			answer:"PSY/Лещенко"
},
 	task10 = {task:``,
			// secTask: 15,
			video:"./video/10",
			secAnswer:25,
			answer:"БГ/Тимати"
},
	task11 = {task:``,
			// secTask: 15,
			video:"./video/11",
			secAnswer:25,
			answer:"Prodigy/Ротару"
},
	task12 = {task:``,
			// secTask: 15,
			video:"./video/12",
			secAnswer:25,
			answer:"Ария/Руки вверх"
}
]			

function durationVideo(link,idx) {
  var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src",link+".mp4");
    } else {
      x.setAttribute("src",link+".avi");
    }
 x.onloadedmetadata = function() {
	tasks[idx]["duration"]=Math.round(x.duration);
 } ;
};


tasks.forEach((item,i)=>{durationVideo(item.video,i)});
console.log(tasks);

