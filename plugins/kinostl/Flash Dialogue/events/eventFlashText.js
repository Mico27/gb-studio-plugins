const l10n = require("../helpers/l10n").default;

const id = "ZB_EVENT_FLASH_TEXT";
const groups = ["EVENT_GROUP_DIALOGUE"];
const name = "Flash Dialogue"

const autoLabel = (fetchArg, args) => {
  if (([].concat(args.text) || []).join()) {
    return `Flash ${fetchArg("text")}`
  } else {
    return name;
  }
};

const fields = [
  {
    key: "__section",
    type: "tabs",
    defaultValue: "text",
    variant: "eventSection",
    values: {
      text: l10n("FIELD_TEXT"),
      layout: l10n("FIELD_LAYOUT"),
      behavior: l10n("FIELD_BEHAVIOR"),
      presets: l10n("FIELD_PRESETS"),
    },
  },

  {
    label: l10n("FIELD_TEXT_IN_LOGO_WARNING"),
    labelVariant: "warning",
    flexBasis: "100%",
    conditions: [
      {
        sceneType: ["logo"],
      },
    ],
  },

  // Text Section

  {
    key: "text",
    type: "textarea",
    placeholder: l10n("FIELD_TEXT_PLACEHOLDER"),
    multiple: false,
    defaultValue: "",
    flexBasis: "100%",
    conditions: [
      {
        key: "__section",
        in: ["text", undefined],
      },
    ],
  },
  {
    key: "avatarId",
    type: "avatar",
    toggleLabel: l10n("FIELD_ADD_TEXT_AVATAR"),
    label: l10n("FIELD_TEXT_AVATAR"),
    description: l10n("FIELD_TEXT_AVATAR_DESC"),
    defaultValue: "",
    optional: true,
    conditions: [
      {
        key: "__section",
        in: ["text", undefined],
      },
    ],
  },

  // Layout Section
  {
    type: "group",
    conditions: [
      {
        key: "__section",
        in: ["layout"],
      },
    ],
    fields: [
      {
        key: `minHeight`,
        label: l10n("FIELD_MIN_HEIGHT"),
        description: l10n("FIELD_DIALOGUE_MIN_HEIGHT_DESC"),
        type: "number",
        min: 1,
        max: 18,
        width: "50%",
        defaultValue: 4,
      },
      {
        key: `maxHeight`,
        label: l10n("FIELD_MAX_HEIGHT"),
        description: l10n("FIELD_DIALOGUE_MAX_HEIGHT_DESC"),
        type: "number",
        min: 1,
        max: 18,
        width: "50%",
        defaultValue: 7,
      },
    ],
  },
  {
    type: "group",
    wrapItems: true,
    conditions: [
      {
        key: "__section",
        in: ["layout"],
      },
    ],
    fields: [
      {
        key: `textX`,
        label: l10n("FIELD_TEXT_X"),
        description: l10n("FIELD_TEXT_X_DESC"),
        type: "number",
        min: -20,
        max: 20,
        defaultValue: 1,
        width: "50%",
      },
      {
        key: `textY`,
        label: l10n("FIELD_TEXT_Y"),
        description: l10n("FIELD_TEXT_Y_DESC"),
        type: "number",
        min: -18,
        max: 18,
        defaultValue: 1,
        width: "50%",
      },
      {
        key: `textHeight`,
        label: l10n("FIELD_TEXT_SCROLL_HEIGHT"),
        description: l10n("FIELD_TEXT_SCROLL_HEIGHT_DESC"),
        type: "number",
        min: 1,
        max: 18,
        defaultValue: 5,
        width: "50%",
      },
      {
        key: `position`,
        label: l10n("FIELD_POSITION"),
        description: l10n("FIELD_DIALOGUE_POSITION_DESC"),
        type: "select",
        defaultValue: "bottom",
        width: "50%",
        options: [
          ["bottom", l10n("FIELD_BOTTOM")],
          ["top", l10n("FIELD_TOP")],
        ],
        conditions: [
          {
            key: "__section",
            in: ["layout"],
          },
          {
            parallaxEnabled: false,
          },
        ],
      },
    ],
  },
  {
    type: "group",
    alignBottom: true,
    conditions: [
      {
        key: "__section",
        in: ["layout"],
      },
    ],
    fields: [
      {
        key: `clearPrevious`,
        label: l10n("FIELD_CLEAR_PREVIOUS"),
        description: l10n("FIELD_CLEAR_PREVIOUS_DESC"),
        type: "checkbox",
        defaultValue: true,
        width: "50%",
        conditions: [
          {
            key: "__section",
            in: ["layout"],
          },
        ],
      },
      {
        key: `showFrame`,
        label: l10n("FIELD_SHOW_FRAME"),
        description: l10n("FIELD_SHOW_FRAME_DESC"),
        type: "checkbox",
        defaultValue: "true",
        width: "50%",
        conditions: [
          {
            key: "__section",
            in: ["layout"],
          },
          {
            key: "clearPrevious",
            in: [true, undefined],
          },
        ],
      },
    ],
  },
  {
    type: "group",
    alignBottom: true,
    conditions: [
      {
        key: "__section",
        in: ["behavior"],
      },
    ],
    fields: [
      {
        label: l10n("TEXT_SPEED_IN"),
        description: l10n("TEXT_SPEED_IN_DESC"),
        key: "speedIn",
        type: "overlaySpeed",
        defaultValue: -1,
        width: "50%",
        allowDefault: true,
        conditions: [
          {
            key: "__section",
            in: ["behavior"],
          },
        ],
      },
      {
        label: l10n("TEXT_SPEED_OUT"),
        description: l10n("TEXT_SPEED_OUT_DESC"),
        key: "speedOut",
        type: "overlaySpeed",
        defaultValue: -1,
        width: "50%",
        allowDefault: true,
        conditions: [
          {
            key: "__section",
            in: ["behavior"],
          },
        ],
      },
    ],
  },
  {
    key: "closeDelayTime",
    label: l10n("FIELD_CLOSE_DELAY"),
    description: l10n("FIELD_CLOSE_DELAY_DESC"),
    type: "number",
    min: 0,
    max: 3600,
    step: 0.1,
    defaultValue: 2,
    unitsField: "closeDelayUnits",
    unitsDefault: "time",
    unitsAllowed: ["time", "frames"],
    conditions: [
      {
        key: "__section",
        in: ["behavior"],
      },
      {
        key: "closeDelayUnits",
        ne: "frames",
      },
    ],
  },
  {
    key: "closeDelayFrames",
    label: l10n("FIELD_CLOSE_DELAY"),
    description: l10n("FIELD_CLOSE_DELAY_DESC"),
    type: "number",
    min: 0,
    max: 3600,
    defaultValue: 120,
    unitsField: "closeDelayUnits",
    unitsDefault: "time",
    unitsAllowed: ["time", "frames"],
    conditions: [
      {
        key: "__section",
        in: ["behavior"],
      },
      {
        key: "closeDelayUnits",
        eq: "frames",
      },
    ],
  },
  {
    type: "presets",
    conditions: [
      {
        key: "__section",
        in: ["presets"],
      },
    ],
  },
];

const userPresetsGroups = [
  {
    id: "text",
    label: l10n("FIELD_TEXT"),
    fields: ["text"],
  },
  {
    id: "avatar",
    label: l10n("FIELD_TEXT_AVATAR"),
    fields: ["avatarId"],
  },
  {
    id: "layout",
    label: l10n("FIELD_LAYOUT"),
    fields: [
      "position",
      "minHeight",
      "maxHeight",
      "textX",
      "textY",
      "textHeight",
      "clearPrevious",
      "showFrame",
    ],
    selected: true,
  },
  {
    id: "behaviour",
    label: l10n("FIELD_BEHAVIOR"),
    fields: [
      "speedIn",
      "speedOut",
      "closeDelayTime",
      "closeDelayFrames",
    ],
    selected: true,
  },
];

const userPresetsIgnore = ["__section"];

/**
 * 
 * @param {*} input
 * @param {import('/home/zone/.local/share/gb-studio/helpers.d.ts').Helpers} helpers 
 */
const compile = (input, helpers) => {
  const { textDialogue } = helpers;
  const threadHandler = helpers._declareLocal("thread_handler", 1, true)

  helpers.compileEvents([
    {
      "command": "EVENT_THREAD_START",
      "args": {
        "variable": threadHandler,
      },
      "children": {
        "true": [
          {
            "command": "EVENT_TEXT",
            "args": {
                ...input,
              "closeWhen": "notModal",
            },
            "id": ""
          },
          {
            "command": "EVENT_WAIT",
            "args": {
              "time": {
                "type": "number",
                "value": input.closeDelayTime
              },
              "frames": {
                "type": "number",
                "value": input.closeDelayFrames
              }
            },
            "id": ""
          },
          {
            "command": "EVENT_DIALOGUE_CLOSE_NONMODAL",
            "args": {
              "speed": input.speedOut
            },
            "id": ""
          }
        ]
      },
      "id": ""
    }


  ])
};

module.exports = {
  id,
  name,
  description: l10n("EVENT_TEXT_DESC"),
  autoLabel,
  groups,
  fields,
  compile,
  waitUntilAfterInitFade: true,
  userPresetsGroups,
  userPresetsIgnore,
  helper: {
    type: "text",
    text: "text",
    avatarId: "avatarId",
    minHeight: "minHeight",
    maxHeight: "maxHeight",
    showFrame: "showFrame",
    clearPrevious: "clearPrevious",
    textX: "textX",
    textY: "textY",
    textHeight: "textHeight",
  },
};
