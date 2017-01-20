import { Server as MockServer } from 'mock-socket';
import textQuestion from './textQuestion';
import selectQuestion from './selectQuestion';
import results from './results';

export default function(address) {
  const mockServer = new MockServer(address);
  mockServer.on('connection', server => {
    mockServer.send(JSON.stringify({
      type: "text",
      label: "You can request 'text', 'select' or 'results' for message examples"
    }));
  });
  mockServer.on('message', msg => {
    setTimeout(() => {
      if (msg === 'text') {
        mockServer.send(JSON.stringify(textQuestion));
      }
      if (msg === 'select') {
        mockServer.send(JSON.stringify(selectQuestion));
      }
      if (msg === 'result') {
        mockServer.send(JSON.stringify(results));
      }
    }, 0);
  });
}
