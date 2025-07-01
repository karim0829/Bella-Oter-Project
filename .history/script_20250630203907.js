document.addEventListener('DOMContentLoaded', function () {
  var question = document.querySelector('header form');   // the question + four option buttons
  var section  = document.querySelector('section');       // holds the four product cards
  var cards    = section.querySelectorAll('.wrap');       // each individual card

  section.style.display = 'none';                         // hide cards at first

  function showCard(i) {
    question.style.display = 'none';                      // hide only the question area
    section.style.display  = 'block';                     // reveal the card zone
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
