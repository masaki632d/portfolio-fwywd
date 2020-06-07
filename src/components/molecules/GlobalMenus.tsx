/* @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";
import Link from "next/Link";
import { useRouter } from "next/router";

const styles = {
  box: css`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  `,
};

const GlobalMenus: FC = () => {
  const linkList = [
    { title: "About", href: "/about" },
    // { title: "Study", href: "/study" },

    { title: "useState", href: "/useState" },
    { title: "useEffect", href: "/useEffect" },
    { title: "useContext", href: "/useContext" },
    { title: "useReducer", href: "/useReducer" },
    { title: "useMemo", href: "/useMemo" },
    { title: "useCallback", href: "/useCallback" },
    { title: "useRef", href: "/useRef" },
    // { title: "Skill", href: "/" },
    // { title: "Work", href: "/" },
  ];
  const router = useRouter();

  return (
    <nav css={styles.box}>
      {linkList.map((linkItem) => (
        <Link key={linkItem.title} href={linkItem.href}>
          <a>{linkItem.title}</a>
        </Link>
      ))}
    </nav>
  );
};

export default GlobalMenus;
