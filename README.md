# 整体说明
1. 使用express开发后台应用
2. 项目使用express脚手架搭建骨架,express搭建骨架命令为 express ${项目名}

# 依赖说明
1. nodemon 文件改动时重启服务器
2. morgan 日志组件
3. config-lite 配置文件中间件

# 运行说明
1. 下载项目后,根据自己的数据库配置config/dev 数据库的路径
2. 根据不同的环境运行,debug 信息: node/exepress:* 或者 node/exepress::app，可根据不同的debug前缀输出自己关心的日志
3. 接口路径前缀:/node_exepress/v1
4. 启动: DEBUG=node/exepress:* npm run devstart
5. 访问: http://127.0.0.1:8080/node_exepress/v1/rule/index 返回json格式数据