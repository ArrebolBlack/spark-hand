# SPARK Hand Project Page - Goal

## 项目目标
为 IROS 2025 论文 "SPARK Hand: Scooping-Pinching Adaptive Robotic Hand with Kempe Mechanism for Vertical Passive Grasp in Environmental Constraints" 制作一个学术 project page，基于 Nerfies 模板风格，部署在 GitHub Pages。

## 论文信息
- **标题**: SPARK Hand: Scooping-Pinching Adaptive Robotic Hand with Kempe Mechanism for Vertical Passive Grasp in Environmental Constraints
- **作者**: Jiaqi Yin (Harbin Institute of Technology / X-Institute), Tianyi Bi (Southern University of Science and Technology / X-Institute), Wenzeng Zhang (Tsinghua University / X-Institute, IEEE Member)
- **会议**: IROS 2025
- **论文链接**:
  - IEEE: https://ieeexplore.ieee.org/document/11246150
  - arXiv: https://arxiv.org/abs/2504.20506
  - PDF: `assets/IROS25_2600_FI.pdf`

## 可用材料
1. 11 张论文原图 (`assets/figure_from_paper_FI/`)
2. Graphical Abstract / Teaser 图 (`assets/Black and White Minimalist Creative Portfolio Presentation.png`) — 横版图形摘要，含实验序列+机构切换示意+贡献点
3. 演示视频 (`assets/IROS25_2600_VI_i.mp4`, 8.5MB)
4. Poster PDF (`assets/poster_3.pdf`)
5. 报告 PPT (`assets/TuCT19.8.pptx`)

## 模板
基于 Nerfies (https://github.com/nerfies/nerfies.github.io) 单页面模板，沿用其配色（白底深色文字学术风格）、字体（Google Sans / Noto Sans）、Bulma CSS 框架。

## 网站架构（10 个板块）

### 1. Hero
- 论文标题
- 作者列表（含单位上标）
- 机构名称
- Tagline: "A passive adaptive robotic hand that automatically switches between pinching and scooping for surface-constrained grasping."
- 按钮: Paper | arXiv | IEEE | Video | Poster

### 2. Teaser
- Graphical Abstract 图作为主视觉（直接使用，已知问题：QR code 过时、背景非纯白，可接受）
- 或 autoplay muted teaser video
- 副标题一句核心卖点

### 3. Key Contributions
- 3 个卡片:
  - **Passive Mode Switching**: no extra actuators or sensors
  - **Kempe-based Vertical Fingertip Trajectory**: stable surface interaction
  - **Dual Grasping Modes**: pinching + scooping for thin/flat objects

### 4. Abstract
- 论文原文 Abstract，控制在 1-2 段

### 5. Prototype / Hardware
- Fig1: SPARK Hand 硬件整体外观
- Fig8: 3D 模型 + 机械臂安装实物照

### 6. Method
- **Mechanism Design**: Fig2 (Kempe 连杆机构)
- **Passive Mode Switching**: Fig3 (pinching → scooping 过渡)
- **Kinematic Validation**: Fig5 (SAM 仿真)
- **Technical Details**: Fig4 / Fig6 / Fig7 作为可折叠补充内容

### 7. Experiments
- 三张实验卡片并排（桌面三列，移动端纵向）:
  - **Pinching Grasp**: Fig9（卡片、螺丝）
  - **Symmetric Scooping**: Fig10（卡片、橙子、钥匙扣）
  - **Asymmetric Scooping**: Fig11（倾斜铲取）
- 每张配一句话描述，可点击放大

### 8. Video
- HTML5 `<video>` 嵌入 `IROS25_2600_VI_i.mp4`

### 9. Poster / Slides
- Poster 和 PPT 的下载链接按钮

### 10. BibTeX + Footer
- 格式化引用代码块
- 致谢 (E-SRT / ORIC / X-Institute)
- CC BY-SA 4.0 License
- 模板来源标注

## 技术栈
- 单页面 HTML (index.html)
- Bulma CSS 框架 + 自定义 index.css
- jQuery + bulma-carousel + bulma-slider
- Google Fonts (Google Sans, Noto Sans, Castoro)
- 部署: GitHub Pages

## 边界（不包含）
- 不需要 3D 交互演示
- 不需要双语切换
- 不需要后端/CMS
- 不需要 Code/CAD 下载（除非后续提供）
