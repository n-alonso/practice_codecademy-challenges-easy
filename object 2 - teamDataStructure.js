// Data structure to keep track of a team
const team = {
  _players: [
    {
      firstName: 'Pablito',
      lastName: 'Alonso',
      age: 11
    },
    {
      firstName: 'Lilly',
      lastName: 'Alonso',
      age: 10
    },
    {
      firstName: 'Blacky',
      lastName: 'Sabaka',
      age: 4
    }
  ],
  get players() {
    return this._players;
  },
  _games: [
    {
      opponent: 'Durnelis',
      teamPoints: 20,
      opponentPoints: 5
    },
    {
      opponent: 'Katinas',
      teamPoints: 100,
      opponentPoints: 1
    },
    {
      opponent: 'Breads',
      teamPoints: 15,
      opponentPoints: 7
    }
  ],
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    this._players.push({
      firstName,
      lastName,
      age
    })
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({
      opponent,
      teamPoints,
      opponentPoints
    })
  }
};

// Adding data for testing
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Grizzlies', 2, 74);
team.addGame('CDT', 4, 3);
team.addGame('UD Las Palmas', 3, 1);

// Testing
console.log(team.players);
console.log(team.games);
