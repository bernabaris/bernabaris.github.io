var fruits = ["images/apple.jpg", "images/banana.jpg", "images/strawberry.jpg", "images/peach.png", "images/pineapple.jpeg"]; // Meyve resimlerinin dosya adlarını burada tanımlayın
var score = 0; // Skor

// Rasgele bir meyve resmi seçen ve ekrana ekleyen fonksiyon
function addFruit() {
    var fruitsContainer = document.getElementById("fruits-container");
    var fruitIndex = Math.floor(Math.random() * fruits.length);
    var fruitImage = document.createElement("img");
    fruitImage.src = fruits[fruitIndex];
    fruitImage.className = "fruit";
    fruitImage.addEventListener("click", function() {
        this.remove(); // Tıklanan meyveyi ekrandan kaldır
        score++; // Skoru artır
        document.getElementById("score").innerHTML = "Meyve Sayısı: " + score; // Skoru ekranda güncelle
        if (score >= 20) {
            alert("Kazandınız!"); // Skor 20'ye ulaşırsa oyunu kazandı mesajı ver
        }
    });
    fruitsContainer.appendChild(fruitImage); // Meyveyi ekrana ekle
}

// Her saniyede bir meyve ekleyen fonksiyonu çağır
setInterval(addFruit, 1000);
