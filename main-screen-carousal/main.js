placesSection = document.querySelector('.places');
placesList = document.querySelector('.place-list');
placesButtonList = document.querySelectorAll('.place-list__place img');
homePageImage = document.querySelector('.big-image');
imageLists = document.querySelector('.place-list__place');


leftArrow = document.querySelector('.left-arrow');
rightArrow = document.querySelector('.right-arrow');

let totalClientWidth = placesList.clientWidth;
let totalScrollWidth = placesList.scrollWidth;
leftArrow.style.display = 'none';


rightArrow.addEventListener('click', function() {
    console.dir(placesList);
    sideScroll(placesSection,'right',10,Math.floor(placesList.clientWidth / 4),20);
    totalClientWidth = totalClientWidth + Math.floor(placesList.clientWidth / 4);
    if (totalClientWidth >= totalScrollWidth) {
        rightArrow.style.display = 'none';
    }
    if (totalClientWidth > placesList.clientWidth) {
        leftArrow.style.display = 'block';
    }
});

leftArrow.addEventListener('click', function() {
    sideScroll(placesSection,'left',10,Math.floor(placesList.clientWidth / 4),20);
    totalClientWidth = totalClientWidth - Math.floor(placesList.clientWidth / 4);
    if (totalClientWidth <= placesList.clientWidth) {
        leftArrow.style.display = 'none';
    }
    if (totalClientWidth < placesList.scrollWidth) {
        rightArrow.style.display = 'block';
    }
});

addEventListenerList(placesButtonList, 'click', function() {
    homePageImage.src = this.src;
});

function addEventListenerList(list, event, fn) {
    console.log(placesButtonList);
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

imageLists.addEventListener('clickEvent', function(data) {
    console.log(data);
})

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
