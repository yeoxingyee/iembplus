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
  if(newdp){
    localStorage.setItem('profilePic', newdp);
    setDP();
  }
}

function linkstart(){
  $('img[alt="Important"]').css("filter", "invert(0)");
  $('img[alt="Urgent"]').css("filter", "invert(0)");
  $('img[alt="Information"]').css("filter", "invert(0)");
  setDP();
  $('.iemb_user_left>img').click(function(){ changeDP();});
  $('.iemb_user_left>img').css("height", "40");
  $('.iemb_user_left>img').css("width", "40");
  $('.iemb_user_left>img').css("background-size", "cover");
  var toggleDark;
  if(localStorage.getItem("iEMBDark") == "0" || !localStorage.getItem("iEMBDark")){
    toggleDark = '<li style="text-align:center;"><a href="#" id="DarkToggle"><i class="fa fa-moon-o" aria-hidden="true"></i><br />Dark Mode</a></li>';
  }
  else if(localStorage.getItem("iEMBDark") == "1"){
    toggleDark = '<li style="text-align:center;"><a href="#" id="DarkToggle"><i class="fa fa-sun-o" aria-hidden="true"></i><br />Light Mode</a></li>';
  }
  $(toggleDark).insertBefore("#iemb_topnav .drop");
  console.log("iEMB+: Initialisation complete! All systems green!");
  $("#DarkToggle").click(function() {
    if($("#darkMode").length){
      $("#darkMode").remove();
      document.getElementById("DarkToggle").innerHTML = "<i class='fa fa-moon-o' aria-hidden='true'></i><br />Dark Mode";
      localStorage.setItem('iEMBDark', "0");
      return;
    }
    if(!$("#darkMode").length){
      document.getElementsByTagName("head")[0].appendChild(link);
      document.getElementById("DarkToggle").innerHTML = "<i class='fa fa-sun-o' aria-hidden='true'></i><br />Light Mode";
      localStorage.setItem('iEMBDark', "1");
    }
  });
  $(".iemb_sidebar").css("height", "auto");
  $(".iemb_sidebar").css("min-height", "100%");
  if(window.location.href.indexOf("iemb.hci.edu.sg") > -1){
    var link = document.createElement("link");
    link.href = "https://dl.dropboxusercontent.com/s/yed55pppaod34jd/iemb%2B.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.id = "darkMode";
    if(localStorage.getItem("iEMBDark") == "1") document.getElementsByTagName("head")[0].appendChild(link);
    var script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}
