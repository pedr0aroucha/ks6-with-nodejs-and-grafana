import http from "k6/http";

import { check } from "k6";

export let options = {
  vus: 100,
  duration: "10s",
};

export default function () {
  let res = http.get("https://integraideias.com.br/");
  check(res, {
    success: (r) => r.status == 200,
  });
}
