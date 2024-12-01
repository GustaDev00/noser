import * as S from "./styles";
import { FC, useMemo } from "react";
import { CardProps } from "./props";
import Peoples from "./common/peoples";
import Clients from "./common/clients";
import Quality from "./common/quality";
import useAnimation from "./animation";

export const Card: FC<CardProps> = ({ type, ...props }) => {
  useAnimation();

  const useRender = useMemo(() => {
    switch (type) {
      case "peoples":
        return <Peoples {...props} />;

      case "clients":
        return <Clients {...props} />;

      case "quality":
        return <Quality {...props} />;

      default:
        return <Peoples {...props} />;
    }
  }, [type]);

  return <S.Card {...props}>{useRender}</S.Card>;
};
