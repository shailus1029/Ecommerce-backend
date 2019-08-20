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

  describe("Getting Users Catch error", () => {
    beforeAll(done => {
      spyOn(UserModel, "getList")
        .and.callThrough()
        .and.callFake(() => Promise.reject({}));
      Request.get(requestObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("should return 400", () => {
      expect(data.status).toBe(400);
    });
  });
});

describe("Creating New User", () => {
  const data = {};
  const correctBody = {
    data: {
      firstname: "utkarsh",
      lastname: "sanjivan",
      email: "uttu@gmail.com",
      mobile: "8989417809",
      password: "utkarsh",
      username: "uttu"
    }
  };
  const requestObj = {
    url: `${urlDomain}/api/user`,
    body: correctBody,
    json: true,
    headers: { "content-type": "application/json" }
  };

  describe("Correct body", () => {
    beforeAll(done => {
      spyOn(UserModel, "addUser")
        .and.callThrough()
        .and.returnValue(Promise.resolve(UserMocks.createUser));
      Request.post(requestObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("should return 200", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual(UserMocks.createUserResponse);
    });
  });

  const noBody = {
    data: {}
  };

  const newReqObj = { ...requestObj, body: noBody };
  describe("No Payload body", () => {
    beforeAll(done => {
      spyOn(UserModel, "addUser")
        .and.callThrough()
        .and.returnValue(Promise.resolve());
      Request.post(newReqObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("should return 400", () => {
      expect(data.status).toBe(400);
      expect(data.body).toEqual(UserMocks.noPayloadResponse);
    });
  });

  const wrongBody = {
    data: {
      lastname: "sanjivan",
      mobile: "8989417809"
    }
  };

  const wrongReqObj = { ...requestObj, body: wrongBody };
  describe("No Payload body", () => {
    beforeAll(done => {
      spyOn(UserModel, "addUser")
        .and.callThrough()
        .and.returnValue(Promise.resolve());
      Request.post(wrongReqObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("should return 400", () => {
      expect(data.status).toBe(400);
      expect(data.body).toEqual(UserMocks.wrongBodyResponse);
    });
  });
});

describe("Get User By User Id", () => {
  const data = {};
  const requestObj = {
    url: `${urlDomain}/api/user/5d4f9192cd195c9d6ee95299`
  };

  describe("Getting User :", () => {
    beforeAll(done => {
      spyOn(UserModel, "getUser")
        .and.callThrough()
        .and.returnValue(Promise.resolve(UserMocks.getUserById));
      Request.get(requestObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it("should return 200", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual(UserMocks.getUserByIdResponse);
    });
  });

  describe("Get User By User Id with Catch error", () => {
    beforeAll(done => {
      spyOn(UserModel, "getUser")
        .and.callThrough()
        .and.callFake(() => Promise.reject({}));
      Request.get(requestObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it("should return 400", () => {
      expect(data.status).toBe(400);
    });
  });
});

describe("Updating existing User", () => {
  const data = {};
  const correctBody = {
    data: {
      firstname: "Cronj Champ"
    }
  };
  const requestObj = {
    url: `${urlDomain}/api/user/5d503bfd210de4b67a55a37e`,
    body: correctBody,
    json: true,
    headers: { "content-type": "application/json" }
  };

  describe("Correct body", () => {
    beforeAll(done => {
      spyOn(UserModel, "updateUser")
        .and.callThrough()
        .and.returnValue(Promise.resolve(UserMocks.updateUser));
      Request.patch(requestObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("should return 200", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual(UserMocks.updateUserResponse);
    });
  });

  const noBody = {
    data: {}
  };

  const newReqObj = { ...requestObj, body: noBody };
  describe("No Payload body", () => {
    beforeAll(done => {
      spyOn(UserModel, "updateUser")
        .and.callThrough()
        .and.returnValue(Promise.resolve());
      Request.patch(newReqObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("should return 400", () => {
      expect(data.status).toBe(400);
      expect(data.body).toEqual(UserMocks.noPayloadResponse);
    });
  });

  describe("Getting Users Catch error", () => {
    beforeAll(done => {
      spyOn(UserModel, "updateUser")
        .and.callThrough()
        .and.callFake(() => Promise.reject({}));
      Request.patch(requestObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("should return 400", () => {
      expect(data.status).toBe(400);
    });
  });
});

describe("Deleting User", () => {
  const data = {};
  const requestObj = {
    url: `${urlDomain}/api/user/5d5a9f706c4ed9746ea565af`
  };

  describe("Deleting User", () => {
    beforeAll(done => {
      spyOn(UserModel, "deleteUser")
        .and.callThrough()
        .and.returnValue(Promise.resolve(UserMocks.deleteUser));
      Request.delete(requestObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });

    it("Should return 200", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual(UserMocks.deleteUserResponse);
    });
  });

  describe("Getting Users Catch error", () => {
    beforeAll(done => {
      spyOn(UserModel, "deleteUser")
        .and.callThrough()
        .and.callFake(() => Promise.reject({}));
      Request.delete(requestObj, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("should return 500", () => {
      expect(data.status).toBe(500);
    });
  });
});
