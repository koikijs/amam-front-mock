document.addEventListener('DOMContentLoaded', function() {
  var btns = document.getElementsByClassName('btn'),
      date = new Date(),
      wrapperPosition = document.getElementById('wrapper').style.position;
  toggleFunc = function() {
    document.getElementById('entry-modal').classList.toggle('active');
    document.getElementById('wrapper').style.position = (document.getElementById('wrapper').style.position == '') ? 'fixed' : '';
    document.getElementById('wrapper').style.width = (document.getElementById('wrapper').style.width == '') ? '100%' : '';
  };
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',toggleFunc, false);
  };
  // Set default date.
  document.getElementById('input-date').value = date.yyyymmdd();;
});

(function () {
 Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy + "-" +(mm[1]?mm:"0"+mm[0]) + "-" + (dd[1]?dd:"0"+dd[0]); // padding
  };
}());