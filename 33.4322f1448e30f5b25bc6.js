(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{742:function(n,e,o){"use strict";o.r(e);var t=o(68),r=o(7),s=o(0),c=o.n(s);e.default=()=>{const n=Object(r.a)("X","x","q","nodes")("\n/**\n * Foo....\n */\nexport interface X {\n  a: string;\n  b: number;\n}\n\nexport interface Y {\n  /** foo... */\n  a: string;\n  \n  /** bar... */\n  b: number;\n}\n\ninterface Z {\n}\n\n/**\n * hello?\n */\nexport function x({ a, b }: { a: number, b: number }): number {\n  console.log('hello world?');\n  return a + b;\n}\n\nexport function y() {\n  console.log('hello world?');\n}\n\n/**\n * ????\n */\nexport const q = () => () => {\n  console.log('xxx');\n}\n\n/**\n * hello?\n */\nfunction z() {\n  console.log('hello world?');\n}\n\n/** skjsksjk */\nexport const xx: string = 'aaaa';\n\nexport const yy: number = 12323;\n\nconst zz: string = 'sss';\n\n/** kkdkdjdk */\nexport const nodes = <div>Hello?</div>;\n\n/** fldjkjek */\nexport class Test {\n  constructor(hello: string) {\n  }\n}\n");return c.a.createElement("div",null,Array.from(n).map(([n,e])=>c.a.createElement(s.Fragment,{key:n},c.a.createElement("h2",null,n),c.a.createElement(t.a,{language:"typescript",children:e}))))}},743:function(n,e,o){"use strict";o.r(e),e.default="import { CodeBlock } from '@handbook/code-block';\nimport { api } from '@handbook/source';\nimport React, { Fragment } from 'react';\n\nconst source: string = `\n/**\n * Foo....\n */\nexport interface X {\n  a: string;\n  b: number;\n}\n\nexport interface Y {\n  /** foo... */\n  a: string;\n  \n  /** bar... */\n  b: number;\n}\n\ninterface Z {\n}\n\n/**\n * hello?\n */\nexport function x({ a, b }: { a: number, b: number }): number {\n  console.log('hello world?');\n  return a + b;\n}\n\nexport function y() {\n  console.log('hello world?');\n}\n\n/**\n * ????\n */\nexport const q = () => () => {\n  console.log('xxx');\n}\n\n/**\n * hello?\n */\nfunction z() {\n  console.log('hello world?');\n}\n\n/** skjsksjk */\nexport const xx: string = 'aaaa';\n\nexport const yy: number = 12323;\n\nconst zz: string = 'sss';\n\n/** kkdkdjdk */\nexport const nodes = <div>Hello?</div>;\n\n/** fldjkjek */\nexport class Test {\n  constructor(hello: string) {\n  }\n}\n`;\n\nexport default () => {\n  const codes = api('X', 'x', 'q', 'nodes')(source);\n\n  return (\n    <div>\n      {Array.from(codes).map(([name, code]) => {\n        return (\n          <Fragment key={name}>\n            <h2>{name}</h2>\n            <CodeBlock language=\"typescript\" children={code} />\n          </Fragment>\n        );\n      })}\n    </div>\n  );\n};\n"},872:function(n,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return l}));o(0);var t=o(62),r=o(7),s=o(89);const c={};function l({components:n,...e}){return Object(t.b)("wrapper",Object.assign({},c,e,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",null,"Slice"),Object(t.b)(s.Example,{example:Object(r.b)("./Transpile/filterExports",{component:o(742),source:o(743),filename:"src/_packages/@handbook/source/__pages__/Transpile/filterExports.tsx"}),mdxType:"Example"},Object(t.b)(s.Preview,{height:600,style:{overflowY:"auto"},mdxType:"Preview"})))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=33.4322f1448e30f5b25bc6.js.map