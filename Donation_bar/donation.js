
	// This function updates progress bar when you enter amount in input box
 //  and click Give now button

function adjustProgressBar(val) {
  var progressVal;
  if (parseInt(val) >= 167) {
    progressVal = 100;
  } else {
    progressVal = 73 + (val / 668 * 100);
  }
  return progressVal;
}

/* Click event bound on Give now button*/
document.getElementById("giveNowBtn").addEventListener("click", function(elem) {
  var inputElem = document.getElementById("dollarAmount"),
  //below varies the width of the orange bar
    ret = adjustProgressBar(inputElem.value);
  document.getElementById("donateBar").style.width = ret + '%';
});
