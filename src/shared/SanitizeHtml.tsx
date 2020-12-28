import React from "react";
import { sanitizeHtml } from "..//src/utils/SanitizeHtml";

export const SanitizeHtml = ({ html }: { html?: string }) => {
  return (
    <>
      {html ? (
        <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}></p>
      ) : null}
    </>
  );
};
