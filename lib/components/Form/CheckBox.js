"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FormElement2 = require("./FormElement");

var _FormElement3 = _interopRequireDefault(_FormElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ravi.hamsa on 6/29/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var CheckBox = function (_FormElement) {
    _inherits(CheckBox, _FormElement);

    function CheckBox() {
        _classCallCheck(this, CheckBox);

        return _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
    }

    _createClass(CheckBox, [{
        key: "getValueFromNode",
        value: function getValueFromNode(node) {
            return node.checked;
        }
    }, {
        key: "render",
        value: function render() {

            var defaultValue = this.getDefaultValue();
            var formClasses = this.getFormClasses();
            var errors = this.getErrors();

            return _react2.default.createElement(
                "fieldset",
                { className: formClasses },
                _react2.default.createElement(
                    "div",
                    { className: "checkbox" },
                    _react2.default.createElement(
                        "label",
                        null,
                        _react2.default.createElement("input", { type: "checkbox", name: this.props.name,
                            placeholder: this.props.placeholder, onChange: this.onChange.bind(this),
                            defaultChecked: defaultValue }),
                        " ",
                        this.props.label
                    ),
                    this.props.helperText ? _react2.default.createElement(
                        "small",
                        { className: "text-muted" },
                        this.props.helperText
                    ) : '',
                    errors.length > 0 ? _react2.default.createElement(
                        "small",
                        { className: "text-danger" },
                        errors[0].message
                    ) : ''
                )
            );
        }
    }]);

    return CheckBox;
}(_FormElement3.default);

CheckBox.propTypes = {
    type: _react.PropTypes.string.isRequired,
    placeholder: _react.PropTypes.string.isRequired,
    label: _react.PropTypes.string.isRequired,
    defaultValue: _react.PropTypes.bool,
    options: _react.PropTypes.array
};

exports.default = CheckBox;