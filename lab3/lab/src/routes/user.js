const express = require('express')
const userController = require('../controllers/user')

const userRouter = express.Router()

userRouter
  .post('/', (req, resp) => {
    userController.create(req.body, (err, res) => {
      let respObj
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        //on utilise 400 pour post en cas d'erreur
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: res
      }
      //On utiilise 201 pour post en cas de réussite
      resp.status(201).json(respObj)
    })
  })
  .get('/:username', (req, resp, next) => { // Express URL params - https://expressjs.com/en/guide/routing.html
    const username = req.params.username
    // Utilisez le contrôleur pour obtenir les informations de l'utilisateur
    userController.get(username, (err, userData) => {
      let respObj
      if (err) {
        respObj = {
          status: "error",
          msg: err.message
        };
        //On utilise 404 en cas d'erreur pour get
        return resp.status(404).json(respObj);
      }
      respObj = {
        status: "success",
        data: userData
      };
      //On utilise 200 pour get en cas de réussite
      resp.status(200).json(respObj);
    });
  })
  
module.exports = userRouter
