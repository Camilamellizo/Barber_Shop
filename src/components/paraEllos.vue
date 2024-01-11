<template>
    <div class="grid grid-cols-2 bg-paraellos bg-no-repeat bg-center  h-[30rem] ">

        <div class=" ml-36 py-2  grid grid-cols-1 justify-items-center ">
        </div>

        <div class="grid grid-cols-1 content-center pl-20 ">

            <div>
                <h2 class="text-white font-bold text-xl  font-serif">Para Ellos</h2>

            </div>
            <div class="my-2">
                <h1 class="text-yellow-500 font-bold text-4xl  font-serif"> Rocket barber shop</h1>

            </div>
            <div class="mt-8">
                <p class=" px-8"> Para <strong>Ellos,</strong>
                    diseños de barbas, afeitados old school y cortes finos.
                    <br>Cortarse el pelo o afeitarse, <strong>se convierte en toda una experiencia</strong>
                </p>
            </div>
        </div>

    </div>



    <div class="bg-servicios  bg-no-repeat bg-cover  mt-10 text-white grid justify-items-center">
        <div>
            <h1 class="text-center  font-bold text-4xl  font-serif pt-10 mt-10 ">· Nuestos Servicios ·</h1>
        </div>
        <div class="grid grid-cols-3  py-8 ">

            <div class="col-span-1 ">

                <div class="rounded-full w-60 h-60">
                    <img src="@/assets/arreglarbarba.png" alt="" class="w-full h-full">
                </div>
                <div>
                    <p class="font-bold text-2xl  font-serif pl-8">Arreglo de Barba</p>
                </div>

            </div>

            <div class="col-span-1 mx-8">
                <div class="rounded-full w-60 h-60">
                    <img src="@/assets/afeitado.png" alt="" class="w-full h-full">
                    <p class="text-center  font-bold text-2xl  font-serif">Afeitado</p>
                </div>
            </div>

            <div class="rounded-full w-60 h-60">
                <img src="@/assets/cortemen.png" alt="" class="w-full h-full">
                <p class="text-center  font-bold text-2xl  font-serif ">Corte</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "paraEllos",
};
</script>
