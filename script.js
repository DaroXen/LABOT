import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://emeem.app.n8n.cloud/webhook/716458ef-494e-4c03-b04a-93b0868a63ae/chat',
  initialMessages: ['¡Hola! ¿En qué puedo ayudarte?'],
  defaultLanguage: 'es',
  i18n: {
    es: {
      title: '¡Hola!',
      subtitle: 'Estamos aquí para ayudarte.',
      inputPlaceholder: 'Escribe tu mensaje...',
      getStarted: 'Iniciar conversación'
    }
  }
});

