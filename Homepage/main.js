placesSection = document.querySelector('.places');
placesList = document.querySelector('.place-list');
placesButtonList = document.querySelectorAll('.place-list__place img');
homePageImage = document.querySelector('.big-image');
imageLists = document.querySelector('.place-list__place');


leftArrow = document.querySelector('.left-arrow');
rightArrow = document.querySelector('.right-arrow');

console.log(placesButtonList);
console.log(placesSection.offsetWidth);
console.log((placesButtonList[0].offsetWidth + 16)*placesButtonList.length);

rightArrow.addEventListener('click', function() {
    sideScroll(placesSection,'right',25,316,20);
});

leftArrow.addEventListener('click', function() {
    sideScroll(placesSection,'left',25,316,20);
});

addEventListenerList(placesButtonList, 'click', function() {
    console.log(this, homePageImage);
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
