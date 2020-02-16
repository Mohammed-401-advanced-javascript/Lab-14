

// const { server } = require('../server.js');
// const supergose = require('@code-fellows/supergoose');
// const mockRequest = supergose(server);
// const base64 = require('base-64');
describe('Authentication Model',()=>{
  it('POST to /signup to create a new user', ()=>{
    // let test = {'username': 'qusai', 'password': '123'};
    // return  mockRequest.post('/signup')
    //   .send(test)
    //   .then(data=>{
    //     // console.log(data);
    //     expect(data.status).toEqual(200);
    //   });
  });
  // it('POST to /signin to get the user', ()=>{
  //   let test = {'username': 'qusai', 'password': '123'};
  //   return mockRequest.post('/signin')
  //     .send(test)
  //     .then(data=>{
  //       console.log(data);
  //       expect(data.status).toEqual(200);
  //       expect(typeof data.token).toEqual('string');
  //     });
  // });
  it('GET to /users to get all users', ()=>{
    // let test = {'username': 'qusai', 'password': '123'};
    // return mockRequest.post('/signup')
    //   .auth(test)
    //   .then(data=>{
    //     console.log(data.body);
    //     return mockRequest.get('/users')
    //       .then(result =>{
    //         console.log(result.body);
    //         // expect(result.status).toEqual(200);
    //         // expect(result.body).toEqual('string');
    //       });
    //   });
  });
});