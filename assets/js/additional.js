window.addEventListener('load', function() {
    document.getElementsByClassName('btn btn-primary btn-share').addEventListener('click', function() {
      navigator.share({
        title: 'Check out Euphony Dev. project',
        text: 'Check it out! is very cool!',
        url: 'https://euphonydev.github.io/',
      });
    });
  });
