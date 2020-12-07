<template>
    <div>
        <v-text-marquee> <h4 style="color: #671d26">{{marqueeMessage}}</h4></v-text-marquee>
    </div>
</template>

<script>
import { VTextMarquee } from 'vue-text-marquee';

export default {
    data() {
        return {
            marqueeMessage: "Discover all that Washington has to offer! | Washington Hometown News Update | Washington Hometown News Update | Washington Hometown News Update | Washington Hometown News Update", 
        }
    },
    components: {VTextMarquee}
    
}
</script>