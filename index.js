// fetch Add button
const addButton= document.querySelector('.addButton');

//fetch input (any todo entered by the user)
var input=document.querySelector('.input');

//dynamically create the input boxes,fetch the data container
const container=document.querySelector('.dataContainer');

//create class and functions
class item
{

    constructor(itemName)
    {
        this.createDiv(itemName);
    }

    //create Todo dynamically
            
    createDiv(itemName)
    {
        //data container create start
        
        //create Item
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        itemBox.classList.add('col');

        //create row
        let rowBox = document.createElement('div');
        rowBox.classList.add('row');
        rowBox.classList.add('rowflex');

        //create col-sm-8
        let colBox1 = document.createElement('div');
        colBox1.classList.add('col-md-8');
        
        //create Inputbox
        let input=document.createElement('input');
        input.value=itemName;
        input.classList.add('item_input');
        input.type='text';
        input.style.color='black';
        input.style.fontsize='25px';
        input.disabled=true;

        //create col-sm-2
        let colBox2 = document.createElement('div');
        colBox2.classList.add('col-md-2');
        colBox2.classList.add('col-6');
        
        

        //create edit button 
        let editButton=document.createElement('button');
        editButton.innerHTML='edit';
        editButton.classList.add('editButton');
        

         //create col-sm-2
         let colBox3 = document.createElement('div');
         colBox3.classList.add('col-md-2');
         colBox3.classList.add('col-6');
         

        //create remove button 
        let removeButton=document.createElement('button');
        removeButton.innerHTML='remove';
        removeButton.classList.add('removeButton');        
        
        //data container end

        //append the container with the items
        container.appendChild(itemBox);
        itemBox.appendChild(rowBox);

        rowBox.appendChild(colBox1);
        colBox1.appendChild(input);

        rowBox.appendChild(colBox2)
        colBox2.appendChild(editButton);

        rowBox.appendChild(colBox3)
        colBox3.appendChild(removeButton);

        //Add EventListener
            //1-Edit Button
            editButton.addEventListener('click',()=>{
                this.edit(input);
            });

            //2-Remove Button
            removeButton.addEventListener('click',()=>{
                this.remove(itemBox);
            });
        //Adding Event Listener Completed       
    }
    
    // Edit Button Function
    edit(item){
        item.disabled =! item.disabled;
    }

    //Remove Button Function
    remove(item){
        
        container.removeChild(item);
    }
}
function check(){
    if(input.value !='')
    {
        new item(input.value);
        input.value="";

    }
}
addButton.addEventListener('click',check);