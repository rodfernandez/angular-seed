'use strict';

//myApp.filter('interpolate', function () {
//    var interpolate = function (text) {
//        return text.toUpperCase();
//    }
//
//    return interpolate;
//});

myApp.filter('interpolate', ['version', function (version) {
    var interpolate = function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    };

    return interpolate;
}]);
