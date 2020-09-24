// キャラ操作アプリ
// 機能1:
// kewdownイベントでキャラクター要素を上下左右に動かせる
// → 技法: DOM、イベント（keydown）、DOMElement.style.top = x + 'px';
// その他技法: if文
// 一部引用: https://original-game.com/introduction-to-javascript-move-a-character-by-input/

let x = 0;
let y = 0;
const fairly = document.getElementById('fairly');

function charaCommand(e) {
  console.log(e.keyCode);

  const keyNumber = e.keyCode;
  switch (keyNumber) {
    case 38:
      y -= 50;
      console.log('↑');
      break;
    case 39:
      x += 50;
      console.log('→');
      break;
    case 40:
      y += 50;
      console.log('↓');
      break;
    case 37:
      x -= 50;
      console.log('←');
      break;
    default:
      console.log('default');
  }
  // 要素のデフォルトと配置は、左上だから、下に押しやるtopか、右に押しやるleftになる。
  fairly.style.top = `${y}px`;
  fairly.style.left = `${x}px`;
}

window.addEventListener('keydown', charaCommand);