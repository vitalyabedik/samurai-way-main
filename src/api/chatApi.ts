import {ChatStatusType} from '../redux/reducers/chatReducer';

const subscribers = {
    'messages-received': [] as  MessagesReceviedSubscriberType[],
    'status-changed': [] as  StatusChangedSubscriberType[],
}

let ws: WebSocket | null = null

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers['messages-received'].forEach(subscriber => subscriber(newMessages))
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error')
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: ChatStatusType) => {
    subscribers['status-changed'].forEach(subscriber => subscriber(status))
}

const createChannel = () => {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
    ws?.addEventListener('open', openHandler)
    ws?.addEventListener('error', errorHandler)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe: (eventName: EventsNamesType, callback: CallbackType) => {
        // @ts-ignore
        subscribers[eventName].push(callback)
    },
    unSubscribe: (eventName: EventsNamesType, callback: CallbackType) => {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(subscriber => subscriber !== callback)
    },
    sendMessage (message: string)  {
        ws?.send(message)
    },
}

// types
type MessagesReceviedSubscriberType = (messages: ChatMessageType[]) => void
type StatusChangedSubscriberType = (status: ChatStatusType) => void

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export type ChatMessageDomainType = ChatMessageType & {
    id: string
}

type CallbackType = MessagesReceviedSubscriberType | StatusChangedSubscriberType

type EventsNamesType = 'messages-received' | 'status-changed'