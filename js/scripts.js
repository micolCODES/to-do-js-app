// vanilla script


function newItem(){
    //1. Adding a new item to the list of items: 
    // jQuery

        //1. Adding a new item to the list of items: 

        let li = $('<li></li>');
        let inputValue = $('#input').val();
        li.append(inputValue);

        if (inputValue ==='') {
            alert("You must write something!");
            } else {  
            let list = $('#list');  
            list.append(li);    
        }

        //2. Crossing out an item from the list of items:
        
        li.on('click', function(){
            li.toggleClass('strike');
        });

        //3(i). Adding the delete button "X": 
        let crossOutButton = $('<crossoutbutton></crossoutbutton>');
        crossOutButton.append(document.createTextNode('❌'));
        li.append(crossOutButton);
        crossOutButton.on('click', deleteListItem);
        function deleteListItem(){
            li.addClass('delete')
        }

        //4. Reordering the items:
        $('#list').sortable();

    }