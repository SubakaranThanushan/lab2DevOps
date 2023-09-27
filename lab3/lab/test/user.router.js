const app = require('../src/index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const db = require('../src/dbClient')

chai.use(chaiHttp)

describe('User REST API', () => {
  
    beforeEach(() => {
      // Clean DB before each test
      db.flushdb()
    })
    
    after(() => {
      app.close()
      db.quit()
    })

  describe('POST /user', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(201)
          chai.expect(res.body.status).to.equal('success')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
    
    it('pass wrong parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(400)
          chai.expect(res.body.status).to.equal('error')
          //On s'assure que la réponse d'une API est au format JSON.
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
  })

  describe('GET /user', () => {

    it('get an existing user', (done) => {
      const userToCreate = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
  
      // Créez d'abord l'utilisateur à récupérer
      chai.request(app)
        .post('/user')
        .send(userToCreate)
        .then((res) => {
          chai.expect(res).to.have.status(201);
  
          // Ensuite, essayez de récupérer l'utilisateur créé
          chai.request(app)
            .get(`/user/${userToCreate.username}`)
            .then((getResponse) => {
              chai.expect(getResponse).to.have.status(200);
              chai.expect(getResponse.body.status).to.equal('success');
              chai.expect(getResponse.body.data).to.deep.equal(userToCreate);
              done();
            })
            .catch((err) => {
              throw err;
            });
        })
        .catch((err) => {
          throw err;
        });
    });
  
    it('cannot get a non-existing user', (done) => {
      const nonExistingUsername = 'nonexistentuser';
  
      // Essayez de récupérer un utilisateur qui n'existe pas
      chai.request(app)
      //une requête GET avec l'URL cible. (ici la requete et dynamique)
        .get(`/user/${nonExistingUsername}`)
        .then((getResponse) => {
          chai.expect(getResponse).to.have.status(404);
          chai.expect(getResponse.body.status).to.equal('error');
          chai.expect(getResponse.body.message).to.equal('User not found');
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  });
  
})
