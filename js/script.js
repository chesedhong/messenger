$('#send').on('click', myBubble);

function myBubble() { 
    var message = $('textarea').val();
    
    if (message != '') {
        $('.chatbox div:last-child').after('<div class="my-bubble bubble">' + message + '</div>');
        $('textarea').val('');
    }
}