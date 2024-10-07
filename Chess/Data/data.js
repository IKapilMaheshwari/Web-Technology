export function Greet() {
  alert("Hello, World!");
}

function Square() {
    return{
        color: "black",
        id : "e5",
        piece :null,
    };
}

function initGame() {
    return {
        squares: Array(64).fill(null),
    };
}