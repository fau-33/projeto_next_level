
function populateUfs(){
  const ufSelect = document.querySelector("select[name=uf]")
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then(res => res.json())
  .then( states => {
    for(const state of states){
      ufSelect.innerHTML +=  `<option value='${state.id}'>${state.nome}</option>`
    }
    
  })
}
populateUfs()

function getCities(event){
  const citySelect = document.querySelector("[name=city]")
  const stateInput = document.querySelector("[name=state]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios
  `
  citySelect.innerHTML = "<option value>Selecione a cidade</option>"
  citySelect.disabled = true

  fetch(url)
  .then(res => res.json())
  .then( cities => {
    
    for(const city of cities){
      citySelect.innerHTML +=  `<option value='${city.nome}'>${city.nome}</option>`
    }
    citySelect.disabled = false
    
  })
}


document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)

  // Items de coleta
  // pegar todos os li's
  const itemsToCollect = document.querySelectorAll(".items-grid li")

  for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)

  }

  let selectedItems = [1, 2, 3, 4, 5, 6]

  function handleSelectedItem(event){
    const itemLi = event.target
    // adicionar ou remover uma classe no javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //verificar se existem items selecionados, se sim
    //pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(function(){
      const itemFound = item == itemId
      return itemFound
    })

    //se já estiver selecionado, tirar a seleção.

    //se não tiver selecionado, adicionar a seleção

    //atualizar o campo escondido com os dados selecionados

    
  }













