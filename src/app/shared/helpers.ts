import * as moment from "moment";
export function convertObject(data, ignore = "id", removeNull = true) {
  var obj = {};
  if (ignore) {
    Object.keys(data).forEach(function(key, index) {
      if (key !== ignore) {
        if (data[key]) {
          obj[key] = data[key];
        } else {
          if (!removeNull) obj[key] = null;
        }
      }
    });
  } else {
    Object.keys(data).forEach(function(key, index) {
      if (data[key]) {
        obj[key] = data[key];
      } else {
        if (!removeNull) obj[key] = null;
      }
    });
  }
  return obj;
}
export function newDate(format = "DD/MM/YYYY hh:mm:ss") {
  if (format === "full") return moment().format();
  if (format === "datetime") return moment().format("DD/MM/YYYY hh:mm:ss");
  if (format === "date") return moment().format("DD/MM/YYYY");
  if (format === "time") return moment().format("hh:mm:ss");
  else return moment().format(format);
}