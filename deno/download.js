import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { loadOrFetch } from "./loadOrFetch.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

const url = "https://ifas.mhlw.go.jp/faspub/IO_S010303.do?_errCheck=false&_searched=false&_sessionId=0E72577A81D7752E17ED3239751C9234&method=a_menu_o01Action&param=&_focus=actionlink_a_menu_o01&_posx=0&_posy=0&_rowidx=0&_language=&_timezoneOffset=-540&_status=&_labelMapArchive=&_wfinfo=&_wfinfo_RefParams=&_ActionHistoryList%5B0%5D.action=%2FIO_S010303";
//const html = await loadOrFetch(url, "_list.html");
const html = await (await fetch(url)).text();
const dom = HTMLParser.parse(html);
const lastUpdate0 = dom.querySelector(".field__OUTCOTNTEXT input").getAttribute("value");
const lastUpdate = (() => {
  const n = lastUpdate0.match(/(\d\d\d\d)年(\d\d)月末現在/);
  if (!n) {
    return null;
  }
  return n[1] + n[2];
})();
console.log(lastUpdate);
if (!lastUpdate) {
  console.log("err lastUpdate is null");
  Deno.exit(1);
}
/*

try {
  await Deno.mkdir("../data/latest", { recursive: true });
  await Deno.mkdir("../data/" + lastUpdate);
} catch (e) {
  console.log("data already downloaded");
  Deno.exit(0);
}
*/
const codes = ArrayUtil.toUnique(dom.querySelectorAll("form .action a").map(a => a.getAttribute("id")).map(id => id.substring(id.length - 5)));
console.log(codes);

const fetchData = async (code) => {
  const url = `https://ifas.mhlw.go.jp/faspub/page/opendatadownload.jsp?param=${code}_food_business_all.csv`;
  const txt = await (await fetch(url)).text();
  //console.log(txt);
  return txt;
};
/*
for (const code of codes) {
  console.log(code);
  const csv = await fetchData(code);
  await Deno.writeTextFile("../data/" + lastUpdate + "/" + code + "_food_business_all.csv", csv);
  await Deno.writeTextFile("../data/latest/" + code + "_food_business_all.csv", csv);
}
*/
const lgcodes = CSV.toJSON(await CSV.fetch("https://code4fukui.github.io/address-japan/data/lgcode.csv"));

const codecsv = CSV.stringify(codes.map(code => {
  const lg = lgcodes.find(d => d.全国地方公共団体コード.startsWith(code));
  const name = lg.都道府県名 + lg.郡名 + lg.市区町村名 + lg.政令市区名;
  const lgcode = lg.全国地方公共団体コード;
  return {
    code,
    lgcode,
    name,
  };
}));
await Deno.writeTextFile("../data/" + lastUpdate + "/list.csv", codecsv);
await Deno.writeTextFile("../data/latest/list.csv", codecsv);
console.log(codes.length); // 314
