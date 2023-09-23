{/*function calculDate() {
    const dateOffset = (24*60*60*1000) * 30;
    const today = new Date();
    today.setTime(today.getTime() - dateOffset);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return 'created:>'+year+'-'+month+'-'+day;     
}*/}


function dateInterval(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(date.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
export default dateInterval