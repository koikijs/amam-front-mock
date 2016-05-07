document.addEventListener('DOMContentLoaded', function() {
  var btns = document.getElementsByClassName('btn'),
      edits = document.getElementsByClassName('edit-info'),
      date = new Date();

  // Set default date.
  document.getElementById('input-date').value = date.yyyymmdd();

  //Toggle function
  toggleFunc = function() {
    document.getElementById('entry-modal').classList.toggle('active');
    document.getElementById('wrapper').style.position = (document.getElementById('wrapper').style.position == '') ? 'fixed' : '';
    document.getElementById('wrapper').style.width = (document.getElementById('wrapper').style.width == '') ? '100%' : '';
    document.getElementById('input-name').value = '';
    document.getElementById('input-date').value = date.yyyymmdd();
    document.getElementById('input-time-from').value = '09:00';
    document.getElementById('input-time-to').value = '09:15';
    document.getElementById('input-send').value = 'SEND';
  };
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',toggleFunc, false);
  };

  //Edit function
  editFunc = function() {
    var getUrlVar = getUrlVars();
    if(getUrlVar.mode === 'edit'){
      document.getElementById('entry-modal').classList.toggle('active');
      document.getElementById('wrapper').style.position = 'fixed';
      document.getElementById('wrapper').style.width = '100%';
      document.getElementById('input-name').value = getUrlVar.name;
      document.getElementById('input-date').value = getUrlVar.date;
      document.getElementById('input-time-from').value = getUrlVar.from;
      document.getElementById('input-time-to').value = getUrlVar.to;
      var status = 'select';
      status += getUrlVar.status;
      document.getElementById(status).checked = 'checked';
      document.getElementById('input-send').value = 'UPDATE';
    };
  };
  editFunc();
});

(function () {
 Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy + "-" +(mm[1]?mm:"0"+mm[0]) + "-" + (dd[1]?dd:"0"+dd[0]); // padding
  };
}());

(function () {
getUrlVars = function(){
    var vars = {}; 
    var param = location.search.substring(1).split('&');
    for(var i = 0; i < param.length; i++) {
        var keySearch = param[i].search(/=/);
        var key = '';
        if(keySearch != -1) key = param[i].slice(0, keySearch);
        var val = param[i].slice(param[i].indexOf('=', 0) + 1);
        if(key != '') vars[key] = decodeURI(val);
    } 
    return vars; 
}
}());