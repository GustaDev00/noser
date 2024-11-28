import * as S from "./styles";
import BenefitsDesktop from "./desktop";
import BenefitsMobile from "./mobile";

export default () => {
  return (
    <S.Benefits>
      <BenefitsDesktop />
      <BenefitsMobile />
    </S.Benefits>
  );
};
