<template>
    <v-timeline v-if="this.$isMobile()" direction="vertical">
        <v-timeline-item>
            <template v-slot:opposite>
                2015
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>

        <v-timeline-item>
            <template v-slot:opposite>
                2017
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>

        <v-timeline-item>
            <template v-slot:opposite>
                2018
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <template v-slot:opposite>
                2020
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>

        <v-timeline-item>
            <template v-slot:opposite>
                2021
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>

        <v-timeline-item>
            <template v-slot:opposite>
                2022
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>
    </v-timeline>

    <v-timeline v-else direction="horizontal">
        <v-timeline-item>
            <template v-slot:opposite>
                2015
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>

        <v-timeline-item>
            <template v-slot:opposite>
                2017
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>

        <v-timeline-item>
            <template v-slot:opposite>
                2018
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <template v-slot:opposite>
                2020
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>

        <v-timeline-item>
            <template v-slot:opposite>
                2021
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>

        <v-timeline-item>
            <template v-slot:opposite>
                2022
            </template>
            <div>
                <div class="text-h6">Content title</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TimelineVue',
})

</script>