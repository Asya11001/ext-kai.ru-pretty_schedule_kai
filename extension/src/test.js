var isClassRunningNow = function (beginTime) {
    var beginTimeSplitted = beginTime.split(":");
    var beginTimeHour = parseInt(beginTimeSplitted[0]);
    var beginTimeMinutes = parseInt(beginTimeSplitted[1]);
    var classDuration = 90;
    var timeStart = new Date(2000, 0, 0, beginTimeHour, beginTimeMinutes);
    var timeEnd = new Date(2000, 0, 0, beginTimeHour, beginTimeMinutes + classDuration);
    return timeEnd.getTime() - timeStart.getTime() < 360000;
};
var time2 = new Date(2000, 0, 0, parseInt(string2.split(":")[0]), parseInt(string2.split(":")[1]));
console.log(isClassRunningNow());
// timeManager(time111.getTime())
