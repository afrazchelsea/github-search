class Github {
  constructor() {
    this.client_id = "1cf2af9992b41e0123a3";
    this.client_secret = "e7e157e5466ecd335bf19f55f4db151a599c6396";
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
