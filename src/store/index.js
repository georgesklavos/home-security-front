import axios from "axios";
import { createStore } from "vuex";
import Cookies from "js-cookie";
import { app } from "../main";
// let token = "";
axios.defaults.baseURL = process.env.VUE_APP_BACK_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
  "token"
)}`;

// const instance = axios.create({
//   // headers: { Authorization: `Bearer ${token}` },
// });
// console.log(instance);
// instance.interceptors.response.use(function (res) {
//   console.log(res);
//   if (res.status == 401) {
//     console.log("fdd");
//     window.location.replace(window.location.host + "/login");
//   }
//   return res;
// });

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status == 401) {
      app.config.globalProperties.$router.push({ name: "login" });
    }

    return Promise.reject(err);
  }
);

export default createStore({
  state: {
    pagination: "Showing {first} to {last} of {totalRecords} entries",
    users: [],
    alarms: [],
    userInfo: {},
    sensors: [],
  },
  getters: {
    users(state) {
      return state.users;
    },
    alarms(state) {
      return state.alarms;
    },
    userInfo(state) {
      return state.userInfo;
    },
    sensors(state) {
      return state.sensors;
    },
  },
  mutations: {
    users(state, payload) {
      state.users = payload;
    },
    alarms(state, payload) {
      state.alarms = payload;
    },
    userInfo(state, payload) {
      state.userInfo = payload;
    },
    sensors(state, payload) {
      state.sensors = payload;
    },
  },
  actions: {
    async login(context, data) {
      await axios.post("login", data).then((res) => {
        // context.commit("userInfo", res.data);
        Cookies.set("token", res.data.access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.access_token}`;
      });
    },
    async users(context) {
      await axios.get("users").then((res) => {
        context.commit("users", res.data);
      });
    },
    async createUser(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post("users", data)
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    async updateUser(context, data) {
      await axios.put("users", data);
    },
    async alarms(context) {
      await axios.get("alarms").then((res) => {
        context.commit("alarms", res.data);
      });
    },
    async sensors(context) {
      await axios.get("sensors").then((res) => {
        context.commit("sensors", res.data);
      });
    },
    async createAlarm(context, { userId, name, sensors }) {
      await axios.post("alarms", { userId, name }).then(async (res) => {
        for (const el in sensors) {
          await axios.post("sensors", { alarmId: res.data._id, name: sensors[el] });
        }
      });
    },
  },
});
