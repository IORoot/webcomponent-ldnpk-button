import './button.js';

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                  DEFINE THE STORY CONTROLS / PROPS / ETC                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

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

    shape: {
      control: 'select', 
      options: ["default", "ghost", "outline"] ,
      description: 'The design shape of the button.',
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
      table: { defaultValue: { summary: false } },
    },

    width: { 
      control: 'text',
      description: 'Override width of the button. Will also left-align text.',
      table: { defaultValue: { summary: '' } },
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
    shape:  'default',
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
export const Default = ({ shadow, label, title, target, rel, shape, size, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
      <style>
      ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>
    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};


// Change the argument defaults for this example
Default.args = {
  label:  'DEFAULT',
};


// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                  Example with colour                  │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Colour = ({ shadow, label, title, target, rel, shape, size, cssBackgroundColour, cssForegroundColour, cssShadow }) => {
  
  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Colour.args = {
  label:  'COLOUR',

  cssBackgroundColour:   'var(--color-yellow-400)',
  cssForegroundColour:   'black',
};



// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │             Small version of the button               │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Small = ({ shadow, label, title, target, rel, shape, size, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Small.args = {
  label:  'SMALL BUTTON',
  size:   'small',

  cssBackgroundColour:   'var(--color-sky-500)',
  cssForegroundColour:   'var(--color-sky-100)',
};





// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │             Large version of the button               │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Large = ({ shadow, label, title, target, rel, shape, size, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Large.args = {
  label:  'LARGE BUTTON',
  size:   'large',

  cssBackgroundColour:   'var(--color-emerald-500)',
  cssForegroundColour:   'var(--color-emerald-100)',
};



// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │             Ghost version of the button               │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Ghost = ({ shadow, label, title, target, rel, shape, size, width, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}" width="${width}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Ghost.args = {
  label:  'GHOST BUTTON',
  shape:  'ghost',
  cssBackgroundColour:   'var(--color-pink-200)',
  cssForegroundColour:   'var(--color-pink-400)',
};




// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │            Outline version of the button              │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Outline = ({ shadow, label, title, target, rel, shape, size, width, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}" width="${width}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Outline.args = {
  label:  'OUTLINE BUTTON',
  shape:  'outline',
  cssBackgroundColour:   'var(--color-sky-200)',
  cssForegroundColour:   'var(--color-sky-400)',
};




// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │             Width version of the button               │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Wide = ({ shadow, label, title, target, rel, shape, size, width, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
    </style>

    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}" width="${width}">
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
Wide.args = {
  label:  'WIDE BUTTON',
  width:  '400px',
  cssBackgroundColour:   'var(--color-violet-500)',
  cssForegroundColour:   'var(--color-violet-100)',
};





// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │            Prefix version of the button               │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const PrefixIcon = ({ shadow, label, title, target, rel, shape, size, width, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
        #logo {

        }
    </style>


    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
      <symbol viewBox="0 0 185 120" id="logo">
        <path d="M24,24 L24,96 L106.639907,96 L59.9640453,24 L24,24 Z M78.3600926,24 L125.035955,96 L161,96 L161,24 L78.3600926,24 Z"></path>
      </symbol>
    </svg>


    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}" width="${width}">

      <!-- Glyph Prefix -->
      <svg slot="prefix" role="img" aria-label="glyph" style="width:2rem;height:2rem">
          <use xlink:href="#logo"></use>
      </svg>
      
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
PrefixIcon.args = {
  label:  'GLYPH PREFIX',
  cssBackgroundColour:   'var(--color-blue-500)',
  cssForegroundColour:   'var(--color-blue-100)',
};




// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │            Suffix version of the button               │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const SuffixIcon = ({ shadow, label, title, target, rel, shape, size, width, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
        #logo {

        }
    </style>


    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
      <symbol viewBox="0 0 185 120" id="logo">
        <path d="M24,24 L24,96 L106.639907,96 L59.9640453,24 L24,24 Z M78.3600926,24 L125.035955,96 L161,96 L161,24 L78.3600926,24 Z"></path>
      </symbol>
    </svg>


    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}" width="${width}">

      <!-- Glyph Prefix -->
      <svg slot="suffix" role="img" aria-label="glyph" style="width:2rem;height:2rem">
          <use xlink:href="#logo"></use>
      </svg>
      
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
SuffixIcon.args = {
  label:  'GLYPH SUFFIX',
  cssBackgroundColour:   'var(--color-blue-500)',
  cssForegroundColour:   'var(--color-blue-100)',
};




// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │         Wide Prefix version of the button             │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const WidePrefixIcon = ({ shadow, label, title, target, rel, shape, size, width, cssBackgroundColour, cssForegroundColour, cssShadow }) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  let htmlString = /* html */`
    <style>
        ldnpk-button {
          --backgroundColour: ${cssBackgroundColour};
          --foregroundColour: ${cssForegroundColour};
          --shadow:           ${cssShadow};
        }
        #logo {

        }
    </style>


    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
      <symbol viewBox="0 0 185 120" id="logo">
        <path d="M24,24 L24,96 L106.639907,96 L59.9640453,24 L24,24 Z M78.3600926,24 L125.035955,96 L161,96 L161,24 L78.3600926,24 Z"></path>
      </symbol>
    </svg>


    <ldnpk-button ${wordShadow} href="https://londonparkour.com" target="${target}" rel="${rel}" title="${title}" shape="${shape}" size="${size}" width="${width}">

      <!-- Glyph Prefix -->
      <svg slot="prefix" role="img" aria-label="glyph" style="width:2rem;height:2rem">
          <use xlink:href="#logo"></use>
      </svg>
      
      ${label}
    </ldnpk-button>
  `

  return htmlString;

};

// Change the argument defaults for this example
WidePrefixIcon.args = {
  label:  'GLYPH PREFIX',
  width:  '25rem',
  cssBackgroundColour:   'var(--color-blue-500)',
  cssForegroundColour:   'var(--color-blue-100)',
};