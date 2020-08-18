$('#even-btn').on('click', function () {
    selectCardBtn('even');
});

$('#odd-btn').on('click', function () {
    selectCardBtn('odd');
});

function selectCardBtn(type) {
    $('.container').children().removeClass('selected');

    $('.card').each(function () {
        let num = $(this).text();
        if (type === 'even') {
            // 짝수
            if (Number(num) % 2 === 0) {
                $(this).addClass('selected')
            }
        }
        else if (type === 'odd') {
            // 홀수
            if (Number(num) % 2 !== 0) {
                $(this).addClass('selected')
            }
        }
    })
}