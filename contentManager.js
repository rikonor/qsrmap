$(document).ready(function() {

    populateContentControls();

    $(":checkbox").click(function() {
        if (this.checked) {
            // Show
            showMarkers(findMarkersByName(this.name));
        }
        else {
            // Hide
            hideMarkers(findMarkersByName(this.name));
        }
    });

    function populateContentControls() {
        controls = $("#content_controls");
        for (var i = 0; i < Points.length; i++) {
            controls.append('<input type="checkbox" name="'+Points[i].name+'" checked>'+Points[i].repr+'<br>');
        }
    }
});