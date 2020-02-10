var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// guardo en variables el ID paleta y grillaPixeles
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var numeroDePixeles = 1750; 


//Pinto la matriz de los colores de colorPaleta
function matrizColores(){
  for (var i = 0; i < nombreColores.length; i++) { 
    var color = document.createElement('div'); 
    color.className = ('color-paleta'); 
    color.style.backgroundColor= nombreColores[i];
    paleta.appendChild(color); 
    }
}
matrizColores();

//Creo la matriz de cuadros donde dibujar
var cuadrados = document.getElementById('grilla-pixeles');
for (var j=0; j<1750; j++){
  var nuevoCuadro = document.createElement('div');
  cuadrados.appendChild(nuevoCuadro);
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

// Completar para que cambie el indicador-de-color al colorActual
var indicador = document.getElementById("indicador-de-color");
paleta.addEventListener("click", cambiaColor); 

function cambiaColor(e){
  indicador.style.backgroundColor = e.target.style.backgroundColor;
  var mensajeColor = document.getElementById('indicador-de-color-mensaje');
  mensajeColor.textContent = "Pincel Color: " + indicador.style.backgroundColor;
}

// Pintar la matriz a medida que hago un click y muestra el nombre del color
grillaPixeles.addEventListener("click", pintarMatriz); 
function pintarMatriz (f){
 f.target.style.backgroundColor = indicador.style.backgroundColor;
}

// Con esto pinto la Matriz a medida que mantengo apretado el mouse
var clickCursor = false; 

grillaPixeles.addEventListener("mousedown", pintoMatriz);
grillaPixeles.addEventListener("mouseup", sueltoPintar);
grillaPixeles.addEventListener("mouseover", pintoMoviendo);

function pintoMatriz(g){
  clickCursor=true;
}

function sueltoPintar(g) {
  clickCursor = false;
}

function pintoMoviendo(g) {
  if (clickCursor) {
    pintarMatriz(g);
  } 
}

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    var colorActual = colorPersonalizado.value;
    indicador.style.backgroundColor = colorActual; // cambia el indicador al colorActual
}));

// Borrar la matriz
$('#borrar').click(function() {
  var $cuadrados = $("#grilla-pixeles div");
  for (var i = 0; i < $cuadrados.length; i++) {
    $cuadrados[i].style.backgroundColor = 'white';
  }
});

//cargar las imagenes en la matriz de los super heroes
$('#batman').click(function() {
  cargarSuperheroe(batman);
});

$('#wonder').click(function() {
  cargarSuperheroe(wonder);
});

$('#flash').click(function() {
  cargarSuperheroe(flash);
});

$('#invisible').click(function() {
  cargarSuperheroe(invisible);
});

//Guarda la pantalla
$('#guardar').click(function(){
  guardarPixelArt();
});


