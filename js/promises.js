function getLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {
        method: 'GET',
        headers: {'Authorization': GITHUB_TOKEN_NINETY_DAYS},
        username: username
    })
        .then(result => result.json())
        .then(data => {
            console.log(data)
            // console.log(data[0].created_at)
            // let date = new Date(data[0].created_at)
            // console.log(date.toDateString())
            for(let i = 0; i < data.length; i++){
                if(data[i].type === "PushEvent"){
                    let date = new Date(data[i].created_at)
                   //  $("#username").append(username)
                   // return $("#date").append(`${date.toDateString()} ${date.toLocaleTimeString()}`)
                    let html = `<div id="username">Username: ${username}</div>
                       <div id="date">This users last commit was on: ${date.toDateString()} ${date.toLocaleTimeString()}</div><br>`
                    return $("#container").append(html)
                }
            }
        })
        .catch(error => console.error(error));
}
getLastCommit("EdgarIGomez");
getLastCommit("danielleturner");

function wait(milliseconds){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(`You will see this after ${milliseconds/1000} seconds` )
        }, milliseconds)
    });
}

wait(3000).then(res => console.log(res));
wait(5000).then(res => console.log(res));