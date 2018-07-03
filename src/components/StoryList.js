import React from "react";
import Story from "./Story";

export default function StoryList({ items }) {
  if (!items.length) return null;
  return <div>{items.map(item => <Story {...item} key={item.id} />)}</div>;
}
