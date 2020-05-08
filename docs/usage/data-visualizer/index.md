# Data Visualizer Web Part

The _'Data Visualizer' Web Part_ is the fundamental building block of whole global solution. Its purpose is basically to get data from a specifc source and render them in a specific native or custom layout based on Handlebars and web components.

This Web Part can be used **alone** or **connected to other Web Parts** to add dyanmic interactions (filters, search box or verticals). To use the Web Part on a SharePoint page:

1. Edit your SharePoint modern page.
2. Search for the _'aequos - Data Visualizer'_ Web Part and add it to your page:

!["aequos Data Visualizer Web Part"](../../assets/webparts/data_visualizer/data_visualizer_wp_picker.png){: .center}

!["aequos Data Visualizer Web Part"](../../assets/webparts/data_visualizer/data_visualizer_wp_placeholder.png){: .center}


### Data sources

{!usage/data-visualizer/data-sources/sharepoint-search.md!}

> Be careful, when you switch the data source in the property pane, all the previous data source properties are lost. We do this to avoid polluting the Web Part property bag.

### 2. Select a layout


## Use the Web Part with other Web Parts using connections