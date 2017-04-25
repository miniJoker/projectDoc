
$("#newDocForm #itemCard #addItemBtn").click(function (e) {
    e.preventDefault();
    var inputs = $("#newDocForm #itemCard .mdl-card__supporting-text input");
    //var values=[];
    //inputs.each(function(){
    //    values.push($(this).val())
    //});
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
    //$("#newDocForm #itemList").load("/Card/AddItem", {
    //    name: $(inputs[0]).val(),
    //    type: $(inputs[1]).val(),
    //    count: $(inputs[2]).val(),
    //    price: $(inputs[3]).val(),
    //})
});

$("#newDocForm #applyBtn").click(function (e) {
    e.preventDefault();
    showMessage("Обработал нажатие", "Info")
})

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