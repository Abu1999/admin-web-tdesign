export default function (plop) {
  plop.setGenerator("Component", {
    description: "创建table页面模板",
    prompts: [
      {
        type: "input",
        name: "url",
        message: "请输入文件路径",
      },
    ],
    actions: [
      {
        type: "add",
        force:true,
        path: "src/views/{{url}}/list/index/config.ts",
        templateFile: "plop-templates/template/table/config.ts",
      },
      {
        type: "add",
        force:true,
        path: "src/views/{{url}}/list/index/index.vue",
        templateFile: "plop-templates/template/table/index.vue",
      },
      {
        type: "add",
        force:true,
        path: "src/views/{{url}}/list/index/list.tsx",
        templateFile: "plop-templates/template/table/list.tsx",
      },
      {
        type: "add",
        force:true,
        path: "src/views/{{url}}/list/index/types.ts",
        templateFile: "plop-templates/template/table/types.ts",
      },


      {
        type: "add",
        force:true,
        path: "src/views/{{url}}/list/detail/config.tsx",
        templateFile: "plop-templates/template/detail/config.ts",
      },
      {
        type: "add",
        force:true,
        path: "src/views/{{url}}/list/detail/index.vue",
        templateFile: "plop-templates/template/detail/index.vue",
      },
      {
        type: "add",
        force:true,
        path: "src/views/{{url}}/list/detail/detail.tsx",
        templateFile: "plop-templates/template/detail/detail.tsx",
      },
      {
        type: "add",
        force:true,
        path: "src/views/{{url}}/list/detail/types.ts",
        templateFile: "plop-templates/template/detail/types.ts",
      },
    ],
  });

}
