The _'Microsoft Search'_ data source retrieve items from the Microsoft search engine.


#### Source configuration

| Setting | Description | Default value 
| ------- |---------------- | ---------- |
| **Entity types to search** | The entity types to search. See the [Microsoft Search API documentation](https://docs.microsoft.com/en-us/graph/api/resources/search-api-overview?view=graph-rest-beta) to see valid combinations. | Drive items (SharePoint & OneDrive)
| **Use beta endpoint** | If checked, will use the Microsoft search `beta` endpoint instead of `v1.0` in Microsoft Graph. | false
| **Sort order** | The initial sort order for the results. Sorting is supported only for SharePoint and OneDrive items. The property to be sorted on should be Sortable in the search schema. | ascending

!!! warning
    Filters (aka 'refiners') are only available with the **beta** endpoint.