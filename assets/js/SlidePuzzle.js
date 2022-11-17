// var squares = document.querySelectorAll(".square");
// squares.forEach((square) => {
//   square.addEventListener("click", (e) => {
//     e.preventDefault();
//     var firstPos = parseInt(e.target.dataset.pos);
//     var empty = document.querySelectorAll(".empty")[0];
//     var secondPos = parseInt(empty.dataset.pos);

//     var top = secondPos - 4;
//     var bottom = secondPos + 4;
//     var left = secondPos - 1;
//     var right = secondPos + 1;

//     if ((secondPos % 4) - (left % 4) < 1) {
//       left = -1;
//     }
//     if ((right % 4) - (secondPos % 4) < 1) {
//       right = -1;
//     }
//     var posibilities = [left, right, top, bottom];

//     if (posibilities.includes(firstPos)) {
//       empty.dataset.pos = firstPos;
//       e.target.dataset.pos = secondPos;
//     }
//   });
// });
[1, 14, 9, 3, 12, -1, 2, 6, 7, 10, 11, 4, 15, 5, 13, 8];
const arr = [1, 14, 9, 3, 12, -1, 2, 6, 7, 10, 11, 4, 15, 5, 13, 8];
$(function () {
  var squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log(e.target.dataset.pos);
      var firstPos = parseInt(e.target.dataset.pos);
      var empty = document.querySelectorAll(".empty")[0];
      var secondPos = parseInt(empty.dataset.pos);
      // console.log("empty", empty.dataset.pos);

      var from = e.target.dataset.pos;
      var to = empty.dataset.pos;
      var value1 = arr[from];
      var value2 = arr[to];

      console.log("En la posicion", to, "esta", value1);
      console.log("En la posicion", from, "esta", value2);

      arr.splice(to, 1, value1);
      arr.splice(from, 1, value2);
      console.log(arr);

      var top = secondPos - 4;
      var bottom = secondPos + 4;
      var left = secondPos - 1;
      var right = secondPos + 1;

      if ((secondPos % 4) - (left % 4) < 1) {
        left = -1;
      }
      if ((right % 4) - (secondPos % 4) < 1) {
        right = -1;
      }
      var posibilities = [left, right, top, bottom];

      if (posibilities.includes(firstPos)) {
        empty.dataset.pos = firstPos;
        e.target.dataset.pos = secondPos;
      }
    });
  });
});
