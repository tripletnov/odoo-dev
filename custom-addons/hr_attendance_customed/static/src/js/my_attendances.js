odoo.define('hr_attendance.my_attendances', function (require) {
"use strict";

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');


var MyAttendances = AbstractAction.extend({
    contentTemplate: 'HrAttendanceMyMainMenu',
    events: {
        "click .o_hr_attendance_sign_in_out_icon": _.debounce(function() {
            alert('salut!');
            
        }, 200, true),
    },

    willStart: function () {
        var self = this;
        return Promise.all([this._super.apply(this, arguments)]);
    },

});

core.action_registry.add('hr_attendance_my_attendances', MyAttendances);

return MyAttendances;

});
