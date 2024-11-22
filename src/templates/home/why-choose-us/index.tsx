import * as S from "./styles";
import C from "@/constants";

export default () => {
  return (
    <S.WhyChooseUs>
      <S.Wrapper>
        <S.Title>{C.whyChooseUs.title}</S.Title>
        <S.Subtitle>{C.whyChooseUs.description}</S.Subtitle>
        <S.List>
          {C.whyChooseUs.list.map(({ title, text, bg }, index) => (
            <S.Item key={index} $bg={bg}>
              <S.WrapperItem>
                <S.Icon />
                <S.TitleItem>{title}</S.TitleItem>
                <S.TextItem>{text}</S.TextItem>
              </S.WrapperItem>
            </S.Item>
          ))}
        </S.List>

        <S.CallToAction $bg={C.whyChooseUs.callAction.img.src}>
          <S.Text>{C.whyChooseUs.callAction.text}</S.Text>
          <S.Button {...C.whyChooseUs.callAction.button}>
            {C.whyChooseUs.callAction.button.title}
          </S.Button>
        </S.CallToAction>
      </S.Wrapper>
    </S.WhyChooseUs>
  );
};
