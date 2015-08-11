using Orchard.UI.Resources;

namespace Devq.NgMetro
{
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();

            manifest.DefineScript("Angular_UI").SetUrl("angular-ui/ui-bootstrap-tpls.min.js", "angular-ui/ui-bootstrap-tpls.js").SetDependencies("AngularJS");
            manifest.DefineScript("jQCloud").SetUrl("jqcloud/jqcloud.min.js", "jqcloud/jqcloud.js").SetDependencies("jQuery");
            manifest.DefineScript("Angular_jQCloud").SetUrl("jqcloud/angular-jqcloud.js").SetDependencies("AngularJS", "jQCloud");

            manifest.DefineStyle("jQCloud").SetUrl("jqcloud/jqcloud.min.css", "jqcloud/jqcloud.css");
        }
    }
}