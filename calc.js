var SI = ["", "K", "M", "B", "T", "Q", "E", "Z", "Y"];

function formatString(num) {
  for (var i = 0; num / 1000 >= 1; i++)
    num /= 1000;

  return num.toFixed(2) + SI[i]
}

function getLevelEXP(level) {
  return Math.floor(10 - (5 * level) + (10 * (Math.pow(level, 2))) + (10 * (Math.pow(1.28, level))))
}

function adjustManaWell() {
	document.getElementById('mana-well').textContent = formatString(getLevelEXP(document.getElementById('level-input').value)) + " EXP";
}
