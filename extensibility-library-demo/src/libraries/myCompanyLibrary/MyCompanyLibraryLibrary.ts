import { ServiceKey } from "@microsoft/sp-core-library";
import { IDataSourceDefinition, IDataSource, IExtensibilityLibrary, ILayoutDefinition, IComponentDefinition, ILayout, LayoutType, ISuggestionProviderDefinition, ISuggestionProvider } from "@aequos/extensibility";
import { CustomDataSource } from "../CustomDataSource";
import { MyCustomComponentWebComponent } from "../CustomComponent";
import { Customlayout } from "../CustomLayout";
import { CustomSuggestionProvider } from "../CustomSuggestionProvider";

export class MyCompanyLibraryLibrary implements IExtensibilityLibrary {

  public getCustomLayouts(): ILayoutDefinition[] {
    return [
      {
        name: 'My custom layout',
        iconName: 'Color',
        key: 'CustomLayout',
        type: LayoutType.Results,
        templateContent: require('../custom-layout.html'),
        serviceKey: ServiceKey.create<ILayout>('MyCompany:CustomLayout', Customlayout)
      }
    ];
  }

  public getCustomWebComponents(): IComponentDefinition<any>[] {
    return [
      {
        componentName: 'my-custom-component',
        componentClass: MyCustomComponentWebComponent
      }
    ];
  }

  public getCustomDataSources(): IDataSourceDefinition[] {

    return [
      {
          name: 'My Custom Source',
          iconName: 'Code',
          key: 'CustomDataSource',
          serviceKey: ServiceKey.create<IDataSource>('MyCompany:CustomDataSource', CustomDataSource)
      },
    ];
  }

  public getCustomSuggestionProviders(): ISuggestionProviderDefinition[] {
    return [
        {
          name: 'Custom Suggestions Provider',
          key: 'CustomSuggestionsProvider',
          description: 'A demo custom suggestions provider from the extensibility library',
          serviceKey: ServiceKey.create<ISuggestionProvider>('MyCompany:CustomSuggestionsProvider', CustomSuggestionProvider)
      }
    ];
  }

  public registerHandlebarsCustomizations(namespace: typeof Handlebars) {

    // Register custom Handlebars helpers
    // Usage {{myHelper 'value'}}
    namespace.registerHelper('myHelper', (value: string) => {
      return new namespace.SafeString(value.toUpperCase());
    });
  }
}
