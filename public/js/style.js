var modal = document.getElementById('id01');

// Zatvaranje ako se klikne izvan modal-a
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* ---------------------------------- ABOUT US -------------------------------------------- */
$(document).ready(function () {
    all_notes = $("li a");
  
    all_notes.on("keyup", function () {
      note_title = $(this).find("h2").text();
      note_content = $(this).find("p").text();
  
      item_key = "list_" + $(this).parent().index();
  
      data = {
        title: note_title,
        content: note_content
      };
  
      window.localStorage.setItem(item_key, JSON.stringify(data));
    });
  
    all_notes.each(function (index) {
      data = JSON.parse(window.localStorage.getItem("list_" + index));
  
      if (data !== null) {
        note_title = data.title;
        note_content = data.content;
  
        $(this).find("h2").text(note_title);
        $(this).find("p").text(note_content);
      }
    });
  });



  /* ---------------------------------- ADVICESS -------------------------------------------- */
  function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }