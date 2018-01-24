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



var firstTime = localStorage.getItem("iEMBFirst");
    if(window.location.href.indexOf("iemb.hci.edu.sg") > -1){
        if(!firstTime){
        window.alert("Welcome to iEMB+!\nThis is a mini tutorial on how to use this script!\n(Click OK to continue)");
        window.alert("Firstly, the read all button will read everything! (Refresh after the reload to make sure everything's read) \nTip: 1/3");
        window.alert("Next, you can toggle dark/light mode by clicking the button in the top menu! \nTip: 2/3");
        window.alert("Lastly, change your profile picture by clicking on it! \nTip: 3/3");
        window.alert("And... that's it! If you have any questions / feedback contact me at \"yeoxingyee30@gmail.com\" with the subject heading of \"iEMB+ Feedback!\"\nEnjoy!");
        localStorage.setItem("iEMBFirst", "1");
    }
    var dp = localStorage.getItem("profilePic");
    if(!dp){
        dp = window.prompt("Profile pic not set! \n Please enter a direct link to the image that you want for your profile picture!");
        $('.iemb_user_left>img').attr('src', dp);
        localStorage.setItem("profilePic", dp);
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
