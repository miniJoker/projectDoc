
var form = $("#newDocForm");

$(document).ready(function () {
    loadSellerCard(0);
    loadBuyerCard(0);
    loadItemCard(0);
})

/**
*Общие события на странице
*/

var form = $("#newDocForm");

$("#newDocForm #applyBtn").click(function (e) {
    e.preventDefault();
    showMessage("Обработал нажатие", "Info")
})

var deleteItem = function (event) {
    event.preventDefault();
    $(this).parent().parent().remove();
    resetResult();
}

function resetResult() {
    var array = $("#newDocForm #itemList .itemSum");
    var sum = 0;
    array.each(function () {
        var n = $(this).text();
        sum = sum + parseFloat(n);
    })
    $("#newDocForm #resultCard #resultDigit").text(sum);
    $("#newDocForm #resultCard #resultLit").text(sum);
}

/**
*События на sellerCard
*/

function loadSellerCard(id) {
    form.find("#sellerCard").load("/Card/Seller?Id=" + id, function () {
        $(this).find(".mdl-card__menu>.mdl-menu>.mdl-menu__item").click(function () {
            loadSellerCard($(this).attr("data-id"));
        });
    });
}

/**
*События на buyerCard
*/

function loadBuyerCard(id) {
    form.find("#buyerCard").load("/Card/Buyer?Id=" + id, function () {
        $(this).find(".mdl-card__menu>.mdl-menu>.mdl-menu__item").click(function () {
            loadBuyerCard($(this).attr("data-id"));
        });
    });
}

/**
*События на itemCard
*/

function loadItemCard(id) {
    form.find("#itemCard").load("/Card/Item?Id=" + id, function () {
        $(this).find(".mdl-card__menu>.mdl-menu>.mdl-menu__item").click(function () {
            loadItemCard($(this).attr("data-id"));
        });
        $(this).find("#addItemBtn").click(addNewItem);
    });
}

var addNewItem = function (e) {
    e.preventDefault();
    validItem = true;
    var inputs = $("#newDocForm #itemCard .mdl-card__supporting-text input");
    inputs.each(function () {
        console.log($(this).val().length);
        if (!$(this).val()) {
            console.log($(this).val());
            $(this).parent().addClass("is-invalid is-dirty");
            validItem = false;
        };
    })
    if (validItem) {
        $.ajax({
            url: "/Card/AddItem",
            data: {
                name: $(inputs[0]).val(),
                type: $(inputs[1]).val(),
                count: $(inputs[2]).val(),
                price: $(inputs[3]).val(),
            },
            success: function (response) {
                $("#newDocForm #itemList").append(response);
                $("#newDocForm #itemList button").click(deleteItem);
                resetResult();
            }
        });
        inputs.each(function () {
            $(this).val("");
        })
    }
}









