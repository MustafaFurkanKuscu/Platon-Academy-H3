function DiziGetir(başlık) {
    document.write(`<h3>${başlık}</h3>`)
    yeniDizi2.forEach(element => {
        document.write(`${element} <br>`);
    });
    document.write(`<hr>`);
}

//DİZİ METOTLARI
var yeniDizi2 = [];
DiziGetir("Array");
yeniDizi2.push("1");
yeniDizi2.push("2");
yeniDizi2.push("3");
yeniDizi2.push("4");
yeniDizi2.push("5");
yeniDizi2.push("12");
yeniDizi2.push("22");
DiziGetir("Push Metodu");
yeniDizi2.pop();
DiziGetir("Pop Metodu");
yeniDizi2.unshift("İlk Eleman");
DiziGetir("Unshift Metodu");
yeniDizi2.shift();
DiziGetir("Shift Metodu");
delete yeniDizi2[2];
DiziGetir("Delete Metodu");
yeniDizi2.splice(0, 2);
DiziGetir("Splice Silme Metodu");
yeniDizi2.splice(0, 0, "1", "2");
DiziGetir("Splice Ekleme Metodu");
console.log("5 sayısının indexi " + yeniDizi2.indexOf("5"));
yeniDizi2.reverse();
DiziGetir("Reverse Metodu");
yeniDizi2.sort();
DiziGetir("Sort Metodu");
//DİZİ METOTLARI