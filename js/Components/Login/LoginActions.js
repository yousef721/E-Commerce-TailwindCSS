class Login {
  constructor() {
    this.storageKey = "user";

    if (!localStorage.getItem(this.storageKey)) {
      const defaultUser = {
        email: "admin@admin.com",
        password: "admin",
      };

      localStorage.setItem(this.storageKey, JSON.stringify(defaultUser));
    }
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  login(email, password) {
    const user = this.getUser();

    if (email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("currentUser", email);
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
  }

  isLoggedIn() {
    return localStorage.getItem("isLoggedIn");
  }
}

export const login = new Login();

const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const success = login.login(email, password);

    if (success) {
      document.getElementById("login-modal")?.classList.add("hidden");
      location.reload();
    } else {
      document.getElementById("invalid")?.classList.remove("hidden");
    }
  });
}
