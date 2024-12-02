import $ from 'jquery'


async function loginChecking(username, password) {
    // $.post("http://localhost:3120/identity/auth/customers/login",
    //     JSON.stringify({
    //         "username": username,
    //         "password": password
    //     }), function (data, status) {
    //         console.log(data);

    //     });

    // fetch("http://localhost:3120/identity/auth/customers/login", {
    //     method: "POST",
    //     mode: 'no-cors',
    //     headers: new Headers({
    //         "Content-Type": "application/json"
    //     }),
    //     body: JSON.stringify({
    //         username: username,
    //         password: password
    //     }),
    // })
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log("Response body:", data);
    //     });

    $.ajax({
        url: "http://localhost:3120/identity/auth/customers/login",
        type: 'POST',
        dataType: 'json',
        CORS: false,
        contentType: 'application/json',
        secure: true,
        data: JSON.stringify({
            username: username,
            password: password
        }),
        async: false
        ,
        success: function (data) {
            console.log(data);
            if (data.code == 1000) {
                
            }
        }
    })

    return true;
}

function Register({ username, password }) {


    return true;
}

export { loginChecking, Register };