# AI Image Editor 🎨✨

An innovative web application that empowers users to unleash their creativity and edit images with the help of artificial intelligence. This project provides a user-friendly interface with a suite of powerful editing tools, making image manipulation accessible to everyone.

## 🚀 Features

- **AI-Powered Editing**: Leverage the power of AI to enhance and transform your images.
- **Real-time Collaboration**: Work on projects with team members simultaneously.
- **Cross-Platform Compatibility**: Access the editor from any device with a web browser.
- **User Authentication**: Securely manage user accounts with Clerk integration.
- **Theme Support**: Customize the look and feel with light and dark themes.
- **Drag and Drop Upload**: Easily upload images with drag-and-drop functionality.
- **Canvas Editor**: A robust canvas editor powered by Fabric.js for precise image manipulation.
- **Project Management**: Create, edit, and delete projects seamlessly.
- **Responsive Design**: Enjoy a consistent experience across various screen sizes.
- **Plan Management**: Upgrade modal to handle plan limits for project creation.
- **Toast Notifications**: Sonner integration for user-friendly notifications.

## 🛠️ Tech Stack

- **Frontend**:
    - React
    - Next.js
    - Radix UI
    - Lucide React (icons)
    - Class Variance Authority (CVA)
    - clsx
    - Tailwind Merge
    - Next Themes
    - React Colorful (color picker)
    - React Dropzone (file uploads)
    - React Spinners (loading indicators)
    - Fabric.js (canvas manipulation)
    - Tailwind CSS
    - tw-animate-css
- **Backend**:
    - Convex (real-time data platform)
- **Authentication**:
    - Clerk
- **Image Handling**:
    - ImageKit.io
- **Utilities**:
    - date-fns
    - Sonner (toast notifications)
- **Linting**:
    - ESLint
- **Other**:
    - PostCSS
    - JavaScript
    - jsconfig.json

## 📦 Installation

### Prerequisites

- Node.js (version >= 18)
- npm or yarn package manager
- Convex account and project
- Clerk account and application
- ImageKit.io account
- Unsplash API key (if using Unsplash integration)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd ai-image-editor
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add the following environment variables, replacing the placeholders with your actual values:

    ```
    NEXT_PUBLIC_CONVEX_URL=<your_convex_url>
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
    CLERK_SECRET_KEY=<your_clerk_secret_key>
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=<your_imagekit_url_endpoint>
    IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
    IMAGEKIT_PUBLIC_KEY=<your_imagekit_public_key>
    NEXT_PUBLIC_UNSPLASH_API_KEY=<your_unsplash_api_key>
    ```

## 💻 Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 📂 Project Structure

```
ai-image-editor/
├── app/
│   ├── (main)/
│   │   ├── dashboard/
│   │   │   ├── _components/
│   │   │   │   ├── new-project-modal.jsx
│   │   │   │   ├── project-card.jsx
│   │   │   │   └── project-grid.jsx
│   │   │   └── page.jsx
│   │   ├── editor/
│   │   │   ├── [projectId]/
│   │   │   │   ├── _components/
│   │   │   │   │   ├── canvas.jsx
│   │   │   │   │   ├── editor-sidebar.jsx
│   │   │   │   │   └── editor-topbar.jsx
│   │   │   │   └── page.jsx
│   │   └── page.jsx
│   ├── globals.css
│   └── layout.js
├── components/
│   ├── convex-client-provider.jsx
│   ├── features.jsx
│   ├── floating-shapes.jsx
│   ├── header.jsx
│   ├── interactive-stats.jsx
│   ├── pricing.jsx
│   ├── theme-provider.jsx
│   └── ui/
│       ├── alert.jsx
│       ├── badge.jsx
│       ├── button.jsx
│       ├── card.jsx
│       ├── dialog.jsx
│       ├── input.jsx
│       ├── label.jsx
│       └── ...
├── convex/
│   └── ...
├── hooks/
│   ├── use-convex-mutation.js
│   └── use-convex-query.js
├── public/
│   └── ...
├── .env
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js
```

## 📸 Screenshots

(Add screenshots of the application here)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [your-email@example.com](mailto:your-email@example.com).

## 💖 Thanks Message

Thank you for checking out the AI Image Editor project! Your interest and contributions are greatly appreciated.

This is written by [readme.ai](https://readme-generator-phi.vercel.app/).
