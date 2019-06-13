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

console.log(tasks);

buttonCloseRules.addEventListener("click",()=>startTask());
buttonAnswers.addEventListener("click", ()=>startAnswers());
buttonAnswersHidden.addEventListener("click", ()=>startAnswers());

function startTask() {
	saveLocalData({taskName:true});//записываем в локал
	buttonAnswersHidden.style.display = "block"; //показываем клавишу ОТВЕТЫ
	rulesTotallWindow.style.visibility="hidden"; //убираем окно с правилами
	parrent.style.visibility = "visible"; //показываем блок с уровнями
	pauseCounter=false;
	taskOrAnswer = "secTask"; //устанавливаем переменную ответы или вопросы
	parrent.style.background = `url(${tasks[currentTask].pict}) no-repeat center center`;
	parrent.style.backgroundSize  = `contain`;
	sec=tasks[0].secTask;
	//старт таймера
	if (startTimer===false) {
		minusSecond(taskOrAnswer);
		startTimer=true;
		numberOfTaskP.innerHTML=`Уровень ${currentTask+1} из ${tasks.length}`;
		if (tasks[currentTask].formatAnswer!=undefined) numberOfTaskP.innerHTML+=`<br><br>Формат ответа:<br>${tasks[currentTask].formatAnswer}`;

	}
};


function startAnswers(){
	startTimer = false; endTime=false;
	currentTask=0;
	rulesTotallWindow.style.visibility="hidden"; //убираем окно с правилами
	finalTotalWindow.style.visibility="hidden";
	parrent.style.visibility = "visible";
	numberOfTaskP.innerHTML=`Уровень №${currentTask+1} из ${tasks.length}<br>Ответ: ${tasks[currentTask].answer}`;
	pauseCounter=false;

	//старт таймера ответы
	if (startTimer===false) {
		parrent.style.background = `url(${tasks[currentTask].pict}) no-repeat center center`;
		parrent.style.backgroundSize = 'contain';
		taskOrAnswer = "secAnswer";
		sec=tasks[0][taskOrAnswer];
		startTimer=true;
		minusSecond(taskOrAnswer);
	}
}

//меню управления 
	buttonPause.addEventListener("click",()=>{
	  	if (!pauseCounter) buttonPause.style.color = "red" 
	  		else buttonPause.style.color = "blue";

  		return pauseCounter=!pauseCounter;
		});
	buttonBackTask.addEventListener("click",()=>{
	  	if (currentTask!=0) {
		  	endTime=true;
	  		currentTask--; 
	  		currentTask--; 
	  		if (tasks[currentTask].secTask == undefined) sec= tasks[0].secTask
	  			else sec=tasks[currentTask].secTask;
		}
	});

	buttonForwardTask.addEventListener("click",()=>{
	  	if (currentTask!=tasks.length-1) sec=0;
	 });


function minusSecond(taskOrAnswer){
		startTimer= true;
		if (pauseCounter===true) {
					buttonPause.style.color = "red";
		};
		if (pauseCounter===false) {
				timerTable.innerHTML = `${addZero(Math.floor(sec/60))}:${addZero(sec%60)}`;
				if (tasks.length==currentTask) numberOfTaskP.innerHTML = `У Вас есть ${sec} секунд, чтоб завершить уровень`;//добавляем счетчик секунд для сбора бланков по центру экрана
				sec-- ;//если не пауза то вычитаем секунду
				if (sec<=-1) endTime=true;
		};
				
		if (!endTime) setTimeout(()=>minusSecond(taskOrAnswer),1000);

		//окончиние таймера1
	   	if (endTime) {
	   		currentTask++;
			
			//окончание всего уровня
	   		if (tasks.length+1==currentTask) {
	   			finalTotalWindow.style.display = "block";
	   			timerTable.innerHTML = "";
	   			numberOfTaskP.innerHTML = ``;
	   			return}; 
			//окончание всего уровня

			//собрать бланки
	   		if (tasks.length==currentTask) {
			sec = pauseAfterTask;
			parrent.style.background="rgba(102, 102, 102, 0.4)";
			if 	(taskOrAnswer != "secAnswer") numberOfTaskP.innerHTML = `У Вас есть ${sec} секунд, чтоб завершить уровень`;
			if 	(taskOrAnswer == "secAnswer") {//окончание всего уровня после ответов
	   			timerTable.innerHTML = "";
	   			numberOfTaskP.innerHTML = ``;
	   			currentTask++;
	   			textFinalWindow.innerHTML = "Для выходна в основное меню нажмите соответсвующую клавишу"
				finalTotalWindow.style.visibility="visible";
	   			return
	   		};

			endTime=false;
			minusSecond(taskOrAnswer);

			}; 

			if (tasks.length>currentTask) {
				if (tasks[currentTask][taskOrAnswer] == undefined) sec= tasks[0][taskOrAnswer]
				 else sec=tasks[currentTask][taskOrAnswer];
				parrent.style.background = `url(${tasks[currentTask].pict}) no-repeat center center`;
				parrent.style.backgroundSize = 'contain';
				endTime=false;
				if 	(taskOrAnswer == "secAnswer") numberOfTaskP.innerHTML=`Уровень №${currentTask+1} из ${tasks.length}<br>Ответ: ${tasks[currentTask].answer}`;
				if 	(taskOrAnswer != "secAnswer") numberOfTaskP.innerHTML=`Уровень №${currentTask+1} из ${tasks.length}`;
				if (taskOrAnswer != "secAnswer"&&tasks[currentTask].formatAnswer!=undefined) numberOfTaskP.innerHTML+=`<br><br>Формат ответа:<br>${tasks[currentTask].formatAnswer}`;

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
