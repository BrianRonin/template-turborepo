import{c as f,j as r,a as g}from"./emotion-react.browser.esm-32dd559b.js";import{r as u}from"./index-f1f749bf.js";import{c as n}from"./emotion-styled-base.browser.esm-d20e099d.js";import"./jsx-runtime-670450c2.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./_commonjsHelpers-042e6b4d.js";var b={name:"1p04o37",styles:"position:fixed;top:2rem;right:2rem;z-index:2"};const o=n("div",{target:"esd1dh43"})(({theme:e})=>b,";");var k={name:"ukih4z",styles:"position:relative;display:inline-block;width:5rem;height:2.5rem;line-height:0;font-size:0;overflow:hidden"};const l=n("label",{target:"esd1dh42"})(({theme:e})=>k,";"),i=n("input",{target:"esd1dh41"})(({theme:e})=>f("appearance:none;opacity:0;width:0;height:0;&:checked+",t,":before{transform:translateX(1.9rem);}",""),";"),t=n("span",{target:"esd1dh40"})(({theme:e})=>f("position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:",e.colors.bg[5],";transition:all 300ms ease-in-out;border-radius:2rem;&:before{content:'';position:absolute;height:2.1rem;width:2.1rem;left:0.4rem;bottom:0.2rem;background:",e.colors.text[0],";border-radius:50%;transition:all 300ms ease-in-out;}",""),";");try{o.displayName="Main",o.__docgenInfo={description:"",displayName:"Main",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{l.displayName="Label",l.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{t.displayName="Slider",t.__docgenInfo={description:"",displayName:"Slider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const q={text:":D"},s=({text:e,onChange:d,ifChecked:p,ifNoChecked:c,initialValue:m,meta:y})=>{const[a,h]=u.useState(m?m():!1);return u.useEffect(()=>{a&&typeof p=="function"&&p(),!a&&typeof c=="function"&&c(),typeof d=="function"&&d(a)},[a]),r(o,{children:g(l,{children:[e,r(i,{type:"checkbox",value:e,onChange:()=>{h(_=>!_)},checked:a,...y}),r(t,{})]})})};try{s.displayName="C0Toggle",s.__docgenInfo={description:"",displayName:"C0Toggle",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback ao mudar de estado enviando o estado",name:"onChange",required:!1,type:{name:"((checked: boolean) => any)"}},ifChecked:{defaultValue:null,description:"Callback para quando estiver ativado",name:"ifChecked",required:!1,type:{name:"(() => any)"}},ifNoChecked:{defaultValue:null,description:"Callback para quando estiver desativado",name:"ifNoChecked",required:!1,type:{name:"(() => any)"}},initialValue:{defaultValue:null,description:"Inicia ativo ou desativado?",name:"initialValue",required:!1,type:{name:"(() => boolean)"}},meta:{defaultValue:null,description:"Metadados extras",name:"meta",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}}}}}catch{}const M={title:"Components/Toggle/C0Toggle",component:s,tags:["autodocs"],args:q,parameters:{layout:"centered",background:null}},L={};export{L as Base,M as default};
//# sourceMappingURL=stories-478a1809.js.map
