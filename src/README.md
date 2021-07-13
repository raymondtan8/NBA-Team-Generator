Run this commamnd in terminal to disable CORS policy

open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/Chrome dev session" --disable-web-security


Example NBA API calls

Getting the average pts/ast/reb of a player:
NBA.stats.playerInfo({PlayerID: 202695}).then((data) => {
    console.log(data.playerHeadlineStats[0].ast);
});

Getting a specific player from commonTeamRoster:
NBA.stats.commonTeamRoster({TeamID: team.TeamID}).then((data) => {
    console.log(data.commonTeamRoster[0]);
});

This is how to generate a player image:
const stephCurry = <img src={nba.getPlayerHeadshotURL({
 "PlayerID":201939,
"TeamID":1610612744
})} />
