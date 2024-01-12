import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export default function EmailTemplate(props: EmailTemplateProps) {
  return (
    <div>
      <p>Hi {props.firstName},</p>
      <p>
        Thanks for signing up for the newsletter. We will send you updates once
        a week.
      </p>
    </div>
  );
}
