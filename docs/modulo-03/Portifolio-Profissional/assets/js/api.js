async function fetchProfileData() {
    const url = '/assets/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
