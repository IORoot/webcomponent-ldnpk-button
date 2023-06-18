import './button.js';

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                  DEFINE THE STORY CONTROLS / PROPS / ETC                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝
{/* Shows the description for the default export (the meta).
    If that didn't have any comments, it would show the 
    comments from the component instead */}

export default {
  title: 'LondonParkour/Button',                            
  component: '<ldnpk-button></ldnpk-button>',
  tags: ['autodocs'],

  // Docs Page Description
  parameters: { docs: { description: { component: 
    'The LondonParkour Button Component.',
  }, }, },

  // ╭─────────────────────────────────────────────────────╮
  // │                 ARGUMENTS (CONTROLS)                │
  // ╰─────────────────────────────────────────────────────╯
  argTypes: {

    
    label: { 
      control: 'text',
      description: 'Text for the button.',
      table: { defaultValue: { summary: "" } },
    },

    title: { 
      control: 'text',
      description: 'Title attribute for the button.',
      table: { defaultValue: { summary: "link" } },
    },

    target: {
      control: 'select', 
      options: ["_self", "_blank", "_parent", "_top"],
      description: 'DO NOT send to `_blank` for good SEO.',
      table: { defaultValue: { summary: "_self" } },
    },

    rel: {
      control: 'multi-select', 
      options: [
          "nofollow",
          "noopener",
          "noreferrer",
          "directory",
          "tag",
          "help",
          "ugc",
          "sponsored"
        ],
      description: 'Link relationship to target.',
      table: { defaultValue: { summary: "" } },
    },

    style: {
      control: 'select', 
      options: ["default", "ghost", "outline"] ,
      description: 'The design style of the button.',
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      control: 'select', 
      options: ["default", "small", "large"],
      description: 'The size of the button.',
      table: { defaultValue: { summary: "default" } },
    },
    shadow: { 
      control: 'boolean',
      description: 'Adds a shadow to the button.',
    },



  // ╭─────────────────────────────────────────────────────╮
  // │                 CUSTOM CSS VARIABLES                │
  // ╰─────────────────────────────────────────────────────╯
    cssBackgroundColour: {
      name: '--backgroundColour',
      control: 'text',
      description: 'Override the default background colour.',
      table: { 
        defaultValue: { summary: "#F3F4F6" }, 
        category: "CSS Custom Properties" 
      },
    },

    cssForegroundColour: {
      name: '--foregroundColour',
      control: 'text',
      description: 'Override the default foreground colour.',
      table: { 
        defaultValue: { summary: "#000000" }, 
        category: "CSS Custom Properties" 
      },
    },

    cssShadow: {
      name: '--shadow',
      control: 'text',
      description: 'Override the default background colour.',
      table: { 
        defaultValue: { summary: "#F3F4F6" }, 
        category: "CSS Custom Properties" 
      },
    },
  },


  // ╭─────────────────────────────────────────────────────╮
  // │                   ARGUMENT DEFAULTS                 │
  // ╰─────────────────────────────────────────────────────╯
  args: {
    label:  'EXPLORE',
    title: 'link',
    target: '_self',
    style:  'default',
    size:   'default',
    shadow: '',

    cssBackgroundColour:   '#F3F4F6',
    cssForegroundColour:   'black',
    cssShadow:             '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
  },
  

};



// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                                  STORIES                                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝



// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                     Default Style                     │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Default = ({ shadow, label, title, target, rel, style, size, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
      <style>
      ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>
    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" style="${style}" size="${size}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};


// Change the argument defaults for this example
Default.args = {
  label:  'EXPLORE',
  title: 'link',
  target: '_self',
  style:  'default',
  size:   'default',
  shadow: '',

  cssBackgroundColour:   '#F3F4F6',
  cssForegroundColour:   'black',
  cssShadow:             '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
};


// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                  Example with colour                  │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Colour = ({ shadow, label, title, target, rel, style, size, cssBackgroundColour, cssForegroundColour, cssShadow }) => {
  
  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" style="${style}" size="${size}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Colour.args = {
  label:  'COLOUR',
  title: 'link',
  target: '_self',
  style:  'default',
  size:   'default',
  shadow: '',

  cssBackgroundColour:   'var(--color-yellow-400)',
  cssForegroundColour:   'black',
  cssShadow:             '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
};



// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │              Dark version of the button               │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Dark = ({ shadow, label, title, target, rel, style, size, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" style="${style}" size="${size}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Dark.args = {
  label:  'DARK BUTTON',
  title: 'link',
  target: '_self',
  style:  'default',
  size:   'default',
  shadow: '',

  cssBackgroundColour:   'var(--color-stone-800)',
  cssForegroundColour:   'var(--color-stone-200)',
  cssShadow:             '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
};



// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │             Small version of the button               │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Small = ({ shadow, label, title, target, rel, style, size, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" style="${style}" size="${size}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Small.args = {
  label:  'SMALL BUTTON',
  title: 'link',
  target: '_self',
  style:  'default',
  size:   'small',
  shadow: '',

  cssBackgroundColour:   'var(--color-sky-500)',
  cssForegroundColour:   'var(--color-sky-100)',
  cssShadow:             '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
};





// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │             Large version of the button               │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Large = ({ shadow, label, title, target, rel, style, size, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" style="${style}" size="${size}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Large.args = {
  label:  'LARGE BUTTON',
  title: 'link',
  target: '_self',
  style:  'default',
  size:   'large',
  shadow: '',

  cssBackgroundColour:   'var(--color-emerald-500)',
  cssForegroundColour:   'var(--color-emerald-100)',
  cssShadow:             '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
};