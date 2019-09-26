const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
}
//first thing
export default {printToDom};
//second thing is to export this to let other files no about it