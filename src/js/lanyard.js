// Lanyard link
async function fetchUserInfo() {
    const response = await fetch('https://api.lanyard.rest/v1/users/1216074950025150644');
    const data = await response.json();

    const avatarUrl = `https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png?size=512`;
    document.getElementById('avatar').src = avatarUrl;

    const nickname = data.data.discord_user.username;
    document.getElementById('nickname').textContent = nickname;

    const status = data.data.discord_status;
    document.getElementById('status').textContent = `Status: ${status}`;

}

fetchUserInfo();