export default class Dropdown {
    constructor() {
        Array.from(document.querySelectorAll('*[data-dropdown-menu]')).forEach(((value) => {
                value.addEventListener('mouseover', () => {
                    let dropdownMenu = document.getElementById(value.getAttribute('data-dropdown-menu'));
                    dropdownMenu.classList.toggle("d-block");
                    if (dropdownMenu.getAttribute('have-listener') !== 'true') {
                        dropdownMenu.addEventListener('mouseleave', () => {
                            dropdownMenu.classList.toggle("d-block");
                        })
                    }
                    dropdownMenu.setAttribute('have-listener', 'true');
                });
                value.addEventListener('mouseout', (e) => {
                        if (!(e.toElement.id && document.querySelector('*[data-dropdown-menu=' + e.toElement.id + ']'))) {
                            document.getElementById(value.getAttribute('data-dropdown-menu')).classList.remove('d-block');
                        }
                    }
                )
            })
        );
    }
}

