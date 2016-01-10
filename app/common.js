var $ = require("web-term/bin/public/js/jquery.js")
  , shell = require("shell")
  ;

function handler() {
    shell.openExternal($(this).attr("href") || $(this).attr("data-url"));
    return false;
}

$(document).ready(function () {
    $("a, .btn[data-url]").click(handler);
});
