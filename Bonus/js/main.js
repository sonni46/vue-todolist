Vue.config.devtools = true;

const app = new Vue (
    {
        el:"#root",
        data: {
            newToDo: "",
            check : true,
            toDos: [
                {
                    titolo : "Fare i compiti",
                    done : false,
                },
                {
                    titolo : "Fare la spesa",                          
                    done : false,
                },
                {
                    titolo : "Fare il bucato",
                    done : false,
                },
            ],
        },
        methods: {
            addToDo() {
                if(this.newToDo != "") {
                    this.toDos.push({titolo : this.newToDo,  done : false,})
                    this.newToDo = "";
                }
            },
            removeToDo(index) {
                this.toDos.splice(index,1);
            },
            verification(i){
                this.toDos[i].done = !this.toDos[i].done;
            }
        }
    }
);


