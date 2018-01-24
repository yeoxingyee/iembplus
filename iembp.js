var i = 0;
var x = $('.messageboard').length;
function autoread(){
  document.getElementById('verbose').innerHTML += 'iEMB+: Running checks...<br />';
  document.getElementById('verbose').innerHTML += 'iEMB+: '+ x + ' messages remaining to read.<br />';
  $('#reader a').text('Reading all messages...');
  if (x=='0'){
    $('#reader a').text('All Messages are already Read!');
    document.getElementById('verbose').innerHTML='';
    setTimeout(function() { $('#reader a').text('Read All'); }, 2000);
    return;
  }
  var iframeread;
    iframeread = document.createElement('iframe');
    document.body.appendChild(iframeread);
    iframeread.height = '0';
    iframeread.src = $('a.messageboard')[i].href;
    x--;
    i++;
  checkread();
}
function checkread(){
  if (!x){
    document.getElementById('verbose').innerHTML += 'Done!<br />';
    $('#reader a').text('Done! Reloading in 3 seconds...');
    setTimeout(location.reload.bind(location), 3000);
  }
else if(x) {
    document.getElementById('verbose').innerHTML += 'iEMB+: Not done yet! rerunning...<br />';
    setTimeout(autoread(), 500);
  }
}
    function setDP(){
    var dp = localStorage.getItem('profilePic');
    $('.iemb_user_left>img').attr('src', dp);
    $('.iemb_user_left>img').css('border-radius', '100%');
}
    function changeDP(){
    var newdp = window.prompt('Enter URL of new image for your profile picture!');
    if(newdp){localStorage.setItem('profilePic', newdp);
    setDP();}
}