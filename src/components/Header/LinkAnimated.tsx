import Link from "next/link";
import React from "react";

type Props = {
  route: string;
  content: string;
};

const LinkAnimated = ({ route, content }: Props) => {
  return (
    <Link
      href={route}
      className="hover:border-b-2 hover:border-border-btn transition-colors"
    >
      {content}
    </Link>
  );
};

export default LinkAnimated;
