import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy, FaCheck } from "react-icons/fa";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
  };

  return (
    <div className="relative w-[80vw] bg-gray-500 p-4 rounded-lg overflow-hidden sm:w-[80vw] md:w-[90vw] lg:w-[60vw]">
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button className="absolute top-3 right-3 text-white bg-gray-700 hover:bg-gray-600 p-2 rounded">
          {copied ? <FaCheck className="text-green-400" /> : <FaRegCopy />}
        </button>
      </CopyToClipboard>
      
      <SyntaxHighlighter language="javascript" style={gruvboxLight} wrapLongLines>
        {code?code:"console.log('Api Error has occerd')"}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;




