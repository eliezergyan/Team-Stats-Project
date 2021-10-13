const team = {
    _players: [{
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },{
      firstName: 'Pages',
      lastName: 'Kwabee',
      age: 20
    }, {
      firstName: 'Acid',
      lastName: 'Bohyeba',
      age: 22
    }],
    _games: [{
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },{
      opponent: 'Barca',
      teamPoints: 53,
      opponentPoints: 23
    },{
      opponent: 'Madrid',
      teamPoints: 64,
      opponentPoints: 104
    }],
    set players(players){
      return this._players;
    },
    set games(games){
      return this._games;
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
    addGame(opp, myPts, oppPts){
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team['_players'])
  
  team.addGame('Titans', 100, 98);
  team.addGame('Vilians', 120, 88);
  team.addGame('Hoodies', 90, 128);
  
  console.log(team['_games'])