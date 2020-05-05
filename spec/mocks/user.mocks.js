const userList = [
  {
    _id: "5d4f9192cd195c9d6ee95299",
    firstname: "naman",
    lastname: "sahu",
    email: "shailus10291@gmail.com",
    mobile: 9109568856,
    password: "shailendra12219",
    username: "Shail12219",
    userId: "fcdd52bf-2132-4d08-a27a-d793031f64df",
    createdAt: "2019-08-11T03:54:58.263Z",
    updatedAt: "2019-08-11T03:54:58.263Z",
    __v: 0
  }
];

const userListResponse = {
  data: [
    {
      _id: "5d4f9192cd195c9d6ee95299",
      firstname: "naman",
      lastname: "sahu",
      email: "shailus10291@gmail.com",
      mobile: 9109568856,
      password: "shailendra12219",
      username: "Shail12219",
      userId: "fcdd52bf-2132-4d08-a27a-d793031f64df",
      createdAt: "2019-08-11T03:54:58.263Z",
      updatedAt: "2019-08-11T03:54:58.263Z",
      __v: 0
    }
  ]
};

const createUser = {
  _id: "5d5a9f706c4ed9746ea565af",
  firstname: "utkarsh",
  lastname: "sanjivan",
  email: "uttu@gmail.com",
  mobile: 8989417809,
  password: "utkarsh",
  username: "uttu",
  userId: "087dc53c-266f-4755-94c8-46fdde19b1f6",
  createdAt: "2019-08-19T13:09:04.943Z",
  updatedAt: "2019-08-19T13:09:04.943Z",
  __v: 0
};

const createUserResponse = {
  data: {
    _id: "5d5a9f706c4ed9746ea565af",
    firstname: "utkarsh",
    lastname: "sanjivan",
    email: "uttu@gmail.com",
    mobile: 8989417809,
    password: "utkarsh",
    username: "uttu",
    userId: "087dc53c-266f-4755-94c8-46fdde19b1f6",
    createdAt: "2019-08-19T13:09:04.943Z",
    updatedAt: "2019-08-19T13:09:04.943Z",
    __v: 0
  }
};

const noPayloadResponse = {
  errors: [
    {
      code: "NO_PAYLOAD",
      message: "Payload is missing"
    }
  ]
};

const wrongBodyResponse = {
  errors: [
    {
      code: "MISSING_FIRSTNAME",
      message: "Invalid firstname"
    },
    {
      code: "INVALID_EMAIL",
      message: "Invalid email"
    },
    {
      code: "INVALID_PASSWORD",
      message: "Invalid Password"
    },
    {
      code: "INVALID_USERNAME",
      message: "Invalid username"
    }
  ]
};

const getUserById = {
  _id: "5d4f9192cd195c9d6ee95299",
  firstname: "naman",
  lastname: "sahu",
  email: "shailus10291@gmail.com",
  mobile: 9109568856,
  password: "shailendra12219",
  username: "Shail12219",
  userId: "fcdd52bf-2132-4d08-a27a-d793031f64df",
  createdAt: "2019-08-11T03:54:58.263Z",
  updatedAt: "2019-08-11T03:54:58.263Z",
  __v: 0
};

const getUserByIdResponse = {
  data: {
    _id: "5d4f9192cd195c9d6ee95299",
    firstname: "naman",
    lastname: "sahu",
    email: "shailus10291@gmail.com",
    mobile: 9109568856,
    password: "shailendra12219",
    username: "Shail12219",
    userId: "fcdd52bf-2132-4d08-a27a-d793031f64df",
    createdAt: "2019-08-11T03:54:58.263Z",
    updatedAt: "2019-08-11T03:54:58.263Z",
    __v: 0
  }
};

const updateUser = {
  _id: "5d4f9192cd195c9d6ee95299",
  firstname: "Cronj Champ",
  lastname: "sahu",
  email: "shailus10291@gmail.com",
  mobile: 9109568856,
  password: "shailendra12219",
  username: "Shail12219",
  userId: "fcdd52bf-2132-4d08-a27a-d793031f64df",
  createdAt: "2019-08-11T03:54:58.263Z",
  updatedAt: "2019-08-20T03:04:39.461Z",
  __v: 0
};

const updateUserResponse = {
  data: {
    _id: "5d4f9192cd195c9d6ee95299",
    firstname: "Cronj Champ",
    lastname: "sahu",
    email: "shailus10291@gmail.com",
    mobile: 9109568856,
    password: "shailendra12219",
    username: "Shail12219",
    userId: "fcdd52bf-2132-4d08-a27a-d793031f64df",
    createdAt: "2019-08-11T03:54:58.263Z",
    updatedAt: "2019-08-20T03:04:39.461Z",
    __v: 0
  }
};

const deleteUser = {
  _id: "5d5a9f706c4ed9746ea565af",
  firstname: "utkarsh",
  lastname: "sanjivan",
  email: "uttu@gmail.com",
  mobile: 8989417809,
  password: "utkarsh",
  username: "uttu",
  userId: "087dc53c-266f-4755-94c8-46fdde19b1f6",
  createdAt: "2019-08-19T13:09:04.943Z",
  updatedAt: "2019-08-19T13:09:04.943Z",
  __v: 0
};

const deleteUserResponse = { data: "user is deleted successfullty" };

module.exports = {
  userList,
  deleteUser,
  updateUser,
  createUser,
  getUserById,
  userListResponse,
  wrongBodyResponse,
  noPayloadResponse,
  createUserResponse,
  updateUserResponse,
  deleteUserResponse,
  getUserByIdResponse
};
