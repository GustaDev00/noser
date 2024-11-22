import * as S from "../styles";
import C from "@/constants";
import { usePathname } from "next/navigation";

export default () => {
  const pathname = usePathname();

  return (
    <>
      <S.Header>
        <S.Logo />

        <S.Nav>
          <S.List>
            {C.categories.map((category) => (
              <S.Item key={category.title} $active={pathname === category.href}>
                <S.Link href={category.href}>{category.title}</S.Link>
              </S.Item>
            ))}
          </S.List>
        </S.Nav>

        <S.Chat>Gespräch starten</S.Chat>
      </S.Header>
    </>
  );
};
