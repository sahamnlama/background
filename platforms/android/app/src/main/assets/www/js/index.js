function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {



      // 1) Request background execution
      cordova.plugins.backgroundMode.enable();

      // 2) Now the app runs ins background but stays awake
      cordova.plugins.backgroundMode.on('activate', function () {
          setInterval(function () {
              cordova.plugins.notification.badge.increase();
          }, 1000);
      });

      // 3) App is back to foreground
      cordova.plugins.backgroundMode.on('deactivate', function () {
          cordova.plugins.notification.badge.clear();
      });

alert(cordova.plugins.backgroundMode.isActive());

      alert('ssss');

    // Add similar listeners for other events
}
