function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {

  cordova.plugins.backgroundMode.setDefaults({
    title: 'sdsdsdsd',
    text: 'dsfsdfdsfsdfsdf'
})
    var aa = cordova.plugins.backgroundMode.isActive();
    alert(aa);
    document.getElementById('aaa').value = aa;
}
