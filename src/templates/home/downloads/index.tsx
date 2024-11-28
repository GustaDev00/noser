import * as S from "./styles";
import C from "./constants";
import { useCallback, useRef } from "react";

export default () => {
  const itemRef = useRef<HTMLLIElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleClick = useCallback((down: boolean) => {
    if (!itemRef.current || !listRef.current) return;

    const itemHeight = itemRef.current.offsetHeight;
    const listHeight = listRef.current.scrollHeight;

    const containerHeight = listRef.current.parentElement?.offsetHeight || 0;
    const currentTop = parseFloat(getComputedStyle(listRef.current).top || "0");

    const newTop = down
      ? Math.max(currentTop - itemHeight, containerHeight - listHeight)
      : Math.min(currentTop + itemHeight, 0);

    listRef.current.style.top = `${newTop}px`;
  }, []);

  return (
    <S.Downloads>
      <S.Wrapper>
        <S.Content>
          <S.Bg {...C.img} />
          <S.Article>
            <S.Title>{C.title}</S.Title>
            <S.Description>{C.description}</S.Description>
            <S.Button {...C.link}>{C.link.title}</S.Button>
          </S.Article>
        </S.Content>
        <S.Container>
          <S.ButtonSlide onClick={() => handleClick(false)}>
            <S.ArrowUpIcon />
          </S.ButtonSlide>
          <S.Slide>
            <S.List ref={listRef}>
              {C.downloads.map(({ text, link }, index) => (
                <S.Item ref={index === 0 ? itemRef : null} key={index}>
                  <S.Link href={link} title={text} target="_blank">
                    <S.Text>{text}</S.Text>
                    <S.Icon>
                      <S.DownloadIcon />
                    </S.Icon>
                  </S.Link>
                </S.Item>
              ))}
            </S.List>
          </S.Slide>
          <S.ButtonSlide $down={true} onClick={() => handleClick(true)}>
            <S.ArrowUpIcon />
          </S.ButtonSlide>
        </S.Container>
      </S.Wrapper>
    </S.Downloads>
  );
};
