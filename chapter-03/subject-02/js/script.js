$('#send').on('click', function () {
    let msg = $('textarea');

    if (msg.val() === '') {
        return;
    }
    else {
        $('.chatbox').append(`<div class="my-bubble bubble">${ msg.val() }</div>`)
        msg.val('');
    }
});