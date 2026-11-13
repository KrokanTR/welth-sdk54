// =====================================================================
// 1. KÜTÜPHANE VE MODÜL İÇE AKTARIMLARI (IMPORTS)
// =====================================================================

// @clerk/expo kütüphanesinden gelir. 
// Kullanıcının kimlik doğrulama (auth) durumunu yönetmek için kullanılan bir kancadır.
import { useAuth } from "@clerk/expo";

// expo-router kütüphanesinden gelir. 
// Sayfalar arası yönlendirme yapmayı (sayfa değiştirmeyi) sağlar.
import { useRouter } from "expo-router";

// Temel react kütüphanesinden gelir. 
// React bileşenleri yazabilmek ve state gibi özellikleri kullanabilmek için gereklidir.
import React from "react";

// react-hook-form kütüphanesinden gelir. 
// Form verilerini yönetmek ve validasyon yapmak için kullanılan kancadır.
import { useForm } from "react-hook-form";

// react-native kütüphanesinden gelir. 
// Mobil arayüz oluşturmak için kullanılan temel bileşenlerdir (View: kutu, Text: yazı).
import { Text, View } from "react-native";


// =====================================================================
// 2. BİLEŞEN TANIMI VE KANCALAR (COMPONENT & HOOKS)
// =====================================================================

// Bu dosyanın ana React bileşenidir (Bireysel tanımlama / Component definition).
export default function SignUpScreen() {
  
  // Clerk (@clerk/expo -> useAuth) kütüphanesinden gelir.
  // Bireysel tanımlamadır: signUp fonksiyonunu, hataları ve fetch durumunu tutan yerel sabitlerdir.
  const { signUp, errors, fetchStatus } = useAuth();

  // Clerk (@clerk/expo -> useAuth) kütüphanesinden gelir.
  // Bireysel tanımlamadır: Kullanıcının giriş yapıp yapmadığını (true/false) tutan yerel sabittir.
  const { isSignedIn } = useAuth();

  // Expo Router (expo-router -> useRouter) kütüphanesinden gelir.
  // Bireysel tanımlamadır: Sayfa geçişleri yapmak için kullanılan yerel yönlendirici değişkendir.
  const router = useRouter();

  // React'in yerleşik useState kancasından gelir (React kütüphanesi).
  // Bireysel tanımlamadır: E-posta girdisini tutmak için oluşturulmuş yerel state'dir.
  const [email, setEmail] = React.useState("");

  // react-hook-form kütüphanesinden gelir. 
  // Burada useForm çağrılmış ancak bir değişkene atanmamıştır (Gereksiz/tekrar eden kullanım).
  useForm<SignUpFormValues>();

  // react-hook-form kütüphanesinden gelir.
  // Bireysel tanımlamadır: Formu yönetmek için control, handleSubmit ve form hatalarını (formErrors) alan yerel sabittir.
  const {control, handleSubmit, formState: { errors: formErrors }} = useForm<SignUpFormValues>();


  // =====================================================================
  // 3. ARAYÜZ DÖNDÜRME (RENDER / JSX)
  // =====================================================================
  return (
    // react-native kütüphanesinden gelir.
    // Diğer bileşenleri sarmalayan temel bir kutu (konteyner) oluşturur.
    <View>
      
      {/* react-native kütüphanesinden gelir. Ekrana düz metin yazdırmak için kullanılır. */}
      <Text>SignUpScreen</Text>
      
    </View>
  );
}