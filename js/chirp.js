function chirp(n){
  if ( n === 1 ) {
    return "chirp";
  }

  console.log(n);
  return "chirp " + chirp(--n);
}

// chirp(3);

$(document).ready(function(){
  $("#result").html(chirp(3));
});