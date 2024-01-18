function go(url) {
    if (url.startsWith("go:playm")) {
        // 'go:' ile baÅŸlayan URL'leri iÅŸle
        var target = url.slice(3); // 'go:' Ã¶nekini kaldÄ±r

        // Yeni sayfaya gitmek iÃ§in kullanÄ±lacak kodu ekleyin
        // Ã–rneÄŸin, yeni sayfaya yÃ¶nlendirme yapmak iÃ§in:
        // window.location.href = target;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    const kanalKutulari = document.querySelectorAll(".kanal-kutusu");

    for (let i = 0; i < kanalKutulari.length; i++) {
        kanalKutulari[i].addEventListener("click", function () {
            const link = this.getAttribute("href");
            go(link); // TÄ±klanan kanalÄ±n baÄŸlantÄ±sÄ±nÄ± 'go' fonksiyonuna ileterek iÅŸle
        });
    }

    // Ä°zin verilen User-Agent'i belirtin
    var allowedUserAgent = "playm";

    // KullanÄ±cÄ± ajanÄ±nÄ± al
    var userAgent = navigator.userAgent.toLowerCase();

    // KullanÄ±cÄ± ajanÄ±nÄ± kontrol edin ve izin verilen User-Agent'e sahip olup olmadÄ±ÄŸÄ±nÄ±zÄ± kontrol edin
    if (!userAgent.includes(allowedUserAgent)) {
        // Ä°zin verilen User-Agent'e sahip olmayan kullanÄ±cÄ±lar iÃ§in sayfa iÃ§eriÄŸini gizle
        var containers = document.querySelectorAll(".kanal-kutusu");
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.display = "none";
        }

        // Ä°zin verilen User-Agent'e sahip olmayan kullanÄ±cÄ±lar iÃ§in bir hata mesajÄ± gÃ¶ster
        var errorMessage = document.createElement("div");
        errorMessage.textContent = "Üzgünüz, internet bağlantınzı kontrol edin. Sayfa yüklenemiyor.";
        errorMessage.style.fontSize = "24px";
        errorMessage.style.color = "red";
        errorMessage.style.textAlign = "center";
        document.querySelector(".container").appendChild(errorMessage);
    }
});