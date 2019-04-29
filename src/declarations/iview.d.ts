import { Notice, Message, LoadingBar } from 'iview';
declare module 'iview/dist/types/notice' {
  export const Notice: Notice;
}
declare module 'iview/dist/types/message' {
  export const Message: Message;
}
declare module 'iview/dist/types/LoadingBar' {
  // FIXME: should be type LoadingBar
  export const LoadingBar: any;
}
