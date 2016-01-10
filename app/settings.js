window.$ = window.jQuery = require("web-term/bin/public/js/jquery.js");
require("./lib/jQuery-form-serializer.min.js");
require("./lib/sweetalert.min.js");
var WebTerm = require("web-term");

$(document).ready(function () {
    var $form = $("form").serializer();
    WebTerm.readSettings(function (err, settings) {
        $form.trigger("serializer:fill", settings);
    });

    var $submitButton = $(".btn-primary");
    $submitButton.attr("disabled", "disabled");
    $form.on("change", function () {
        $submitButton.removeAttr("disabled", "disabled");
    });

    $form.on("serializer:data", function (ev, data) {
        WebTerm.writeSettings(data, function (err) {
            if (err) {
                return alert(code + ":" + error);
            }
            $submitButton.attr("disabled", "disabled");
        });
    });
});
