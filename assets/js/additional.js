window.addEventListener('load', function() {
    if(!navigator.share) {
      document.querySelector('.share-container').innerHTML = 'Web Share API not supported in this browser';
      return;
    }
    document.getElementById('btn-share').addEventListener('click', function() {
      navigator.share({
        title: 'Check out Euphony Dev. project',
        text: 'Check it out! is very cool!',
        url: 'https://euphonydev.github.io/',
      });
    });
  });