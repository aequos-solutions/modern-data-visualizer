The _'Microsoft Search'_ data source retrieve items from the Microsoft search engine.


#### Source configuration

| Setting | Description | Default value 
| ------- |---------------- | ---------- |
| **Entity types to search** | The entity types to search. See the [Microsoft Search API documentation](https://docs.microsoft.com/en-us/graph/api/resources/search-api-overview?view=graph-rest-beta) to see valid combinations. | Drive items (SharePoint & OneDrive)
| **Use beta endpoint** | If checked, will use the Microsoft search `beta` endpoint instead of `v1.0` in Microsoft Graph. | false
| **Sort** | Configure the sort settings of the data source. Properties listed in the dropdown are all static properties marked as _'Sortable'_ in the [SharePoint search schema](https://docs.microsoft.com/sharepoint/technical-reference/). However, it does not list all possible _RefinableXXX_ or aliases fields. To use them, you must enter the value manually and press 'Enter' to validate. For a particular field, you can define if it should be used for initial sort (i.e. when the results are loaded for the first time) or be only available for users in the sort control (i.e. after the results are loaded). **The sort control does not consider default sort fields (i.e. select them by default) and you can only sort on a single field at a time according the fields you defined**. If no user sort fields are defined in the configuration, the sort control won't be displayed.  | None.
<!-- | **Sort order** | The initial sort order for the results. Sorting is supported only for SharePoint and OneDrive items. The property to be sorted on should be Sortable in the search schema. | ascending -->
!!! warning
    Filters (aka 'refiners') are only available with the **beta** endpoint.

