abstract class UIElement {
  constructor(protected id: string) {}
  abstract rander(): string;
}

class Input extends UIElement {
  constructor(
    id: string,
    private type: string,
    private placeholder: string,
  ) {
    super(id);
  }

  rander() {
    return `<input id="${this.id}" type="${this.type}"placeholder="${this.placeholder}" />`;
  }
}

class Button extends UIElement {
  constructor(
    id: string,
    private label: string,
  ) {
    super(id);
  }

  rander() {
    return `<button id="${this.id}"> ${this.label} </button>`;
  }
}

class Form extends UIElement {
  private children: UIElement[] = [];

  appendChild(child: UIElement) {
    this.children.push(child);
  }

  rander() {
    const childrenHTML = this.children
      .map((child) => child.rander())
      .join("\n");

    //  console.log(childrenHTML)
    return `<form id"${this.id}" style = "border: 1px solid #ccc; padding 20px; display: flex; flex-direction: column; max-width: 300px; borer-radius: 10px gap: 5px;; "> \n${childrenHTML} \n</form>`;
  }
}
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("btn", "submit");
const formElement = new Form("login-form");
// console.log(emailInput.rander());
// console.log(passwordInput.rander());
// console.log(submitButton.rander())

formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);

console.log(formElement.rander());

const rootElement = document.getElementById("root");

if (rootElement) {
  rootElement.innerHTML = formElement.rander();
}
