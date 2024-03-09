const  team = {
    _players : [
      player1 = { firstName: 'kevin', lastName: 'Scott', age: 35},
      player2 = {firstName: 'Peter', lastName: 'Megan', age: 50},
      player3 = {firstName: 'Feza', lastName: 'Rodrige', age: 24},
    ],
    _games : [
      games1 = {opponent:'Markers',teamPoints: 20,opponetPoints: 15},
      games2 = {opponent:'livers',teamPoints: 15, opponentPoints: 14},
      games3 = {opponent: 'Dennis',teamPoints: 25, opponentPoints:30},
  
    ],
  
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
  
    addplayer(newFirstName, newLastName, newAge){
     const newPlayer = {
        firstName :newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(newPlayer);
    },
  
    addGame(newOpponent,newTeamPoints,newOpponentPoints){
    const newGames ={
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(newGames);
    },
  }
  
  team.addplayer('Bugs','Bunny',76);
  team.addGame('Titans',100,98);
  console.log(team._players);
  console.log(team._games);