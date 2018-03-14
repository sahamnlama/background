function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {

  document.addEventListener('deviceready', function () {
      // Android customization
      cordova.plugins.backgroundMode.setDefaults({ text:'Doing heavy tasks.'});
      // Enable background mode
      cordova.plugins.backgroundMode.enable();

      // Called when background mode has been activated
      cordova.plugins.backgroundMode.onactivate = function () {
          setTimeout(function () {
              // Modify the currently displayed notification
              cordova.plugins.backgroundMode.configure({
                  text:'Running in background for more than 5s now.'
              });
          }, 5000);
      }
  }, false);

}
