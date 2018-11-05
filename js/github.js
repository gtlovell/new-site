class Github {
  constructor() {
    this.client_id = 'e9359a3e6e0e84892f9c';
    this.client_secret = 'ad7ad9e70b0d256416893483c9122fe9e7f43004';
    this.repos_count = 6;
    this.repos_sort = 'created: asc';
  }

  async getUser() {
    const repoResponse = await fetch(
      `https://api.github.com/users/gtlovell/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const repos = await repoResponse.json();

    return {
      repos
    };
  }
}
