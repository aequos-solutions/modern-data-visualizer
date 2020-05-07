# Installation

1. Download the latest SharePoint Framework package (**aequos-modern-data-visualizer.sppkg**) from our public GitHub repository:
2. Add the package to your global app catalog or site collection app catalog. If you don't have an app catalog, follow this [procedure](https://docs.microsoft.com/en-us/sharepoint/use-app-catalog) to create one. You can choose to deploy the solution globally or via app (more info [here](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/tenant-scoped-deployment)).

    > The solution is deployed in the general Office 365 CDN meaning **we don't host any code on our side**.

    > The solution asks the following API permissions by defailt to enhance the experience. These permissions are **not mandatory**. If you don't accept them, you will simpy have less available features.

    | Requested API permission | Used for |
    | -------------- | --------- |
    | _Sites.Read.All_ | The default SharePoint REST API v2 in the OData data source. |
    | _User.Read_ | The Microsoft Graph Toolkit persona card in the people layout.  |
    | _People.Read_ | Same as above.
    | _Contacts.Read_ | Same as above.
    | _User.ReadBAsic.All_ | Same as above.

3. Get a valid license from our website. Don't forget to register the Office 365 tenant ID where you want to use this solution.

    !["Licences"](./assets/licenses.png){: .center}

    > **If you chose a standalone license, you must follow these [additional steps](./setup_standalone.md).**

4. Add the Web Parts to a SharePoint and start building!

!["Available Web Parts"](./assets/webparts.png){: .center}