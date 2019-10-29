import React, { useEffect, useState } from "react";
import Spinner from "../../components/shared/spinner";

type PreviewRendererProps = {
  url: string,
  render?: (text: string) => JSX.Element | JSX.Element[]
};

const PreviewRenderer = ({
  url,
  render = text => <div
    onClick={e => {
      const selection = getSelection()!;

      if (selection.isCollapsed) {
        const range = document.createRange();
        range.selectNode(e.currentTarget);

        selection.removeAllRanges();
        selection.addRange(range);
      }
    }}
  >
    {text.split(/\n+/).map((paragraph, i) => <p key={i}>{paragraph}</p>)}
  </div>
}: PreviewRendererProps) => {
  const [text, setText] = useState<string>();

  useEffect(() => {
		fetch(url)
			.then(res => res.text())
			.then(text => setText(text))
			.catch(err => console.warn(err));
  }, [url]);

  return (
		<>
			<Spinner isActive={!text} />
			{text && render(text)}
		</>
	);
};

export { PreviewRenderer, PreviewRendererProps };
