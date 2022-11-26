<template>
    <div class="grid grid-cols-2">

        <div class="grid grid-cols-1 content-center ml-36 ">

            <div>
                <h2 class="text-yellow-600 font-bold text-xl  font-serif">Para Ellas</h2>

            </div>
            <div class="my-2">
                <h1 class="text-yellow-500 font-bold text-4xl  font-serif"> UP DO SALON</h1>

            </div>
            <div class="mt-8">
                <p class="border border-2 border-transparent border-r-yellow-500 px-8">Para <strong>Ellas,</strong>
                    personalizados y exclusivos
                    tratamientos de color;<br>Incluyendo colores fantasía, keratina, bótox capilar, balayage, highlghts,
                    cortes modernos y clásicos.</p>
            </div>
        </div>

        <div class="py-2  grid grid-cols-1 justify-items-center ">
            <div class="flex flex-wrap w-80">

                <div class="w-1/2 pr-2 ">
                    <img alt="gallery" class="block object-cover object-center w-48 h-48 rounded-lg"
                        src="@/assets/col1.jpg">
                </div>
                <div class="w-1/2 pl-2">
                    <img alt="gallery" class="block object-cover object-center w-48 h-48 rounded-lg"
                        src="@/assets/muay.jpg">
                </div>
                <div class="w-1/1 ml-16 pt-2 ">
                    <img alt="gallery" class="block object-cover object-center w-48 h-48 rounded-lg"
                        src="@/assets/pili.jpg">
                </div>

            </div>
        </div>
    </div>
    <div>
            <h1 class="text-center text-yellow-500 font-bold text-4xl  font-serif mt-10">Nuestos Servicios</h1>
        </div>
        <div class="flex flex justify-center mt-8">
            <div class="rounded-full w-60 h-60 bg-gray-200">
                <img src="@/assets/color.png" alt="" class="w-60 h-60">
                <p class="text-center text-yellow-600 font-bold text-xl  font-serif">Color</p>
            </div>
            <div class="rounded-full w-60 h-60 mx-16 bg-gray-200">
                <img src="@/assets/corte.png" alt="" class="w-full h-full">
                <p class="text-center text-yellow-600 font-bold text-xl  font-serif">Corte</p>
            </div>
            <div class="rounded-full w-60 h-60 bg-gray-200">
                <img src="@/assets/otros.png" alt="" class="w-80 h-60">
                <p class="text-center text-yellow-600 font-bold text-xl  font-serif">Otros</p>
            </div>
        </div>

</template>

<script>
export default {
    name: "paraEllos",
};
</script>
