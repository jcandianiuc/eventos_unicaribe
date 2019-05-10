const moment = require("moment");
let events = null;
let place = null;
let type = null;
let talker = null;
describe("EventController", () => {
  before(async () => {
    Type.destroy({});
    Place.destroy({});
    Talker.destroy({});
    Event.destroy({});
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
    events = [
      await Event.create({
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
      }).fetch(),
      await Event.create({
        name: "event.name.2",
        description: "event.description.2",
        date: moment()
          .set({
            year: 2019,
            month: 4,
            date: 10
          })
          .format("YYYY-MM-DD"),
        startTime: moment()
          .set({ hour: 16, minute: 30 })
          .format("HH:mm"),
        endTime: moment()
          .set({ hour: 19, minute: 30 })
          .format("HH:mm"),
        cost: 100,
        main: true,
        Type: type.id,
        Place: place.id,
        Talker: talker.id
      }).fetch(),
      await Event.create({
        name: "event.name.3",
        description: "event.description.3",
        date: moment()
          .set({
            year: 2019,
            month: 4,
            date: 10
          })
          .format("YYYY-MM-DD"),
        startTime: moment()
          .set({ hour: 19, minute: 00 })
          .format("HH:mm"),
        endTime: moment()
          .set({ hour: 19, minute: 30 })
          .format("HH:mm"),
        cost: 0,
        main: false,
        Type: type.id,
        Place: place.id,
        Talker: talker.id
      }).fetch(),
      await Event.create({
        name: "event.name.4",
        description: "event.description.4",
        date: moment()
          .set({
            year: 2019,
            month: 4,
            date: 10
          })
          .format("YYYY-MM-DD"),
        startTime: moment()
          .set({ hour: 14, minute: 00 })
          .format("HH:mm"),
        endTime: moment()
          .set({ hour: 15, minute: 30 })
          .format("HH:mm"),
        cost: 0,
        status: "finished",
        main: false,
        Type: type.id,
        Place: place.id,
        Talker: talker.id
      }).fetch()
    ];
  });

  describe("index", () => {
    it("should return incoming events of the day", async () => {
      const url = "/event";
      const { body } = await app.get(url);
      expect(body.length).to.be.equal(2);
    });
  });
});
