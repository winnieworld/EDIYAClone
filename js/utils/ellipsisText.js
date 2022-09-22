function ellipsisText(text, limitCount) {
  return text.length > limitCount
    ? text.slice(0, limitCount - 1) + '...'
    : text;
}
