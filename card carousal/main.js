let stars = document.querySelectorAll(".fa");
let rating = document.querySelector(".rating");

console.log(stars);

rating.addEventListener('mouseout', function() {
  for (const star of stars) {
    star.classList.remove('checked');
  }
});

addEventListenerList(stars,'mouseover', function() {
  for (let index = 0; index < stars.length; index++) {
    if (stars[index] !== this) {
      stars[index].classList.add('checked');
    } else {
      this.classList.add('checked');
      break;
    }
  }
});

addEventListenerList(stars,'click', function() {
  if (!this.classList.contains('saved')) {
    for (const [key, star] of stars.entries()) {
      if (!star.classList.contains('saved') && Array.from(stars).indexOf(this) >= key) {
        star.classList.add('saved');
      }
    }
  } else {
    for (const [key, star] of stars.entries()) {
      if (star.classList.contains('saved') && Array.from(stars).indexOf(this) < key) {
        star.classList.remove('saved');
      }
    }  
  }
});

function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
  }
}