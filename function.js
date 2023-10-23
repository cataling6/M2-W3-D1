const array = [
  {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  },
  {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  },
  {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  },
];

const toString = function (trovaNome) {
  return trovaNome.name;
};

for (let i = 0; i < array.length; i++) {
  let stringaNome = toString(array[i]);
  console.log(stringaNome);
}
