document.addEventListener('DOMContentLoaded', function() {
  var btns = document.getElementsByClassName('btn'),
  toggleFunc = function() {
    document.getElementById('entry-modal').classList.toggle('active');
  };
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',toggleFunc, false);
  };
});