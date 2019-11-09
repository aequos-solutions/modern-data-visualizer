# Create a custom layout

A layout is simply a custom HTML file

To create a custom layout, follow this procedure:

1. Create a new HTML file that will be used for your layout. (ex: `custom-layout.html`). You can create it anywhere in your project:

```
<content id="template">
    <style>
        /* Insert your CSS overrides here */
    </style>

    <div class="template_root">
        <div>This is an external custom layout</div>

        <ul class="template_defaultList">
            {{#each data.items as |item|}}
                <li>
                    {{MyDataSourceField}}
                </li>
            {{/each}}
        </ul>
    </div>
</content>
```

> All your custom data source fields (items and custom properties) will be available in your template through the `data` root property (ex: `data.items`). Also, don't forget to wrap your HTML markup with `<content id="template">` node to get it work.

TODO Templating doc

- How to refer @root variable

2. In the main entry point class (ex: `MyCompanyLibraryLibrary.ts`), extends the `IExtensibilityLibrary` interface from the `@aequos/extensibility` module and register your custom layout this way:

        import { IExtensibilityLibrary, ILayoutDefinition } from "@aequos/extensibility";

        export class MyCompanyLibraryLibrary implements IExtensibilityLibrary {

        public getCustomLayouts(): ILayoutDefinition[] {
            return [
                {
                    name: 'My custom layout',
                    iconName: 'Color',
                    key: 'CustomLayout',
                    templateContent: require('../custom-layout.html'),
                    templateOptions: [
                        PropertyPaneTextField('customLayout.myTextProperty', {
                            label: 'A custom layout property',
                            placeholder: 'Fill a value'
                        })
                    ]
                }
            ];
        }

3. Bundle `gulp bundle --ship` and package your library `gulp package-solution --ship` and upload it either in the global or a site app catalog.