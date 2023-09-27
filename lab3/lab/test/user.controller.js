const { expect } = require('chai')
const userController = require('../src/controllers/user')
const db = require('../src/dbClient')

describe('User', () => {
  
  beforeEach(() => {
    // Clean DB before each test
    db.flushdb()
  })

  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('avoid creating an existing user', (done)=> {
      const existingUser = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        //on teste les 2 cas car si err est NULL le test est réussit
        //si pour result la valeur est 'OK' alors le test est réussit
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')

        userController.create(user, (err, result) => {
          expect(err).to.not.be.equal(null)
          expect(result).to.be.equal(null)
        done()
      })
    })
      done()
    })  
  })

  // TODO Create test for the get method
describe('Get', ()=> {   
  it('get a user by username', (done) => {
// 1. First, create a user to make this unit test independent from the others
    const user = {
      username: 'sergkudinov',
      firstname: 'Sergei',
      lastname: 'Kudinov'
    }

    userController.create(user, (err, result) => {
      //On vérifie que la création de l'utilisateur a réussi
      expect(err).to.be.equal(null);
      expect(result).to.be.equal('OK');

   // 2. Then, check if the result of the get method is correct
   userController.getByUsername(user.username, (err, fetchedUser) => {
    // Vérifiez que la récupération de l'utilisateur a réussi
    expect(err).to.be.equal(null);
    // Vérifiez que l'utilisateur récupéré correspond à l'utilisateur que vous avez créé
    expect(fetchedUser).to.deep.equal(user);

    done();
    })
  })
})

it('cannot get a user when it does not exist', (done) => {
  // Chech with any invalid user
  const invalidUsername = 'nonexistentuser';
  userController.getByUsername(invalidUsername, (err, fetchedUser) => {
    expect(err).to.not.be.equal(null)
    expect(fetchedUser).to.be.equal(null)
    done()
    })
  })
})
})
