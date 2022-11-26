<template>
    <div class="grid grid-cols-2">

        <div class=" ml-36 py-2  grid grid-cols-1 justify-items-center ">
            <div class="flex flex-wrap w-80">

                <div class="w-1/2 pr-2 ">
                    <img alt="gallery" class="block object-cover object-center w-48 h-48 rounded-lg"
                        src="@/assets/niña.jpg">
                </div>
                <div class="w-1/2 pl-2">
                    <img alt="gallery" class="block object-cover object-center w-48 h-48 rounded-lg"
                        src="@/assets/niño.jpg">
                </div>
                <div class="w-1/1 ml-16 pt-2 ">
                    <img alt="gallery" class="block object-cover object-center w-48 h-48 rounded-lg"
                        src="@/assets/dog.png">
                </div>

            </div>
        </div>




        <div class="grid grid-cols-1 content-center ">

            <div>
                <h2 class="text-yellow-600 font-bold text-xl  font-serif">Para toda la Familia</h2>

            </div>
            <div class="my-2">
                <h1 class="text-yellow-500 font-bold text-4xl  font-serif"> Rocket barber shop / UP DO Salon</h1>

            </div>
            <div class="mt-8">
                <p class="border border-2 border-transparent border-l-yellow-500 px-8"> Para <strong>toda la familia,</strong>
                    cortes, diseños y mucho más...
                </p>
            </div>
        </div>
       
    </div>
    

</template>

<script>
export default {
    name: "todalaFamilia",
};
</script>
