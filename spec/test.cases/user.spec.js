const Request = require("request");
const UserModel = require("../../models/user.model");
const UserMocks = require("../mocks/user.mocks");
const urlDomain = require("../config");

describe("Getting User List", () => {
  const data = {};
  const requestObj = {
    url: `${urlDomain}/api/user/all`
  };

  describe("Getting Users", () => {
    beforeAll(done => {
      spyOn(UserModel, "getList")
        .and.callThrough()
        .and.returnValue(Promise.resolve(UserMocks.userList));
      Request.get(requestObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });

    it("Should return 200", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual(UserMocks.userListResponse);
    });
  });
});
