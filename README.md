<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">NOVA</h1>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/rish78/nova?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/rish78/nova?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/rish78/nova?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/rish78/nova?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<br>
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/Stripe-008CDD.svg?style=flat&logo=Stripe&logoColor=white" alt="Stripe">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📂 Repository Structure](#-repository-structure)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running nova](#-running-nova)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)

---


## 📂 Repository Structure

```sh
└── nova/
    ├── README.md
    ├── app
    │   ├── (auth)
    │   │   └── (routes)
    │   │       ├── layout.tsx
    │   │       ├── sign-in
    │   │       │   └── [[...sign-in]]
    │   │       └── sign-up
    │   │           └── [[...sign-up]]
    │   ├── (dashboard)
    │   │   ├── (routes)
    │   │   │   ├── code
    │   │   │   │   ├── constants.ts
    │   │   │   │   └── page.tsx
    │   │   │   ├── conversation
    │   │   │   │   ├── constants.ts
    │   │   │   │   └── page.tsx
    │   │   │   ├── dashboard
    │   │   │   │   └── page.tsx
    │   │   │   ├── image
    │   │   │   │   ├── constants.ts
    │   │   │   │   └── page.tsx
    │   │   │   ├── music
    │   │   │   │   ├── constants.ts
    │   │   │   │   └── page.tsx
    │   │   │   ├── settings
    │   │   │   │   └── page.tsx
    │   │   │   └── video
    │   │   │       ├── constants.ts
    │   │   │       └── page.tsx
    │   │   └── layout.tsx
    │   ├── (landing)
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── api
    │   │   ├── code
    │   │   │   └── route.ts
    │   │   ├── conversation
    │   │   │   └── route.ts
    │   │   ├── image
    │   │   │   └── route.ts
    │   │   ├── music
    │   │   │   └── route.ts
    │   │   ├── stripe
    │   │   │   └── route.ts
    │   │   ├── video
    │   │   │   └── route.ts
    │   │   └── webhook
    │   │       └── route.ts
    │   ├── favicon.ico
    │   ├── globals.css
    │   └── layout.tsx
    ├── components
    │   ├── crisp-chat.tsx
    │   ├── crisp-provider.tsx
    │   ├── empty.tsx
    │   ├── freecounter.tsx
    │   ├── heading.tsx
    │   ├── landing-content.tsx
    │   ├── landing-hero.tsx
    │   ├── landing-navbar.tsx
    │   ├── mobile-sidebar.tsx
    │   ├── modal-provider.tsx
    │   ├── navbar.tsx
    │   ├── oader.tsx
    │   ├── pro-modal.tsx
    │   ├── sidebar.tsx
    │   ├── subscription-button.tsx
    │   ├── toaster-provider.tsx
    │   └── ui
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── dialog.tsx
    │       ├── form.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── progress.tsx
    │       ├── select.tsx
    │       └── sheet.tsx
    ├── components.json
    ├── constants.ts
    ├── hooks
    │   └── use-pro-modal.tsx
    ├── lib
    │   ├── api-limit.ts
    │   ├── prisma.ts
    │   ├── stripe.ts
    │   ├── subscription.ts
    │   ├── tools.ts
    │   └── utils.ts
    ├── middleware.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── prisma
    │   └── schema.prisma
    ├── public
    │   ├── loader.jpg
    │   ├── logo.png
    │   ├── next.svg
    │   └── vercel.svg
    ├── tailwind.config.ts
    └── tsconfig.json
```

---


## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the nova repository:

```sh
git clone https://github.com/rish78/nova
```

2. Change to the project directory:

```sh
cd nova
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running nova

Use the following command to run nova:

```sh
npm run build && node dist/main.js
```



---


## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/rish78/nova/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/rish78/nova/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/rish78/nova/issues)**: Submit bugs found or log feature requests for Nova.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/rish78/nova
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---
