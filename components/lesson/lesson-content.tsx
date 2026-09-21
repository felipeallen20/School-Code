import type { ContentBlock } from "@/types/course";
import CodeBlock from "./code-block";
import InfoBlock from "./info-block";
import OutputBlock from "./output-block";

export default function LessonContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="my-4 text-base leading-relaxed text-text">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-text">
                {block.text}
              </h2>
            );
          case "info":
            return (
              <InfoBlock key={i} title={block.title} items={block.items} />
            );
          case "code":
            return <CodeBlock key={i} title={block.title} code={block.code} />;
          case "output":
            return <OutputBlock key={i} title={block.title} lines={block.lines} />;
        }
      })}
    </div>
  );
}