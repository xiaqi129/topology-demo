
export class TopoContext {
    static labelToggle = false;
    static groupLabelToggle = true;
    static tooltipToggle = true;
    static bundleToggle = true;
    static bundleLabelToggle = true;
    static edgeLabelToggle = false;
    static emptyGroupObj = {
        type: 'circle',
        location: { x: 100, y: 100 },
        size: 100,
        color: 0x00ff00,
        opacity: 0.5,
    };

    static nodeRightMenu = [
        // { label: 'Check configuration', id: 'check_configuration' },
        // { label: 'Select neighbors', id: 'select_neighbors' },
        // { label: 'Lock/Unlock', id: 'lock_unlock' },
        // { label: 'Hide/Show', id: 'hide_show' },
        // { label: 'Change icon', id: 'change_icon' },
        // { label: 'Group', id: 'move_in_group' },
        // { label: 'UnGroup', id: 'move_out_of_group' },
        // { label: 'Edit', id: 'edit_node' },
        { label: 'Debug', id: 'debug' },
    ];
    private constructor() { }
}
