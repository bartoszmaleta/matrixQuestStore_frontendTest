const container = document.querySelector(".container");

function getUsers() {
    fetch(`http://localhost:8003/users`)
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            innerUsers(users);
        })
}

function innerUsers(users) {
    let table = document.createElement("table");
    table.innerHTML = "<tr><th><NAME</th><th>SURNAME</th><th>LOGIN</th><th>PASSWORD</th><th>EMAIL</th><th>ROLE_ID</th><th>AVATAR PATH</th></tr>";
    container.appendChild(table);

    users.forEach(user => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.surname}</td>
            <td>${user.login}</td>
            <td>${user.password}</td>
            <td>${user.email}</td>
            <td>${user.roleId}</td>
            <td>${user.avatar}</td>
        `;
        table.appendChild(row);
    });
}

getUsers();