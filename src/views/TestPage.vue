<template>

    <div class="flex justify-content-evenly align-items-center flex-column" style="height: 60vh">
        <div>
            <Button label="Toggle alarm"  class="p-button-success p-button-lg" @click="toggleAlarm"/>
        </div>
        <div>
            <Button label="Trigger alarm"  class="p-button-warning p-button-lg" @click="triggerAlarm"/>
        </div>
    </div>

</template>

<script>

    export default {


        methods: {
            toggleAlarm() {
                this.$store.dispatch("toggleAlarm");
            },

            triggerAlarm() {
                this.$store.dispatch("triggerAlarm");
            }
        }

    }

</script>