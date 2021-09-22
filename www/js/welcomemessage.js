document.write("<p>");
var day = new Date();
var hr = day.getHours();
if (
  hr == 1 ||
  hr == 2 ||
  hr == 3 ||
  hr == 4 ||
  hr == 5 ||
  hr == 6 ||
  hr == 7 ||
  hr == 8 ||
  hr == 9 ||
  hr == 10 ||
  hr == 11
) {
  document.write("Good Morning!");
}
if (hr == 15 || hr == 12 || hr == 14 || hr == 16 || hr == 13) {
  document.write("Good Afternoon!");
}
if (hr == 17 || hr == 18 || hr == 19 || hr == 20 || hr == 21 || hr == 22) {
  document.write("Good Evening!");
}
if (hr == 23) {
  document.write("Good Night!");
}
if (hr == 0) {
  document.write("It's Midnight, Go to Sleep");
}
document.write("</p>");