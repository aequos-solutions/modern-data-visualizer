## Styling

You can write your own CSS styles inside your template. However, all CSS rules (including @media rules) will be prefixed automatically by an unique ID (**aequos-template_\<Web Part instance ID\>**) to make sure styles are isolated from other Web Parts on the page.

### Sanitized HTML

The HTML is sanitized automatically preventing XSS attacks. For the recored, we used [`DOMPurify`](https://github.com/cure53/DOMPurify) to do so. It means for instance, you cannot add your own `<script>` tags or inline JavaSrcript.


### Elements preview

```
<div class="thumbnail--image">
    <aequos-filepreview data-preview-url="{{slot item @root.slots.PreviewUrl}}" data-preview-image-url="{{slot item @root.slots.PreviewImageUrl}}">
        <img width="120" src="{{slot item @root.slots.PreviewImageUrl}}" onerror="this.onerror=null;this.src='{{@root.utils.defaultImage}}';"/> 
    </aequos-filepreview>
    <div class="thumbnail--hover">
        <div><aequos-icon data-name="DocumentSearch" aria-hidden="true"></aequos-icon></div>
    </div>
</div>


```