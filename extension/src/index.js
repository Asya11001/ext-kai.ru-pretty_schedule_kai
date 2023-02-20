const myGroup = "неч";
const flagLab = myGroup === "чет" ? "/чет" : "неч/"

const flagWeekParity = () => {
    var weekParity = document.querySelector('#weekParity')
    let flagWeekParity
    if (weekParity.innerHTML.toLowerCase().indexOf('неч') !== -1){
        flagWeekParity = 'неч'
    }else{
        flagWeekParity = 'чет'
    }
    return flagWeekParity
}

var isClassRunningNow = function (beginTime) {
    var beginTimeSplitted = beginTime.split(":");
    var beginTimeHour = parseInt(beginTimeSplitted[0]);
    var beginTimeMinutes = parseInt(beginTimeSplitted[1]);
    var classDuration = 90;
    var timeStart = new Date(2000, 0, 0, beginTimeHour, beginTimeMinutes);
    var timeEnd = new Date(2000, 0, 0, beginTimeHour, beginTimeMinutes + classDuration);
    var timeRightNow = new Date();
    console.log(timeEnd.getTime() - timeStart.getTime())
    var timeNow = new Date(2000, 0, 0, timeRightNow.getHours(), timeRightNow.getMinutes());
    return timeNow.getTime() - timeStart.getTime() < timeEnd.getTime() - timeStart.getTime();
};


const weekParityFilter = () => {

    var flagWeek = flagWeekParity().replace(/ /g, "")
    var classes = document.querySelectorAll('tr')
    classes.forEach(lesson => {
        let flagWeekClass = lesson.children[1].innerHTML.replace(/ /g, "")
        if(isClassRunningNow(lesson.children[0].innerText)) {
            console.log(lesson.children[0].innerText)
            lesson.children[0].innerText += "!"
        }

        if ((flagWeek !== flagWeekClass) && (flagWeekClass !== "неч/чет") && flagWeekClass !== ""  && flagWeekClass !== "Дата" ){
            try{
                lesson.className = ' useless-class'
            }catch(err){
                console.error(err)
            }
        }

        if (flagWeekClass === "неч/чет" && flagWeekClass.indexOf(flagLab) !== -1 && flagLab.indexOf(flagWeek) === -1){
            try{
                lesson.className = ' useless-class'
            }catch(err){
                console.error(err)
            }
        }


        //TODO неч/чет

    })
}

const makeDivs = () => {
    var allDaysWeek = document.querySelectorAll('h4')
    var parent = allDaysWeek[0].parentNode
    for (let i = 0; i < allDaysWeek.length; i++) {
        let div = document.createElement('div')
        div.className = 'mainContainer'
        div.id = `container-id-${i + 1}`
        let day = allDaysWeek[i]
        let dayCopy = document.importNode(day, true)
        let dayRasp = day.nextSibling
        let dayRaspCopy = document.importNode(dayRasp, true)
        div.appendChild(dayCopy)
        div.appendChild(dayRaspCopy)
        day.remove()
        dayRasp.remove()
        parent.appendChild(div)
    }
}

const mainAction = () => {
    makeDivs()
    var date = new Date();
    var todayDay = date.getDay()
    if (todayDay !== 0){
        var todayElem = document.querySelector(`#container-id-${todayDay}`)
    }

    var tomorrowElem = false
    if (todayDay === 0){
        tomorrowElem = document.querySelector(`#container-id-1`)
    }
    if (todayDay !== 6){
        tomorrowElem = document.querySelector(`#container-id-${todayDay + 1}`)
    }
    if (todayDay !== 0){
        todayElem.className += ' div-shadow-today'
    }

    if (tomorrowElem !== false){
        tomorrowElem.className += ' div-shadow-tomorrow'
    }
    weekParityFilter()
}

let interval = setInterval(() => {
    if (document.querySelector('#schedule').childNodes.length !== 1){
        mainAction()
        clearInterval(interval)
    }
}, 250)
