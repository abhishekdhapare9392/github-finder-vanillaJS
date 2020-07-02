// Searh input
const searchUser = document.getElementById('searchUser')

// Init GitHub

const github = new GitHub()

// Init UI

const ui = new UI()

// Search Event Listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value

  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User not Found', 'alert alert-danger')
      } else {
        //   Show Profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
      }
    })
  } else {
    //   Clear profile
    ui.clearProfile()
  }
})
