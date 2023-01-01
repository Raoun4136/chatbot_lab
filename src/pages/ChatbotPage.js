import { useLocation } from 'react-router-dom';
import AiForOceans from '../components/AiForOceans';
import Chatbot from '../components/Chatbot';
import qs from 'qs';

function ChatbotPage() {
  const location = useLocation();
  const queryData = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return (
    <div className="ChatbotPage">
      <AiForOceans />
      <Chatbot version={queryData.version} />
    </div>
  );
}

export default ChatbotPage;
