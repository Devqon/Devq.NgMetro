var MasterApp;
(function (MasterApp) {
    var appName = "masterApp";
    angular.module(appName, [
        "ngSanitize",
        "ngAnimate",
        "ui.bootstrap",
        "angular-jqcloud"
    ]).controller("tagCloudCtrl", MasterApp.Controllers.TagCloudCtrl);
})(MasterApp || (MasterApp = {}));
//# sourceMappingURL=App.js.map