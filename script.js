function getUsers() {
    $.getJSON('http://jsonplaceholder.typicode.com/users' , (data) => {
        console.log(data)
    })
}

$(function() {

})