fetch("https://api.lanyard.rest/v1/users/1216074950025150644")
.then(async (data) => {
    const res = await data.json();
    console.log(res); 

    function getAvatar(d) {
        return `https://cdn.discordapp.com/avatars/${d.id}/${d.avatar}.${d.avatar.startsWith('a_') ? 'gif' : 'png'}?size=4096`;
    }

    const avatarElement = document.getElementById('avatar');

    if (res?.data) {

        if (avatarElement) {
            avatarElement.innerHTML = `<img src="${getAvatar(res.data.discord_user)}" alt="avatar" class="image" style="border-radius: 100%;">`;
        } else {
            console.error('Элемент с id="avatar" не найден');
        }

    }
})
.catch(error => {
    console.error('Ошибка при получении данных с API:', error);
});
