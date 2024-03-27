fetch("https://jsonplaceholder.typicode.com/posts")
.then(resolve => resolve.json())
.then(result => {
    $('#list').append($('<thead />').append($('<tr />').append($('<th />').text('id'),
                                                               $('<th />').text('title'),
                                                               $('<th />').text('userId'))))
    $(result).each((idx, item, ary) => {
        //console.log(result);
        $('#list').append($('<tbody />').append($('<tr />').append($('<td />').text(item.id),
                                                                   $('<td />').text(item.title),
                                                                   $('<td />').text(item.userId))))
    })
})



