The PnP Modern Search v4 is literally a forked version of our Modern Data Visualizer solution and therefore, shares the same code foundation from its parent, simply with less features. If you started your project using the PnP Web Parts but feel limited to accomplish your objectives, you can upgrade to MDV solution (since version 1.3.0) **without losing your Web Parts data and configuration** following this procedure:

!!! warning
    **We do not recommended to upgrade the PnP Modern Search Web Parts v4 if you simply want to try the MDV solution** as it will be difficult to rollback to PnP Modern Search later.
    For a trial, consider using an isolated site collection with its own app catalog instead. 

1. Download the latest release of the aequos Modern Data Visualizer solution in our [GitHub repository](https://github.com/aequos-solutions/modern-data-visualizer/releases)
2. In the SharePoint app catalog where the PnP Modern Search v4 solution is deployed, remove the existing package:

    !["Upgrade from PnP - Remove existing package"](./assets/upgrade_pnp_remove.png){: .center}

!!! important "Downtime consideration"
    Removing the existing package from the app catalog will have an impact on your users as they may see errors when refreshing their SharePoint pages. To minimize the downtime, just upload the new MDV package right away after deleting. The error messages will disappear after few page refreshes.

3. Add the aequos MDV SharePoint Framework package et voilà! Same configurations but with much more available options now.

    !["Upgrade from PnP - Add new package"](./assets/upgrade_mdv_add.png){: .center}

!!! warning 
    - The PnP Modern Search v4 and aequos Data Visualizer solutions can't be used in the same app catalog.
    - PnP Modern Search Web Parts v3 are not upgradable to MDV (neither to PnP v4 anyway).