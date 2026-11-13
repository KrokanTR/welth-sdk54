// =====================================================================
// BÖLÜM 1: KULLANICI KAYIT İŞLEMİ (onSignUpPress)
// =====================================================================

// Kullanıcı "Kayıt Ol" butonuna bastığında çalışan asenkron fonksiyondur.
// Parametre olarak formdan gelen verileri (email, şifre, ad, soyad vb.) alır.
const onSignUpPress = async (values: SignUpFormValues) => {
  
  // Bireysel tanımlama: Formdan gelen e-postayı bileşendeki yerel 'email' state'ine kaydeder.
  setEmail(values.email);

  // Kütüphaneye ait (Clerk): Girilen bilgilerle yeni bir kullanıcı hesabı oluşturmaya çalışır.
  // Başarılı olursa veya hata olursa sonucu 'error' değişkenine atar.
  const { error } = await signUp.password({
    emailAddress: values.email,
    password: values.password,
    firstName: values.firstName,
    lastName: values.lastName,
  });

  // Eğer kayıt sırasında bir hata oluştuysa (şifrenin zayıf olması vb.):
  // Kütüphaneye ait (console) ve JavaScript'e ait (JSON.stringify) ile hatayı konsola detaylı yazdırır.
  if (error) {
    console.error(JSON.stringify(error, null, 2));
  }

  // Eğer hata yoksa (kayıt ilk aşamada başarılı olduysa):
  // Kütüphaneye ait (Clerk - signUp.verifications): E-posta adresini doğrulamak için kullanıcının mailine bir doğrulama kodu gönderir.
  if (!error) await signUp.verifications.sendEmailCode();
};


// =====================================================================
// BÖLÜM 2: E-POSTA DOĞRULAMA FONKSİYONU (onVerifyPress)
// =====================================================================

// Kullanıcının mailine gelen doğrulama kodunu girip onayladığında çalışacak fonksiyondur.
// Şu an için içi boştur (gövdesi yazılmamıştır, sadece fonksiyon tanımıdır).
const onVerifyPress = async ({ code }: { code: string }) => {};


// =====================================================================
// BÖLÜM 3: KAYIT DURUMU KONTROLÜ (Koşullu Blok / If)
// =====================================================================

// Clerk kütüphanesinin o anki durumunu kontrol eden koşul bloğudur.
if (
  // Kütüphaneye ait (Clerk): Kayıt işleminin tamamlanması için daha fazla bilgiye/adoma ihtiyaç olduğunu belirtir.
  signUp.status === "missing_requirements" &&
  
  // Kütüphaneye ait (Clerk): Henüz doğrulanmamış alanlar listesinde "email_address"in olup olmadığını kontrol eder.
  signUp.unverifiedFields.includes("email_address") &&
  
  // Kütüphaneye ait (Clerk): Eksik başka bir zorunlu alan kalıp kalmadığını kontrol eder (0 ise başka eksik yoktur).
  signUp.missingFields.length === 0
) {
  // Şimdilik bu koşul sağlandığında çalışacak kod bloğu boştur. 
  // Genellikle kullanıcıyı e-posta kodunu girmesi gereken doğrulama ekranına yönlendirmek için kullanılır.
}