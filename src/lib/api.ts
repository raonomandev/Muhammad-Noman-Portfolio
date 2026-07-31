const API_URL = "http://127.0.0.1:8000/api";

export async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(`${API_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
}