document.addEventListener('DOMContentLoaded', function () {
  var question = document.querySelector('header form');   // question & four buttons
  var section  = document.querySelector('section');       // contains all content
  var cards    = section.querySelectorAll('.wrap');       // each content card

  section.style.display = 'none';                         // buttons are hidden

  function showCard(i) {
    question.style.display = 'none';                      // hide the question only
    section.style.display  = 'block';                     // show content
    for (var j = 0; j < cards.length; j++) {
      cards[j].style.display = (j === i) ? 'block' : 'none';
    }
  }

  var ids = ['grounding', 'softness', 'energy', 'freedom'];
  for (var i = 0; i < ids.length; i++) {
    (function (idx) {
      document.getElementById(ids[idx]).addEventListener('click', function (e) {
        e.preventDefault();
        showCard(idx);                                    // show the matching card
      });
    })(i);
  }

  document.getElementById('start-over').addEventListener('click', function (e) {
    e.preventDefault();
    section.style.display  = 'none';                      // hide cards
    question.style.display = 'block';                     // show question again
  });
});
