function getUsers(done) {
    $.getJSON('http://jsonplaceholder.typicode.com/users' , (data) => {
        // console.log(data)
        done(data)
    })
}

$(function() {

    $('#tab-users').click(() => {
        getUsers((users) => {
            users.forEach((user) => {
                $('#row-users').append(
                    `
                        <div class = "card col-3 p-1 m-1">
                            <div class = "card-body">
                            <h5 class = "card-title">
                                ${user.name}
                            </h5>
                            <h6 class = "card-subtitle">${user.email}</h6>
                            <p class = "card-text">
                                {user.address.street}<br>
                                {user.address.suite}<br>
                                {user.address.city}<br>
                                {user.address.zipcode}<br>
                            </p>
                            </div>
                        </div>
                    `
                )
            })
        })
    })
})