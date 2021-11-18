window.addEventListener('load', function() {
    document.getElementById('btn-share').addEventListener('click', function() {
      navigator.share({
        title: 'Ayo cek project dari Euphony Dev.',
        text: 'Ini sangatlah kemren!',
        url: 'https://euphonydev.github.io/',
      });
    });
  });
