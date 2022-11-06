
export default {
    props: ['user'],
    template:`
        <section class="actions-container">
            <h1>Select Action</h1> 
            <button v-on:click.stop="$emit('select-user', user.id)">Select</button>
            <button v-on:click.stop="$emit('delete-user', user.id)">Delete</button>
            <button v-on:click.stop="$emit('close-actions-modal')">Close</button>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {

    }, 
    computed:{
    },
    created(){

    },
}