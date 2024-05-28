

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

 
## 目录

- [Rookie Discord Clone](#rookie-discord-clone)
  - [目录](#目录)
    - [上手指南](#上手指南)
          - [开发前的配置要求](#开发前的配置要求)
          - [**安装步骤**](#安装步骤)
    - [文件目录说明](#文件目录说明)
    - [开发的架构](#开发的架构)
    - [部署](#部署)
    - [使用到的框架](#使用到的框架)
    - [贡献者](#贡献者)
      - [如何参与开源项目](#如何参与开源项目)
    - [版本控制](#版本控制)
    - [作者](#作者)
    - [版权说明](#版权说明)
    - [鸣谢](#鸣谢)

### 上手指南

###### 开发前的配置要求

> 在开始启动 Rookie Discord 前，需注册以下平台，并创建应用。

1. [Clerk](https://clerk.com/).一个全面的用户管理平台，可以通过配置，快速的让 APP 接入不限于 `Google、Github、LinkedIn` 等平台的第三方登录.`Rookie Discord` 使用 Clerk 接入登录
2. [Uploadthing](https://uploadthing.com/).一个简单易用的云文件存储平台；`Rookie Discord` 中的文件使用 Uploadthing 存储
3. [LIVEKIT](https://livekit.io/).一个实时音视频平台；用于快速构建实时语音和视频应用程序

###### **安装步骤**

1. 克隆仓库到本地

```sh
git clone https://github.com/Eumenides1/rookie-discord.git
```
2. 新建环境配置文件
在项目根目录下新建`.env`文件，并添加以下配置：
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

3. 

### 文件目录说明
eg:

```
filetree 
├── ARCHITECTURE.md
├── LICENSE.txt
├── README.md
├── /account/
├── /bbs/
├── /docs/
│  ├── /rules/
│  │  ├── backend.txt
│  │  └── frontend.txt
├── manage.py
├── /oa/
├── /static/
├── /templates/
├── useless.md
└── /util/

```





### 开发的架构 

请阅读[ARCHITECTURE.md](https://github.com/shaojintian/Best_README_template/blob/master/ARCHITECTURE.md) 查阅为该项目的架构。

### 部署

暂无

### 使用到的框架

- [xxxxxxx](https://getbootstrap.com)
- [xxxxxxx](https://jquery.com)
- [xxxxxxx](https://laravel.com)

### 贡献者

请阅读**CONTRIBUTING.md** 查阅为该项目做出贡献的开发者。

#### 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。


1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

xxx@xxxx

知乎:xxxx  &ensp; qq:xxxxxx    

 *您也可以在贡献者名单中参看所有参与该项目的开发者。*

### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE.txt](https://github.com/shaojintian/Best_README_template/blob/master/LICENSE.txt)

### 鸣谢


- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [xxxxxxxxxxxxxx](https://connoratherton.com/loaders)

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