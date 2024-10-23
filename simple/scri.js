async function fetchUser(params) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);
        displayUser(users);
    }
    
    function displayUser(users) {
        const userList = document.getElementById('user-list');
        
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                <h1>${user.name} (${user.username})</h1>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p class="company"><strong>Company:</strong> ${user.company.name} - "${user.company.catchPhrase}"</p>
            `;
            userList.appendChild(userCard);
        });
    }
    
    fetchUser();
    