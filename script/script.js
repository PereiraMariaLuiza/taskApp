function addTask() {

  
  // Pega o texto digitado no campo de entrada
  var inputTask = document.getElementById("inputTask").value;
  var inputDate = document.getElementById("inputDate").value; // Pega a data digitada

  // Cria um novo elemento de lista
  var newTask = document.createElement("li");
  newTask.id = "taskAdd"; // Adicionando o ID "taskAdd" ao elemento <li>
  newTask.setAttribute("data-date", inputDate); // Adiciona um atributo de data ao elemento <li>

  // Cria um checkbox para marcar a tarefa como concluída ou não
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() {
    // Se o checkbox for marcado, adiciona uma classe de estilo à tarefa
    if (this.checked) {
      newTask.classList.add("completed");
    } else {
      newTask.classList.remove("completed");
    }
  });

  // Cria um elemento de parágrafo para o texto da tarefa
  var taskText = document.createElement("span");
  taskText.textContent = inputTask + " | Data de conclusão: " + inputDate; // Adiciona a data ao texto da tarefa

  // Cria um botão SVG para remover a tarefa
  var removeButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  removeButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  removeButton.setAttribute("width", "16");
  removeButton.setAttribute("height", "16");
  removeButton.setAttribute("fill", "currentColor");
  removeButton.setAttribute("class", "bi bi-x-circle-fill");
  removeButton.setAttribute("viewBox", "0 0 16 16");
  removeButton.addEventListener("click", function() {
      // Remove o pai do botão (ou seja, o <li> que contém o texto e o botão)
      this.parentNode.remove();
  });

  // Cria o caminho dentro do botão SVG
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z");

  // Adiciona o caminho ao botão SVG
  removeButton.appendChild(path);

  // Adiciona o checkbox, o texto da tarefa e o botão ao novo elemento de lista
  newTask.appendChild(checkbox);
  newTask.appendChild(taskText);
  newTask.appendChild(removeButton);

  // Encontra a lista pela ID
  var lista = document.getElementById("listTask");

  // Adiciona o novo elemento à lista
  lista.appendChild(newTask);

  // Ordena a lista por data
  sortListByDate();
}

function sortListByDate() {
  var list = document.getElementById("listTask");
  var items = list.childNodes;

  var itemsArr = [];
  for (var i in items) {
    if (items[i].nodeType == 1) { // Get rid of the whitespace text nodes
      itemsArr.push(items[i]);
    }
  }

  itemsArr.sort(function(a, b) {
    return new Date(a.getAttribute("data-date")) - new Date(b.getAttribute("data-date"));
  });

  for (i = 0; i < itemsArr.length; ++i) {
    list.appendChild(itemsArr[i]);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Adiciona um ouvinte de evento de envio ao formulário
  document.getElementById("taskForm").addEventListener("submit", function(event) {
      // Previne o comportamento padrão do formulário (evita a submissão)
      event.preventDefault();
      
      // Chama a função para adicionar uma nova tarefa
      addTask();
  });
});


//Função de validação da criação de contas 
function validateForm() {
  var username = document.getElementById("validationServerUsername").value;
  var email = document.getElementById("validationServer03").value;
  var termsChecked = document.getElementById("invalidCheck3").checked;

  // Verifica se o campo de nome de usuário está vazio
  if (username.trim() === "") {
    document.getElementById("validationServerUsernameFeedback").innerText = "Por favor, escolha um nome de usuário";
    return false;
  }

  // Verifica se o campo de email está vazio
  if (email.trim() === "") {
    document.getElementById("validationServer03Feedback").innerText = "Por favor, insira um endereço de email";
    return false;
  }

  // Verifica se os termos foram aceitos
  if (!termsChecked) {
    document.getElementById("invalidCheck3Feedback").innerText = "Você deve aceitar os termos de uso";
    return false;
  }

  // Se todos os campos estiverem preenchidos e os termos foram aceitos, envie o formulário
  alert("Formulário enviado com sucesso!");
  return true;
}



// Função para exibir os Termos de Uso
function exibirTermosDeUso() {
  var termosDeUso = "Termos de Uso - Site de Lista de Tarefas\n\n" +
      "1. Uso do Serviço:\n" +
      "   Nosso site de lista de tarefas é destinado ao uso pessoal e não comercial. Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes Termos de Uso.\n\n" +
      "2. Registro:\n" +
      "   Alguns recursos do nosso site podem exigir registro. Ao se registrar, você concorda em fornecer informações verdadeiras, precisas e atualizadas. Você é responsável por manter a confidencialidade de suas credenciais de login.\n\n" +
      "3. Privacidade:\n" +
      "   Respeitamos a sua privacidade. Ao usar nosso site, você concorda com nossa Política de Privacidade, que descreve como coletamos, usamos e divulgamos suas informações.\n\n" +
      "4. Conteúdo do Usuário:\n" +
      "   Você é o único responsável por todo o conteúdo que você cria, publica, exibe ou compartilha em nosso site. Ao enviar conteúdo, você nos concede uma licença mundial, não exclusiva, livre de royalties, para usar, modificar, exibir e distribuir esse conteúdo em conexão com a operação do nosso site.\n\n";

confirm(termosDeUso);
  
}


//função para o menu interativo

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks,){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init(){
    if(this.mobileMenu){
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init()

