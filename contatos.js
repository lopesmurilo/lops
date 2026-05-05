const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}
 
let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];
 
function printContact(c, i) {
  console.log(`[${i}] Nome:     ${c.name}`);
  console.log(`    Telefone: ${c.phone}`);
  console.log(`    Email:    ${c.email}`);
}
 
async function main() {
  let running = true;
 
  while (running) {
    console.log("\n------------------------------");
    console.log("O que deseja fazer?");
    console.log("  primeiro  - exibir o primeiro contato");
    console.log("  ultimo    - exibir o ultimo contato");
    console.log("  todos     - exibir todos os contatos");
    console.log("  novo      - adicionar um novo contato");
    console.log("  encerrar  - sair do programa");
    console.log("------------------------------");
 
    const cmd = (await ask("> ")).trim().toLowerCase();
 
    if (cmd === "primeiro") {
      console.log("\nPrimeiro contato:");
      printContact(contacts[0], 0);
    } else if (cmd === "ultimo") {
      console.log("\nUltimo contato:");
      printContact(contacts[contacts.length - 1], contacts.length - 1);
    } else if (cmd === "todos") {
      console.log(`\nTodos os contatos (${contacts.length}):`);
      for (const c of contacts) {
        printContact(c, contacts.indexOf(c));
      }
    } else if (cmd === "novo") {
      const name  = (await ask("Nome: ")).trim();
      const phone = (await ask("Telefone: ")).trim();
      const email = (await ask("Email: ")).trim();
      contacts.push({ name, phone, email });
      console.log(`Contato "${name}" adicionado! Total: ${contacts.length}`);
    } else if (cmd === "encerrar") {
      running = false;
      console.log("Programa encerrado. Ate logo!");
    } else {
      console.log("Comando nao reconhecido. Tente novamente.");
    }
  }
 
  rl.close();
}
 
main();