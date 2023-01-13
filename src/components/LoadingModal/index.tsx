import { ClipLoader } from "react-spinners";
import { Content, Overlay } from "./styles";

interface LoadingModalProps {
  hidden: boolean;
}

export function LoadingModal({ hidden }: LoadingModalProps) {
  return (
    <Overlay hidden={!hidden}>
      <Content>
        <ClipLoader size={100} color="#fff" />
      </Content>
    </Overlay>
  );
}
