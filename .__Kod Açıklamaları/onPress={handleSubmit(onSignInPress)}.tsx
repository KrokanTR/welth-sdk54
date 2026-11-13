// ═══════════════════════════════════════════════════════════════════════
// DOSYA TÜRÜ : React Native (JSX) bileşen parçası
// AMAÇ       : "Sign Up" butonu — yüklenme durumuna göre spinner veya metin
//               gösterir; basıldığında form submit akışını tetikler.
// NOT        : Import satırları verilmediği için kütüphane kökenleri
//               isimlerden çıkarılmıştır; emin olunamayanlar BELİRSİZ.
// ═══════════════════════════════════════════════════════════════════════

<TouchableOpacity
  // KÜTÜPHANE → react-native
  // Dokunmaya opaklık geri bildirimi veren sarmalayıcı buton bileşeni.

  onPress={handleSubmit(onSignInPress)}
  // onPress            : KÜTÜPHANE → react-native (TouchableOpacity prop'u)
  //                      Basılma olay handler'ı.
  // handleSubmit       : BELİRSİZ → isim react-hook-form API'siyle birebir
  //                      örtüşüyor; ancak blokta import/tanım yok. Büyük
  //                      olasılıkla react-hook-form'dan geliyor.
  //                      Görevi: form doğrulamasını çalıştırıp geçerliyse
  //                      içine verilen fonksiyonu çağırmak.
  // onSignInPress      : BİREYSEL (blok dışı) → üst bileşen/hook içinde
  //                      tanımlı submit handler'ı. İsmi "SignIn" olsa da
  //                      buton "Sign Up" → isimlendirme tutarsızlığı.

  disabled={isLoading}
  // disabled           : KÜTÜPHANE → react-native (TouchableOpacity prop'u)
  //                      true iken bileşen etkileşimi kapatır.
  // isLoading          : BİREYSEL (blok dışı) → muhtemelen useState ile
  //                      tutulan boolean. İstek sürerken true olur;
  //                      çift gönderimi engeller.

  className="w-full bg-brand-blue py-4 rounded-xl items-center mb-4"
  // className          : KÜTÜPHANE → nativewind (veya benzeri Tailwind-for-RN
  //                      köprüsü). Standart React Native'de YOKTUR; RN'de
  //                      stil `style` prop'uyla verilir.
  // w-full             : KÜTÜPHANE → Tailwind utility (genişlik %100)
  // bg-brand-blue      : KÜTÜPHANE → Tailwind utility + ÖZEL TEMA RENGİ
  //                      ("brand-blue" Tailwind config'de tanımlı olmalı;
  //                      yoksa sınıf sessizce yok sayılır → buton renksiz
  //                      görünebilir.)
  // py-4               : KÜTÜPHANE → Tailwind utility (dikey iç boşluk)
  // rounded-xl         : KÜTÜPHANE → Tailwind utility (köşe yuvarlama)
  // items-center       : KÜTÜPHANE → Tailwind utility (içeriği yatay ortalama)
  // mb-4               : KÜTÜPHANE → Tailwind utility (alt dış boşluk)
>
  {isLoading ? (
    // isloading        : BİREYSEL (yukarıda tanımlı) → koşullu render.
    //                    Yüklenme sırasında spinner gösterilir.

    <ActivityIndicator color="white" />
    // ActivityIndicator: KÜTÜPHANE → react-native
    //                    Yükleme spinner'ı.
    // color            : KÜTÜPHANE → react-native (ActivityIndicator prop'u)
    //                    Spinner rengi = beyaz.
    // NOT              : Spinner ve Text farklı yüksekliklere sahip olabilir;
    //                    buton yüksekliği sabitlenmezse layout kayması olur.

  ) : (
    <Text className="text-white font-semibold text-base">Sign Up</Text>
    // Text             : KÜTÜPHANE → react-native (metin bileşeni)
    // className        : KÜTÜPHANE → nativewind (yukarıdaki gibi)
    // text-white       : KÜTÜPHANE → Tailwind utility (yazı rengi beyaz)
    // font-semibold    : KÜTÜPHANE → Tailwind utility (yarı kalın)
    // text-base        : KÜTÜPHANE → Tailwind utility (taban yazı boyutu)
    // "Sign Up"        : Sabit metin — butonun görünen etiketi.
  )}
</TouchableOpacity>

// ───────────────────────────────────────────────────────────────────────
// EK NOTLAR (riskler / öneriler)
// ───────────────────────────────────────────────────────────────────────
// • İsimlendirme       : onSignInPress → onSignUpPress olarak düzeltilmeli;
//                        aksi halde login/register akışları karışabilir.
// • Erişilebilirlik    : accessibilityRole="button", accessibilityLabel,
//                        accessibilityState={{ disabled: isLoading, busy: isLoading }}
//                        eklenmeli.
// • Görsel geri bildirim: disabled durumda opacity değişmiyor; kullanıcı
//                        neden basamadığını anlamayabilir (örn. "opacity-50").
// • Savunma katmanı    : handleSubmit içinde ek `if (isLoading) return;`
//                        koruması çift gönderime karşı ek güvence sağlar.
// • Test edilebilirlik : testID="signup-button" eklenmesi önerilir.
// • Bağımlılık riski   : className kullanımı nativewind'e bağımlılık yaratır;
//                        kütüphane kaldırılırsa tüm sınıflar `style` prop'una
//                        dönüştürülmeli.
// ───────────────────────────────────────────────────────────────────────