import { PortableText } from "@portabletext/react";

export default function PortableTextBlock({ value }) {
  return (
    <div className="prose prose-p:m-0">
      <PortableText value={value} />
    </div>
  );
}
