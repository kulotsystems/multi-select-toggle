const app = Vue.createApp({
    data() {
        return {
            items: [
                { id: 1, title: 'Item 1', selected: false },
                { id: 2, title: 'Item 2', selected: false },
                { id: 3, title: 'Item 3', selected: false },
                { id: 4, title: 'Item 4', selected: false },
                { id: 5, title: 'Item 5', selected: false },
            ]
        }
    },
    computed: {
        // selected items
        selectedItems() {
            return this.items.filter(item => item.selected);
        },

        // are all items selected or not
        areAllItemsSelected() {
            return this.items.length === this.selectedItems.length;
        }
    },
    methods: {
        // select or unselect all items
        toggleAllItems(e) {
            const selected = e.target.checked;

            this.items.map(item => item.selected = selected);
        }
    }
});

app.mount('#app');
