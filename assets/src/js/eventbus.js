const eventbus = {

    events: {},

    on: function(event_name, fn) {
        this.events[event_name] = this.events[event_name] || [];
        this.events[event_name].push(fn);
    },

    fire: function(event_name, data = null) {

        if (this.events[event_name]) {
            this.events[event_name].forEach(fn => {
                fn(data);
            });
        }
    }
}

export default eventbus;

