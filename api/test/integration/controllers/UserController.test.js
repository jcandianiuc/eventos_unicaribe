describe("UserController", () => {
  before(async () => {
    await User.destroy({});
  });
  describe("create", () => {
    it("should return a token after a valid login", async () => {
      const url = "/user";
      const params = {
        name: "user.name.1",
        lastName: "user.lastName.1",
        password: "user.password.1",
        email: "user.email.1",
        type: "admin"
      };
      const { body } = await app.post(url).send(params);
      console.log("body: ", body);

      expect(body).to.have.property("token");
    });
  });
});
