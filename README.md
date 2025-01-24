# roundest_nextjs

## Project Overview
This project is the frontend implementation for "The roundest Pokémon" exercise, built using **Next.js**. It is part of a group of repositories that aim to solve the same exercise using different technologies. This frontend app interacts with various backend implementations to allow users to vote for the roundest Pokémon.

- [roundest_groovy](https://github.com/franBec/roundest_groovy) (Backend in Groovy)
- [roundest_java](https://github.com/franBec/roundest_java) (Backend in Java)
- [roundest_kotlin](https://github.com/franBec/roundest_kotlin) (Backend in Kotlin)

## Getting Started

### Prerequisites
- **Node.js** (v20 recommended)
- **npm** (package manager)

### Run Locally
1. Clone the repository:
    ```bash
    git clone https://github.com/franBec/roundest_nextjs
    ```
2. Navigate to the project directory:
    ```bash
    cd roundest_nextjs
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    - Edit `env.local` to point where the backends are running.
    ```env
    NEXT_PUBLIC_API_BACKEND_JAVA=http://localhost:8080 #or wherever is running
   #... other backends variables
    ```
5. Run the development server:
    ```bash
    npm run dev
    ```
6. Open your browser and navigate to `http://localhost:3000`.

### Build for production

This project is meant to be run alongside the backend services. For a complete setup, including both the frontend and backend, use the `docker-compose` configuration provided in the [roundest_docker_compose](https://github.com/franBec/roundest_docker_compose) repository.

## Author
Franco Exequiel Becvort <🐤/>
- [Linkedin](https://www.linkedin.com/in/franco-becvort/)
- [Website](https://pollito.dev/)

This project is intended for educational purposes.