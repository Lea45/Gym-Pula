var modal = document.getElementById('id01');

// Zatvaranje ako se klikne izvan modal-a
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}