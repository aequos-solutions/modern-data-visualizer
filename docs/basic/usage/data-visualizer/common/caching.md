For all data sources, you have the option to cache the data to improve performances during the first page load.

!["Data source slots"](../../../../assets/webparts/data_visualizer/common/caching_options.png)

When enabled, **only the first page of initial results is cached**. By default, a 5 minutes cache is applied. However, you can set your own duration. At any moment you can clear the cache by clicking on the _'Clear cache'_ button to start over. You data will be cached on the next page refresh.

Notice the data are **won't be put in the cache** when:

- A filter is selected.
- The current page number is greater than 1.
- The input query text changes.

> Data in the cache are stored in the browser local storage under the following name: aequosDataVisualizer_DataSourceDataFirstPage_&lt;WebPart instance ID&gt;.