
//защита по ссылке с сайта картинки/музыка
console.log(document.referrer);

if (document.referrer.indexOf("quiz.agency/quiz/quiz01/1start.html")==-1) {
	alert("Просьба зайти через личный кабинет www.quiz.agency");
 	throw new Error("Stop script");
 };

//для основного
let resAccess=false;

console.log(document.referrer);
let referrer = document.referrer;
let links = document.querySelectorAll("a");
let access = [
"quiz.agency/quiz/quiz01/01_music_cartoon1f/01.html",
"quiz.agency/quiz/quiz01/02_rebus_citiesf/02.html",
"quiz.agency/quiz/quiz01/03_pict_doodles1f/03.html",
"quiz.agency/quiz/quiz01/04_quotes_litrf/04.html",
"quiz.agency/quiz/quiz01/05_pict_rebuses_phrasesf/05.html",
"quiz.agency/quiz/quiz01/06_Music_film1f/06.html",
"quiz.agency/my-account/downloads",
"quiz.agency/my-account/view-order"
];
access.forEach((el)=>{
  if (referrer.indexOf(el)!=-1)  resAccess=true;
});
  if (!resAccess) {
    Array.prototype.slice.call(links).forEach((el)=>el.href="");
    alert("Просьба зайти через личный кабинет www.quiz.agency");
    throw new Error("Stop script");
};