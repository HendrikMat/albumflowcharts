function unhide(divID) {

  var album = document.getElementById(divID);

  if (album) {

    album.className = (album.className == 'hidden') ? 'unhidden' : 'hidden';

  }
}
