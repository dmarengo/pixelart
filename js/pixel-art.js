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

for (var i=0; i<nombreColores.length; i++){
  nuevoDiv = document.createElement('div');
  nuevoDiv.style.backgroundColor = nombreColores[i];
  colorPaleta = document.createElement('class');
  paleta.appendChild(nuevoDiv);
}

var cuadrados = document.getElementById('grilla-pixeles');
for (var j=0; j<1750; j++){
  var nuevoCuadro = document.createElement('div');
  cuadrados.appendChild(nuevoCuadro);
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    
    // Completar para que cambie el indicador-de-color al colorActual
    var colorido = document.getElementById('indicador-de-color');
    colorido.style.backgroundColor = colorActual;
    var mensajeColor = document.getElementById('indicador-de-color-mensaje');
    mensajeColor.textContent = "Pincel Color: " + colorActual;

    //Pinto la grilla de pixeles de los colores de la rueda
    pintoGrilla = document.getElementById('grilla-pixeles');
    pintoGrilla.addEventListener('click',pintaCuadrado);

    function pintaCuadrado(e){
      e.target.style.backgroundColor = colorActual;
    }
    
    //Intento de funcion para pintar los cuadros en forma seguida

    /*
    pintoSeguido = document.getElementById('grilla-pixeles');
    pintoSeguido.addEventListener('mousedown',pintaCuadradoSeguido);
      
    function pintaCuadradoSeguido(f){
        f.target.style.backgroundColor = colorActual;
    }
    */

    //2do Intento de funcion para pintar los cuadros en forma seguida
    /*
    $('#grilla-pixeles').mousedown(function(){
      style.backgroundColor = colorActual;
    });
    */

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
