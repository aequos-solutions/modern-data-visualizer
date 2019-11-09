# Create a custom web component

A web component is a custom HTML element that can be used in your templates to implement complex behaviors. We used them here as *"wrappers"* for React components to be able to use them with Handlebars. In this solution, web components are considered **stateless*, meaning they will be entirely recreated when an attribute is changed (coming from the property pane). It means you can still use an inner state in your React components but not rely on the parent context (props) since it will be recreated every time by the Handlebars template.


To create a custom component, follow this procedure:

1. Create a new JSX file that will be used for your layout. (ex: `CustomComponent.tsx`). You can create it anywhere in your project.

2. Implement your component like a regular React component.

        import * as React from 'react';
        import { BaseWebComponent } from '@aequos/extensibility';
        import * as ReactDOM from 'react-dom';

        export interface IObjectParam {
            myProperty: string;
        }

        export interface ICustomComponentProps {

            /**
            * A dummy string param
            */
            myStringParam?: string;

            /***
            * 
            */
            myObjectParam?: string;
        }

        export interface ICustomComponenState {
        }

        export class CustomComponent extends React.Component<ICustomComponentProps, ICustomComponenState> {
            
            public render() {

                // Parse custom object
                const myObject: IObjectParam = JSON.parse(this.props.myObjectParam);

                return <div>{this.props.myStringParam} {myObject.myProperty}</div>;
            }
        }

    Because `props` will be passed from an HTML template, they must to use always `string` type. For complex objects, you will need to pass them as 'stringified' then use the JSON.parse() method to use them in your component logic.

3. In the same file, create an other class, this time to define your web component by inheriting the `BaseWebComponent` abstact class`:

        export class MyCustomComponentWebComponent extends BaseWebComponent {
        
            public constructor() {
                super(); 
            }
        
            public async connectedCallback() {
        
            let props = this.resolveAttributes();
            const debugView = <CustomComponent {...props}/>;
            ReactDOM.render(debugView, this);
            }    
        }

    The `resolveAttributes` method will transform custom element HTML attributes to React component props. By convention, web component attributes have to be passed using **camel case** to be tranformed into React component props.

For instance: a `preview-image` HTML attribute becomes `previewImag` prop.

4. In the main entry point class (ex: `MyCompanyLibraryLibrary.ts`), extends the `IExtensibilityLibrary` interface from the `@aequos/extensibility` module and register your custom components this way:

        import { IExtensibilityLibrary, IComponentDefinition } from "@aequos/extensibility";
        import { MyCustomComponentWebComponent } from "../CustomComponent";
        ...

        export class MyCompanyLibraryLibrary implements IExtensibilityLibrary {

            ...
            public getCustomWebComponents(): IComponentDefinition<any>[] {
                return [
                    {
                    componentName: 'my-custom-component',
                    componentClass: MyCustomComponentWebComponent
                    }
                ];
            }

        ...

5. In a custom Handlebars layout, reference your component like this, leveraging the Handlebars context values:

        <my-custom-component my-string-param="{{MyStringProperty}}" my-object-param="{{JSONstringify MyObjectProperty 2}}"></my-custom-component>


6. Bundle `gulp bundle --ship` and package your library `gulp package-solution --ship` and upload it either in the global or a site app catalog.