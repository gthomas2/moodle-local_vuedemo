<template>
    <div>
        <h3>{{title}}</h3>
        <kanban-board></kanban-board>
    </div>
</template>

<script>
    import kanban from '../kanban-board/kanban-board';
    export default {
        data: function() {
            return {
               title: ""
            };
        },
        components: {
            'kanban-board': kanban
        },
        beforeCreate: function() {
            var self = this;
            requirejs(['core/str'], function(Str) {
                Str.get_string('kanban', 'local_vuedemo').then(
                    (title) => {
                        self.title = title;
                    }
                );
            })
        }
    }
</script>