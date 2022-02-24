<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">I'm an example component.</div>
                    <StreamBarcodeReader
                        @decode="onDecode"
                        @loaded="onLoaded"
                    ></StreamBarcodeReader>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import { camera } from "vue-capture";

export default {
    methods: {
        onDecode(result) {
            alert(result);
        },
    },
    mounted() {
        console.log("Component mounted.");
    },
    components: {
        StreamBarcodeReader,
    },
};
</script>
