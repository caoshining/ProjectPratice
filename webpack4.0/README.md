### Webpack4.0-Blog
> Webpack 核心概念
- Entry 入口
- Module 模块 webpack中一切皆为模块
- Chunk 代码库，一个Chunk由十多个模块 组合而成，用于代码合并分割
- Loader 模块转换器，用于把模块原内容按照需求转换为新内容
- Plugin 扩展插件，在Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果
- Output 输出结果
> Webpack 流程

webpack 启动从Entry里配置的Module开始递归解析Entry依赖的所有Module每找到一个Module就会根据配置的Loader去找对应的转换规则，对Module进行转换后，再解析当前的Module依赖。