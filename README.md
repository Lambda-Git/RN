## 项目启动

---
1、安装依赖

```bash
npm install
```

2、进入开发环境

```bash
npm run dev
```

3、构建测试包

```bash
npm run build:qa
```

4、在服务器上启动
```bash
yarn pm2:start
```

1. Next.js 的主要特点和优势是什么？
主要特点：
- 服务器端渲染 (SSR)
- 静态网站生成 (SSG)
- 文件系统路由
- API 路由
- 自动代码分割
- 内置 CSS 和 Sass 支持
- 热模块替换 (HMR)
- 图片优化
- 零配置
2. Next.js 中的渲染方式有哪些？
四种主要渲染方式：
1. SSR (服务器端渲染)javascript
// pages/ssr.js
export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return { props: { data } };
}
2. SSG (静态网站生成)javascript
```
// pages/ssg.js
export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return { props: { data } };
}
```
3. ISR (增量静态再生成)javascript
```
export async function getStaticProps() {
return {
props: { data },
revalidate: 60 // 60秒后重新生成
};
}
```
4. CSR (客户端渲染)javascript
```
import { useEffect, useState } from 'react';
function CSRPage() {
const [data, setData] = useState(null);
useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(setData);
}, []);
}
```

