<script>
document.addEventListener('DOMContentLoaded', function () {
  const results = {
    grounding: {
      archetype: 'The Rooted One',
      name: 'Embrace Bodysuit',
      desc: 'Offers stability and comfort.',
      tag: 'TENCEL Soft',
      img: 'images/bodysuit.webp'
    },
    softness: {
      archetype: 'The Gentle Soul',
      name: 'Cloud Wrap',
      desc: 'Wrap yourself in softness.',
      tag: 'Ultra-Soft Knit',
      img: 'images/bodysuit.webp'
    },
    energy: {
      archetype: 'The Sparked',
      name: 'Ignite Leggings',
      desc: 'Feel energized in every move.',
      tag: 'Breathable Mesh',
      img: 'images/bodysuit.webp'
    },
    freedom: {
      archetype: 'The Unbound',
      name: 'Flow Dress',
      desc: 'Move with effortless freedom.',
      tag: 'Lightweave',
      img: 'images/bodysuit.webp'
    }
  };

  function showProduct(key) {
    document.querySelector('header').style.display = 'none';
    const section = document.querySelector('section');
    section.querySelector('h1').textContent = results[key].archetype;
    section.querySelector('h2').textContent = results[key].name;
    section.querySelector('h3').textContent = results[key].desc;
    section.querySelector('button').textContent = results[key].tag;
    section.querySelector('img').src = results[key].img;
    section.style.display = 'block';
  }

  document.getElementById('grounding').onclick = e => { e.preventDefault(); showProduct('grounding'); };
  document.getElementById('softness').onclick = e => { e.preventDefault(); showProduct('softness'); };
  document.getElementById('energy').onclick = e => { e.preventDefault(); showProduct('energy'); };
  document.getElementById('freedom').onclick = e => { e.preventDefault(); showProduct('freedom'); };
  document.getElementById('start-over').onclick = e => {
    e.preventDefault();
    document.querySelector('section').style.display = 'none';
    document.querySelector('header').style.display = 'block';
  };

  document.querySelector('section').style.display = 'none';
});
</script>
