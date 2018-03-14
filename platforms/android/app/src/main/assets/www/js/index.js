function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function aaa1(){

};

// device APIs are available
//
function onDeviceReady() {
      //var ref =
      var socket = io('http://192.168.1.6:7777');
      socket.on('connect', function(){
        console.log('connect to server');
      });
      // Enable background mode
      cordova.plugins.backgroundMode.enable();
      // Android customization
      cordova.plugins.backgroundMode.setDefaults({ text:'Doing heavy tasks.'});

      cordova.plugins.backgroundMode.onfailure = function(errorCode) {};

      // Called when background mode has been activated
      cordova.plugins.backgroundMode.onactivate = function () {
      cordova.plugins.notification.local.schedule({
          title: 'My first notification111',
          text: 'Thats pretty easy111...',
          foreground: false
      });

      setTimeout(function () {
      // Modify the currently displayed notification
        cordova.plugins.backgroundMode.configure({
            text:'Running in background for more than 5s now.',
            hidden: false,
            resume: true
          });
      }, 10000);
    }
}
