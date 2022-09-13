import axios from "axios";

export const UsersApidata = () =>
  axios
    .get("https://random-data-api.com/api/v2/users?size=50")
    .then((res) => res);
