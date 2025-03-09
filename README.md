<h1>🎥 YOUTUBE CLONE</h1>

Bu proje, **React.js** ile geliştirilmiş bir YouTube benzeri video izleme platformudur. Kullanıcılar, video içeriklerini görüntüleyebilir, kanalları keşfedebilir, açıklamaları ve yorumları okuyabilir, farklı kategorilerde içerikler arasında gezinebilir ve arama yapabilirler. Proje içerisinde video kartları, kanal bilgisi, yorum bileşeni, açıklama, önerilen videolar, arama sonuçları, yüklenme ve hata durumları gibi birçok özel bileşen yer almaktadır.

<h1>📌 Proje Hakkında</h1>

- Kategori tabanlı video listesi (Ana Sayfa)
- Video detay sayfası (video player + açıklama + yorumlar + kanal bilgisi)
- Arama sonuçları sayfası (pagination destekli)
- Önerilen videolar paneli
- Yükleniyor (Loader) ve hata durumları için özel bileşenler
- YouTube API (RapidAPI) üzerinden veri çekme
- Modern UI: Tailwind CSS ile responsive tasarım

<h1>💡 Özellikler / Detaylı Açıklama</h1>

* Video Kartları: Thumbnail, başlık, kanal adı, izlenme sayısı, süre.

* Kategori Filtreleme: Sidebar menüsü ile kategoriye göre filtreleme.

* Video Detay: Video oynatıcı + açıklama + kanal + yorumlar + önerilen videolar.
Yorumlar: Video ile ilgili yorum listesi (API destekliyse).

* Search: Anahtar kelimeye göre arama yapma ve sonuçları listeleme.

* Hata Yönetimi: API kaynaklı hatalarda özel ErrorComponent.

* Yüklenme Durumu: API çağrıları sırasında LoaderComponent.

<h1>🧭 Uygulama Rotaları</h1>

/	      => Ana Sayfa - Kategori bazlı video listesi
/watch?v=videoId => Video Detay Sayfası
/results?search_query=abc =>	Arama Sonuçları