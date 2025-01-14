# 使用官方 nginx 镜像作为基础镜像
FROM nginx:alpine

# 删除 nginx 默认配置
RUN rm -rf /usr/share/nginx/html/*

# 复制项目文件到容器中
COPY . /usr/share/nginx/html

# 配置 nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 8000 端口
EXPOSE 8000

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"] 