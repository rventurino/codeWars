/*
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
*/
Form The Minimum

function minValue(values) {
  values.sort();
  let set = new Set(values);
  let data = "";
  set.forEach((element) => {
    data += element;
  });
  return parseInt(data);
}

minValue([4, 7, 5, 7]);
