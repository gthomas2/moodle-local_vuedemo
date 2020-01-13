<template>
    <div>
        <div class="kanban container">
            <div class="row">
                <div :id="column.id"
                     class="col" v-for="column in columns"
                     v-on:drop="drop($event, column.id)"
                     v-on:dragover="allowDrop($event)">

                    <h3>{{column.title}}</h3>

                    <div class="card kanban-card"
                         :id="ticket.id"
                         v-for="ticket in column.tickets"
                         draggable="true"
                         v-on:dragstart="dragstart(item, $event, ticket.id)"
                         v-on:dragend="dragend($event, ticket.id)">
                        <div class="card-body">
                            <div ciass="card-title"><h4>{{ticket.title}}</h4></div>
                            <div class="card-text">{{ticket.description}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                dragging: 0
            }
        },
        computed: {
            columns () {
                return this.$store.state.columns
            }
        },
        methods: {
            dragstart(item, $event, ticketId) {
                this.dragging = ticketId;
            },
            dragend($event, ticketId) {
                console.log('dragend for ticketId', ticketId);
            },
            drop($event, columnId) {
                const ticketId = this.dragging;
                if (ticketId === 0) {
                    return;
                }
                console.log('dropped ticketId '+ticketId+' on columnId '+columnId);
                this.dragging = 0;
                this.$store.dispatch('moveTicket', {
                    ticketId: ticketId,
                    columnId: columnId
                })
            },
            allowDrop($event) {
                $event.preventDefault();
            }
        }
    }
</script>

<style scoped>
    .kanban-card {
        margin: 1em;
    }
</style>