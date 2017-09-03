# Swipeable Bottom Sheet

A swipeable material's bottom sheet implementation, that uses [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views).
This can be used to reproduce Material Design's [Bottom Sheet](https://material.io/guidelines/components/bottom-sheets.html) guidelines


## Installation


```
npm install react-swipeable-bottom-sheet --save


## Demo & Examples

- [Uncontrolled bottom sheet](http://manufont.github.io/react-swipeable-bottom-sheet/uncontrolled.html)
- [Controlled bottom sheet](http://manufont.github.io/react-swipeable-bottom-sheet/controlled.html)
- [Fullscreen bottom sheet](http://manufont.github.io/react-swipeable-bottom-sheet/fullscreen.html)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.
```


## Usage


```
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

<SwipeableBottomSheet
overflowHeight={64}>
	<div>
		Here goes the content of your bottom sheet
	</div>
</SwipeableBottomSheet>
```

The bottom sheet's height (when open) scales automatically with its content's height.


### Properties

| Name | Type | Default | Platform | Description |
|:-----|:-----|:--------|:---------|:------------|
| overflowHeight | number | 0 | The height of the sheet when closed. |
| open | bool | | Use this property to enable controlled mode. If `true`, it will open the sheet. |
| defaultOpen | bool | false | If `true`, the sheet is open at component mount. |
| onChange | function(isOpen) | | The callback that fires after sheet opens or closes. |
| shadowTip | bool | true | If `true`, a box shadow is displayed at sheet's bottom when closed. This is used to show that content is hidden below. |
| topShadow | bool | true | If `true`, a box shadow is displayed at sheet's top border. |
| overlay | bool | true | If `true`, an overlay is displayed behind sheet when open. A click on the overlay closes the sheet. |
| swipeableViewsProps | object | `{}` | Props passed to SwipeableViews component. |
| style | object | `{}` | This is the inlined style that will be applied on the root (non-swiped) component. |
| bodyStyle | object | `{}` | This is the inlined style that will be applied on the body of the bottom sheet. |
| overlayStyle | object | `{}` | This is the inlined style that will be applied on the overlay. |


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT
