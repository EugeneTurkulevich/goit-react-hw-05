export default async function handler(req, res) {
  // Отримання URL запиту від клієнта
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "Не вказано URL" });
  }
  const apiKey = process.env.API_KEY; // або використовували JWT token, як вам потрібно

  try {
    // Ви можете використовувати fetch або бібліотеку axios на сервері
    const response = await fetch(url, {
      headers: {
        // приклад використання токена; тут можливо потрібно змінити заголовки залежно від API
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Внутрішня помилка сервера" });
  }
}
