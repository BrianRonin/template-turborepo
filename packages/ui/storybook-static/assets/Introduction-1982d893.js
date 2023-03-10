import{j as e,a as t,F as a}from"./jsx-runtime-670450c2.js";import{M as l}from"./index-953ea156.js";import{u as s}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./index-82fd74cc.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./memoizerific-a8c4a000.js";import"./chunk-XHUUYXNA-64ae917e.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-4c51b38f.js";import"./_getTag-3fe263e1.js";import"./index-3ce62e12.js";import"./extends-98964cd2.js";import"./index-356e4a49.js";const c=""+new URL("code-brackets-9ef6443e.svg",import.meta.url).href,d=""+new URL("colors-ac9401f3.svg",import.meta.url).href,p=""+new URL("comments-f15a6837.svg",import.meta.url).href,m=""+new URL("direction-94a9917f.svg",import.meta.url).href,h=""+new URL("flow-275142c6.svg",import.meta.url).href,g=""+new URL("plugin-57148314.svg",import.meta.url).href,f=""+new URL("repo-fb4ece47.svg",import.meta.url).href,u=""+new URL("stackalt-2ad81543.svg",import.meta.url).href;function B(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e(n,Object.assign({},i,{children:e(o,{})})):o();function o(){const r=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},s(),i.components);return t(a,{children:[e(l,{title:"Example/Introduction"}),`
`,e("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e(r.h1,{children:"Welcome to Storybook"}),`
`,t(r.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e(r.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,t(r.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e(r.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,e(r.a,{href:"https://componentdriven.org",children:e(r.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,e("div",{className:"subheading",children:"Configure"}),`
`,t("div",{className:"link-list",children:[t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[e("img",{src:g,alt:"plugin"}),e("span",{children:t(r.p,{children:[e("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[e("img",{src:u,alt:"Build"}),e("span",{children:t(r.p,{children:[e("strong",{children:"Build configuration"}),`
How to customize webpack and Babel`]})})]}),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[e("img",{src:d,alt:"colors"}),e("span",{children:t(r.p,{children:[e("strong",{children:"Styling"}),`
How to load and configure CSS libraries`]})})]}),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[e("img",{src:h,alt:"flow"}),e("span",{children:t(r.p,{children:[e("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,e("div",{className:"subheading",children:"Learn"}),`
`,t("div",{className:"link-list",children:[t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e("img",{src:f,alt:"repo"}),e("span",{children:t(r.p,{children:[e("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[e("img",{src:m,alt:"direction"}),e("span",{children:t(r.p,{children:[e("strong",{children:"In-depth guides"}),`
Best practices from leading teams`]})})]}),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[e("img",{src:c,alt:"code"}),e("span",{children:t(r.p,{children:[e("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[e("img",{src:p,alt:"comments"}),e("span",{children:t(r.p,{children:[e("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,e("div",{className:"tip-wrapper",children:t(r.p,{children:[e("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,e("code",{children:"stories/Introduction.stories.mdx"})]})})]})}}export{B as default};
//# sourceMappingURL=Introduction-1982d893.js.map
