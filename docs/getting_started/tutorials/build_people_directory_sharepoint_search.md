# Build a people directory using alphabetical verticals and SharePoint Search data source

This tutorial gives you basic steps to achieve a people directoy using alphabetical letters and the SharePoint search data source:

!!! note "Questions, issues with this tutorial?"
    If you encouter issues or have questions about this tutorial don't hesitate to reach us using our official [GitHub repository](https://github.com/aequos-solutions/modern-data-visualizer/issues/new/choose).

## Video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/SLbXneP3b6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Step-by-step tutorial

1. Add the _'Data Verticals'_ Web Part on the page.

    !["Data Verticals - Add"](../../assets/scenarios/people_directory1.png){: .center} 

1. For each alphabetical letter, add and configure a new vertical. As the value use `<Letter> + *`. Example `A*` for letter **'A'**. You can also add an **'All'** tab by specifying `*` as value.

    !["Data Verticals - Configuration"](../../assets/scenarios/people_directory2.png){: .center} 

1. Add a new _'Data Visualizer'_ Web Part on the page.

    !["Data Visualizer - Add"](../../assets/scenarios/people_directory3.png){: .center} 

1. Select the _'SharePoint Search'_ data source.

    !["Data Visualizer - Select Data Source"](../../assets/scenarios/people_directory4.png){: .center} 

1. In the _'Connections'_ property pane configuration page, connect the _'Data Verticals'_ Web Part previously added. Select **all** the available tabs (i.e. letters). Basically it tells the Data Visualizer Web Part to be or remain visible when user clicks on any of these letters.

    !["Data Visualizer - Configure Verticals"](../../assets/scenarios/people_directory5.png){: .center} 

1. In _'Layouts'_ property pane configuration page, select the 'People' layout.

    !["Data Visualizer - Select Layout"](../../assets/scenarios/people_directory6.png){: .center}

    > Optionally, in the layout options, you can check _'Show persona card on hover'_ option. To get it work, [an administrator needs to approve required API permissions](../../installation.md).

    !["Data Visualizer - Show persona card"](../../assets/scenarios/people_directory8.png){: .center}

1. In the _'Data source'_ property pane configuration page, select the _'LocalPeopleResults'_ **Result Source** and update the **Query Template** property with the `{searchTerms} FirstName:{verticals.value}` expression. 

    !["Data Visualizer - Configure data source"](../../assets/scenarios/people_directory7.png){: .center}

    > This expression is given as an example. You can use the `{verticals.value}` token anywhere in the query according to your requirements. The value will be simply replaced dynamically.

1. Save your page. You can now filter people based on alphabetical letters using their first name.

    !["Data Visualizer - Final result"](../../assets/scenarios/people_directory9.png){: .center}

    > You can then add a _'Search Box'_ or _'Data Filters'_ Web Parts to complete the experience.