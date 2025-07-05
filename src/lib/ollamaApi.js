/**
 * Send chat messages to the Flollama API and stream the AI response.
 * @param {Array} messages - Chat history (user + assistant messages)
 * @param {Function} onToken - Callback to handle streamed chunks (optional)
 * @returns {Promise<string>} - The full response text from the assistant
 */
export async function chatWithFlollama(messages, onToken) {
  // Step 1: Make POST request to /api/chat route
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });
  console.log(response);
  

  // Step 2: Handle error if request failed
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || 'Failed to fetch from Flollama API');
  }

  // Step 3: If there's no streamable body, throw
  if (!response.body) {
    throw new Error('No response body');
  }

  // Step 4: Read and decode the response stream
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let fullResponse = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    fullResponse += chunk;

    if (onToken) {
      onToken(chunk); // Send each chunk live to the client
    }
  }
  
  return fullResponse;
}
