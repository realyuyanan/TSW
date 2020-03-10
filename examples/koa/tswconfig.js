const OpenPlatformPlugin = require("@tswjs/open-platform-plugin");

module.exports = {
  plugins: [
    new OpenPlatformPlugin({
      appid: "tsw1431",
      appkey: "PwPaD4RRAsrSdRZjQSc3fbKM",
      getReportList: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(["demoUser"]);
          }, 2000)
        });
      },
      // 只支持同步写法
      getUid: (request) => {
        const cookie = request.headers.cookie;

        if (!cookie) return;

        const uid = cookie.split("quid=")[1].split(";")[0];
        return uid;
      },
      getProxyInfo: () => {
        return {
          "127.0.0.1": {
            "port": 80,
            "name": "2.0demo",
            "group": "TSW",
            "groupName": "TSW团队",
            "desc": "2.0demo测试环境",
            "order": 30,
            "owner": "demoUser",
            "alphaList": ["demoUser"]
          }
        };
      }
    })
  ]
};
