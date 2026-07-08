export const id = "EVENT_REPLACE_OVERLAY_TILE_ATTR";
export const name = "Set overlay tile attribute";
export const groups = ["EVENT_GROUP_SCREEN"];

export const autoLabel = (fetchArg) => {
  return `Set overlay tile attribute`;
};

export const fields = [
  {
    key: `x`,
    label: "X",
    type: "value",
    width: "50%",
    defaultValue: {
      type: "number",
      value: 0,
    },
  },
  {
    key: `y`,
    label: "Y",
    type: "value",
    width: "50%",
    defaultValue: {
      type: "number",
      value: 0,
    },
  },
  {
    key: `tile_attribute`,
    label: "Tile attribute",
    type: "value",
    defaultValue: {
      type: "number",
      value: 0,
    },
  },
];

export const compile = (input, helpers) => {
  const { _callNative, _stackPushScriptValue, _stackPop, _addComment } = helpers;
  _addComment("Replace overlay tile attribute");
  _stackPushScriptValue(input.tile_attribute);
  _stackPushScriptValue(input.y);
  _stackPushScriptValue(input.x);
  _callNative("vm_replace_overlay_attribute_tile");
  _stackPop(3);
};
