$("#openWaze").bind('touchstart', function() {
    $(this).addClass('transition');
});

$("#openWaze").bind('touchend', function() {
    $(this).removeClass('transition');
});


$("#openWaze").click(function() {
    setTimeout(function() {
        var os = getOS();
        if (os === "iOS") {
            window.location = "https://itunes.apple.com/my/app/waze-gps-navigation-maps-traffic/id323229106?mt=8";

        } else if (os === "Android") {
            windows.location = "https://play.google.com/store/apps/details?id=com.waze&hl=en";
        }

    }, 3000);
    window.location = "waze://?ll=" + $(this).data("geoy") + "," + $(this).data("geox");
});


$("#openGMap").bind('touchstart', function() {
    $(this).addClass('transition');
});

$("#openGMap").bind('touchend', function() {
    $(this).removeClass('transition');
});

$("#openGMap").click(function() {
    var os = getOS();
    setTimeout(function() {
        if (os === "iOS") {
            window.location = "https://itunes.apple.com/us/app/google-maps-navigation-transit/id585027354?mt=8";

        } else if (os === "Android") {
            windows.location = "https://play.google.com/store/apps/details?id=com.google.android.apps.maps&hl=en";
        }

    }, 3000);
    if (os === "iOS") {
        window.location = "comgooglemapsurl://maps.google.com/?q=" + $(this).data("geoy") + "," + $(this).data("geox");

    } else if (os === "Android") {
        window.location = "geo:" + $(this).data("geoy") + "," + $(this).data("geox");
    }
});

function getOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}