# Use static taxonomy filters with the SharePoint search data source

Static filters don't necessarily need to be connected to a Data Visualizer Web Part. They are different from ['Refinement' filters](https://aequos-solutions.github.io/modern-data-visualizer/usage/data-filters/#filter-types-static-filter-versus-refiner-filter) and they just send abitrary filter values to consumer Web Parts ignoring received values from the data source. In this demo, we show you a practical use case and how to use them, for instance retrieve data from the SharePoint search according to a specific taxonomy term in a specific terms set **without any prior results fetched** (meaning filter values will be available at page load for initial filtering).

## Video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/udEq2n9bqlo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> Static filters can be used in [tokens](../../usage/data-visualizer/tokens.md) as well for other data sources. 