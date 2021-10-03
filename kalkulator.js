/*deklarasi
variabel input desimal (dst) yang diambil
dari elemen ID
*/
inpDes = document.getElementById("inpdes");
inpOkt = document.getElementById("inpokt");
inpHek = document.getElementById("inphek");
inpBin = document.getElementById("inpbin");

/*fungsi sikat desimal
ambil nilai dari variabel input des, masukan ke variabel input
lalu variabel input di konversi ke nilai bilangan lain berdasar
pada fungsi converter()
*/
function sikatDes() {
  input = inpDes.value;
  inpOkt.value = converter(input, 10, 8);
  inpHek.value = converter(input, 10, 16);
  inpBin.value = converter(input, 10, 2);
}
/*fungsi sikat oktal
ambil nilai dari variabel input okt, masukan ke variabel input
lalu variabel input di konversi ke nilai bilangan lain berdasar
pada fungsi converter()
*/
function sikatOkt() {
  input = inpOkt.value;
  inpDes.value = converter(input, 8, 10);
  inpHek.value = converter(input, 8, 16);
  inpBin.value = converter(input, 8, 2);
}
/*fungsi sikat heksa
ambil nilai dari variabel input hek, masukan ke variabel input
lalu variabel input di konversi ke nilai bilangan lain berdasar
pada fungsi converter()
*/
function sikatHek() {
  input = inpHek.value;
  inpDes.value = converter(input, 16, 10);
  inpOkt.value = converter(input, 16, 8);
  inpBin.value = converter(input, 16, 2);
}
/*fungsi sikat biner
ambil nilai dari variabel input biner, masukan ke variabel input
lalu variabel input di konversi ke nilai bilangan lain berdasar
pada fungsi converter()
*/
function sikatBin() {
  input = inpBin.value;
  inpDes.value = converter(input, 2, 10);
  inpOkt.value = converter(input, 2, 8);
  inpHek.value = converter(input, 2, 16);
}
/*fungsi converter
konversi input dari string jadi angka (integer) supaya bisa dihitung
kalau input Not a Number (nan) kosongin
balikin hasil convert
*/
function converter(input, from, to) {
  convert = parseInt(input, from).toString(to);

  if (convert == "NaN") {
    convert = "";
  }

  return convert;
}
