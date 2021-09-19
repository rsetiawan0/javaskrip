inpDes = document.getElementById("inp-dec");
inpOkt = document.getElementById("inp-oct");
inpHek = document.getElementById("inp-hex");
inpBin = document.getElementById("inp-bin");

function sikatDes() {
  input = inpDes.value;
  inpOkt.value = converter(input, 10, 8);
  inpHek.value = converter(input, 10, 16);
  inpBin.value = converter(input, 10, 2);
}

function sikatOkt() {
  input = inpOkt.value;
  inpDes.value = converter(input, 8, 10);
  inpHek.value = converter(input, 8, 16);
  inpBin.value = converter(input, 8, 2);
}

function sikatHek() {
  input = inpHek.value;
  inpDes.value = converter(input, 16, 10);
  inpOkt.value = converter(input, 16, 8);
  inpBin.value = converter(input, 16, 2);
}

function sikatBin() {
  input = inpBin.value;
  inpDes.value = converter(input, 2, 10);
  inpOkt.value = converter(input, 2, 8);
  inpHek.value = converter(input, 2, 16);
}

function converter(input, from, to) {
  convert = parseInt(input, from).toString(to);

  if (convert == "NaN") {
    convert = "";
  }

  return convert;
}
