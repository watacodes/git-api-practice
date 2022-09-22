const submitButton = document.getElementById('submit')
const userInput = document.getElementById('username')
const placeholder = document.querySelector('.userinfo')
const API_URL = 'https://api.github.com/users/'


function getApi() {
  placeholder.textContent = ''
  fetch(API_URL + encodeURIComponent(userInput.value))
      .then(res => res.json())
      .then(data => {
        const previousData = document.querySelectorAll('.added')

        if (previousData) {
          previousData.forEach(e => e.remove())
        }
        const userName = document.createElement('p')
        userName.textContent = `Username: ${data.login}`
        
        console.log(userName)
        const userBio = document.createElement('p')
        
        if (!data.login)
         return placeholder.textContent = 'We could not find the user, Sorry!'
        

        if (!data.bio) {
          userBio.textContent = 'This user has no bio yet.'
        } else {
          userBio.textContent = data.bio;
        }

        const userURL = document.createElement('p')
        userURL.textContent = `URL: ${data.html_url}`;

        userName.className = 'added'
        userBio.className = 'added'
        userURL.className = 'added'

        placeholder.appendChild(userName);
        placeholder.appendChild(userBio);
        placeholder.appendChild(userURL);
      })
      .catch(err => console.log(err));
}



submitButton.addEventListener('click', getApi)





