function go(url) {
    if (url.startsWith("go:playtv01")) {
        // 'go:' ile baÃ…Å¸layan URL'leri iÃ…Å¸le
        var target = url.slice(3); // 'go:' ÃƒÂ¶nekini kaldÃ„Â±r

        // Yeni sayfaya gitmek iÃƒÂ§in kullanÃ„Â±lacak kodu ekleyin
        // Ãƒâ€“rneÃ„Å¸in, yeni sayfaya yÃƒÂ¶nlendirme yapmak iÃƒÂ§in:
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
            go(link); // TÃ„Â±klanan kanalÃ„Â±n baÃ„Å¸lantÃ„Â±sÃ„Â±nÃ„Â± 'go' fonksiyonuna ileterek iÃ…Å¸le
        });
    }

    // Ã„Â°zin verilen User-Agent'i belirtin
    var allowedUserAgent = "play01";

    // KullanÃ„Â±cÃ„Â± ajanÃ„Â±nÃ„Â± al
    var userAgent = navigator.userAgent.toLowerCase();

    // KullanÃ„Â±cÃ„Â± ajanÃ„Â±nÃ„Â± kontrol edin ve izin verilen User-Agent'e sahip olup olmadÃ„Â±Ã„Å¸Ã„Â±nÃ„Â±zÃ„Â± kontrol edin
    if (!userAgent.includes(allowedUserAgent)) {
        // Ã„Â°zin verilen User-Agent'e sahip olmayan kullanÃ„Â±cÃ„Â±lar iÃƒÂ§in sayfa iÃƒÂ§eriÃ„Å¸ini gizle
        var containers = document.querySelectorAll(".kanal-kutusu");
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.display = "none";
        }

        // Ã„Â°zin verilen User-Agent'e sahip olmayan kullanÃ„Â±cÃ„Â±lar iÃƒÂ§in bir hata mesajÃ„Â± gÃƒÂ¶ster
        var errorMessage = document.createElement("div");
        errorMessage.textContent = "ÃœzgÃ¼nÃ¼z, internet baÄŸlantÄ±nzÄ± kontrol edin. Sayfa yÃ¼klenemiyor.";
        errorMessage.style.fontSize = "24px";
        errorMessage.style.color = "red";
        errorMessage.style.textAlign = "center";
        document.querySelector(".container").appendChild(errorMessage);
    }
});
