export interface Props {
  url: string;
  onData: (data: { message: string }) => void;
  onError: (data: { message: string }) => void;
}
