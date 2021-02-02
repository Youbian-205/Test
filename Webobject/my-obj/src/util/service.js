import axios from "axios";
// http://127.0.0.1/newShopObj/getdata/getdata.php
let url = "http://127.0.0.1/newShopObj/";
export  const service = {
  getData:function () {
    return axios.get(url+"getdata/getdata.php")
  },
  //post传参
  login:function (username,password) {
    let form = new FormData();
    form.append("username",username);
    form.append("password",password);
    // var data = {
    //   username:username,
    //   password:password
    // };
    // data = JSON.stringify(data);
    return axios.post(url+"/user/login",data)
  },
  pai:function (aid,username) {
    return axios.get(url+"user/xxx?aid="+aid+"&username="+username)
  }
};
