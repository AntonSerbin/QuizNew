    var updownElem = document.getElementById('updown');
    var pageYLabel = 0;
    let x=50, y=36;
    let coord = true;

  var innerHeight = document.documentElement.clientHeight;
  var listOfTasksHight= document.querySelector(".listOfTasks").clientHeight;

    var scroll = window.scrollY;


//старотвая позиция скроллинговой кнопки
if (document.documentElement.scrollHeight!=document.documentElement.clientHeight) {
    	updownElem.style.display="block";
    	updownElem.className="down";
};
//убрать-показать скроллинговой кнопки при изменении масштаба
window.onresize = function(){
if (document.documentElement.scrollHeight!=document.documentElement.clientHeight) {
      updownElem.style.display="block";
      updownElem.className="down";
      console.log(document.documentElement.scrollHeight, document.documentElement.clientHeight);
}
else
  updownElem.style.display="none";
};

//скроллинговая кнопка
window.addEventListener("scroll", function (event) {

    if (document.documentElement.scrollHeight<1+document.documentElement.scrollTop+document.documentElement.clientHeight) {
    	updownElem.style.display="block";
    	updownElem.className="up";
    	console.log('updownElem.className',updownElem)
    	};

    if (document.documentElement.scrollTop==0) {
    	updownElem.className="down";
    	console.log('updownElem.className',updownElem)

    };
		});


updownElem.onclick = function() {
  switch (this.className) {
    case 'up':
      window.scrollTo(0, 0);
      this.className = 'down';
      break;

    case 'down':
      window.scrollTo(0, document.documentElement.scrollHeight);
      this.className = 'up';
  }

}



//Функции загрузки для LocalStorage
const loadLocalData = (key) => {
  try {
    const loacalData = localStorage.getItem(key);
    if (loacalData === null) {
      return undefined;
    }
    return JSON.parse(loacalData);
  } catch (err) {
    return undefined;
  }
};
//Функции сохранения для LocalStorage
const saveLocalData = (key,data) => {
  try {
    const dataJSON = JSON.stringify(key&data);
    localStorage.setItem(key, data);
  } catch (err) {
    console.log('save state error: ', err);
  }
};


// определение геолокации

// if ((loadLocalData("data")==undefined)||(loadLocalData("data")!=x+y)) {
//   if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     let xgps=Math.round(position.coords.latitude);
//     let ygps=Math.round(position.coords.longitude);
//       console.log(`latitude: ${x-xgps} <br>longitude: ${y-ygps}`);
//       if (Math.abs(x-xgps)<2&&Math.abs(y-ygps)<2)  saveLocalData("data",x+y);//записываем в локал
//       console.log(loadLocalData("data"));
//     });

//   };
// };

