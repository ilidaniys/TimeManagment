export function SecondToDate (date) {

    let sec_num = parseInt(date, 10);
    let hours = Math.floor(sec_num / 3600000);
    let minutes = Math.floor((sec_num - (hours * 3600000)) / 60000);
    let seconds = (sec_num - (hours * 3600000) - (minutes * 60000)).toString().slice(0, -3);

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