var Hvar,Svar,Lvar;

var Hd_var,Ld_var,Hf_var,Lf_var;

var Hg_var,Lg_var,Hh_var,Lh_var;

var Mfor,Coldist;

var numbling = 0;

var fomular_val,fomular_valx;


var a,b,c,d,e;

Mfor = Math.floor(document.getElementById("Mformular").value);
Coldist = Math.floor(document.getElementById("ColorDist").value);

//setInterval(Lopping, 200);

function Lopping(){
  console.log(numbling);

  Mfor = Math.floor(document.getElementById("Mformular").value);
  Coldist = Math.floor(document.getElementById("ColorDist").value);

  var fomular_val = Math.floor(Mfor);
  var fomular_valx = Math.floor(Mfor*2);


  Hvar = document.getElementById("Hv").value;
  Svar = document.getElementById("Sv").value;
  Lvar = document.getElementById("Lv").value;

  document.getElementById("Hdis").innerHTML = Hvar;
  document.getElementById("Sdis").innerHTML = Svar;
  document.getElementById("Ldis").innerHTML = Lvar;

  Hd_var = parseInt(Hvar) - (fomular_val);
  Ld_var = parseInt(Lvar) - (fomular_val);
  Hf_var = Hvar - (fomular_valx);
  Lf_var = Lvar - (fomular_valx);

  Hg_var  = parseInt(Hvar) + (fomular_val);
  Lg_var  = parseInt(Lvar) + (fomular_val);
  Hh_var  = parseInt(Hvar) + (fomular_valx);
  Lh_var  = parseInt(Lvar) + (fomular_valx);

  a = `hsl(${Hf_var}, ${Svar}%, ${Lf_var}%)`;
  b = `hsl(${Hd_var}, ${Svar}%, ${Ld_var}%)`;
  c = `hsl(${Hvar}, ${Svar}%, ${Lvar}%)`;
  d = `hsl(${Hg_var}, ${Svar}%, ${Lg_var}%)`;
  e = `hsl(${Hh_var}, ${Svar}%, ${Lh_var}%)`;

  document.getElementById("del2").style.backgroundColor = a;
  document.getElementById("del1").style.backgroundColor = b;
  document.getElementById("d0").style.backgroundColor = c;
  document.getElementById("dps1").style.backgroundColor = d;
  document.getElementById("dps2").style.backgroundColor = e;

  document.getElementById("del2t").innerHTML = colorcolor( `hsl(${Hf_var}, ${Svar}%, ${Lf_var}%)`, "hex" );
  document.getElementById("del1t").innerHTML = colorcolor( `hsl(${Hd_var}, ${Svar}%, ${Ld_var}%)`, "hex" );
  document.getElementById("d0t").innerHTML = colorcolor( `hsl(${Hvar}, ${Svar}%, ${Lvar}%)`, "hex" );
  document.getElementById("dps1t").innerHTML = colorcolor( `hsl(${Hg_var}, ${Svar}%, ${Lg_var}%)`, "hex" );
  document.getElementById("dps2t").innerHTML = colorcolor( `hsl(${Hh_var}, ${Svar}%, ${Lh_var}%)`, "hex" );

}

//var HueGen = 90;

function genHex(){
  document.getElementById("textarea").innerHTML = "";
  for (HueGen = 0; HueGen < 360; HueGen+= Coldist) {
    //HueGen = numLoop

    // a -------------------------
    numbling = colorcolor( `hsl(${HueGen}, ${Svar}%, ${Lf_var}%)`, "hex" );
    numbling = numbling.replace("#", "");
    document.getElementById("textarea").innerHTML += numbling+"\n";
    // a -------------------------

    // b -------------------------
    numbling = colorcolor( `hsl(${HueGen}, ${Svar}%, ${Ld_var}%)`, "hex" );
    numbling = numbling.replace("#", "");
    document.getElementById("textarea").innerHTML += numbling+"\n";
    // b -------------------------

    // c -------------------------
    numbling = colorcolor( `hsl(${HueGen}, ${Svar}%, ${Lvar}%)`, "hex" );
    numbling = numbling.replace("#", "");
    document.getElementById("textarea").innerHTML += numbling+"\n";
    // c -------------------------

    // d -------------------------
    numbling = colorcolor( `hsl(${HueGen}, ${Svar}%, ${Lg_var}%)`, "hex" );
    numbling = numbling.replace("#", "");
    document.getElementById("textarea").innerHTML += numbling+"\n";
    // d -------------------------

    // e -------------------------
    numbling = colorcolor( `hsl(${HueGen}, ${Svar}%, ${Lh_var}%)`, "hex" );
    numbling = numbling.replace("#", "");
    document.getElementById("textarea").innerHTML += numbling+"\n";
    // e -------------------------
}

}

function seText(){

document.getElementById("textarea").select();

}

$("#btn-save").click( function() {
  var text = $("#textarea").val();
  var filename = "Aseprite Palette";

  bootbox.prompt({
    size: "small",
    title: "Please Enter File Name.",
    value: "Aseprite Palette",
    callback: function(result){ /* result = String containing user input if OK clicked or null if Cancel clicked */
      var filename = result ;
      var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
      saveAs(blob, filename +".hex");}
  })


});

Lopping();

document.title = "ASEPRITE.";
