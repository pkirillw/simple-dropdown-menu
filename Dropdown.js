export default class Dropdown {
    constructor(options) {
        options = options || {
            listenerEnter: 'mouseover',
            listenerLeave: 'mouseout'
        };

        options.listenerEnter = options.listenerEnter || 'mouseover';
        options.listenerLeave = options.listenerLeave || 'mouseout';

        Array.from(document.querySelectorAll('*[data-dropdown-menu]')).forEach(((value) => {
                let listenerEnter = value.getAttribute('data-dropdown-menu-listener-enter') || options.listenerEnter;
                let listenerLeave = value.getAttribute('data-dropdown-menu-listener-leave') || options.listenerLeave;

                value.addEventListener(listenerEnter, () => {
                    let dropdownMenu = document.getElementById(value.getAttribute('data-dropdown-menu'));
                    dropdownMenu.classList.toggle("d-block");

                    if (dropdownMenu.getAttribute('have-listener') !== 'true') {
                        dropdownMenu.addEventListener(listenerLeave, () => {
                            dropdownMenu.classList.toggle("d-block");
                        })
                    }
                    dropdownMenu.setAttribute('have-listener', 'true');
                });

                value.addEventListener(listenerLeave, (e) => {
                        if (!(e.toElement.id && document.querySelector('*[data-dropdown-menu=' + e.toElement.id + ']'))) {
                            document.getElementById(value.getAttribute('data-dropdown-menu')).classList.remove('d-block');
                        }
                    }
                )
            })
        );
    }
}
