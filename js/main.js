Vue.config.devtools = true;

const app = new Vue (
    {
        el:"#root",
        data: {
            newToDo: "",
            toDos: [
                "fare i compiti",
                "fare la spesa",
                "fare il bucato",
            ],
        },
        methods: {
            addToDo() {
                if(this.newToDo != "") {
                    this.toDos.push(this.newToDo);
                    this.newToDo = "";
                }
            },
            removeToDo(index) {
                this.toDos.splice(index,1);
            }

        }
    }
)