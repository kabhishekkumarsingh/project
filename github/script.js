const container=document.querySelector('#container');

document.addEventListener('DOMContentLoaded',()=>{
    async function gitProfile() {
        const response=await fetch('https://api.github.com/users/kabhishekkumarsingh');
        const data=await response.json();
        console.log(data);
        userData(data);
    } 

    function userData(data){
        const card=document.createElement('div');
        card.className='card';
        card.innerHTML=`
         <img src="${data.avatar_url}" alt="Profile Image">
                <h2>${data.name}</h2>
                <p><strong>Username:</strong> ${data.login}</p>
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                <p><strong>Followers:</strong> ${data.followers} | <strong>Following:</strong> ${data.following}</p>
                <p><strong>Created At:</strong> ${new Date(data.created_at).toDateString()}</p>
                <a href="${data.html_url}" target="_blank">Visit GitHub Profile</a>
        `;
        container.appendChild(card);
    }

    gitProfile();
});