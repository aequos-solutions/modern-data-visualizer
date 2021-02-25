From 1.2.x version, you can benefit from Microsoft [adaptive expressions](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-adaptive-expressions?view=azure-bot-service-4.0&tabs=arithmetic) to build and/or format strings dynamically based on existing environment tokens. An adaptive expression can contain one or more explicit values, prebuilt functions, or custom functions. Refer to the official Microsoft documentation to see the compelte list.

In the solution, they can be used **wherever tokens are supported**.

> A concrete example about their utility and usage is described in the [Build a people directory using alphabetical verticals, SharePoint Search data source and adaptive expressions
](../../../getting_started/tutorials/build_people_directory_graph) tutorial.

**How to use them?**

An adaptive expression is always enclosed with `${...}`. Single tokens are only enclosed with `{...}` and can be included in a expression. For instance, the following expression will evaluate the `{inputQueryText}` token value and depending if it is empty or not, the output will be different.

```
${if(empty('{inputQueryText}'),'','&$search="displayName:{inputQueryText}"')}

```

!!! note
    * Tokens enclosed with regular curly braces `{}` are always evaluated **before** adaptive expressions (enclosed with `${}`)
    * Expressions enclosed with quotes (`"`) will always be evaluated as constants meaning **all nested functions won't be evaluated**. If you want to use the result of a function output and a string, you should use the `concat()` method. Ex: instead of `"myStringValue myFunction('param')"`, use `concat("myStringValue",myFunction('param'))`.

## Use prebuilt functions 

We defined some useful functions that you can use in your adaptive expression to format the output correctly:

### OData query

| Functions | Description | Usage  |
| --------- | ----------- | ------ |
| `buildOdataFilterCondition` | Builds an OData filter condition dynamically according the current selection. Use the `{filters}` token. | Example: use a multi taxonomy filter values: `https://graph.microsoft.com/v1.0/groups?&${if(empty('{filters}'),'',concat("&$filter=", buildOdataFilterCondition(json('{filters}'))))}`.