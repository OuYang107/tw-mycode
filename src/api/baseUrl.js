let url = window.location.protocol + '//' + window.location.host
export default {
  // development: "http://200.200.1.194:9191",
  // development: "http://192.168.199.35:9090",
  development: "http://200.200.1.172:8082",  //biaoge  5387
  // development: "http://200.200.1.172:8081/iop2/monitoring",
  // development: "http://200.200.1.172:8081/iop2/monitoring",
  // development: "http://172.16.0.50:8099",   //xiao
  // development: "http://172.16.0.198:5387", //  xianyang
  // development: "http://172.16.0.184:8082", //biaoge

  // development: "http://200.200.1.87:8085",
  // development: "http://200.200.1.172:8080/Scheduling_war", //调度协同

  // production: url + '/iop/netwidebilling' //全网结算
  // production: url + '/p/DemoServer' //4个不满意查询      
  // production: url + '/p/DemoServer/satisfactInfo' //6个满意度 --曾繁华

  // production: url + '/p/DemoServer' //6个满意度
  production: url + '/p/DemoServer' //详情导入
  // production: url
  // production: url
};
