describe("TalkerController", () => {
  let talkers = null;
  before(async () => {
    await Talker.destroy({});
    talkers = [
      await Talker.create({
        name: "talker.name.1",
        description: "talker.description.1"
      }).fetch(),
      await Talker.create({
        name: "talker.name.2",
        description: "talker.description.2"
      }).fetch(),
      await Talker.create({
        name: "talker.name.3",
        description: "talker.description.3"
      }).fetch()
    ];
  });

  describe("index", () => {
    it("should return all talkers", async () => {
      const url = "/talker";
      const { body } = await app.get(url);
      expect(body.length).to.be.equal(3);
    });
  });

  describe("show", () => {
    it("should return a talker model", async () => {
      const url = `/talker/${talkers[0].id}`;
      const { body } = await app.get(url);
      expect(body).to.have.property("id");
    });
  });

  describe("create", () => {
    it("should create a talker", async () => {
      const url = `/talker`;
      const params = {
        name: "talker.name.4",
        description: "talker.description.4"
      };
      const { body, status } = await app.post(url).send(params);
      expect(body).to.have.property("id");
      expect(status).to.be.equal(201);
    });
  });

  describe("update", () => {
    it("should update a talker", async () => {
      const url = `/talker/${talkers[1].id}`;
      const params = {
        name: "talker.name.changed"
      };
      const { body, status } = await app.put(url).send(params);
      expect(body).to.have.property("id");
      expect(status).to.be.equal(200);
    });
  });
});
