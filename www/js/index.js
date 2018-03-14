function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
    var aa = cordova.plugins.backgroundMode.isActive();
    document.getElementById('aaa').value = aa;
}
