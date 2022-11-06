


export default {
    props: ['users-list'],
    template: `
        <section class="users-list">
            <h2>Users List</h2>   
            <ul class="users-grid">
                <li class="w100" v-for="user in usersList" :key="user.id">        
                    <user-preview 
                        class="w100"
                        v-on:select-user="debug"
                        v-on:open-actions-modal="$emit('open-actions-modal', user.id)"
                        v-on:close-actions-modal="$emit('close-actions-modal')"
                        v-on:delete-user="$emit('delete-user', id)"
                        v-bind:user="user">
                    </user-preview>
                </li>
            </ul>
        </section>
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
}