define([], function() {
    return {
        initStore: function(Vuex) {
            const store = new Vuex.Store({
                state: {
                    // Some default data for mocking.
                    columns: [
                        {
                            id: 1,
                            title: 'TODO',
                            tickets: [
                                {id: 1, title: 'Evaluate webpack', 'description': 'Blah blah...'},
                                {id: 3, title: 'Send David presentation', 'description': 'By telegram or email'},
                            ]
                        },
                        {
                            id: 2,
                            title: 'In Progress',
                            tickets: [
                                {id: 2, title: 'Publish to github', 'description': 'Get your work done!'}
                            ]
                        }
                    ]
                },
                mutations: {
                    moveTicket(state, payload) {
                        const ticketId = payload.ticketId;
                        const columnId = payload.columnId;
                        const sourceCol = state.columns.filter(r => r.tickets.filter(t => t.id === ticketId).length)[0];
                        const ticket = sourceCol.tickets.filter(t => t.id === ticketId)[0];
                        // Remove ticket from cols and add to new col;
                        const cols = state.columns
                            .map(r => {
                                return {
                                    ...r,
                                    tickets:r.tickets.filter(t => t.id !== ticketId)
                                };
                            })
                            .map(r => {
                                if (r.id === columnId){
                                    return {...r, tickets:[...r.tickets, ticket]};
                                } else {
                                    return r;
                                }
                            });

                        state.columns = cols;

                    },
                    addColumn(state, col) {
                        state.columns = [...state.columns, col];
                    }
                },
                actions: {
                    moveTicket(context, payload) {
                        context.commit('moveTicket', payload);
                    }
                }
            });
            return store;
        }
    };
});
