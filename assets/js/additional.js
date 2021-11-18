window.addEventListener('load', function() {
    document.getElementById('btn-share').addEventListener('click', function() {
      navigator.share({
        title: 'Check out Euphony Dev. project',
        text: 'Check it out! is very cool!',
        url: 'https://euphonydev.github.io/',
      });
    });
  });
