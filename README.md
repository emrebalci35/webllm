# 🤖 WebLLM React AI Başlık Üreticisi

Tarayıcınızda çalışan yapay zeka ile dijital pazarlama başlıkları üretin! İnternet bağlantısı kesilse bile çalışır.

## ✨ Ne Yapar?

- 🧠 **Browser'da AI**: Tamamen tarayıcıda çalışan Llama 3.2 modeli
- ⚡ **Offline Çalışır**: Model bir kez yüklendikten sonra internet gerektirmez
- 🎯 **Pazarlama Başlıkları**: Dijital pazarlama için optimize edilmiş içerik
- 📱 **Her Cihazda**: Desktop, tablet, mobil uyumlu


## 🚀 Hızlı Başlangıç

```bash
# Projeyi klonlayın
git clone https://github.com/emrebalci35/webllm.git
cd webllm

# Bağımlılıkları yükleyin  
npm install

# Çalıştırın
npm run dev
```

**İlk açılış**: Model indirilir (~2GB), 5-15 dakika sürebilir. Sonrası instant! 🚀

## 🎯 Kullanım

1. Uygulamayı açın
2. "Yeni Başlık Üret" butonuna tıklayın
3. AI'nın ürettiği pazarlama başlığını alın
4. İstediğiniz kadar tekrarlayın!

## 🛠️ Teknik Detaylar

- **Frontend**: React 18 + Vite
- **AI Model**: Llama-3.2-3B-Instruct  
- **Engine**: WebLLM (@mlc-ai/web-llm)
- **Browser**: Chrome 109+, Firefox 115+, Safari 16.4+

<details>
<summary>📋 Sistem Gereksinimleri</summary>

- **Node.js**: 18.0.0+
- **RAM**: 4GB+ (model için)
- **Disk**: 2GB+ (model cache)
- **İnternet**: İlk indirme için

</details>

<details>
<summary>🔧 Detaylı Kurulum</summary>

### Manuel Kurulum

```bash
# Proje klasörü oluşturun
mkdir webllm-project && cd webllm-project

# Package.json oluşturun
npm init -y

# Bağımlılıkları ekleyin
npm install react react-dom @mlc-ai/web-llm
npm install -D vite @vitejs/plugin-react

# Geliştirme sunucusu
npm run dev
```

### Build ve Deploy

```bash
# Production build
npm run build

# Build'i test edin
npm run preview
```

</details>

<details>
<summary>⚙️ Konfigürasyon</summary>

### Model Değiştirme

`src/App.jsx` dosyasında:

```javascript
const MODEL_ID = "Llama-3.1-8B-Instruct-q4f32_1-MLC"; // Daha güçlü model
```

### Prompt Özelleştirme

`generateTitle` fonksiyonunu düzenleyerek farklı içerik türleri üretebilirsiniz.

</details>

## ⚠️ Önemli Notlar

- **İlk çalıştırma**: Model indirmesi zaman alır
- **RAM kullanımı**: 2-4GB model yüklendiğinde  
- **Mobile**: Performans sınırlamaları olabilir
- **HTTPS**: Production'da gerekli

## 🐛 Sorun Giderme

**Model yüklenmiyor?**
- Browser console'u kontrol edin
- Adblocker'ı kapatın
- Cache'i temizleyin

**Yavaş çalışıyor?**
- RAM'inizi kontrol edin
- Diğer sekmeler/uygulamaları kapatın

**Build hatası?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 Lisans

MIT License - Özgürce kullanabilirsiniz!

## 🙏 Katkıda Bulunanlar

- [WebLLM](https://webllm.mlc.ai/) ekibine teşekkürler
- [Llama](https://llama.meta.com/) modeli için Meta'ya teşekkürler

---

**⭐ Beğendiyseniz yıldız atmayı unutmayın!**

*Bu proje eğitim amaçlıdır. Production kullanımı öncesi ek optimizasyonlar önerilir.*
