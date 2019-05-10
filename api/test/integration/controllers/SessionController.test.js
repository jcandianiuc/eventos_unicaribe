describe("SessionController", () => {
  let email = null;
  let password = null;

  before(async () => {
    await User.destroy({});
    email = "user1@email.com";
    password = "user.name.1";
    await User.create({
      password,
      email,
      name: "user.name.1",
      lastName: "user.lastName.1",
      type: "student"
    });
    const users = await User.find();
    console.log("users: ", users);
  });

  /*describe('login', () => {
    it('should return a token after a valid login', async () => {
      const url = '/login';
      const { body } = await app.post(url).send({
        email,
        password,
      });

      expect(body).to.have.property('token');
    });
  });*/
});
