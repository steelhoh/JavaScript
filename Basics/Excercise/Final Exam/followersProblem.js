function followersProblem(influencerData){
    let followerList = {};

    for (let command of influencerData) {
        if (command === "Log out") break;

        let [action, username, count] = command.split(": ")
        count = Number(count)

        function generateUnexistingUsers(username){
            if (!followerList[username]) {
                followerList[username] = {likes: 0, comments: 0}
            }
        }

        switch (action) {
            case "New follower":
                generateUnexistingUsers(username);
                break;
            case "Like":
                generateUnexistingUsers(username);
                followerList[username].likes = followerList[username].likes + count
                break;
            case "Comment":
                generateUnexistingUsers(username);
                followerList[username].comments = followerList[username].comments + 1
                break;
            case "Blocked":
                if (!followerList[username]) {
                    console.log(`${username} doesn't exist.`)
                } else {delete followerList[username];}
                break;
        }
    }

    console.log(`${Object.keys(followerList).length} followers`)

    for (let [user, userStatistics] of Object.entries(followerList)){
        let sumOfStatistics = userStatistics.likes + userStatistics.comments
        
        console.log(`${user}: ${sumOfStatistics}`)
    }
}   


followersProblem(
    ["New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"]
)

followersProblem(
    ["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"]
)
    

followersProblem(
    ["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"]
)
    
    