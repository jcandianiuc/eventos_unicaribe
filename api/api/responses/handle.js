module.exports = function handle(rawErr) {
  const req = this.req;
  const res = this.res;
  const { status, err } = rawErr;
  const sails = req._sails;
  switch (status) {
    // Database Error
    case 503:
      res.serverError(err);
      break;
    case 400:
      sails.log.silly(
        `res.handle() :: Sending 400 Bad Request Error: ${JSON.stringify(err)}`
      );
      res.badRequest(err);
      break;
    default:
      res.serverError(err);
      break;
  }
};
