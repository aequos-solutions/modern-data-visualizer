# Setup your standalone license

!!! note
    * You must be a [tenant administrator](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/tenant-properties?tabs=sprest#setwrite-tenant-properties) to perform this operation or use an account member of the Owners group of the tenant app catalog site.
    * Tenant properties are stored in the app catalog site associated with that tenant. To set or remove a property, you have to specify the absolute URL of the app catalog site. If you specify the URL of a site different than the app catalog, you will get an access denied error.

To setup a standalone license, follow this procedure:

1. On a remote machine that have acces to your Microsoft 365 environment, install [Microsoft 365 CLI](https://pnp.github.io/cli-microsoft365/) as an administrator:

        npm i -g @pnp/cli-microsoft365

2. Connect to Microsoft 365 using the following command and and SharePoint administrator account.

        m365$ login

2. Create a [new tenant property](https://pnp.github.io/cli-microsoft365/cmd/spo/storageentity/storageentity-set/) named `AEQUOS_DATAVISUALIZER_LICENSE_KEY` with, as value, the key you received by email after your purchase:
        !["License mail"](./assets/license_mail.png){: .center}

        m365 spo storageentity set -k AEQUOS_DATAVISUALIZER_LICENSE_KEY -v <your_key> -d 'aequos Data Visualizer solution license key' -u https://contoso.sharepoint.com/sites/appcatalog

    > In the URL, you must specify the address of the global app catalog in your tenant. If you don't have an app catalog, follow this [procedure](https://docs.microsoft.com/en-us/sharepoint/use-app-catalog) to create one.

2. To remove an existing key, use the following command:

        m365 spo storageentity remove -k AEQUOS_DATAVISUALIZER_LICENSE_KEY -u https://contoso.sharepoint.com/sites/appcatalog

> With a standalone license, **our license validation check endpoint won't be hit**. The validation is done in-place.