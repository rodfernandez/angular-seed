'use strict';

myApp.directive('appVersion', ['version', function (version) {
    var appVersion = function (scope, elm, attrs) {
        elm.text(version);
    };

    return appVersion;
}]);
