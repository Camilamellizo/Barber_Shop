<template>
    <div class="grid grid-cols-2 bg-paraellas bg-no-repeat bg-center bg-black h-[30rem]">

        <div class="grid grid-cols-1 content-center ml-36 ">

            <div>
                <h2 class="text-white font-bold text-xl  font-serif">Para Ellas</h2>

            </div>
            <div class="my-2">
                <h1 class="text-yellow-500 font-bold text-4xl  font-serif"> UP DO SALON</h1>

            </div>
            <div>
                <p>Para <strong>Ellas,</strong>
                    personalizados y exclusivos
                    tratamientos de color;<br>Incluyendo colores fantasía, keratina, bótox capilar, balayage<br>
                    highlghts,
                    cortes modernos y clásicos.</p>
            </div>
        </div>
    </div>


    <div class="grid grid-cols-1 content-center bg-serviciosw bg-no-repeat bg-cover mt-14">
        <div>
            <h1 class="text-center font-bold text-4xl  font-serif mt-10">· Nuestos Servicios ·</h1>
        </div>

        <div class="flex flex justify-center py-8 ">
            <div>
                <div class="rounded-full w-60 h-60 bg-gray-100">
                    <img src="@/assets/color.png" alt="" class="w-60 h-60">
                </div>
                <div>
                    <p class="text-center  font-bold text-2xl  font-serif">Color</p>

                </div>
            </div>

            <div class="rounded-full w-60 h-60 mx-16 bg-gray-100">
                <img src="@/assets/corte.png" alt="" class="w-full h-full">
                <p class="text-center  font-bold text-2xl  font-serif">Corte</p>
            </div>
            <div class="rounded-full w-60 h-60 bg-gray-100">
                <img src="@/assets/otros.png" alt="" class="w-80 h-60">
                <p class="text-center  font-bold text-2xl  font-serif">Otros</p>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "paraEllos",
};
</script>
