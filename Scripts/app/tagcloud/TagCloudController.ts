module MasterApp.Controllers {
    
    export class Tag {
        public text: string;
        public weight: number;
        public link: string;
        public html: any;
        public handlers: any;
        public afterWordRender: Function;
    }

    export class TagCloudCtrl {
        
        public words: Tag[] = [];
        public placeholder: string = "placeholder";

        constructor() {
            
        }

        init = (json, url) => {
            var deserialized = angular.fromJson(json);
            for (var i = 0; i < deserialized.length; i++) {
                var item = deserialized[i];
                var tag = <Tag> {
                    text: item.TagName,
                    weight: item.Count,
                    link: url.replace(this.placeholder, item.TagName)
                };
                this.words.push(tag);
            }
        }

    }

} 