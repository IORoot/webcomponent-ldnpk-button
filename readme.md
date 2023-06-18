# ldnpk-button WebComponent

This is a completely native javascript implementation of the component for the 
LondonParkour.com website. 
There are no dependencies for frameworks, react, vue, etc... and can be used
in any HTML page.

## How to use

You can load the javascript file like any normal javascript and then use the new 
tag on the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
	ldnpk-button {
	    --backgroundColour: #F3F4F6;
	    --foregroundColour: black;
	    --shadow:           0 4px 6px -1px rgb(0 0 0 / 0.1), 
                            0 2px 4px -2px rgb(0 0 0 / 0.1);
	  }
    </style>
    <ldnpk-button
        href="https://londonparkour.com"
        target="_self"
        rel="undefined"
        title="link"
        style="default"
        size="default">
        EXPLORE
    </ldnpk-button>

    <script src="./button.js"></script>

</body>
</html>
```

## Storybook

You can use the `button.stories.js` file in storybook.js to dynamically describe 
the webcomponent.

## Properties

- title
- label
- target
- rel
- style
- size
- shadow

## CSS Properties

- `--backgroundColour`
- `--foregroundColour`
- `--shadow`