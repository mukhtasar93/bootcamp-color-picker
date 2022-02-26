const container = document.getElementsByTagName("body");
const kotak = document.getElementsByClassName("kotak");
const merah = document.getElementById("merah");
const kuning = document.getElementById("kuning");
const hijau = document.getElementById("hijau");
const biru = document.getElementById("biru");
const coklat = document.getElementById("coklat");

const warna = document.getElementById("input-box").value;

// merah.addEventListener("click", function () {
// 	container[0].style.backgroundColor = "red";
// });

for (let i = 0; i < kotak.length; i++) {
	kotak[i].addEventListener("click", function () {
		const currentColor = kotak[i].id;
		container[0].style.backgroundColor = currentColor;
	});
}

const input = document.getElementsById("input-box");
const button = document.getElementsByTagName("button");

button[0].addEventListener("click", function () {
	container[0].style.backgroundColor = input.value;
});
