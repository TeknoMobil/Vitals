const Lang = imports.lang;
const St = imports.gi.St;
const PopupMenu = imports.ui.popupMenu;

const CoreStatsItem = new Lang.Class({
    Name: 'CoreStatsItem',
    Extends: PopupMenu.PopupBaseMenuItem,

    _init: function(gIcon, key, label, value, displayName) {
        this.parent();
        this._checked = false;
        this._key = key;
        this._gIcon = gIcon;

        this._labelActor = new St.Label({ text: displayName ? displayName : label });
        this.actor.add(new St.Icon({ style_class: 'popup-menu-icon', gicon : gIcon }));
        this.actor.add(this._labelActor, { x_fill: true, expand: true });
        this._valueLabel = new St.Label({ text: value });
        this.actor.add(this._valueLabel);
    },

    set checked(checked) {
        if (checked)
            this.setOrnament(PopupMenu.Ornament.CHECK);
        else
            this.setOrnament(PopupMenu.Ornament.NONE);

        this._checked = checked;
    },

    get checked() {
        return this._checked;
    },

    get key() {
        return this._key;
    },

    set display_name(text) {
        return this._labelActor.text = text;
    },

    get gicon() {
        return this._gIcon;
    },

    set value(value) {
        this._valueLabel.text = value;
    }
});
