<template>
    <div class="item-container">
        <template v-for="item in items">
            <Item :item="item" :key="item.name" />
        </template>
    </div>
</template>

<script>
import Item from '@/components/Users/Item';

export default {
    name: "UsersList",

    props: {
        items: {
            type: Array,
            required: true
        }
    },

    components: {
        Item
    },
}
</script>