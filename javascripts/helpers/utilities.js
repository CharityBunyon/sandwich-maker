const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
}
//1st thing
export default {printToDom};
//2nd thing is to export this to let other files no about it