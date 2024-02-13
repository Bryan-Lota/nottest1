function animateTap() {
    var obj = document.querySelector('.object');
    obj.classList.add('tap-animation');
    setTimeout(function() {
      obj.classList.remove('tap-animation');
    }, 200);
  }
  