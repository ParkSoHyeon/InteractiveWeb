$('#btn1').on('click', function () {
    clickFlagBtn(['blue']);
});

$('#btn2').on('click', function () {
    clickFlagBtn(['white']);
});

$('#btn3').on('click', function () {
    clickFlagBtn(['blue', 'dot']);
})

function clickFlagBtn(arrConditions) {
    let selector = '.flag'

    for (const item of arrConditions) {
        selector += `.${item}`;
    }

    $(selector).css('transform', 'rotate(30deg)');

    setTimeout(function () {
        $(selector).css('transform', 'rotate(0)');
    }, 1000);
}