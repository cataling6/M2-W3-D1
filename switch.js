const catalin = {
  name: "Catalin",
  lastName: "Radoi",
  isAmbassador: true,
  nrOggettiNelCarrello: 0,
  prezziArticoliNelCarrello: [0],
  sommaTotaleArticoli: 0,
};

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

let user = [];
user.push(marco, amy, paul);

for (let i = 0; i < user.length; i++) {
  switch (user[i].isAmbassador) {
    case true:
      console.log(user[i].name + " è ambassador");
      break;

    default:
      console.log(user[i].name + " Non è ambassador");
      break;
  }
}
