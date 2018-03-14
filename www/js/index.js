function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {



      // 1) Request background execution
      cordova.plugins.backgroundMode.enable();

cordova.plugins.backgroundMode.moveToBackground();

    // Add similar listeners for other events
}
