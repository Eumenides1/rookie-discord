

# Rookie Discord Clone

 菜鸟 IM 项目前端代码 - 仿 Discord UI 即时通讯/社区/群组平台

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />

<p align="center">
  <a href="https://github.com/Eumenides1/rookie-discord">
    <img src="https://media.discordapp.net/attachments/1038727698249433138/1244834026322137208/ashbur_a_logo_for_full_stack_IM_program_8f488728-db77-439b-b0be-1d7d700d27fc.png?ex=66568d87&is=66553c07&hm=af9b77eaaa447b970015f2c13ceddec4b9fe996e32759594a3a6d6afffa6a17e&=&format=webp&quality=lossless&width=700&height=700" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Rookie Discord Clone</h3>
  <p align="center">
    Full Stack IM Project
    <br />
    <a href="https://github.com/shaojintian/Best_README_template"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Eumenides1/rookie-discord">查看代码</a>
    ·
    <a href="https://github.com/Eumenides1/rookie-discord/issues">报告Bug</a>
    ·
    <a href="https://github.com/Eumenides1/rookie-discord/issues">提出新特性</a>
  </p>

</p>

 

### 上手指南

#### 开发前的配置要求
```
Node Version >= v18.19.0
```

> 在开始启动 Rookie Discord 前，需注册以下平台，并创建应用。

1. [Clerk](https://clerk.com/).一个全面的用户管理平台，可以通过配置，快速的让 APP 接入不限于 `Google、Github、LinkedIn` 等平台的第三方登录.`Rookie Discord` 使用 Clerk 接入登录
2. [Uploadthing](https://uploadthing.com/).一个简单易用的云文件存储平台；`Rookie Discord` 中的文件使用 Uploadthing 存储
3. [LIVEKIT](https://livekit.io/).一个实时音视频平台；用于快速构建实时语音和视频应用程序

#### **安装步骤**

1. 克隆仓库到本地

```sh
git clone https://github.com/Eumenides1/rookie-discord.git
```
2. 新建环境配置文件
在项目根目录下新建`.env`文件，并添加以下配置， 根据[开发前配置要求](#开发前的配置要求)替换配置文件中的相关配置
```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= {Clerk app key} // 注册 clerk 应用获取
CLERK_SECRET_KEY={Clerk app secret} // 注册 clerk 应用获取
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
UPLOADTHING_SECRET={uploadthing secret}
UPLOADTHING_APP_ID={uploadthing appid}
DATABASE_URL="mysql://{username}:{password}@{db IP}:{db: port}/rookie_discord?schema=public"
LIVEKIT_API_KEY={live kit api key}
LIVEKIT_API_SECRET={livekit secret}
NEXT_PUBLIC_LIVEKIT_URL={livekit wss url}
```

3. 安装依赖
```sh
## npm 
npm install

## yarn
yarn install
```
4. 初始化数据库
> 仓库自带数据库模型文件 @prisma/schema.prisma
```sh
## 1 step 生成数据库模型
npx prisma generate

## 2 step 推送数据库表到数据库
npx prisma db push

## 3 step  prisma 提供的数据库可视化界面
npx prisma studio
```

5. 启动
```sh
npm run dev

```




<!-- links -->
[your-project-path]:shaojintian/Best_README_template
[contributors-shield]: https://img.shields.io/github/contributors/shaojintian/Best_README_template.svg?style=flat-square
[contributors-url]: https://github.com/shaojintian/Best_README_template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shaojintian/Best_README_template.svg?style=flat-square
[forks-url]: https://github.com/shaojintian/Best_README_template/network/members
[stars-shield]: https://img.shields.io/github/stars/shaojintian/Best_README_template.svg?style=flat-square
[stars-url]: https://github.com/shaojintian/Best_README_template/stargazers
[issues-shield]: https://img.shields.io/github/issues/shaojintian/Best_README_template.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/shaojintian/Best_README_template.svg
[license-shield]: https://img.shields.io/github/license/shaojintian/Best_README_template.svg?style=flat-square
[license-url]: https://github.com/shaojintian/Best_README_template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shaojintian