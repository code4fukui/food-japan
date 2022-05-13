import { CSV } from "https://js.sabae.cc/CSV.js";

//const keyword = "ハチバン";
//const keyword = "ファミリーマート"; // 6658
//const keyword = "ローソン"; // 5443
//const keyword = "セブンイレブン"; // 4532
//const keyword = "セイコーマート"; // 1187
const keyword = null;

const area = "福井県";
//const area = "北海道";
//const area = "沖縄県";
//const area = null;

const type = "① 飲食店営業"; // 営業の種類

const list = CSV.toJSON(await CSV.fetch("../data/latest/list.csv"));
const res = [];
let n = 0;
for (const d of list) {
  if (area && d.name.indexOf(area) == -1) {
    continue;
  }
  const fn = "../data/latest/" + d.code + "_food_business_all.csv";
  console.log(d.code, d.name);
  const data = CSV.toJSON(await CSV.fetch(fn));
  data.forEach(d => {
    n++;
    const btype = d["営業の種類"];
    if (type && btype != type) {
      return;
    }
    const kana = d["営業施設名称、屋号又は商号（フリガナ）"];
    if (!keyword || kana.indexOf(keyword) >= 0) {
      res.push(d);
    }
  });
}
//console.log(res);
console.log(res.length, "/", n);

const posres = res.filter(d => d.緯度 && d.経度);
posres.sort((a, b) => a.行番号.localeCompare(b.行番号));
console.log(posres.length, "/", n);
await Deno.writeTextFile("../sample/restaurant-fukui.csv", CSV.stringify(posres));
