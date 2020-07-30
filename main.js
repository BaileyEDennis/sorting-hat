// const houseArray = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

// let randomHouse = houseArray[Math.floor(math.random()*houseArray.length)];

// let studentsArray = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const sortingForm = () => {
  let domString = "";
  domString += `<form class="form-inline">
                    <h2>Enter First Year's Name</h2>
                    <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only"></label>
                    <input type="text" class="form-control" id="studentName" placeholder="Neville Longbottom">
                    </div>
                    <div id='sort-button'>
                    <button type="submit" class="btn btn-primary mb-2" id="sorting-button">Sort!</button>
                    </div>
                    </form>`;
  printToDom("sorting-form", domString);
};

const houseCards = () => {
   let domStr = "";
   domStr += `<p>I am cool<p>`;
   printToDom("cardsSection", domStr);
};

const buttonEvents = () => {
  document.getElementById("sorting-hat-button").addEventListener("click", sortingForm);
  document.querySelector("#sortingForm").addEventListener("click", houseCards);
};



const init = () => {
  buttonEvents();
  button2Events();
  houseCards();
};
init();
