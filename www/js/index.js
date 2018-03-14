function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {


alert();
      // 1) Request background execution
      //cordova.plugins.backgroundMode.enable();
      alert(cordova.plugins.backgroundMode.isActive());


    // Add similar listeners for other events
}
