class GitHub {
  constructor () {
    this.clientId = '9a632cb16e2e3def018a'
    this.clientSecret = 'b4e017e14472e408f4438a626a003e8cbc7855ca'
    this.reposCount = 5
    this.reposSort = 'created: asc'
  }

  async getUser (user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    )

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    )

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {
      profile,
      repos
    }
  }
}
