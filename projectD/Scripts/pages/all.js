//(function () {
//    'use strict';
//    var snackbarContainer = document.querySelector('#demo-snackbar-example');
//    var showSnackbarButton = document.querySelector('#demo-show-snackbar');
//    var handler = function (event) {
//        showSnackbarButton.style.backgroundColor = '';
//    };
//    showSnackbarButton.addEventListener('click', function (e) {
//        e.preventDefault();
//        'use strict';
//        var data = {
//            message: 'Отправлено',
//            timeout: 2000,
//            actionHandler: handler,
//            actionText: 'INFO'
//        };
//        snackbarContainer.MaterialSnackbar.showSnackbar(data);
//    });
//}());

function showMessage(text, status) {
    var snackbarContainer = document.querySelector('#demo-snackbar-example');
    var handler = function (event) {
        showSnackbarButton.style.backgroundColor = '';
    };
    var data = {
        message: text,
        timeout: 2000,
        actionHandler: handler,
        actionText: status
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}

/*
* Ajax настройки
*/

$(document).ajaxSend(function () {
    $("div.loader").css("display", "block");
});
$(document).ajaxComplete(function () {
    componentHandler.upgradeAllRegistered();
    setTimeout(function () {
        $("div.loader").css("display", "none");
    }, 300);
});

$(document).ajaxError(function () {
    setTimeout(function () {
        $("div.loader").css("display", "none");
        showMessage("Ошибка", "Error")
    }, 300);
    
});