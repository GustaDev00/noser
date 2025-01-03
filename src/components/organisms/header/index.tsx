import * as S from "./styles";
import { HeaderProps } from "./props";
import useAnimation from "./animations";

export const Header = ({ title, description, modal, background, tags, position, ...props }: HeaderProps) => {
  const { headerRef } = useAnimation();

  return (
    <S.Header $modal={!!modal} $tags={!!tags} ref={headerRef} {...props}>
      <S.Background $position={position} {...background} />
      <S.Wrapper>
        <S.Content>
          <S.Title>{title}</S.Title>
          {description && <S.Description id="descriptionHeader">{description}</S.Description>}
          <S.ArrowDown />
        </S.Content>
      </S.Wrapper>
    </S.Header>
  );
};