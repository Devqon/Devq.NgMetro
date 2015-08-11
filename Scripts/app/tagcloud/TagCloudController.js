var MasterApp;
(function (MasterApp) {
    var Controllers;
    (function (Controllers) {
        var Tag = (function () {
            function Tag() {
            }
            return Tag;
        })();
        Controllers.Tag = Tag;
        var TagCloudCtrl = (function () {
            function TagCloudCtrl() {
                var _this = this;
                this.words = [];
                this.placeholder = "placeholder";
                this.init = function (json, url) {
                    var deserialized = angular.fromJson(json);
                    for (var i = 0; i < deserialized.length; i++) {
                        var item = deserialized[i];
                        var tag = {
                            text: item.TagName,
                            weight: item.Count,
                            link: url.replace(_this.placeholder, item.TagName)
                        };
                        _this.words.push(tag);
                    }
                };
            }
            return TagCloudCtrl;
        })();
        Controllers.TagCloudCtrl = TagCloudCtrl;
    })(Controllers = MasterApp.Controllers || (MasterApp.Controllers = {}));
})(MasterApp || (MasterApp = {}));
//# sourceMappingURL=TagCloudController.js.map