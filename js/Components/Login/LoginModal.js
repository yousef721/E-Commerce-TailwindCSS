export default function LoginModal() {
  return `
        <div id="login-modal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div class="bg-white p-12 mx-2 w-full max-w-md rounded-md shadow-lg">
            <p id="invalid" class="hidden text-sm text-red-600 mb-2" role="alert">
                Invalid email or password.
            </p>
            <form id="login-form" class="flex flex-col gap-4">
                <label for="email" class="text-gray-500 text-sm">
                Email Address
                </label>
                <input
                type="email"
                id="email"
                placeholder="Email"
                class="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                />
                <label for="password" class="text-gray-500 text-sm">
                Password
                </label>
                <input
                type="password"
                id="password"
                placeholder="Password"
                class="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                />
                <div class="flex justify-between items-center">
                <div class="flex items-center gap-1">
                    <input type="checkbox" id="remember" />
                    <label for="remember" class="text-gray-500 text-sm">
                    Remember me
                    </label>
                </div>
                <a href="" class="text-gray-500 text-sm hover:text-red-600">
                    Forgot Password?
                </a>
                </div>
                <button
                type="submit"
                class="bg-red-600 text-white py-2 px-4 hover:bg-red-700 transition duration-300"
                >
                Login
                </button>
            </form>
            </div>
        </div>
    `;
}
