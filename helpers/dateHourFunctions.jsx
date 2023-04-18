const dateInfo = () => { 
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const dia = date.getDate();
    const resultDate = dia+"/"+month+"/"+year;
    return resultDate;
}

const addZero = (num) => {
    return (num < 10 ? '0' : '') + num;
}; 

const hourInfo = () => {    
    const date = new Date();
    const h = addZero(date.getHours());
    const m = addZero(date.getMinutes());
    const s = addZero(date.getSeconds());
    const time = h + ":" + m + ":" + s;
    return time;
}

export { dateInfo, hourInfo };