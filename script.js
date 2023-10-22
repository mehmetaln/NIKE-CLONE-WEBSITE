// // var sepet [];

// // function sepetiGuncelle () {
// //     var sepetTablo = document.getElementById("sepet-tablo");
// //     sepetTablo.innerHTML = "";

// //     var toplamFiyat = 0;

// //      sepet.forEach(function(urun)){
// //         var row = sepetTablo.insertRow();
// //         var cellUrunAdi = row.insertCell(0);
// //         var cellFiyat = row.insertCEll(1);

// //         cellUrunAdi = innerText = urun.adi;

    
    
// //     }
// // }

// // Sepet içeriği için bir dizi oluşturalım
// var sepet = [];

// // Sepet içeriğini güncelleyen fonksiyon
// function sepetiGuncelle() {
//     // Sepet tablosunu temizle
//     var sepetTablo = document.getElementById("sepet-tablo");
//     sepetTablo.innerHTML = "";

//     // Toplam fiyatı hesaplamak için bir değişken oluştur
//     var toplamFiyat = 0;

//     // Sepet içindeki her ürün için dön
//     sepet.forEach(function (urun) {
//         // Sepet tablosuna yeni bir satır ekle
//         var row = sepetTablo.insertRow();
//         var cellUrunAdi = row.insertCell(0);
//         var cellFiyat = row.insertCell(1);

//         // Hücrelere ürün adını ve fiyatını ekle
//         cellUrunAdi.innerText = urun.ad;
//         cellFiyat.innerText = urun.fiyat.toFixed(2); // Fiyatı 2 basamak olarak göster

//         // Toplam fiyata ekle
//         toplamFiyat += urun.fiyat;
//     });

//     // Toplam fiyatı göster
//     var toplamFiyatElement = document.getElementById("toplam-fiyat");
//     toplamFiyatElement.innerText = "Toplam Fiyat: $" + toplamFiyat.toFixed(2);
// }

// // Ürün eklemek için bir fonksiyon
// function sepeteEkle(urunAdi, urunFiyati) {
//     // Yeni bir ürün nesnesi oluştur
//     var yeniUrun = {
//         ad: urunAdi,
//         fiyat: urunFiyati
//     };

//     // Ürünü sepet dizisine ekle
//     sepet.push(yeniUrun);

//     // Sepeti güncelle
//     sepetiGuncelle();
// }

