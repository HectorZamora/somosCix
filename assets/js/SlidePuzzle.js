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

$(function () {
  var squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("target", e.target.dataset.pos);
      var arr = []
      arr.splice(1,1,)
      var firstPos = parseInt(e.target.dataset.pos);
      var empty = document.querySelectorAll(".empty")[0];
      var secondPos = parseInt(empty.dataset.pos);
      console.log("empty", empty.dataset.pos);

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
