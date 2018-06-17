import * as moment from "moment";
export function convertObject(data) {
  var obj = {};
  Object.keys(data).forEach(function(key, index) {
    console.log(key);
    obj[key] = data[key];
  });
  return obj;
}
export function newDate(format = "DD/MM/YYYY hh:mm:ss") {
  if (format === "full") return moment().format();
  if (format === "datetime") return moment().format("DD/MM/YYYY hh:mm:ss");
  if (format === "date") return moment().format("DD/MM/YYYY");
  if (format === "time") return moment().format("hh:mm:ss");
  else return moment().format(format);
}
