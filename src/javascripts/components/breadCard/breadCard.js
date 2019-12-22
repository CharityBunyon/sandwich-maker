
const makeBreadCheckboxes = (bread) => {
  let domString = '';
  if (bread.id) {
    domString += `
    <div class="form-check items-div">
    <input type="checkbox" class="form-check-input bread" id="${bread.id}">
    <label class="form-check-label" for="${bread.id}">${bread.name}</label>
  </div>`;
  }
  return domString;
};


export default { makeBreadCheckboxes };
