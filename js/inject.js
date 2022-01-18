var footnotes = document.getElementsByClassName("footnotes");
footnotes[0].innerHTML += '<span id="footnotes-top-line"></span><span class="footnotes-title"><font color="#A8A8A8">FOOTNOTES</font></span>';

var reversefootnotes = document.getElementsByClassName("reversefootnote");
var i;
for (i = 0; i < reversefootnotes.length; i++) {
  reversefootnotes[i].innerHTML = "";
  reversefootnotes[i].classList.add("fa");
  reversefootnotes[i].classList.add("fa-level-up");
}
