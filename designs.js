// variables
var grid = $('#pixelCanvas');
var clearButton;

//a function to create a new grid
function makeGrid() {

  // if a grid already exists, delete it after confirmation
  if(grid.children().length > 0) {
      if (confirm("Creating a new grid will delete your current Pixel Art canvas. Are you sure you want to continue?")) {
          grid.empty();
      } else {
          return false;
      }
  }
  //draw the new canvas
  for(var m = 1; m <= $('#inputHeight').val(); m++) {
    grid.append("<tr id=\"row"+ m + "\"></tr>");
    for (var n = 1; n <= $('#inputWidth').val(); n++) {
      $('#row'+m).append("<td id=\"r"+m+"cell"+n+"\"></td");
    }
  }

  //clear canvas button
  if(!clearButton) {
      grid.has("tr").after("<input type=\"button\" id=\"clear\" value=\"Clear Grid\">");
      clearButton = $('#clear');
      clearButton.click(function() {
          if (confirm("Are you sure you want to clear your Pixel Art canvas?")) {
              grid.find('td').css("background-color", "transparent");
          }
      });
  }
  //set one-pixel brush
  $("td").mousedown(function() {
    if(event.which == 1) {
      $(this).css("background-color", $("#colorPicker").val());
    } else if(event.which == 3) {
      $(this).css("background-color", "transparent");
    }
  });

  //set continuous brush and countuous eraser
  $("td").mouseover(function(event) {
     if(event.which == 1) {
       $(this).css("background-color", $("#colorPicker").val());
     } else if(event.which == 3) {
       $(this).css("background-color", "transparent");
     }
  });

  //set one pixel eraser
  $("td").dblclick(function() {
      $(this).css("background-color", "transparent");
  });

  return false;
}

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(makeGrid);
