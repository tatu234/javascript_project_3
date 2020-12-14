$(document).ready(function () {
    setInterval(function () {
    $('h1').fadeOut(800);
    $('h1').fadeIn(800);
});
});

function deleteTasks() {
    $('.deletetask',).click(function () {
        $(this).remove();
    });
}

$(function () {
    $('#taskBtn').click(function () {
        var task = $('#inputTxt').val();
        if (task !== '') {
            var count = $("#task").children().length;
            $('#task').append('<li class="listActive deletetask">' + count + '. ' + task + '</li>');
            $('#inputTxt').val('');
            deleteTasks();
        }
    });
});

$(document).ready(function () {
    $("#inputTxt").keydown(function (e) {
        if (e.which === 13) {
            $("#taskBtn").click();
        }
    });
});

$(document).ready(function () {
    $("#example").click(function () {
        $(this).remove();
    });
    $("#example2").click(function () {
        $(this).remove();
    });
});

$(document).ready(function () {
    $("#btnRemove").click(function () {
        $("li").not(":first").remove();
    });
});
