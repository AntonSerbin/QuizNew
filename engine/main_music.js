let pauseCounter = false;
let startTimer=false;
let sec = tasks[0].secTask;
let endTime=false;
let audio;
let currentTask=0;


const buttonCloseRules =document.querySelector(".buttonMenuRules");
const rulesTotallWindow = document.querySelector("#rulesTotallWindow");
const parrent = document.querySelector(".parrent");
const timerTable = document.querySelector(".timerTable");
const buttonPause = document.querySelector("#buttonPause");
const buttonBackTask = document.querySelector("#buttonBackTask");
const buttonForwardTask = document.querySelector("#buttonForwardTask");
const finalTotalWindow =document.querySelector("#finalTotalWindow");
const numberOfTaskP = document.querySelector("#numberOfTaskP");
const buttonAnswers = document.querySelector("#buttonAnswers");
const buttonAnswersHidden = document.querySelector("#buttonAnswersHidden");
const textFinalWindow = document.querySelector("#textFinalWindow");

buttonCloseRules.addEventListener("click",()=>startTask());
buttonAnswers.addEventListener("click", ()=>startAnswers());
buttonAnswersHidden.addEventListener("click", ()=>startAnswers());

function startTask() {
	saveLocalData({taskName:true});//записываем в локал
	buttonAnswersHidden.style.display = "block";
	console.log(buttonAnswers);
	rulesTotallWindow.style.visibility="hidden";
	parrent.style.visibility = "visible";
	pauseCounter=false;
	console.log(parrent,pauseCounter);
	taskOrAnswer = "secTask";

	//старт таймера
	if (startTimer===false) {
		audio = new Audio(tasks[0].audio);
		sec=tasks[0].secTask;
		audio.play();
		minusSecond(taskOrAnswer);
		startTimer=true;
		numberOfTaskP.innerHTML=`Уровень ${currentTask+1} из ${tasks.length}`;
		console.log("Strart timer sec", sec,";startTimer", startTimer,";currentTask ",currentTask)
	}
};


function startAnswers(){
	startTimer = false; endTime=false;
	currentTask=0;
	finalTotalWindow.style.visibility="hidden";
	parrent.style.visibility = "visible";
	numberOfTaskP.innerHTML=`Уровень №${currentTask+1} из ${tasks.length}<br>Ответ: ${tasks[currentTask].answer}`;
	pauseCounter=false;
	console.log(parrent,pauseCounter);

	//старт таймера
	if (startTimer===false) {
		audio = new Audio(tasks[0].audio);
		taskOrAnswer = "secAnswer";
		sec=tasks[0][taskOrAnswer];
		console.log("секунд в ответе", tasks[0][taskOrAnswer], tasks[0]["answer"]);
		audio.play();
		startTimer=true;
		console.log("Strart timer sec", sec,";startTimer", startTimer,";currentTask ",currentTask)
		minusSecond(taskOrAnswer);

	}

}


//меню управления 
	buttonPause.addEventListener("click",()=>{
	  	console.log("ButtonPause", !pauseCounter);
	  	if (!pauseCounter) buttonPause.style.color = "red" 
	  		else buttonPause.style.color = "blue";

  		return pauseCounter=!pauseCounter;
		});
	buttonBackTask.addEventListener("click",()=>{
	  	console.log("buttonBackTask", currentTask, sec);
	  	if (currentTask!=0) {
		  	endTime=true;
	  		currentTask--; 
	  		currentTask--; 
	  		if (tasks[currentTask].secTask == undefined) sec= tasks[0].secTask
	  			else sec=tasks[currentTask].secTask;
		}
	});

	buttonForwardTask.addEventListener("click",()=>{
	  	console.log("buttonForwardTask", currentTask,`  ${tasks.length}`);
	  	if (currentTask!=tasks.length-1) sec=0;
	 });


function minusSecond(taskOrAnswer){
		startTimer= true;
		console.log(taskOrAnswer,"  taskOrAnswer=", taskOrAnswer, tasks[0][taskOrAnswer], "уровень ", currentTask);
		if (pauseCounter===true) {
					console.log("Pause", sec);
					buttonPause.style.color = "red";
					audio.pause();
		};
		if (pauseCounter===false) {
				if (audio.paused&&tasks.length>currentTask) audio.play();
				timerTable.innerHTML = `${addZero(Math.floor(sec/60))}:${addZero(sec%60)}`;
				if (tasks.length==currentTask) numberOfTaskP.innerHTML = `У Вас есть ${sec} секунд, чтоб завершить уровень`;//добавляем счетчик секунд для сбора бланков по центру экрана
				console.log(`У Вас есть ${sec} секунд, чтоб завершить уровень ${currentTask}`);
				sec-- ;//если не пауза то вычитаем секунду
				if (sec<=-1) endTime=true;
		};
				
		if (!endTime) setTimeout(()=>minusSecond(taskOrAnswer),1000);

		//окончиние таймера1
	   	if (endTime) {
			audio.pause();
	   		currentTask++;
	   		console.log("номер задания ококнчание таймера",currentTask);

	   		if (tasks.length+1==currentTask) {//окончание всего уровня
	   			finalTotalWindow.style.display = "block";
	   			timerTable.innerHTML = "";
	   			numberOfTaskP.innerHTML = ``;
	   			console.log("final");//окончание всего уровня
	   			return}; //окончание всего уровня

	   		if (tasks.length==currentTask) {//собрать бланки
	   		console.log (`У Вас есть ${pauseAfterTask} секунд, чтоб завершить уровень`);
			sec = pauseAfterTask;
			console.log('taskOrAnswer at the end- ',taskOrAnswer);
			if 	(taskOrAnswer != "secAnswer") numberOfTaskP.innerHTML = `У Вас есть ${sec} секунд, чтоб завершить уровень`;
			if 	(taskOrAnswer == "secAnswer") {
	   			timerTable.innerHTML = "";
	   			numberOfTaskP.innerHTML = ``;
	   			currentTask++;
	   			console.log(' currentTask secAnswer',currentTask);
	   			textFinalWindow.innerHTML = "Для выходна в основное меню нажмите соответсвующую клавишу"
				finalTotalWindow.style.visibility="visible";
	   			//окончание всего уровня
	   			return
	   		};

			endTime=false;
			audio.pause();
			minusSecond(taskOrAnswer);

			}; 

			if (tasks.length>currentTask) {
				console.log("Номер задания обычное задание", currentTask);
				audio = new Audio(tasks[currentTask].audio);
				console.log(tasks[currentTask].audio, tasks[currentTask][taskOrAnswer]);

				if (tasks[currentTask][taskOrAnswer] == undefined) sec= tasks[0][taskOrAnswer]
				 else sec=tasks[currentTask][taskOrAnswer];
				audio.play();
				endTime=false;
				if 	(taskOrAnswer == "secAnswer") numberOfTaskP.innerHTML=`Уровень №${currentTask+1} из ${tasks.length}<br>Ответ: ${tasks[currentTask].answer}`;
				if 	(taskOrAnswer != "secAnswer") numberOfTaskP.innerHTML=`Уровень №${currentTask+1} из ${tasks.length}`;
minusSecond(taskOrAnswer);
			};
		};

};

//функция добавляет 0 в циферблат при однозначном числе
function addZero (num){ return ('0'+num).slice(-2)};

//Функции загрузки для LocalStorage
const loadLocalData = () => {
  try {
    const loacalData = localStorage.getItem(taskName);
    if (loacalData === null) {
      return undefined;
    }
    return JSON.parse(loacalData);
  } catch (err) {
    return undefined;
  }
};
//Функции сохранения для LocalStorage
const saveLocalData = (data) => {
  try {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(taskName, dataJSON);
  } catch (err) {
    console.log('save state error: ', err);
  }
};

//добовляем клавишу ответы для второго просмотра
if ((loadLocalData()==undefined)||(loadLocalData().taskName!=true)) {
	buttonAnswersHidden.style.display = "none";

}
console.log(loadLocalData(),buttonAnswersHidden);
