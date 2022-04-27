export function SecondToDate (date) {

    let sec_num = parseInt(date, 10);
    let hours = Math.floor(sec_num / 3600000);
    let minutes = Math.floor((sec_num - (hours * 3600000)) / 60000);
    let seconds = parseInt((sec_num - (hours * 3600000) - (minutes * 60000))/1000);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return (`${hours}:${minutes}:${seconds}`).toString()
}

export function secondToHour (date) {
    console.log(date)
    let sec_num = parseInt(date, 10)
    console.log('math', Math.floor(sec_num / 60000))
    const minute = Math.floor(sec_num / 60000)
    if (minute <= 1) return 1
    return minute
}
