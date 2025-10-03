function showMessage() {
  const messages = [
    "Hari ini kamu resmi tua! Tapi makin lucu sih 😜",
    "Semoga umurmu panjang... kayak drama Korea favorit kamu!",
    "Ulang tahun? Alasan bagus buat makan kue lebih banyak 🍰",
    "Kamu boleh tua, tapi jangan lupa jiwanya tetep bocah ya!"
  ];

  const index = Math.floor(Math.random() * messages.length);
  const funnyMessage = document.getElementById("funnyMessage");
  funnyMessage.textContent = messages[index];

  // Efek lucu
  funnyMessage.style.color = "#ff4d6d";
  funnyMessage.style.fontSize = "1.5em";
  funnyMessage.style.transition = "all 0.3s ease";
}