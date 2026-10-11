const API_URL = (import.meta.env.VITE_API_URL || "/api").replace(/\/+$/, "");

export async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  let response: Response;
  try {
    response = await fetch(`${API_URL}/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error("Could not connect to the contact service. Please try again or email me directly.");
  }

  if (!response.ok) {
    throw new Error(`The message could not be sent (server error ${response.status}). Please try again or email me directly.`);
  }

  return response.json();
}