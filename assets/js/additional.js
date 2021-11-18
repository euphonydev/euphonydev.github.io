document.getElementById("#btn-share").addEventListener("click", function() {
  if (navigator.share) {
    navigator.share({
        title: 'Ayo cek project dari Euphony Dev.',
        text: 'Ini sangatlah kemren!',
        url: 'https://euphonydev.github.io/',
      })
      .then(() => console.log('Berhasil membagikan'))
      .error((error) => console.error('Tidak dapat membagikan link', error))
  }
});
