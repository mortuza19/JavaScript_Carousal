addReviewButton = document.querySelector('.add_review_button');
reviewPopup = document.querySelector('.popup');
backdrop = document.querySelector('.backdrop');
reviewForm = document.querySelector('.review-section');
submitReview = document.querySelector('.submit-review');
emailSection = document.querySelector('#email-section');
skipButton = document.querySelector('.skip-subscription');
addEmail = document.querySelector('.add-email');
stars = document.querySelectorAll(".fa");
rating = document.querySelector(".rating");



backdrop.addEventListener('click', closePopupAndBackDrop);
skipButton.addEventListener('click', closePopupAndBackDrop);
addEmail.addEventListener('click', closePopupAndBackDrop);

addReviewButton.addEventListener('click', function() {
    reviewPopup.classList.remove('hide-popup');
    backdrop.classList.add('show-backdrop');
});

submitReview.addEventListener('click', function() {
    reviewPopup.classList.add('email-popup');
    reviewForm.classList.add('hide-review');
    emailSection.classList.remove('email-cred');
})


// rating star selection
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

function closePopupAndBackDrop() {
    reviewPopup.classList.add('hide-popup');
    backdrop.classList.remove('show-backdrop');
    reviewPopup.classList.remove('email-popup');
    reviewForm.classList.remove('hide-review');
    emailSection.classList.add('email-cred');
}

function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
  }
}