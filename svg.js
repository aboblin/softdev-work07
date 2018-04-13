var svg_area = document.getElementById('svg');
var name_space = "http://www.w3.org/2000/svg";

var clear_button = document.getElementById('clear');

var primary_x;
var primary_y;

var make_circle = function(e) {

  var circ = document.createElementNS(name_space, "circle");
  circ.setAttribute("cx", e.offsetX);
  circ.setAttribute("cy", e.offsetY);
  circ.setAttribute("r", 10);
  circ.setAttribute("fill", "blue");
  svg_area.appendChild( circ );

  if (svg_area.firstChild != svg_area.lastChild){
    var line = document.createElementNS(name_space, "line");
    line.setAttribute("x1", primary_x);
    line.setAttribute("y1", primary_y);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "blue");
    svg_area.appendChild( line );
  }
  
  console.log(svg_area.firstChild);
  console.log(svg_area.lastChild);

  primary_x = e.offsetX;
  primary_y = e.offsetY;

}

var clear_screen = function (e) {
  while (svg_area.lastChild) {
    svg.removeChild(svg.lastChild);
  }
}

clear_button.addEventListener("click", clear_screen);
svg_area.addEventListener("click", make_circle);
