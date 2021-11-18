window.addEventListener('load', function() {
    if(!navigator.share) {
      document.querySelector('.share-container').innerHTML = 'Web Share API not supported in this browser';
      return;
    }
    document.getElementById('btn-share').addEventListener('click', function() {
      navigator.share({
        title: 'Check out XI RPL 1 project',
        text: 'Its really cool',
        url: 'https://harusasaki.github.io/',
      });
    });
  });