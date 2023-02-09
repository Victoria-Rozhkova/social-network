import { StatusesEnum } from "@/redux/chat.reducer";

const subscribers = {
  "messages-reseived": [] as MessagesReseivedSubscriberType[],
  "status-changed": [] as StatusChangedSubscriberType[],
};

let ws: WebSocket | null = null;

// Обработчики событий
const openHandler = () => {
  notifySubscribersAboutStarus(StatusesEnum.Ready);
};

const closeHandler = () => {
  notifySubscribersAboutStarus(StatusesEnum.Pending);
  console.log("close ws");
  setTimeout(createWsChanel, 3000);
};

const messageHandler = (e: MessageEvent) => {
  const newMessages: ChatMessageAPIType[] = JSON.parse(e.data);
  subscribers["messages-reseived"].forEach((s) => s(newMessages));
};

const errorHandler = () => {
  notifySubscribersAboutStarus(StatusesEnum.Error);
  console.error("Some error. Refresh page");
};
//

const cleanUp = () => {
  ws?.removeEventListener("open", openHandler);
  ws?.removeEventListener("close", closeHandler);
  ws?.removeEventListener("message", messageHandler);
  ws?.removeEventListener("error", errorHandler);
  ws?.close();
};

const notifySubscribersAboutStarus = (status: StatusType) => {
  subscribers["status-changed"].forEach((s) => s(status));
};

function createWsChanel() {
  cleanUp();
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  notifySubscribersAboutStarus(StatusesEnum.Pending);
  ws.addEventListener("open", openHandler);
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", messageHandler);
  ws.addEventListener("error", errorHandler);
}

export const chatAPI = {
  start() {
    createWsChanel();
  },
  subscribe(
    eventName: EventsNames,
    callback: MessagesReseivedSubscriberType | StatusChangedSubscriberType
  ) {
    //@ts-ignore
    subscribers[eventName].push(callback);
    // unsubscribe
    return () => {
      //@ts-ignore
      subscribers[eventName] = subscribers[eventName].filter(
        (s: any) => s !== callback
      );
    };
  },
  // второй вариант
  unsubscribe(
    eventName: EventsNames,
    callback: MessagesReseivedSubscriberType | StatusChangedSubscriberType
  ) {
    //@ts-ignore
    subscribers[eventName] = subscribers[eventName].filter(
      (s: any) => s !== callback
    );
  },
  send(message: string) {
    ws?.send(message);
  },
  stop() {
    subscribers["messages-reseived"] = [];
    subscribers["status-changed"] = [];
    cleanUp();
  },
};

export type ChatMessageAPIType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

type MessagesReseivedSubscriberType = (messages: ChatMessageAPIType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;
type EventsNames = "messages-reseived" | "status-changed";
export type StatusType =
  | StatusesEnum.Pending
  | StatusesEnum.Ready
  | StatusesEnum.Error;
