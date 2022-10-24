let subscribers = [] as SubscriberType[];

let ws: WebSocket | null = null;

const closeHandler = () => {
  console.log("close ws");
  setTimeout(createWsChanel, 3000);
};
const messageHandler = (e: MessageEvent) => {
  const newMessages: ChatMessageType[] = JSON.parse(e.data);
  subscribers.forEach((s) => s(newMessages));
};

function createWsChanel() {
  if (ws !== null) {
    ws.removeEventListener("close", closeHandler);
    ws.close();
  }
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", messageHandler);
}

export const chatAPI = {
  start() {
    createWsChanel();
  },
  subscribe(callback: SubscriberType) {
    subscribers.push(callback);
    // unsubscribe
    return () => {
      subscribers = subscribers.filter((s) => s !== callback);
    };
  },
  // второй вариант
  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter((s) => s !== callback);
  },
  send(message: string) {
    ws?.send(message);
  },
  stop() {
    subscribers = [];
    ws?.close();
    ws?.removeEventListener("close", closeHandler);
    ws?.removeEventListener("message", messageHandler);
  },
};

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

type SubscriberType = (messages: ChatMessageType[]) => void;
