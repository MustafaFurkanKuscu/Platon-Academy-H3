const zamanlayıcı = () => {
    document.write("Süre doldu.");
}

setTimeout(zamanlayıcı, 3000);


setInterval(zamanGoster, 1000)
function zamanGoster() {
    var saat = new Date();
    document.querySelector("#sonuc").innerHTML = saat.toLocaleTimeString('tr-TR');
}

var buttonPrint = document.querySelector("#print");
buttonPrint.addEventListener("click", () => {
    window.print();
})