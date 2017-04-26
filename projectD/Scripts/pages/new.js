
var form = $("#newDocForm");

$(document).ready(function () {
    loadSellerCard();
})

$("#newDocForm #itemCard #addItemBtn").click(function (e) {
    e.preventDefault();
    var inputs = $("#newDocForm #itemCard .mdl-card__supporting-text input");
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
});

$("#newDocForm #applyBtn").click(function (e) {
    e.preventDefault();
    showMessage("Обработал нажатие", "Info")
})

function loadSellerCard() {
    id = $(this).attr("data-id");
    form.find("#sellerCard").hide().empty().load("/Card/Seller?Id="+id, function () {
        componentHandler.upgradeAllRegistered();
        $(this).show(300);
    });
}

function resetResult() {
    var array = $("#newDocForm #itemList .itemSum");
    var sum = 0;
    array.each(function () {
        var n=$(this).text();
        sum = sum + parseFloat(n);
    })
    $("#newDocForm #resultCard #resultDigit").text(sum);
    $("#newDocForm #resultCard #resultLit").text(sum);
}

var deleteItem = function (event) {
    event.preventDefault();
    $(this).parent().parent().remove();
    resetResult();
}