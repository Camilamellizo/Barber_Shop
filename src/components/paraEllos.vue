<template>
    <div class="grid grid-cols-2">

        <div class=" ml-36 py-2  grid grid-cols-1 justify-items-center ">
            <div class="flex flex-wrap w-80">

                <div class="w-1/2 pr-2 ">
                    <img alt="gallery" class="block object-cover object-center w-48 h-48 rounded-lg"
                        src="@/assets/alexblue.jpg">
                </div>
                <div class="w-1/2 pl-2">
                    <img alt="gallery" class="block object-cover object-center w-48 h-48 rounded-lg"
                        src="@/assets/alex.jpg">
                </div>
                <div class="w-1/1 ml-16 pt-2 ">
                    <img alt="gallery" class="block object-cover object-center w-48 h-48 rounded-lg"
                        src="@/assets/barba.png">
                </div>

            </div>
        </div>




        <div class="grid grid-cols-1 content-center ">

            <div>
                <h2 class="text-yellow-600 font-bold text-xl  font-serif">Para Ellos</h2>

            </div>
            <div class="my-2">
                <h1 class="text-yellow-500 font-bold text-4xl  font-serif"> Rocket barber shop</h1>

            </div>
            <div class="mt-8">
                <p class="border border-2 border-transparent border-l-yellow-500 px-8"> Para <strong>Ellos,</strong>
                    diseños de barbas, afeitados old school y cortes finos.
                    <br>Cortarse el pelo o afeitarse, <strong>se convierte en toda una experiencia</strong>
                </p>
            </div>
        </div>
       
    </div>
    
    <div>
        <h1 class="text-center text-yellow-500 font-bold text-4xl  font-serif mt-10">Nuestos Servicios</h1>
    </div>
    <div class="flex flex justify-center mt-8">
        <div class="rounded-full w-60 h-60 ">
            <img src="@/assets/arreglarbarba.png" alt="" class="w-full h-full">
            <p class="text-center text-yellow-600 font-bold text-xl  font-serif">Arreglo de Barba</p>
        </div>
        <div class="rounded-full w-60 h-60 mx-16">
            <img src="@/assets/afeitado.png" alt="" class="w-full h-full">
            <p class="text-center text-yellow-600 font-bold text-xl  font-serif" >Afeitado</p>
        </div>
        <div class="rounded-full w-60 h-60">
            <img src="@/assets/cortemen.png" alt="" class="w-full h-full">
            <p class="text-center text-yellow-600 font-bold text-xl  font-serif">Corte</p>
        </div>
    </div>

</template>

<script>
export default {
    name: "paraEllos",
};
</script>
