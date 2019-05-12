const moment = require("moment");

describe("UserController", () => {
  let place = null;
  let type = null;
  let talker = null;
  let event = null;
  let user = null;
  before(async () => {
    await User.destroy({});
    await Type.destroy({});
    await Place.destroy({});
    await Talker.destroy({});
    await Event.destroy({});

    type = await Type.create({ name: "type.name.1" }).fetch();
    place = await Place.create({
      name: "place.name.1",
      description: "place.description.1",
      capacitance: 20
    }).fetch();
    talker = await Talker.create({
      name: "talker.name.1",
      description: "talker.description.1"
    }).fetch();
    event = await Event.create({
      name: "event.name.1",
      description: "event.description.1",
      date: moment()
        .set({
          year: 2019,
          month: 5,
          date: 10
        })
        .format("YYYY-MM-DD"),
      startTime: moment()
        .set({ hour: 13, minute: 30 })
        .format("HH:mm"),
      endTime: moment()
        .set({ hour: 14, minute: 30 })
        .format("HH:mm"),
      cost: 0,
      main: false,
      Type: type.id,
      Place: place.id,
      Talker: talker.id
    }).fetch();
    const url = "/user";
    const params = {
      name: "user.name.1",
      lastName: "user.lastName.1",
      password: "user.name.1",
      email: "user1@email.com",
      type: "admin"
    };
    const {
      body: { user: userFound }
    } = await app.post(url).send(params);
    user = userFound;
  });

  describe("create", () => {
    it("should return a token after a valid login", async () => {
      const url = "/user";
      const params = {
        name: "user.name.1",
        lastName: "user.lastName.1",
        password: "user.password.1",
        email: "user@mail.com",
        type: "admin"
      };
      const { body } = await app.post(url).send(params);

      expect(body).to.have.property("token");
    });
  });

  describe("addEvent", () => {
    it("should return add an event to a user", async () => {
      const url = `/user/${user.id}/event/${event.id}`;
      const { body, status } = await app.put(url);
      expect(body.Events.length).to.be.equal(1);
      expect(status).to.be.equal(200);
    });
  });
});
