const container = document.getElementsByTagName("body");
const kotak = document.getElementsByClassName("kotak");
const kotakHover = document.getElementsByClassName("kotak-hover");
// const merah = document.getElementById("red");

// merah.addEventListener("click", function () {
// 	container[0].style.backgroundColor = "red";
// });

for (let i = 0; i < kotak.length; i++) {
	kotak[i].addEventListener("click", function () {
		const currentColor = kotak[i].id;
		container[0].style.backgroundColor = currentColor;
	});
}

for (let i = 0; i < kotakHover.length; i++) {
	kotakHover[i].addEventListener("mouseenter", function () {
		const currentColor = kotakHover[i].id;
		container[0].style.backgroundColor = currentColor;
	});
}

const input = document.getElementsById("input-box");
const button = document.getElementsByTagName("button");

button[0].addEventListener("click", function () {
	container[0].style.backgroundColor = input.value;
});

button[1].addEventListener("click", function () {
	container[0].style.backgroundColor = "white";
});
