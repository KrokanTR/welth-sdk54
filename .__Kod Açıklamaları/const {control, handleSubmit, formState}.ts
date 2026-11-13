// "const {control, handleSubmit, formState: { errors: formErrors }} = useForm<SignUpFormValues>();" 
// Kodunun Anlamlı Parçalara Ayrılmış Açıklaması:

// 1. const
// - Kütüphane mi?: Hayır (JavaScript/TypeScript anahtar kelimesi)
// - Ne İşe Yarar?: Değeri sonradan değiştirilemeyecek sabit bir değişken tanımlar.

// 2. { control, handleSubmit, formState: { errors: formErrors } }
// - Kütüphane mi?: Karışık (Yapılar kütüphaneye ait, seçim size ait)
// - Ne İşe Yarar?: Nesne parçalama (Object Destructuring) işlemidir. useForm'un döndürdüğü 
//   büyük nesneden sadece ihtiyacımız olan araçları çeker:
//   * control: Inputları forma bağlayan köprü (Kütüphane: `react-hook-form`)
//   * handleSubmit: Form gönderilmeden önce kuralları kontrol eden fonksiyon (Kütüphane: `react-hook-form`)
//   * formErrors: formState içindeki errors nesnesinin **bireysel (yerel) yeniden adlandırılmış halidir**. 
//     Clerk'teki diğer errors ile karışmaması için `:` ile bu isim verilmiştir.

// 3. =
// - Kütüphane mi?: Hayır (Atama operatörü)
// - Ne İşe Yarar?: Sağ taraftaki fonksiyonun çıktısını soldaki değişkenlere aktarır.

// 4. useForm
// - Kütüphane mi?: Evet (`react-hook-form`)
// - Ne İşe Yarar?: Formun verilerini ve durumunu yöneten temel kancadır (hook).

// 5. <SignUpFormValues>
// - Kütüphane mi?: Hayır (**Bireysel / Proje tabanlı tanım**)
// - Ne İşe Yarar?: Formun hangi alanları ve veri tiplerini (email, şifre vb.) barındıracağını 
//   TypeScript'e bildiren özel tip tanımıdır.

// 6. ();
// - Kütüphane mi?: Hayır (JavaScript sözdizimi)
// - Ne İşe Yarar?: useForm fonksiyonunu çalıştırır ve kod satırını sonlandırır.