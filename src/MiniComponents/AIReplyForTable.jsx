// import { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { FaRegCopy, FaCheck } from "react-icons/fa";

// const AIReplyForTable = () => {
//   const [copied, setCopied] = useState(false);

//   const tableCode = `
// | ID  | Name   | Age |
// | --- | ------ | --- |
// | 1   | Alice  | 25  |
// | 2   | Bob    | 30  |
// | 3   | Charlie| 22  |
//   `;

//   return (
//     <div className="relative w-full bg-gray-900 p-4 rounded-lg overflow-hidden">
//       <CopyToClipboard text={tableCode} onCopy={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
//         <button className="absolute top-3 right-3 text-white bg-gray-700 hover:bg-gray-600 p-2 rounded">
//           {copied ? <FaCheck className="text-green-400" /> : <FaRegCopy />}
//         </button>
//       </CopyToClipboard>

//       <SyntaxHighlighter language="markdown" style={oneDark} wrapLongLines>
//         {tableCode}
//       </SyntaxHighlighter>
//     </div>
//   );
// };

// export default AIReplyForTable;


// anoter way

import React from "react";

const TableComponent = () => {
  const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border">
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border">{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
