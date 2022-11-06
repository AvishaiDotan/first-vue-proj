
export default {
    props: ['user'],
    template:`
        <article v-on:click="$emit('open-actions-modal', user.id)">

            <h3>{{ user.name }}</h3>
            <img class="w100" v-bind:src="getUserImg"/>

            <user-selection-modal 
                v-if="user.isOpenModal && !user.isSelected" 
                v-on:select-user="debug"  
                v-on:delete-user="$emit('delete-user', id)"  
                v-on:close-actions-modal="$emit('close-actions-modal')" 
                v-bind:user="user">
            </user-selection-modal>
            
            <ul v-else-if="user.isSelected" class="favorites-list">
                <li v-for="favorite in user.favorites" :key="user.id">        
                    {{favorite}}
                </li>
            </ul>
        </article>
    `,
    data() {
        return {
        }
    },
    methods: {
        debug(id) {
            this.$emit('select-user', id)
        },
    }, 
    computed:{
        getUserImg() {
            return `../icons/${this.user.imgIdx}.png`
        },
    },
}