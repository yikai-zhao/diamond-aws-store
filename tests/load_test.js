import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 50,          // 虚拟用户数
  duration: "30s",  // 压测时长
};

export default function () {
  http.get("http://localhost:3000/");
  sleep(1);
}
