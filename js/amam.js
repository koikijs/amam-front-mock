document.addEventListener('DOMContentLoaded', function() {
  var btns = document.getElementsByClassName('btn'),
      date = new Date();
  toggleFunc = function() {
    document.getElementById('entry-modal').classList.toggle('active');
  };
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',toggleFunc, false);
  };
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