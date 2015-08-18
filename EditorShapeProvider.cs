using System.Linq;
using Orchard.ContentManagement;
using Orchard.DisplayManagement.Descriptors;

namespace Devq.NgMetro
{
    public class EditorShapeProvider : IShapeTableProvider {
        private const string CustomTemplate = "Frontend/{0}";
        private readonly string[] _fields = {"InputField", "BooleanField", "EnumerationField", "LinkField", "NumericField"};
        private readonly string[] _parts = {"TitlePart", "AutoroutePart"};

        public void Discover(ShapeTableBuilder builder) {
            builder.Describe("EditorTemplate")
                .OnDisplaying(displaying => {
                    var shape = displaying.Shape;

                    if (shape.ContentField is ContentField && _fields.Contains((string) shape.ContentField.FieldDefinition.Name))
                    {
                        shape.TemplateName = string.Format(CustomTemplate, shape.TemplateName);
                    }
                    else if (_parts.Contains((string) shape.ContentPart.PartDefinition.Name)) {
                        shape.TemplateName = string.Format(CustomTemplate, shape.TemplateName);
                    }
                });
        }
    }
}