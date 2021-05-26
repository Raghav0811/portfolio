const randomTimes = [];
const firstSumRandomTimes = [];
const secondSumRandomTimes = [];

const getRandom = function () {
  return 50 + 50 * Math.random();
};

for (i = 0; i <= 14; i++) {
  randomTimes.push(getRandom());
}

firstSumRandomTimes.push(randomTimes[0]);

for (let i = 1; i <= 14; i++) {
  const indices = [0];

  for (let j = 1; j <= i; j++) {
    indices.push(j);
  }

  let sum = 0;

  for (const index of indices) {
    sum += randomTimes[index];
  }

  i <= 3 ? firstSumRandomTimes.push(sum) : secondSumRandomTimes.push(sum);
}

$(document).ready(function () {
  const $h1 = $("#about").find("h1");
  const $h2 = $("#about").find("h2");

  $h1.text("|");
  $h2.hide();

  setTimeout(() => $h1.text(""), 500);
  setTimeout(() => $h1.text("|"), 1000);
  setTimeout(() => $h1.text(""), 1500);
  setTimeout(() => $h1.text("|"), 2000);
  setTimeout(() => $h1.text(""), 2500);
  setTimeout(() => $h1.text("|"), 3000);
  setTimeout(() => $h1.text("H|"), 3000 + firstSumRandomTimes[0]);
  setTimeout(() => $h1.text("Hi|"), 3000 + firstSumRandomTimes[1]);
  setTimeout(() => $h1.text("Hi,|"), 3000 + firstSumRandomTimes[2]);
  setTimeout(() => $h1.text("Hi, |"), 3000 + firstSumRandomTimes[3]);
  setTimeout(() => $h1.text("Hi, "), 3000 + firstSumRandomTimes[3] + 500);
  setTimeout(() => $h1.text("Hi, |"), 3000 + firstSumRandomTimes[3] + 1000);
  setTimeout(() => $h1.text("Hi, "), 3000 + firstSumRandomTimes[3] + 1500);
  setTimeout(
    () => $h1.text("Hi, |"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[0]
  );
  setTimeout(
    () => $h1.text("Hi, I|"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[1]
  );
  setTimeout(
    () => $h1.text("Hi, I'|"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[2]
  );
  setTimeout(
    () => $h1.text("Hi, I'm|"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[3]
  );
  setTimeout(
    () => $h1.text("Hi, I'm |"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[4]
  );
  setTimeout(
    () => $h1.text("Hi, I'm R|"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[5]
  );
  setTimeout(
    () => $h1.text("Hi, I'm Ra|"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[6]
  );
  setTimeout(
    () => $h1.text("Hi, I'm Rag|"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[7]
  );
  setTimeout(
    () => $h1.text("Hi, I'm Ragh"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[8]
  );
  setTimeout(
    () => $h1.text("Hi, I'm Ragha"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[9]
  );
  setTimeout(
    () => $h1.text("Hi, I'm Raghav"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[10]
  );

  setTimeout(
    () => $h2.text("a full-stack web developer"),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[10] + 100
  );

  setTimeout(
    () => $h2.slideDown(),
    3000 + firstSumRandomTimes[3] + 1500 + secondSumRandomTimes[10] + 1500
  );
});
