"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[938],{"./app/components/atoms/buttons/button02.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Outline:()=>Outline,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button02_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),tw_merge=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");function cov_1znjx0rxjr(){var path="/Users/sunteang/Downloads/sunteangserey/SabaiCode/SabaiPractice/next-app/utils/cn.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"d7c58913878fc4cb11c7c40efe97a97ce89615ed"===coverage[path].hash||(coverage[path]={path:"/Users/sunteang/Downloads/sunteangserey/SabaiCode/SabaiPractice/next-app/utils/cn.tsx",statementMap:{0:{start:{line:3,column:18},end:{line:5,column:1}},1:{start:{line:4,column:4},end:{line:4,column:33}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:18},end:{line:3,column:19}},loc:{start:{line:3,column:31},end:{line:5,column:1}},line:3}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,sources:["/Users/sunteang/Downloads/sunteangserey/SabaiCode/SabaiPractice/next-app/utils/cn.tsx"],sourcesContent:['import { twMerge } from "tailwind-merge";\nimport { clsx, ClassValue } from "clsx";\n\nexport const cn = (...inputs: ClassValue[]) => {\n  return twMerge(clsx(inputs));\n};\n'],names:["twMerge","clsx","cn","inputs"],mappings:"AAAA,SAASA,OAAO,QAAQ,iBAAiB;AACzC,SAASC,IAAI,QAAoB,OAAO;AAExC,OAAO,MAAMC,KAAK,CAAC,GAAGC;IACpB,OAAOH,QAAQC,KAAKE;AACtB,EAAE"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d7c58913878fc4cb11c7c40efe97a97ce89615ed"});var actualCoverage=coverage[path];return cov_1znjx0rxjr=function(){return actualCoverage},actualCoverage}cov_1znjx0rxjr(),cov_1znjx0rxjr().s[0]++;const cn=(...inputs)=>(cov_1znjx0rxjr().f[0]++,cov_1znjx0rxjr().s[1]++,(0,tw_merge.Q)((0,clsx.$)(inputs)));__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function cov_24r9kea3vk(){var path="/Users/sunteang/Downloads/sunteangserey/SabaiCode/SabaiPractice/next-app/app/components/atoms/buttons/button02.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"0ca7ea4cfa48707e2ed47cd7d78bdb3aab1dddc3"===coverage[path].hash||(coverage[path]={path:"/Users/sunteang/Downloads/sunteangserey/SabaiCode/SabaiPractice/next-app/app/components/atoms/buttons/button02.tsx",statementMap:{0:{start:{line:4,column:15},end:{line:43,column:1}},1:{start:{line:6,column:23},end:{line:6,column:85}},2:{start:{line:7,column:26},end:{line:26,column:5}},3:{start:{line:27,column:27},end:{line:27,column:74}},4:{start:{line:28,column:4},end:{line:42,column:8}},5:{start:{line:45,column:0},end:{line:139,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:15},end:{line:4,column:16}},loc:{start:{line:4,column:115},end:{line:43,column:1}},line:4}},branchMap:{0:{loc:{start:{line:4,column:28},end:{line:4,column:47}},type:"default-arg",locations:[{start:{line:4,column:38},end:{line:4,column:47}}],line:4},1:{loc:{start:{line:4,column:49},end:{line:4,column:66}},type:"default-arg",locations:[{start:{line:4,column:57},end:{line:4,column:66}}],line:4},2:{loc:{start:{line:4,column:68},end:{line:4,column:82}},type:"default-arg",locations:[{start:{line:4,column:80},end:{line:4,column:82}}],line:4},3:{loc:{start:{line:4,column:84},end:{line:4,column:100}},type:"default-arg",locations:[{start:{line:4,column:95},end:{line:4,column:100}}],line:4},4:{loc:{start:{line:27,column:27},end:{line:27,column:74}},type:"cond-expr",locations:[{start:{line:27,column:38},end:{line:27,column:69}},{start:{line:27,column:72},end:{line:27,column:74}}],line:27},5:{loc:{start:{line:38,column:34},end:{line:38,column:170}},type:"cond-expr",locations:[{start:{line:38,column:132},end:{line:38,column:138}},{start:{line:38,column:141},end:{line:38,column:170}}],line:38},6:{loc:{start:{line:38,column:34},end:{line:38,column:129}},type:"binary-expr",locations:[{start:{line:38,column:34},end:{line:38,column:92}},{start:{line:38,column:96},end:{line:38,column:129}}],line:38}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0,0],5:[0,0],6:[0,0]},inputSourceMap:{version:3,sources:["/Users/sunteang/Downloads/sunteangserey/SabaiCode/SabaiPractice/next-app/app/components/atoms/buttons/button02.tsx"],sourcesContent:['import { cn } from "../../../../utils/cn";\nimport React, { ReactNode, ButtonHTMLAttributes } from "react";\n\ninterface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {\n  children: ReactNode;\n  variant?: "contain" | "outline" | "text";\n  color?: "primary" | "secondary" | "success" | "error";\n  className?: string;\n  disabled?: boolean;\n}\n\nconst Button: React.FC<ButtonProps> = ({\n  children,\n  variant = "contain",\n  color = "primary",\n  className = "",\n  disabled = false,\n  ...props\n}) => {\n  const baseStyles =\n    "px-4 py-2 rounded font-medium transition-colors duration-300";\n  const variantStyles = {\n    contain: {\n      primary: "bg-blue-500 text-white hover:bg-blue-700",\n      secondary: "bg-gray-500 text-white hover:bg-gray-700",\n      success: "bg-green-500 text-white hover:bg-green-700",\n      error: "bg-red-500 text-white hover:bg-red-700",\n    },\n    outline: {\n      primary:\n        "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",\n      secondary:\n        "bg-transparent text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white",\n      success:\n        "bg-transparent text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",\n      error:\n        "bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white",\n    },\n    text: {\n      primary: "hover:bg-blue-100 text-blue-700",\n      secondary: "hover:bg-gray-100 text-gray-700",\n      success: "hover:bg-green-100 text-green-700",\n      error: "hover:bg-red-100 text-red-700",\n    },\n  };\n  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";\n\n  return (\n    // without merge class\n    // <button\n    //   className={`${baseStyles} ${variantStyles[variant]?.[color]} ${disabledStyles} ${className}`}\n    //   disabled={disabled}\n    //   {...props}\n    // >\n    //   {children}\n    // </button>\n\n    // within merge class\n    <button\n      className={cn(\n        baseStyles,\n        variantStyles[variant]?.[color],\n        disabledStyles,\n        className\n      )}\n      disabled={disabled}\n      {...props}\n    >\n      {children}\n    </button>\n  );\n};\n\nexport default Button;\n'],names:["cn","React","Button","children","variant","color","className","disabled","props","variantStyles","baseStyles","contain","primary","secondary","success","error","outline","text","disabledStyles","button"],mappings:";AAAA,SAASA,EAAE,QAAQ,uBAAuB;AAC1C,OAAOC,WAAgD,QAAQ;AAU/D,MAAMC,SAAgC,CAAC,EACrCC,QAAQ,EACRC,UAAU,SAAS,EACnBC,QAAQ,SAAS,EACjBC,YAAY,EAAE,EACdC,WAAW,KAAK,EAChB,GAAGC,OACJ;QA2COC;IA1CN,MAAMC,aACJ;IACF,MAAMD,gBAAgB;QACpBE,SAAS;YACPC,SAAS;YACTC,WAAW;YACXC,SAAS;YACTC,OAAO;QACT;QACAC,SAAS;YACPJ,SACE;YACFC,WACE;YACFC,SACE;YACFC,OACE;QACJ;QACAE,MAAM;YACJL,SAAS;YACTC,WAAW;YACXC,SAAS;YACTC,OAAO;QACT;IACF;IACA,MAAMG,iBAAiBX,WAAW,kCAAkC;IAEpE,OACE,sBAAsB;IACtB,UAAU;IACV,kGAAkG;IAClG,wBAAwB;IACxB,eAAe;IACf,IAAI;IACJ,eAAe;IACf,YAAY;IAEZ,qBAAqB;kBACrB,KAACY;QACCb,WAAWN,GACTU,aACAD,yBAAAA,aAAa,CAACL,QAAQ,cAAtBK,6CAAAA,sBAAwB,CAACJ,MAAM,EAC/Ba,gBACAZ;QAEFC,UAAUA;QACT,GAAGC,KAAK;kBAERL;;AAGP;AAEA,eAAeD,OAAO"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0ca7ea4cfa48707e2ed47cd7d78bdb3aab1dddc3"});var actualCoverage=coverage[path];return cov_24r9kea3vk=function(){return actualCoverage},actualCoverage}cov_24r9kea3vk(),cov_24r9kea3vk().s[0]++;const Button=({children,variant=(cov_24r9kea3vk().b[0][0]++,"contain"),color=(cov_24r9kea3vk().b[1][0]++,"primary"),className=(cov_24r9kea3vk().b[2][0]++,""),disabled=(cov_24r9kea3vk().b[3][0]++,!1),...props})=>{var _variantStyles_variant;cov_24r9kea3vk().f[0]++;const baseStyles=(cov_24r9kea3vk().s[1]++,"px-4 py-2 rounded font-medium transition-colors duration-300"),variantStyles=(cov_24r9kea3vk().s[2]++,{contain:{primary:"bg-blue-500 text-white hover:bg-blue-700",secondary:"bg-gray-500 text-white hover:bg-gray-700",success:"bg-green-500 text-white hover:bg-green-700",error:"bg-red-500 text-white hover:bg-red-700"},outline:{primary:"bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",secondary:"bg-transparent text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white",success:"bg-transparent text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",error:"bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"},text:{primary:"hover:bg-blue-100 text-blue-700",secondary:"hover:bg-gray-100 text-gray-700",success:"hover:bg-green-100 text-green-700",error:"hover:bg-red-100 text-red-700"}}),disabledStyles=(cov_24r9kea3vk().s[3]++,disabled?(cov_24r9kea3vk().b[4][0]++,"opacity-50 cursor-not-allowed"):(cov_24r9kea3vk().b[4][1]++,""));return cov_24r9kea3vk().s[4]++,(0,jsx_runtime.jsx)("button",{className:cn(baseStyles,(cov_24r9kea3vk().b[6][0]++,null===(_variantStyles_variant=variantStyles[variant])||(cov_24r9kea3vk().b[6][1]++,void 0===_variantStyles_variant)?void cov_24r9kea3vk().b[5][0]++:(cov_24r9kea3vk().b[5][1]++,_variantStyles_variant[color])),disabledStyles,className),disabled,...props,children})},button02=Button;cov_24r9kea3vk().s[5]++,Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contain" | "outline" | "text"',elements:[{name:"literal",value:'"contain"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"text"'}]},description:"",defaultValue:{value:'"contain"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["ButtonHTMLAttributes"]};const button02_stories={tags:["autodoc"],title:"Components/Atoms/Button",component:button02,args:{onClick:(0,__webpack_require__("./node_modules/@storybook/test/dist/index.mjs").fn)()}},Default={args:{children:"Button Default"}},Outline={args:{children:"Button Outline",variant:"outline"}},Text={args:{children:"Button Text",variant:"text"}},__namedExportsOrder=["Default","Outline","Text"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button Default"\n  }\n}',...Default.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button Outline",\n    variant: "outline"\n  }\n}',...Outline.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button Text",\n    variant: "text"\n  }\n}',...Text.parameters?.docs?.source}}}}}]);