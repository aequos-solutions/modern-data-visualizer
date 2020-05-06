!["aequos"](./assets/aequos_logo_noir.png){: .center .logo}

# aequos Data Visualizer solution

The 'Data Visualizer' solution is a set of SharePoint Online modern Web Parts allowing SharePoint super users, webmasters and developers to create highly flexible and personalized data viewing and filtering experiences in minutes!

It is the enhanced product version of the well known ["Pattern & Practices Modern Search"](https://github.com/microsoft-search/pnp-modern-search) open-source solution that we also created.

Refer to out website to see [differences]() between the two solutions.

> Don't be wrong: **we still continue to invest time and support for the open-source**. If it suits your current requirement, feel free to go with it.We will never push someone to purchase the licensed solution. It is up to you.

## What's included?

The solution includes the following Web Parts:

| Component | Description |
| --------- | ----------- |
| **Data Visualizer** | Retrieve data from a data source and render them in a specific layout.
| **Data Filters** | Filter and refine data displayed in 'Data Visualizer' Web Parts.
| **Data Verticals** | Browse data as silos (i.e. tabs) from multiple data sources.
| **Search box** | Let users enter free text queries sent to 'Data Visualizer' Web Parts.

## Overview video: let's build a complete search center.

Here is a overview video on how to build a complete search center in minutes using all available Web Parts whithin a SharePoint page including multiple data sources.

- Video here -

## Extensibility model

By getting this solution, you also benefit from an advanced extensibility model allowing you to customize the solution according to your requirements if default features don't do the job for you. The supported extensions are:

- Custom data sources.
- Custom layouts.
- Custom web components.
- Custom suggestions providers.
- Custom Handlebars customization (helpers, partials, etc.).

With these available customizations options, you can do pretty much anything! For more information about extensibility refer to the [documentation](./basic/extensibility/index.md). 

# Installation

1. Download the latest SharePoint Framework package (**aequos-modern-data-visualizer.sppkg**) from our public GitHub repository:

TODO IMAGE

2. Add the package to your global app catalog or site collection app catalog. If you don't have an app catalog, follow this [procedure](https://docs.microsoft.com/en-us/sharepoint/use-app-catalog) to create one. You can choose to deploy the solution globally or via app (more info [here](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/tenant-scoped-deployment)).

TODO IMAGE

> The solution is deployed in the general Office 365 CDN meaning **we don't host any code on our own**.

3. Get a valid license from our website. Don't forget to register the Office 365 tenant ID where you want to use this solution.

!["Licences"](./assets/licenses.png){: .center}

TODO IMAGE SENDOWL

> **If you chose a standalone license, you must follow these [additional steps](./setup_standalone.md).**

4. Add the Web Parts to a SharePoint and start building!

!["Available Web Parts"](./assets/webparts.png){: .center}

# Usage

## Web Parts usage

- [Data Visualizer Web Part documentation](./basic/usage/data-visualizer/index.md)
- [Data Filters Web Part documentation](./basic/usage/data-filters/index.md)
- [Data Verticals Web Part documentation](./basic/usage/data-verticals/index.md)
- [Search box documentation](./basic/usage/search-box/index.md)

## Extensibility and customizations

- [Extensibility documentation](./basic/extensibility/index.md)

# Issues, questions, feedback?

For any issue, question or feedback, please the [official GitHub repository](https://github.com/aequos-solutions/modern-data-visualizer/issues). We will be happy to help you!

### Troubleshooting

To help us to resolve your issue, you can include screenshots or error messages coming from:

- The faulty Web Part itself. 
- Errors displayed in the browser console (typically pressing F12).
- Errors displayed in the SharePoint console (pressing CTRL+F12)