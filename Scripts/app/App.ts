module MasterApp {

    var appName: string = "masterApp";

    angular.module(appName, [
            "ngSanitize",
            "ngAnimate",
            "ui.bootstrap",
            "angular-jqcloud"
        ])

        .controller("tagCloudCtrl", Controllers.TagCloudCtrl);

} 