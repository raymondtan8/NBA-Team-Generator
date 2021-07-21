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


[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {playerId: 1630169, playerName: "Tyrese Haliburton", timeFrame: "2020-21", pts: 13, ast: 5.3, …}
1: {playerId: 1630186, playerName: "Jahmi'us Ramsey", timeFrame: "2020-21", pts: 3.1, ast: 0.5, …}
2: {playerId: 1628368, playerName: "De'Aaron Fox", timeFrame: "2020-21", pts: 25.2, ast: 7.2, …}
3: {playerId: 1629657, playerName: "Kyle Guy", timeFrame: "2020-21", pts: 2.8, ast: 1, …}
4: {playerId: 203090, playerName: "Maurice Harkless", timeFrame: "2020-21", pts: 5.2, ast: 1.2, …}
5: {playerId: 1629056, playerName: "Terence Davis", timeFrame: "2020-21", pts: 8.7, ast: 1.4, …}
6: {playerId: 1629713, playerName: "Justin James", timeFrame: "2020-21", pts: 3.9, ast: 0.6, …}
7: {playerId: 1630218, playerName: "Robert Woodard II", timeFrame: "2020-21", pts: 1.5, ast: 0.2, …}
8: {playerId: 1627745, playerName: "Damian Jones", timeFrame: "2020-21", pts: 4.7, ast: 0.7, …}
9: {playerId: 202355, playerName: "Hassan Whiteside", timeFrame: "2020-21", pts: 8.1, ast: 0.6, …}
10: {playerId: 1626158, playerName: "Richaun Holmes", timeFrame: "2020-21", pts: 14.2, ast: 1.7, …}
11: {playerId: 1629663, playerName: "Louis King", timeFrame: "2020-21", pts: 7.3, ast: 1.5, …}
12: {playerId: 1627741, playerName: "Buddy Hield", timeFrame: "2020-21", pts: 16.6, ast: 3.6, …}
13: {playerId: 1629002, playerName: "Chimezie Metu", timeFrame: "2020-21", pts: 6.3, ast: 0.8, …}
14: {playerId: 1628963, playerName: "Marvin Bagley III", timeFrame: "2020-21", pts: 14.1, ast: 1, …}
15: {playerId: 203084, playerName: "Harrison Barnes", timeFrame: "2020-21", pts: 16.1, ast: 3.5, …}
16: {playerId: 1626153, playerName: "Delon Wright", timeFrame: "2020-21", pts: 10.2, ast: 4.4, …}

{playerId: 201566, playerName: "Russell Westbrook", timeFrame: "2020-21", pts: 22.2, ast: 11.7, …}
ast: 11.7
pie: 0.164
playerId: 201566
playerName: "Russell Westbrook"
pts: 22.2
reb: 11.5
timeFrame: "2020-21"
