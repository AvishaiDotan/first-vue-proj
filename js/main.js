const { createApp } = Vue
import userPreview from "./cmps/user-preview.cmp.js"
import usersList from "./cmps/users-list.cmp.js"
import userSelectionModal from "./cmps/user-selection-modal.cmp.js"

const app = createApp({
    template:`
        <header class="main-layout full">
            <div>
                <h1>Netflix</h1> 
                <img class="sign-in-icon" v-on:click="openRegModal" src="icons/personal.png"/>
            </div>
        </header>

        <main class="main-layout full">
            <users-list
                v-on:select-user="selectUser"
                v-on:open-actions-modal="openActionsModal"
                v-on:close-actions-modal="closeActionsModal"
                v-on:delete-user="deleteUser"
                v-bind:users-list="users">
            </users-list>
        </main> 

        <div class="reg-modal" v-if="isRegModalOpen">
            <h2>Register Menu</h2>
            <label class="register-actions-container">
                <span>Name:</span>
                <input type="text" v-model="currName" v-on:submit="addUser()"/>
                <button v-on:click.stop="addUser()">Add</button>
            </label>
        </div>
    `,
    data() {
        return {
            isRegModalOpen: false,
            nextIdx: 1,
            nextId: 5,
            currName: '',
            users: [
                {name: 'Alon', favorites: ['Lord of the ring', 'Harry Potter', 'Arrow'], imgIdx: 1, isOpenModal: false, id: 1, isSelected: false},
                {name: 'Shifra', favorites: ['Titans', 'Kill Bill', 'News'], imgIdx: 2, isOpenModal: false, id: 2, isSelected: false},
                {name: 'David', favorites: ['Titans', 'Take Me Sharon', 'Sports'], imgIdx: 3, isOpenModal: false, id: 3, isSelected: false},
                {name: 'Lea', favorites: ['Shababnicim', 'Greek Wedding', 'Golf'], imgIdx: 4, isOpenModal: false, id: 4, isSelected: false},
            ],
        }
    },
    methods: {
        openRegModal() {
            this.closeFavoritesModal()
            this.closeActionsModal()

            this.isRegModalOpen = true
        },
        addUser() {
            this.addIdx()
            this.addId()
            this.users.unshift({name: this.currName, favorites: [this.getMediaName(), this.getMediaName(), this.getMediaName()], imgIdx: this.nextIdx, id: this.nextId, isSelected: false})
            this.currName = ''
        },
        getMediaName() {
            return ['Lord of the ring', 'Harry Potter', 'Arrow', 'Titans', 'Kill Bill', 'News',
                    'Titans', 'Take Me Sharon', 'Sports', 'Take Me Sharon', 'Sports','Shababnicim',
                     'Greek Wedding', 'Golf'
        ][getRandomIntInclusive(0, 12)]
        },
        addIdx() {
            this.nextIdx += 1
            if (this.nextIdx >= 4) this.nextIdx = 1
        },
        addId() {
            this.nextId++
        },
        openActionsModal(id) {
            this.isRegModalOpen = false
            this.closeFavoritesModal()
            this.closeActionsModal()

            const user = this.users.find(user => user.id === id)
            user.isOpenModal = true
        },
        selectUser(id) {
            const user = this.users.find(user => user.id === id)
            user.isSelected = true
        },
        closeActionsModal() {
            this.users.forEach(user => user.isOpenModal = false)
        },
        closeFavoritesModal() {
            this.users.forEach(user => user.isSelected = false)
        },
        deleteUser(id) {
            const userIdx = this.users.findIndex(user => user.id === id)
            console.log('userIdx', userIdx);
            this.users.splice(userIdx, 1)
        },
        debug(id) {
            console.log('id', id)
        }
    },
    computed:{
        
    },
})

app.component('users-list', usersList)
app.component('user-preview', userPreview)
app.component('user-selection-modal', userSelectionModal)

app.mount('#app')



// Utils
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}