// HeadlineGenerator.jsx
import { useEffect, useState } from 'react';

const HeadlineGenerator = () => {
  const [headline, setHeadline] = useState("Yükleniyor...");

  useEffect(() => {
    const initLLM = async () => {
      try {
        const webllm = await import("@mlc-ai/web-llm");

        // Mevcut modülün içinde createChatModule varsa burada olur
        const chat = await webllm.ChatModule.create();

        const prompt = "Veri analizi aracı için dijital pazarlama başlıkları üret";
        const response = await chat.generate(prompt);

        setHeadline(response);
      } catch (err) {
        console.error("WebLLM yüklenirken hata:", err);
        setHeadline("Bir hata oluştu.");
      }
    };

    initLLM();
  }, []);

  return (
    <div>
      <h1>Oluşturulan Başlık:</h1>
      <p>{headline}</p>
    </div>
  );
};

export default HeadlineGenerator;
