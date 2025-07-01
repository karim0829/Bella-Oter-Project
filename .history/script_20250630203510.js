

document.addEventListener('DOMContentLoaded', function () {
  let header = document.querySelector('header');
  let section = document.querySelector('section');
  let cards = section.querySelectorAll('.wrap');
  section.style.display = 'none';
  function showCard(i) {
    header.style.display = 'none';
    section.style.display = 'block';
    for (var j = 0; j < cards.length; j++) {
      cards[j].style.display = j === i ? 'block' : 'none';
    }
  }
  document.getElementById('grounding').addEventListener('click', function (e) { e.preventDefault(); showCard(0); });
  document.getElementById('softness').addEventListener('click', function (e) { e.preventDefault(); showCard(1); });
  document.getElementById('energy').addEventListener('click', function (e) { e.preventDefault(); showCard(2); });
  document.getElementById('freedom').addEventListener('click', function (e) { e.preventDefault(); showCard(3); });
  document.getElementById('start-over').addEventListener('click', function (e) {
    e.preventDefault();
    section.style.display = 'none';
    header.style.display = 'block';
  });
});
