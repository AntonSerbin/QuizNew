//задания на уровень
let taskName = "";
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
			answer:"Г.Лепс / Дюна"
}
,
 	task3 = {task:``,
			// secTask: 5,
			video:"./video/03",
			secAnswer:25,
			answer:"Army of lovers / И.Аллегрова"
},
 	task4 = {task:``,
			// secTask: 4,
			video:"./video/04",
			secAnswer:25,
			answer:"Элтон Джон/ Л.Долина"
},
 	task5 = {task:``,
			// secTask: 2,
			video:"./video/05",
			secAnswer:25,
			answer:"Фристайл(Казаченко) / Король и Шут"
},
 	task6 = {task:``,
			// secTask: 10,
			video:"./video/06",
			secAnswer:25,
			answer:"А-НА / М.Круг"
},
 	task7 = {task:``,
			// secTask: 10,
			video:"./video/07",
			secAnswer:25,
			answer:"Селин Дион / Ленинград"
},
 	task8 = {task:``,
			// secTask: 15,
			video:"./video/08",
			secAnswer:25,
			answer:"Sarah Brightman&Antonio Banderas, Nightwish и другие / Руки вверх"
},
 	task9 = {task:``,
			// secTask:15,
			video:"./video/09",
			secAnswer:25,
			answer:"Ф.Сенатра / Баста"
},
 	task10 = {task:``,
			// secTask: 15,
			video:"./video/10",
			secAnswer:25,
			answer:"Г.Сукачев / Т.Овсиенко"
},
 	task10 = {task:``,
			// secTask: 15,
			video:"./video/11",
			// secAnswer:25,
			answer:"Борис Гребенщиков / Михаил Гребенщиков"
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

