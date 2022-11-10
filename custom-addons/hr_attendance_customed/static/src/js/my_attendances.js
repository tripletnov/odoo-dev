odoo.define('hr_attendance.my_attendances', function (require) {
    "use strict";

    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');


    var MyAttendances = AbstractAction.extend({
        contentTemplate: 'HrAttendanceMyMainMenu',
        
        events: {
            'click .o_hr_attendance_pin_pad_button_0': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(0))); },
            'click .o_hr_attendance_pin_pad_button_1': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(1))); },
            'click .o_hr_attendance_pin_pad_button_2': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(2))); },
            'click .o_hr_attendance_pin_pad_button_3': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(3))); },
            'click .o_hr_attendance_pin_pad_button_4': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(4))); },
            'click .o_hr_attendance_pin_pad_button_5': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(5))); },
            'click .o_hr_attendance_pin_pad_button_6': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(6))); },
            'click .o_hr_attendance_pin_pad_button_7': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(7))); },
            'click .o_hr_attendance_pin_pad_button_8': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(8))); },
            'click .o_hr_attendance_pin_pad_button_9': function () { this.$('.o_hr_attendance_PINbox').val(this.checkNum(Number(9))); },


            'click .o_hr_attendance_pin_pad_button_divide': function () {
                // var currentString = input.innerHTML;
                var currentString = this.$('.o_hr_attendance_PINbox').val();
                var lastChar = currentString[currentString.length - 1];

                // if last character entered is an operator, replace it with the currently pressed one
                if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
                    var newString = currentString.substring(0, currentString.length - 1) + '÷';

                    this.$('.o_hr_attendance_PINbox').val('');
                    this.$('.o_hr_attendance_PINbox').val(this.$('.o_hr_attendance_PINbox').val() + newString);
                } else if (currentString.length == 0) {
                    // if first key pressed is an opearator, don't do anything
                    console.log("enter a number first");
                } else {
                    // else just add the operator pressed to the input
                    //   input.innerHTML += e.target.innerHTML;
                    this.$('.o_hr_attendance_PINbox').val(this.$('.o_hr_attendance_PINbox').val() + '÷');
                }

            },

            'click .o_hr_attendance_pin_pad_button_multiply': function () {
                var currentString = this.$('.o_hr_attendance_PINbox').val();
                var lastChar = currentString[currentString.length - 1];

                // if last character entered is an operator, replace it with the currently pressed one
                if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
                    var newString = currentString.substring(0, currentString.length - 1) + '×';

                    this.$('.o_hr_attendance_PINbox').val('');
                    this.$('.o_hr_attendance_PINbox').val(this.$('.o_hr_attendance_PINbox').val() + newString);
                } else if (currentString.length == 0) {
                    // if first key pressed is an opearator, don't do anything
                    console.log("enter a number first");
                } else {
                    // else just add the operator pressed to the input
                    //   input.innerHTML += e.target.innerHTML;
                    this.$('.o_hr_attendance_PINbox').val(this.$('.o_hr_attendance_PINbox').val() + '×');
                }
            },

            'click .o_hr_attendance_pin_pad_button_add': function () {
                var currentString = this.$('.o_hr_attendance_PINbox').val();
                var lastChar = currentString[currentString.length - 1];

                // if last character entered is an operator, replace it with the currently pressed one
                if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
                    var newString = currentString.substring(0, currentString.length - 1) + '+';

                    this.$('.o_hr_attendance_PINbox').val('');
                    this.$('.o_hr_attendance_PINbox').val(this.$('.o_hr_attendance_PINbox').val() + newString);
                } else if (currentString.length == 0) {
                    // if first key pressed is an opearator, don't do anything
                    console.log("enter a number first");
                } else {
                    // else just add the operator pressed to the input
                    //   input.innerHTML += e.target.innerHTML;
                    this.$('.o_hr_attendance_PINbox').val(this.$('.o_hr_attendance_PINbox').val() + '+');
                }
            },

            'click .o_hr_attendance_pin_pad_button_minus': function () {
                var currentString = this.$('.o_hr_attendance_PINbox').val();
                var lastChar = currentString[currentString.length - 1];

                // if last character entered is an operator, replace it with the currently pressed one
                if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
                    var newString = currentString.substring(0, currentString.length - 1) + '-';

                    this.$('.o_hr_attendance_PINbox').val('');
                    this.$('.o_hr_attendance_PINbox').val(this.$('.o_hr_attendance_PINbox').val() + newString);
                } else if (currentString.length == 0) {
                    // if first key pressed is an opearator, don't do anything
                    console.log("enter a number first");
                } else {
                    // else just add the operator pressed to the input
                    //   input.innerHTML += e.target.innerHTML;
                    this.$('.o_hr_attendance_PINbox').val(this.$('.o_hr_attendance_PINbox').val() + '-');
                }
            },

            'click .o_hr_attendance_pin_pad_button_C': function () { this.$('.o_hr_attendance_PINbox').val(''); },

            'click .o_hr_attendance_pin_pad_button_ok': _.debounce(function () {
                // var self = this;
                this.resultDisplayed = true;
                var inputString = this.$('.o_hr_attendance_PINbox').val();

                // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
                var numbers = inputString.split(/\+|\-|\×|\÷/g);
                var operators = inputString.replace(/[0-9]|\./g, "").split("");

                // console.log(inputString);
                // console.log(operators);
                // console.log(numbers);
                // console.log("----------------------------");

                var divide = operators.indexOf("÷");
                while (divide != -1) {
                    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
                    operators.splice(divide, 1);
                    divide = operators.indexOf("÷");
                }

                var multiply = operators.indexOf("×");
                while (multiply != -1) {
                    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
                    operators.splice(multiply, 1);
                    multiply = operators.indexOf("×");
                }

                var subtract = operators.indexOf("-");
                while (subtract != -1) {
                    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
                    operators.splice(subtract, 1);
                    subtract = operators.indexOf("-");
                }

                var add = operators.indexOf("+");
                while (add != -1) {
                    // using parseFloat is necessary, otherwise it will result in string concatenation :)
                    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
                    operators.splice(add, 1);
                    add = operators.indexOf("+");
                }

                // inputString.innerHTML = numbers[0]; // displaying the output
                this.$('.o_hr_attendance_PINbox').val('');
                this.$('.o_hr_attendance_PINbox').val(this.$('.o_hr_attendance_PINbox').val() + numbers[0]);
                // resultDisplayed = true;
            }, 200, true),
        },

        init: function () {
            console.log("init 1");
            this._super.apply(this, arguments);
            this.resultDisplayed = false;
            this.update_attendance();
            console.log("init 2");
        },

        willStart: function () {
            var self = this;
    
            var def = this._rpc({
                model: 'hr.employee',
                method: 'search_read',
                args: [],
            }).then(function(res) {
                self.employee_list = res;
            });
    
            return Promise.all([def, this._super.apply(this, arguments)]);
        },

        checkNum: function (nb) {
            console.log('num:' + nb);

            var results = '';
            var currentString = this.$('.o_hr_attendance_PINbox').val();
            var lastChar = currentString[currentString.length - 1];

            // if result is not diplayed, just keep adding
            if (this.resultDisplayed === false) {
                results = this.$('.o_hr_attendance_PINbox').val() + nb;
            } else if (this.resultDisplayed === true && (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") ) {
                // if result is currently displayed and user pressed an operator
                // we need to keep on adding to the string for next operation
                this.resultDisplayed = false;
                results = this.$('.o_hr_attendance_PINbox').val() + nb;
            } else {
                // if result is currently displayed and user pressed a number
                // we need clear the input string and add the new input to start the new opration
                this.resultDisplayed = false;
                results = nb;
            }

            return results;
        },

        update_attendance: function () {
            var self = this;
            this._rpc({
                    model: 'hr.employee',
                    method: 'search_read',
                    args: [],
                })
                .then(function(result) {
                    if (result) {
                        console.log(result);
                    } else if (result.warning) {
                        self.do_warn(result.warning);
                    }
                });
        },

    
        start: function () {
            console.log("start 1");
            var self = this;
            // self.$el.html(QWeb.render("HrAttendanceKioskConfirm", {widget: self}));
            // console.log("start 2");
            return self._super.apply(this, arguments);
        },

    });

    core.action_registry.add('hr_attendance_my_attendances', MyAttendances);
    return MyAttendances;
});
