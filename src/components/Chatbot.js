import { useEffect } from 'react';
import { agentId } from './../config/df';

function Chatbot({ version }) {
  //version 다르게 가능
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <df-messenger
      intent="question"
      chat-title={`챗봇` + version}
      agent-id={agentId[version - 1]}
      language-code="ko"
    ></df-messenger>
  );
}

export default Chatbot;
