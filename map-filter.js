const sayilar = [4, 9, 16, 25, 36, 49];
console.log(sayilar);

const isimler = ["ahmet", "burcu", "ceyda", "davut", "eren"];
const isimlerBüyük = isimler.map((isim) => isim.toUpperCase())

const kareleri2 = sayilar.map((a) => a * a);
console.log(kareleri2);

const kareleri1 = [];
sayilar.forEach((sayi) => {
    kareleri1.push(sayi * sayi);
});
console.log(kareleri1);

const liste = document.querySelector("#liste");
const listemadde = liste.map(
    (a) =>
        `<li>A</li>
     <li>B</li>
     <li>C</li>
     <li>D</li>
     `

);
liste.innerHTML = listemadde.join("");





const yaşlar = [8, 16, 18, 19, 25, 35];
const yetiskinler = yaşlar.filter((x) => x >= 18);
console.log(yetiskinler);