# Simple dropdown menu

It's simple dropdown menu

## Installation

`npm install simple-dropdown-menu`

## Usage

**JS**

`import Dropdown from "simple-dropdown-menu";`

`new Dropdown();`

Now you can pass the names of eventlisteners that will show or hide the menu.


`new Dropdown({listenerEnter: 'click', listenerLeave: 'mouseout'});`

**HTML**

1. Add attribute to button for dropdown - data-dropdown-menu="{THIS_YOURS_ID_BLOCK_FOR_SHOW}"
2. And add\change ID block for showing


**Simple**:

`<a data-dropdown-menu="category-dropdown">...</a>`

`<a data-dropdown-menu="category-dropdown" data-dropdown-menu-listener-enter="{MOUSE_EVENT}">...</a>`

`<a data-dropdown-menu="category-dropdown" data-dropdown-menu-listener-leave="{MOUSE_EVENT}">...</a>`

`<div id="category-dropdown">...</div>`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License

MIT