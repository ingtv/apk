

<?php


// Çekmesini istediğiniz m3u8 linkini buraya yazınız..
$url = "http://avarel.kingtv.pw:80/play/live.php?mac=00:1A:79:01:6A:73&stream=193975&extension=m3u8";

$domain_url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";


// php sayfasını direk kanaladi.php/ingsport.m3u8 yönlendirir ve oynatıcıda açmasını sağla.
if (substr($domain_url, -10) !== 'index.m3u8') { // 13 sayısını harflere göre ayarla değişirse birden fazla oluşur..
    header('Location: ' . $domain_url . '/index.m3u8');
    exit;
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3');
$ekranayazdirveriyi = curl_exec($ch);
$final_url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
curl_close($ch);


$final_url_parts = parse_url($final_url);
$ingtvplus_next_url = "https://cors.kit22.com/" . $final_url_parts['scheme'] . '://' . $final_url_parts['host'];
if (isset($final_url_parts['port'])) {
    $ingtvplus_next_url .= ":" . $final_url_parts['port'];
}

$ekranayazdirveriyi = str_replace('/hls/', $ingtvplus_next_url . '/hls/', $ekranayazdirveriyi);
$ekranayazdirveriyi = str_replace('.ts', '.ts?ingsports.tv', $ekranayazdirveriyi);

echo $ekranayazdirveriyi;
?>