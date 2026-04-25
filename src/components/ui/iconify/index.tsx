import * as React from "react";
import { iconify } from "./query";

function mergeClassName(...names: Array<string | false | null | undefined>) {
  return names.filter(Boolean).join(" ");
}

export interface IconifyProps {
  icon: string;
  className?: string;
}

export const Iconify: React.FC<IconifyProps> = async (props) => {
  if (props.icon.startsWith("svg:")) {
    return (
      <svg
        width="1.1rem"
        height="1.1rem"
        viewBox="0 0 24 24"
        dangerouslySetInnerHTML={{ __html: props.icon.substring(4) }}
        className={mergeClassName("iconify inline-flex items-center justify-center align-middle text-center", props.className)}
      />
    );
  }
  const { attributes, body } = iconify.svg(props.icon);
  return (
    <svg
      {...attributes}
      dangerouslySetInnerHTML={{ __html: body }}
      className={mergeClassName("iconify inline-flex items-center justify-center align-middle text-center", props.className)}
    />
  );
};
