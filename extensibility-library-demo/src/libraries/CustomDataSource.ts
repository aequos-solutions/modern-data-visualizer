import { BaseDataSource, IDataSourceData, ITemplateSlot, BuiltinTemplateSlots } from "@aequos/extensibility";
import { IPropertyPaneGroup } from "@microsoft/sp-property-pane";
import { PropertyPaneTextField } from '@microsoft/sp-webpart-base';

export interface ICustomDataSourceProperties {
    myProperty: string;
}

export class CustomDataSource extends BaseDataSource<ICustomDataSourceProperties> {

    public getItemCount(): number {
        return 0;
    }

    public async getData(): Promise<IDataSourceData> {

        /* Your logic to get the data */
        return Promise.resolve({
            items: []
        });
    }

    public getPropertyPaneGroupsConfiguration(): IPropertyPaneGroup[] {

        return  [
            {
              groupName: "Custom",
              groupFields: [
                  /* Your property pane fields if needed */ 
                  PropertyPaneTextField('dataSourceProperties.myProperty', {
                      label: "My custom property"
                  })
              ]
            }
        ];
    }

    public getTemplateSlots(): ITemplateSlot[] {
        return [
            {
                slotName: BuiltinTemplateSlots.Title,
                slotField: 'Title'
            },
            {
                slotName: BuiltinTemplateSlots.Path,
                slotField: 'Path'
            },
            {
                slotName: BuiltinTemplateSlots.Summary,
                slotField: 'Description'
            }
        ];
    }
}