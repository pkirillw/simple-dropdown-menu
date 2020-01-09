export default class Dropdown {
    constructor(options) {
        options = options || {
            listenerEnter: 'mouseover',
            listenerLeave: 'mouseout'
        };

        options.listenerEnter = options.listenerEnter || 'mouseover';
        options.listenerLeave = options.listenerLeave || 'mouseout';

        Array.from(document.querySelectorAll('*[data-dropdown-menu]')).forEach(((value) => {
                value.addEventListener(options.listenerEnter, () => {
                    let dropdownMenu = document.getElementById(value.getAttribute('data-dropdown-menu'));
                    dropdownMenu.classList.toggle("d-block");
                    if (dropdownMenu.getAttribute('have-listener') !== 'true') {
                        dropdownMenu.addEventListener(options.listenerLeave, () => {
                            dropdownMenu.classList.toggle("d-block");
                        })
                    }
                    dropdownMenu.setAttribute('have-listener', 'true');
                });
                value.addEventListener(options.listenerLeave, (e) => {
                        if (!(e.toElement.id && document.querySelector('*[data-dropdown-menu=' + e.toElement.id + ']'))) {
                            document.getElementById(value.getAttribute('data-dropdown-menu')).classList.remove('d-block');
                        }
                    }
                )
            })
        );
    }
}
