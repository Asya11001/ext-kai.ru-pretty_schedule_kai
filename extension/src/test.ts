


const isClassRunningNow = (beginTime: string): boolean => {
    const beginTimeSplitted: string[] = beginTime.split(":")
    const beginTimeHour: number = parseInt(beginTimeSplitted[0])
    const beginTimeMinutes: number = parseInt(beginTimeSplitted[1])
    const classDuration: number = 90
    const timeStart = new Date(
        2000,
        0,
        0,
        beginTimeHour,
        beginTimeMinutes
    )

    const timeEnd = new Date(
        2000,
        0,
        0,
        beginTimeHour,
        beginTimeMinutes + classDuration
    )
    return timeEnd.getTime() - timeStart.getTime() < 360000
}


const time2 = new Date(2000, 0, 0, parseInt(string2.split(":")[0]), parseInt(string2.split(":")[1]))



console.log(isClassRunningNow())
// timeManager(time111.getTime())