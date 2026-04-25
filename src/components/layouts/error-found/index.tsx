import * as React from "react";
import { ReactNode } from "react";
import { t } from "../../../locales";
import { Link } from "../../ui/link";

export interface ErrorFoundProps {
  code: number;
  message: string;
  children?: ReactNode;
}

export const ErrorFound: React.FC<ErrorFoundProps> = (props) => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-4 overflow-hidden">
      <section className="flex text-[1.2rem]">
        <div className="px-4 first:border-r first:border-solid first:border-[var(--theme-text-description)]">{props.code}</div>
        <div className="px-4 first:border-r first:border-solid first:border-[var(--theme-text-description)]">{props.message}</div>
      </section>
      {props.children && <section className="text-[0.9rem]">{props.children}</section>}
      <section>
        <Link href="/" aria-label={t("error.back")}>
          {t("error.back")}
        </Link>
      </section>
    </main>
  );
};
