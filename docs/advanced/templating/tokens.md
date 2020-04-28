# Available tokens

> All tokens are case insensitive and will be resolved as string values. Also, these tokens can be used for all built-in data sources.

## Paging tokens

Use these tokens to implement your own paging logic to get context information from the Web Part.

| Token | Description
| ------ | ---------------
| **{itemsCountPerPage}** | The number of items to display per page configured in the data source paging options in the property pane.
| **{startRow}** | Corresponds to the _number or items per page_ * _the current page number_ (starting from 0).
| **{searchBoxQuery}** | TODO

## Current page tokens

Use these tokens to get column values from the current page.

| Token | Description
| ------ | ---------------
**{Page.&lt;FieldName&gt;}** <br/> | The value of a field on the page from where the query was issued. For example, if the page from where the query was issued contained a site column named "ContentOwner," specifying `{Page.ContentOwner}` would allow you to query for the value of "ContentOwner." FieldName is the internal name of the field. When used with taxonomy columns, use `{Page.<FieldName>.Label}` or `{Page.<FieldName>.TermID}` <br/> |

## Context tokens

Use these tokens to get information about the current page context.

> These tokens surfaces information available trough the native SPFx `PageContext` class. Refer to [https://docs.microsoft.com/en-us/javascript/api/sp-page-context/pagecontext?view=sp-typescript-latest](https://docs.microsoft.com/en-us/javascript/api/sp-page-context/pagecontext?view=sp-typescript-latest) to get available properties you can use for these tokens.

> Unless other tokens, all property names are **case sensitive**. 

| Token | Description
| ------ | ---------------
**{Site.\<property\>}**  <br/> | Contextual information for the SharePoint site collection that is hosting the page. For example `{Site.serverRelativeUrl}`. <br/>
**{Web.\<property\>}**  <br/> | Contextual information for the SharePoint web that is hosting the page. For example `{Web.title}`. <br/>
**{List.\<property\>}**  <br/> | Contextual information for the SharePoint list item that is hosting the page. If there is no list item associated to the current page, this property will be undefined.. For example `{List.title}`. <br/>
**{Hub.\<property\>}**  <br/> |  Contextual information about the hub site if the current site is configured as hub. For example `{Hub.id}`. <br/>
**{Group.\<property\>}**  <br/> | Contextual information about the O365 Group associated with this site. If there is no Office 365 group associated with the current site, this property will be undefined. Use the debug layout view to see available values.
**{LegacyPageContext.\<property\>}**  <br/> | A value from the `legacyPageContext` object on the page. For example, if the `legacyPageContext` object of the current page contains a property "hubSiteId": "166aa115-7ae7-4c21-9e02-9e0c8872be28", you could obtain the value 166aa115-7ae7-4c21-9e02-9e0c8872be28 by specifying `{LegacyPageContext.hubSiteId}`

## User tokens

Use these tokens to get property values from the current connected user.

| Token | Description
| ------ | ---------------
**{User.\<property\>}**  <br/> |Any property from the user profile of the user who issued the query — for example, `{User.SPS-Interests}`, including custom properties.  <br/>

## Date tokens

Use these tokens to build dynamic date based conditions.

| Token | Description
| ------ | ---------------
**{Today}** | The current date and time as YYYY-MM-DDTHH:mm:ssZ format.
**{Today} +/- \<integer value for number of days\>}**  <br/> | A date calculated by adding/subtracting the specified number of days to/from the date when the query is issued. Date format is YYYY-MM-DDTHH:mm:ssZ. For example, this value can be used to query content of the managed property _LastModifiedTime_. Also _'A week ago'_ token would be `{Today} - 7` and _'Last year'_ `{Today} - 365`.  <br/>

## Query string tokens

Use these tokens to retrieve informations from the URL query string parameters.

| Token | Description
| ------ | ---------------
**{QueryString.&lt;ParameterName&gt;}** <br/> | A value from a query string in the URL of the current page. For example, if the URL of the current page contains a query string such as ItemNumber=567, you could obtain the value 567 by specifying `{QueryString.ItemNumber}`. <br/> |

# Search Data source specific tokens

When you use **SharePoint search data source**, you can additionnaly use these tokens, supported natively in the _query template_ value.

TODO
