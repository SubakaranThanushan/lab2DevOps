const db = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    // Save to DB
    // TODO check if user already exists
    db.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null)
      callback(null, res) // Return callback
    })
  },

  get: (username, callback) => {
    //hgetall : sert a récupérer toutes les données de l'utilisateur associées à cet utilisateur.
    db.hgetall(username, (err, userData) => {
      if (err) return callback(err, null);

      //On gere les erreurs
      if (!userData) {
        return callback(new Error("User not found"), null);
      }
      //Si on trouve les résultats, on les retournes
      callback(null, userData);
    });
  },
};
