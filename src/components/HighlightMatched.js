import React from "react";
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

function escapeRegExp(string) {
  return string && reHasRegExpChar.test(string)
    ? string.replace(reRegExpChar, "\\$&")
    : string || "";
}

const HighlightMatched = ({ match, value }) => {
  const parts = match.length
    ? value.split(new RegExp(`(${escapeRegExp(match)})`, "ig"))
    : [value];

  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {part && part.toLowerCase() === match ? <mark>{part}</mark> : part}
        </span>
      ))}
    </>
  );
};

export default React.memo(HighlightMatched);
