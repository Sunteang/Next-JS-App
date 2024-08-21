"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[268],{"./app/components/atoms/input/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ErrorField:()=>ErrorField,NumberField:()=>NumberField,PasswordField:()=>PasswordField,WithInteraction:()=>WithInteraction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextField_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function cov_1ak46tw2j6(){var path="/Users/sunteang/Downloads/sunteangserey/SabaiCode/SabaiPractice/next-app/app/components/atoms/input/TextField.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"3ed261ec20a6e67849f6dfad6964fd44140621e9"===coverage[path].hash||(coverage[path]={path:"/Users/sunteang/Downloads/sunteangserey/SabaiCode/SabaiPractice/next-app/app/components/atoms/input/TextField.tsx",statementMap:{0:{start:{line:3,column:18},end:{line:23,column:1}},1:{start:{line:4,column:4},end:{line:22,column:7}},2:{start:{line:25,column:0},end:{line:62,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:18},end:{line:3,column:19}},loc:{start:{line:3,column:74},end:{line:23,column:1}},line:3}},branchMap:{0:{loc:{start:{line:3,column:35},end:{line:3,column:49}},type:"default-arg",locations:[{start:{line:3,column:47},end:{line:3,column:49}}],line:3},1:{loc:{start:{line:7,column:12},end:{line:11,column:14}},type:"binary-expr",locations:[{start:{line:7,column:12},end:{line:7,column:17}},{start:{line:7,column:35},end:{line:11,column:14}}],line:7},2:{loc:{start:{line:13,column:146},end:{line:13,column:175}},type:"cond-expr",locations:[{start:{line:13,column:154},end:{line:13,column:170}},{start:{line:13,column:173},end:{line:13,column:175}}],line:13},3:{loc:{start:{line:17,column:12},end:{line:20,column:14}},type:"binary-expr",locations:[{start:{line:17,column:12},end:{line:17,column:17}},{start:{line:17,column:35},end:{line:20,column:14}}],line:17}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,sources:["/Users/sunteang/Downloads/sunteangserey/SabaiCode/SabaiPractice/next-app/app/components/atoms/input/TextField.tsx"],sourcesContent:['import React, { InputHTMLAttributes } from "react";\nimport { UseFormRegisterReturn } from "react-hook-form";\n\ninterface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {\n  label?: string;\n  error?: string;\n  register?: UseFormRegisterReturn;\n}\n\nconst TextField: React.FC<TextFieldProps> = ({\n  label,\n  error,\n  className = "",\n  register,\n  ...props\n}) => {\n  return (\n    <div className={`mb-4 ${className}`}>\n      {label && (\n        <label\n          className="block text-gray-700 text-sm font-bold mb-2"\n          htmlFor={props.id}\n        >\n          {label}\n        </label>\n      )}\n      <input\n        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${\n          error ? "border-red-500" : ""\n        }`}\n        {...props}\n        {...register}\n      />\n      {error && <p className="text-red-500 text-xs italic">{error}</p>}\n    </div>\n  );\n};\n\nexport default TextField;\n'],names:["React","TextField","label","error","className","register","props","div","htmlFor","id","input","p"],mappings:";AAAA,OAAOA,WAAoC,QAAQ;AASnD,MAAMC,YAAsC,CAAC,EAC3CC,KAAK,EACLC,KAAK,EACLC,YAAY,EAAE,EACdC,QAAQ,EACR,GAAGC,OACJ;IACC,qBACE,MAACC;QAAIH,WAAW,CAAC,KAAK,EAAEA,UAAU,CAAC;;YAChCF,uBACC,KAACA;gBACCE,WAAU;gBACVI,SAASF,MAAMG,EAAE;0BAEhBP;;0BAGL,KAACQ;gBACCN,WAAW,CAAC,oHAAoH,EAC9HD,QAAQ,mBAAmB,GAC5B,CAAC;gBACD,GAAGG,KAAK;gBACR,GAAGD,QAAQ;;YAEbF,uBAAS,KAACQ;gBAAEP,WAAU;0BAA+BD;;;;AAG5D;AAEA,eAAeF,UAAU"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3ed261ec20a6e67849f6dfad6964fd44140621e9"});var actualCoverage=coverage[path];return cov_1ak46tw2j6=function(){return actualCoverage},actualCoverage}cov_1ak46tw2j6(),cov_1ak46tw2j6().s[0]++;const TextField=({label,error,className=(cov_1ak46tw2j6().b[0][0]++,""),register,...props})=>(cov_1ak46tw2j6().f[0]++,cov_1ak46tw2j6().s[1]++,(0,jsx_runtime.jsxs)("div",{className:`mb-4 ${className}`,children:[(cov_1ak46tw2j6().b[1][0]++,label&&(cov_1ak46tw2j6().b[1][1]++,(0,jsx_runtime.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:props.id,children:label}))),(0,jsx_runtime.jsx)("input",{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "+(error?(cov_1ak46tw2j6().b[2][0]++,"border-red-500"):(cov_1ak46tw2j6().b[2][1]++,"")),...props,...register}),(cov_1ak46tw2j6().b[3][0]++,error&&(cov_1ak46tw2j6().b[3][1]++,(0,jsx_runtime.jsx)("p",{className:"text-red-500 text-xs italic",children:error})))]})),input_TextField=TextField;cov_1ak46tw2j6().s[2]++,TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},register:{required:!1,tsType:{name:"UseFormRegisterReturn"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["InputHTMLAttributes"]};var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const TextField_stories={title:"components/atoms/TextField",component:input_TextField,args:{onChange:(0,dist.fn)()}},Default={args:{type:"text",label:"Label",placeholder:"example...",name:"default"}},PasswordField={args:{label:"Password Field",type:"password",value:"password",name:"password"}},NumberField={args:{label:"Number Field",type:"number",value:"123",name:"number"}},ErrorField={args:{label:"Error Field",type:"text",name:"error",error:"This field is required"}},WithInteraction={args:{...Default.args},play:async({args,canvasElement,step})=>{const canvas=(0,dist.ux)(canvasElement),input=canvas.getByPlaceholderText("example...");await step("Change input",(async()=>{await dist.Q4.type(input,"Type some text...",{delay:100})})),await(0,dist.fm)((()=>{(0,dist.E3)(args.onChange).toHaveBeenCalled(),(0,dist.E3)(input).toHaveValue("Type some text...")}))}},__namedExportsOrder=["Default","PasswordField","NumberField","ErrorField","WithInteraction"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "text",\n    label: "Label",\n    placeholder: "example...",\n    name: "default"\n  }\n}',...Default.parameters?.docs?.source}}},PasswordField.parameters={...PasswordField.parameters,docs:{...PasswordField.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Password Field",\n    type: "password",\n    value: "password",\n    name: "password"\n  }\n}',...PasswordField.parameters?.docs?.source}}},NumberField.parameters={...NumberField.parameters,docs:{...NumberField.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Number Field",\n    type: "number",\n    value: "123",\n    name: "number"\n  }\n}',...NumberField.parameters?.docs?.source}}},ErrorField.parameters={...ErrorField.parameters,docs:{...ErrorField.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Error Field",\n    type: "text",\n    name: "error",\n    error: "This field is required"\n  }\n}',...ErrorField.parameters?.docs?.source}}},WithInteraction.parameters={...WithInteraction.parameters,docs:{...WithInteraction.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args\n  },\n  play: async ({\n    args,\n    canvasElement,\n    step\n  }) => {\n    const canvas = within(canvasElement);\n    const testValue = "Type some text...";\n    const input = canvas.getByPlaceholderText("example...");\n    await step("Change input", async () => {\n      await userEvent.type(input, testValue, {\n        delay: 100\n      });\n    });\n    await waitFor(() => {\n      expect(args.onChange).toHaveBeenCalled();\n      expect(input).toHaveValue(testValue);\n    });\n  }\n}',...WithInteraction.parameters?.docs?.source}}}}}]);