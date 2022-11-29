
/* ----------- CRUD FUNCIONARIOS ---------------*/

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sId = document.querySelector('#m-id')
const sNome = document.querySelector('#m-nome')
const sCPF = document.querySelector('#m-cpf')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const sContratacao = document.querySelector('#m-dataContratacao')
const sFilial = document.querySelector('#m-filial')
const sAtivo = document.querySelector('#m-ativo')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sFuncao.value = itens[index].funcao
    sSalario.value = itens[index].salario
    sContratacao.value = itens[index].dataContratacao
    id = index
  } else {
    sId.value = ''
    sNome.value = ''
    sCPF.value = ''
    sFuncao.value = ''
    sSalario.value = ''
    sContratacao.value = ''
    sFilial.value = ''
    sAtivo.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>R$ ${item.salario}</td>
    <td>${item.dataContratacao}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '' || sContratacao.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].funcao = sFuncao.value
    itens[id].salario = sSalario.value
    itens[id].dataContratacao = sContratacao.value
  } else {
    itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value, 'Data Contratação': sContratacao.value })
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()

/* ----------- CRUD FUNCIONARIOS ---------------*/

const megadiv = document.getElementById('megadiv');
const divIngressos = document.getElementById('divIngressos');

function openFuncionarios(){
  divIngressos.style.display = "none";
  megadiv.style.display = "flex";
  document.getElementById("buttonFunc").style.backgroundColor = "gray";
  document.getElementById("buttonIngressos").style.backgroundColor = "lightgray";
}

function openIngressos(){
  megadiv.style.display = "none";
  divIngressos.style.display = "flex";
  document.getElementById("buttonIngressos").style.backgroundColor = "gray";
  document.getElementById("buttonFunc").style.backgroundColor = "lightgray";
}

var url = document.URL;

if(url == "http://localhost:8081/admin-loggedI"){
  megadiv.style.display = "none";
  divIngressos.style.display = "flex";
  document.getElementById("buttonIngressos").style.backgroundColor = "gray";
  document.getElementById("buttonFunc").style.backgroundColor = "lightgray";
}
else if(url == "http://localhost:8081/admin-loggedF"){
  divIngressos.style.display = "none";
  megadiv.style.display = "flex";
  document.getElementById("buttonFunc").style.backgroundColor = "gray";
  document.getElementById("buttonIngressos").style.backgroundColor = "lightgray";
}


/* ----------- CRUD GANHOS ---------------*/

function changeMonth(){
  document.getElementById("monthNumber").submit();
}

function changeMonthFuncionario(){
  document.getElementById("monthNumberFuncionario").submit();
}


